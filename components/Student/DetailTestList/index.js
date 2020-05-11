/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import Moment from "moment";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import AssignedTestCard from "./components/AssignedTestCard";
import CompletedTestCard from "./components/CompletedTestCard";
import EditTestModal from "./components/EditTestModal";
import NewTestModal from "./components/TestModal";
import TestSettingModal from "./components/TestSettingModal";
import EnterAnswerWrapper from "./components/EnterAnswerWrapper";
import CardHeader from "./components/CardHeader";
import { setIsVisibleTopBar, fetchStudentTests, setActiveStudentTestId } from "../index/actions";
import {
  makeSelectOverDueStudentTests,
  makeSelectCompletedStudentTests,
  makeSelectAssignedStudentTests,
  makeSelectStudentTests,
} from "../index/selectors";
import { assignTestToStudentApi, addStudentAnswerToTestApi, updateStudentTestSectionStatusApi } from "../index/api";

// import sampleTests from "./utils/sampleTests";

const uuidGenerator = require("uuid/v4");

class DetailTestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTest: {},
      dropdownIndex: null,
      dropdownIsOpen: false,
      openEditTestModal: false,
      openCreateTestModal: false,
      opentTestSettingModal: false,
      openEnterAnswerWrapper: false,
      readingSectionCompleted: false,
      writingSectionCompleted: false,
      mathCalcSectionCompleted: false,
      mathNoCalcSectionCompleted: false,
    };
  }

  componentDidMount = async () => {
    const { onFetchStudentTests, overdues, completes, assigneds, user } = this.props;
    if (overdues.length === 0 && completes.length === 0 && assigneds.length === 0) {
      onFetchStudentTests(user);
    }
  };

  onToggleEditTestModal = async (activeTest = null) => {
    if (readingSectionCompleted && writingSectionCompleted && mathCalcSectionCompleted && mathNoCalcSectionCompleted) {
      const { onSetActiveStudentTestId } = this.props;
      onSetActiveStudentTestId(activeTest.student_test_id);
      this.onSetIsVisibleTopBar(false);
      this.setState(
        ({ openEditTestModal }) => ({
          openEditTestModal: !openEditTestModal,
          openEnterAnswerWrapper: false,
          activeTest,
        }),
        this.onCloseDropdown,
      );
    } else {
      const sectionName = activeTest.name;
      switch (sectionName) {
        case "Reading":
          this.setState({
            readingSectionCompleted: true,
          })
          break;
        case "Writing":
          this.setState({
            writingSectionCompleted: true,
          });
          break;
        case "Math (No Calculator)":
          this.setState({
            mathNoCalcSectionCompleted: true
          });
          break;
        case "Math (Calculator)":
          this.setState({
            mathCalcSectionCompleted: true
          });
          break;
        default:
          this.setState({
            readingSectionCompleted: true,
          })
      }
      const postBody = {
        test_section_id: activeTest.test_section_id,
        student_test_section_status: "COMPLETED"
      };
      await updateStudentTestSectionStatusApi(postBody);
    }
  };
  onCloseEditTestModal = () => {
    this.onSetIsVisibleTopBar(true);
    this.setState(({ openEditTestModal }) => ({
      openEditTestModal: !openEditTestModal,
      openEnterAnswerWrapper: false,
    }));
  };

  onSetDropdown = dropdownIndex => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  handleTestSettingModalOpen = activeTest => {
    this.onCloseDropdown();
    this.setState(({ opentTestSettingModal }) => ({
      activeTest,
      opentTestSettingModal: !opentTestSettingModal,
    }));
  };

  onCreateTest = event => {
    event.preventDefault();
    this.setState({ openCreateTestModal: true });
    console.warn("Pending implementation of create test UI and functionality");
  };

  onEnterAnswers = currentTestId => {
    this.onSetIsVisibleTopBar(false);
    this.onCloseDropdown();
    const activeTest = this.props.tests.find(test => test.student_test_id === currentTestId);
    this.setState({ openEnterAnswerWrapper: true, activeTest });
  };

  onDownloadReport = activeTest => {
    console.log("downloading...");
    this.onSetIsVisibleTopBar(false);
    this.onCloseDropdown();
    this.setState(
      {
        activeTest,
        openEditTestModal: true,
      },
      async () => {
        await this.editTestModal.generateScoreReportPdf();
      },
    );
  };
  onDeleteTest = () => {
    this.onSetIsVisibleTopBar(true);
    this.setState({ openEditTestModal: false }, () =>
      console.warn("Pending implementation of delete test UI and functionality"),
    );
  };
  onSetIsVisibleTopBar = value => {
    const { onSetIsVisibleTopBar } = this.props;
    onSetIsVisibleTopBar(value);
  };
  onSaveTestChanges = (testVersion, settings) => {
    this.onToggleEditTestModal();
    this.onSetIsVisibleTopBar(true);
    console.warn("Pending save test changes functionality", testVersion, settings);
  };

  mapCompletedTests = () => {
    const { dropdownIndex, dropdownIsOpen } = this.state;
    const { completes } = this.props;
    return completes.map(test => (
      <CompletedTestCard
        test={test}
        index={test.test_id}
        key={test.test_id}
        onEnterAnswers={this.onEnterAnswers}
        onEditTest={() => this.onToggleEditTestModal(test)}
        onSetDropdown={this.onSetDropdown}
        onCloseDropdown={this.onCloseDropdown}
        onDownloadReport={this.onDownloadReport}
        dropdownIndex={dropdownIndex}
        dropdownIsOpen={dropdownIsOpen}
      />
    ));
  };

  mapAssignedTests = () => {
    const { dropdownIndex, dropdownIsOpen } = this.state;
    const { assigneds } = this.props;
    return assigneds.map((test, index) => (
      <AssignedTestCard
        test={test}
        key={`future-${index}`}
        handleTestSettingModalOpen={() => this.handleTestSettingModalOpen(test)}
        onDeleteTest={this.onDeleteTest}
        onSetDropdown={this.onSetDropdown}
        onEnterAnswers={this.onEnterAnswers}
        onCloseDropdown={this.onCloseDropdown}
        onDownloadReport={this.onDownloadReport}
        dropdownIndex={dropdownIndex}
        dropdownIsOpen={dropdownIsOpen}
        index={assigneds.length + index}
      />
    ));
  };

  onCloseTestModal = () => this.setState({ openCreateTestModal: false });
  onCloaseAnswerWrapper = async () => {
    this.onSetIsVisibleTopBar(true);
    this.setState({
      openEnterAnswerWrapper: false,
    });
    this.onCloseDropdown();
  };

  onSaveNewTest = test => {
    this.onCloseTestModal();
    const { tests: prevTestsState } = this.props;
    const newTestNumber = prevTestsState.length + 1;
    const sampleNewTest = {
      id: uuidGenerator(),
      status: "future",
      title: `Practice Test ${newTestNumber}`,
      testDate: Moment(test.assignDate).format("YYYY-MM-DD"),
      dueDate: Moment(test.dueDate).format("YYYY-MM-DD"),
      completionDate: "",
      completionTime: "",
      weekNumber: "3",
      subjects: [{}, {}],
    };
    const updatedTests = update(prevTestsState, { $push: [sampleNewTest] });
    this.setState({ tests: updatedTests });
    const {
      user: { id },
    } = this.props;
    const postBody = {
      student_id: id,
      test_id: test.version,
      assignment_date: Moment(test.assignDate).format("YYYY-MM-DD"),
      due_date: Moment(test.dueDate).format("YYYY-MM-DD"),
      test_section_ids: [
        "3c660d9f-6e3c-4b66-9028-ffb6890c6c3a",
        "5c430ac1-63f5-4418-88a9-6fa3526eafd6",
        "f1ccfcc7-dc9a-40b7-b555-b432aeede73a",
        "fe459162-5190-42dd-b67d-2b9baff55500"
      ]
    };
    assignTestToStudentApi(postBody);
  };

  onAddStudentAnswerToTest = async (test_problem_id, answer) => {
    const {
      activeTest: { student_test_id },
    } = this.state;
    const postBody = {
      student_test_id,
      test_problem_id,
      answer,
    };
    await addStudentAnswerToTestApi(postBody);
  };

  render() {
    const {
      openEditTestModal,
      openCreateTestModal,
      openEnterAnswerWrapper,
      activeTest,
      opentTestSettingModal,
    } = this.state;
    const { user, completes, assigneds } = this.props;
    return (
      <React.Fragment>
        <Choose>
          <When condition={openEditTestModal}>
            <EditTestModal
              onRef={ref => (this.editTestModal = ref)}
              user={user}
              test={activeTest}
              onDeleteTest={this.onDeleteTest}
              onSaveTestChanges={this.onSaveTestChanges}
              onCloseEditTestModal={this.onCloseEditTestModal}
            />
          </When>
          <When condition={openEnterAnswerWrapper}>
            <EnterAnswerWrapper
              open={openEnterAnswerWrapper}
              onCloaseAnswerWrapper={this.onCloaseAnswerWrapper}
              onAddStudentAnswerToTest={this.onAddStudentAnswerToTest}
              test={activeTest}
              onEditTest={() => this.onToggleEditTestModal(activeTest)}
            />
          </When>
          <Otherwise>
            <NewTestModal
              open={openCreateTestModal}
              onClose={this.onCloseTestModal}
              onSave={this.onSaveNewTest}
            />
            <TestSettingModal
              open={opentTestSettingModal}
              test={activeTest}
              onClose={this.handleTestSettingModalOpen}
              onSave={this.onSaveNewTest}
            />
            <div className="content-section">
              <div className="section-holder">
                {assigneds.length !== 0 && (
                  <div className="content-container">
                    <CardHeader title="Assigned" amount={assigneds.length} />
                    <div className="row d-flex-content card-width-366">
                      {this.mapAssignedTests()}
                    </div>
                  </div>
                )}
                {completes.length !== 0 && (
                  <div className="content-container">
                    <CardHeader title="Completed" amount={completes.length} />
                    <div className="row d-flex-content card-width-366">
                      {this.mapCompletedTests()}
                    </div>
                  </div>
                )}
              </div>
              <a
                href="#"
                onClick={this.onCreateTest}
                className="waves-effect waves-teal btn add-btn"
              >
                <i className="material-icons">add</i>New Test
              </a>
            </div>
          </Otherwise>
        </Choose>
      </React.Fragment>
    );
  }
}

DetailTestList.propTypes = {
  user: PropTypes.object.isRequired,
  onSetIsVisibleTopBar: PropTypes.func.isRequired,
  completes: PropTypes.array,
  overdues: PropTypes.array,
  assigneds: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  completes: makeSelectCompletedStudentTests(),
  assigneds: makeSelectAssignedStudentTests(),
  overdues: makeSelectOverDueStudentTests(),
  tests: makeSelectStudentTests(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSetIsVisibleTopBar: value => dispatch(setIsVisibleTopBar(value)),
    onFetchStudentTests: user => dispatch(fetchStudentTests(user)),
    onSetActiveStudentTestId: studentTestId => dispatch(setActiveStudentTestId(studentTestId)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(DetailTestList);
