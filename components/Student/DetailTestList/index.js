/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import Moment from "moment";
import { connect } from "react-redux";
import { compose } from "redux";
import AssignedTestCard from "./components/AssignedTestCard";
import CompletedTestCard from "./components/CompletedTestCard";
import EditTestModal from "./components/EditTestModal";
import NewTestModal from "./components/TestModal";
import TestSettingModal from "./components/TestSettingModal";
import EnterAnswerWrapper from "./components/EnterAnswerWrapper";
import CardHeader from "./components/CardHeader";
import { setIsVisibleTopBar } from "../index/actions";

import {
  assignTestToStudentApi,
  addStudentAnswerToTestApi,
  fetchTestsByStudentIdApi
} from "../index/api";

// import sampleTests from "./utils/sampleTests";

const uuidGenerator = require("uuid/v4");

class DetailTestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: [],
      activeTest: {},
      dropdownIndex: null,
      // activeTest: null,
      dropdownIsOpen: false,
      openEditTestModal: false,
      openCreateTestModal: false,
      opentTestSettingModal: false,
      openEnterAnswerWrapper: false,
      existTestsData: false
    };
  }

  componentDidMount = async () => {
    if (this.state.tests.length === 0) {
      const { id } = this.props.user;
      const { formattedStudentTests: tests } = await fetchTestsByStudentIdApi(id);
      if (tests.length !== 0) {
        this.setState({ tests, existTestsData: true });
      } else {
        this.setState({ existTestsData: false });
      }
    }
  };

  onToggleEditTestModal = (activeTest = null) => {
    this.onSetIsVisibleTopBar(false);
    this.setState(
      ({ openEditTestModal }) => ({
        openEditTestModal: !openEditTestModal,
        openEnterAnswerWrapper: false,
        activeTest
      }),
      this.onCloseDropdown
    );
  };
  onCloseEditTestModal = () => {
    this.onSetIsVisibleTopBar(true);
    this.setState(({ openEditTestModal }) => ({
      openEditTestModal: !openEditTestModal,
      openEnterAnswerWrapper: false
    }));
  };

  onSetDropdown = dropdownIndex => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  handleTestSettingModalOpen = activeTest => {
    this.onCloseDropdown();
    this.setState(({ opentTestSettingModal }) => ({
      activeTest,
      opentTestSettingModal: !opentTestSettingModal
    }));
  };

  onCreateTest = event => {
    event.preventDefault();
    this.setState({ openCreateTestModal: true });
    console.warn("Pending implementation of create test UI and functionality");
  };

  onEnterAnswers = currentTestId => {
    this.onSetIsVisibleTopBar(false);
    this.onCloseDropdown;
    const activeTest = this.state.tests.find(test => test.test_id === currentTestId);
    this.setState({ openEnterAnswerWrapper: true, activeTest });
  };

  onDownloadReport = activeTest => {
    console.log("downloading...");
    this.onSetIsVisibleTopBar(false);
    this.onCloseDropdown;
    this.setState(
      {
        activeTest,
        openEditTestModal: true
      },
      async () => {
        await this.editTestModal.generateScoreReportPdf();
      }
    );
  };
  onDeleteTest = () => {
    this.onSetIsVisibleTopBar(true);
    this.setState({ openEditTestModal: false }, () =>
      console.warn("Pending implementation of delete test UI and functionality")
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
    const { existTestsData, tests, dropdownIndex, dropdownIsOpen } = this.state;
    return tests
      .filter(test => test.status === "COMPLETED")
      .map(
        test =>
          existTestsData && (
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
          )
      );
  };

  mapFutureTests = () => {
    const { tests, existTestsData, dropdownIndex, dropdownIsOpen } = this.state;
    return tests
      .filter(test => test.status === "COMPLETED")
      .map(
        (test, index) =>
          existTestsData && (
            <AssignedTestCard
              test={test}
              key={`future-${test.test_id}`}
              handleTestSettingModalOpen={() => this.handleTestSettingModalOpen(test)}
              onDeleteTest={this.onDeleteTest}
              onSetDropdown={this.onSetDropdown}
              onEnterAnswers={this.onEnterAnswers}
              onCloseDropdown={this.onCloseDropdown}
              onDownloadReport={this.onDownloadReport}
              dropdownIndex={dropdownIndex}
              dropdownIsOpen={dropdownIsOpen}
              index={tests.filter(filterTest => filterTest.status === "ASSIGNED").length + index}
            />
          )
      );
  };

  onCloseTestModal = () => this.setState({ openCreateTestModal: false });
  onCloaseAnswerWrapper = async () => {
    this.onSetIsVisibleTopBar(true);
    this.setState({
      openEnterAnswerWrapper: false
    });
    this.onCloseDropdown();
  };

  onSaveNewTest = test => {
    this.onCloseTestModal();
    const { tests: prevTestsState } = this.state;
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
      subjects: [{}, {}]
    };
    const updatedTests = update(prevTestsState, { $push: [sampleNewTest] });
    this.setState({ tests: updatedTests });
    const {
      user: { id }
    } = this.props;
    const postBody = {
      student_id: id,
      test_id: uuidGenerator(),
      assignment_date: Moment(test.assignDate).format("YYYY-MM-DD"),
      due_date: Moment(test.dueDate).format("YYYY-MM-DD")
    };
    assignTestToStudentApi(postBody);
  };

  onAddStudentAnswerToTest = async (test_problem_id, answer) => {
    const {
      activeTest: { student_test_id }
    } = this.state;
    const postBody = {
      student_test_id,
      test_problem_id,
      answer
    };
    await addStudentAnswerToTestApi(postBody);
  };

  render() {
    const {
      openEditTestModal,
      openCreateTestModal,
      openEnterAnswerWrapper,
      activeTest,
      opentTestSettingModal
    } = this.state;
    const { user } = this.props;
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
                <div className="content-container">
                  <CardHeader title="Assigned" amount={1} />
                  <div className="row d-flex-content card-width-366">{this.mapFutureTests()}</div>
                </div>
                <div className="content-container">
                  <CardHeader title="Completed" amount={1} />
                  <div className="row d-flex-content card-width-366">
                    {this.state.existTestsData && this.mapCompletedTests()}
                  </div>
                </div>
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
  onSetIsVisibleTopBar: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    onSetIsVisibleTopBar: value => dispatch(setIsVisibleTopBar(value))
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(DetailTestList);
