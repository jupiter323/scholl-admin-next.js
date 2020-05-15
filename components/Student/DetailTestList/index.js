/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import Moment from "moment";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import AssignedTestCard from "./components/AssignedTestCard";
import OverDueTestCard from "./components/OverDueTestCard";
import CompletedTestCard from "./components/CompletedTestCard";
import EditTestModal from "./components/EditTestModal";
import NewTestModal from "./components/TestModal";
import TestSettingModal from "./components/TestSettingModal";
import EnterAnswerWrapper from "./components/EnterAnswerWrapper";
import CardHeader from "./components/CardHeader";
import {
  setIsVisibleTopBar,
  fetchStudentTests,
  setActiveStudentTestId,
  deleteStudentTest,
  updateTestFlag,
} from "../index/actions";
import {
  makeSelectOverDueStudentTests,
  makeSelectCompletedStudentTests,
  makeSelectAssignedStudentTests,
  makeSelectStudentTests,
} from "../index/selectors";
import { assignTestToStudentApi, addStudentAnswerToTestApi } from "../index/api";

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
    };
  }

  componentDidMount = async () => {
    const { onFetchStudentTests, overdues, completes, assigneds, user } = this.props;
    if (overdues.length === 0 && completes.length === 0 && assigneds.length === 0) {
      onFetchStudentTests(user);
    }
  };

  onToggleEditTestModal = async (activeTest = null) => {
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
  onDeleteTest = (student_test_id, student_id, type) => {
    this.onSetIsVisibleTopBar(true);
    this.setState({ openEditTestModal: false }, () =>
      this.props.onDeleteStudentTest(student_test_id, student_id, type),
    );
  };
  onTestFlagReviewed = (student_test_id, student_id) => {
    this.props.onUpdateTestFlag(student_test_id, student_id);
  }
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
    return completes.map((test, index) => (
      <CompletedTestCard
        test={test}
        index={`completed${index}`}
        key={`completed-${index}`}
        onEnterAnswers={this.onEnterAnswers}
        onEditTest={() => this.onToggleEditTestModal(test)}
        onSetDropdown={this.onSetDropdown}
        onCloseDropdown={this.onCloseDropdown}
        onDownloadReport={this.onDownloadReport}
        dropdownIndex={dropdownIndex}
        dropdownIsOpen={dropdownIsOpen}
        onTestFlagReviewed={this.onTestFlagReviewed}
        onDeleteTest={this.onDeleteTest}
      />
    ));
  };

  mapAssignedTests = () => {
    const { dropdownIndex, dropdownIsOpen } = this.state;
    const { assigneds } = this.props;
    return assigneds.map((test, index) => (
      <AssignedTestCard
        test={test}
        key={`assigned-${index}`}
        handleTestSettingModalOpen={() => this.handleTestSettingModalOpen(test)}
        onDeleteTest={this.onDeleteTest}
        onSetDropdown={this.onSetDropdown}
        onEnterAnswers={this.onEnterAnswers}
        onCloseDropdown={this.onCloseDropdown}
        onDownloadReport={this.onDownloadReport}
        dropdownIndex={dropdownIndex}
        dropdownIsOpen={dropdownIsOpen}
        index={`assigned${index}`}
        onTestFlagReviewed={this.onTestFlagReviewed}
      />
    ));
  };
  mapOverDueTests = () => {
    const { dropdownIndex, dropdownIsOpen } = this.state;
    const { overdues } = this.props;
    return overdues.map((test, index) => (
      <OverDueTestCard
        test={test}
        key={`overdue-${index}`}
        handleTestSettingModalOpen={() => this.handleTestSettingModalOpen(test)}
        onDeleteTest={this.onDeleteTest}
        onSetDropdown={this.onSetDropdown}
        onEnterAnswers={this.onEnterAnswers}
        onCloseDropdown={this.onCloseDropdown}
        onDownloadReport={this.onDownloadReport}
        dropdownIndex={dropdownIndex}
        dropdownIsOpen={dropdownIsOpen}
        index={`overdue${index}`}
        onTestFlagReviewed={this.onTestFlagReviewed}
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

  onSaveNewTest = async(test) => {
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
        "fe459162-5190-42dd-b67d-2b9baff55500",
      ],
    };
    const newTestId = await assignTestToStudentApi(postBody);
    console.log('newTestId:',newTestId)
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
    const { user, completes, assigneds, overdues } = this.props;
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
              onOpentTestScore={() => this.onToggleEditTestModal(activeTest)}
            />
          </When>
          <When condition={opentTestSettingModal}>
            <TestSettingModal
              open={opentTestSettingModal}
              test={activeTest}
              onClose={this.handleTestSettingModalOpen}
              onSave={this.onSaveNewTest}
            />
          </When>
          <Otherwise>
            <NewTestModal
              open={openCreateTestModal}
              onClose={this.onCloseTestModal}
              onSave={this.onSaveNewTest}
            />
            <div className="content-section">
              <div className="section-holder">

                {overdues.length !== 0 && (
                  <div className="content-container">
                    <CardHeader title="OverDue" amount={overdues.length} themeColor="#e94319" />
                    <div className="row d-flex-content card-width-366">
                      {this.mapOverDueTests()}
                    </div>
                  </div>
                )}
                {assigneds.length !== 0 && (
                  <div className="content-container">
                    <CardHeader title="Assigned" amount={assigneds.length} themeColor="#39b44a" />
                    <div className="row d-flex-content card-width-366">
                      {this.mapAssignedTests()}
                    </div>
                  </div>
                )}
                {completes.length !== 0 && (
                  <div className="content-container">
                    <CardHeader title="Completed" amount={completes.length} themeColor="#39b44a" />
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
    onDeleteStudentTest: (studentTestId, studentId, type) => dispatch(deleteStudentTest(studentTestId, studentId, type)),
    onUpdateTestFlag: (studentTestId, studentId) => dispatch(updateTestFlag(studentTestId, studentId)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(DetailTestList);
