/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import Moment from "moment";
import { connect } from "react-redux";
import { compose } from "redux";
import AssignedTestCard from "./components/AssignedTestCard";
import CompletedTestCard from "./components/CompletedTestCard";
import TestSections from "../TestSections";
import EditTestModal from "./components/EditTestModal";
import NewTestModal from "./components/TestModal";
import TestSettingModal from "./components/TestSettingModal";
import EnterAnswerWrapper from "./components/EnterAnswerWrapper";
import CompletedTestDetailView from "./components/CompletedTestDetailView";
import CardHeader from "./components/CardHeader";
import { setIsVisibleTopBar } from "../index/actions";

import {
  assignTestToStudentApi,
  addStudentAnswerToTestApi,
  fetchTestsByStudentIdApi,
  fetchStudentTestScoreApi
} from "../index/api";

// import sampleTests from "./utils/sampleTests";

const uuidGenerator = require("uuid/v4");

class DetailTestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: [],
      currentTestSection: {},
      dropdownIndex: null,
      activeTest: null,
      selectedTest: null,
      dropdownIsOpen: false,
      openEditTestModal: false,
      openTestDetailView: false,
      openCreateTestModal: false,
      opentTestSettingModal: false,
      openEnterAnswerWrapper: false,
      activeCompletedTestCard: false,
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
        activeTest
      }),
      this.onCloseDropdown
    );
  };
  onToggleEditCompletedTestModal = (activeTest = null) => {
    this.onSetIsVisibleTopBar(false);
    this.setState(
      ({ openEditTestModal }) => ({
        openEditTestModal: !openEditTestModal,
        activeTest
      }),
      this.onCloseDropdown
    );
  };

  onCloseEditTestModal = () => {
    this.onSetIsVisibleTopBar(true);
    this.setState(({ openEditTestModal }) => ({
      openEditTestModal: !openEditTestModal
    }));
  };

  onToggleCompleteTestDetailView = () => {
    this.setState(({ openTestDetailView }) => ({
      openTestDetailView: !openTestDetailView
    }));
  };

  onSetDropdown = dropdownIndex => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  handleTestSettingModalOpen = () => {
    this.setState(({ opentTestSettingModal }) => ({
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
    const currentTestSection = this.state.tests.find(test => test.test_id === currentTestId);
    this.setState({ openEnterAnswerWrapper: true, currentTestSection });
  };

  onEditTest = () => console.warn("Pending implementation edit test UI and functionality");
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
  openTestScores = index => {
    const { tests } = this.state;
    const newTestArray = tests.filter(test => test.status === "complete");
    this.setState({ selectedTest: newTestArray[index.index] });
  };

  mapCompletedTests = () => {
    const { existTestsData, tests } = this.state;
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
              onDetailTest={() => this.onToggleCompleteTestDetailView()}
              onSetDropdown={this.onSetDropdown}
              onCloseDropdown={this.onCloseDropdown}
              onDownloadReport={this.onDownloadReport}
              dropdownIndex={this.state.dropdownIndex}
              dropdownIsOpen={this.state.dropdownIsOpen}
            />
          )
      );
  };

  mapFutureTests = () => {
    const { tests, existTestsData } = this.state;
    return tests
      .filter(test => test.status === "COMPLETED")
      .map(
        (test, index) =>
          existTestsData && (
            <AssignedTestCard
              futureTest
              test={test}
              key={`future-${test.test_id}`}
              onEditTest={() => this.onToggleEditTestModal(test)}
              handleTestSettingModalOpen={this.handleTestSettingModalOpen}
              onDeleteTest={this.onDeleteTest}
              onSetDropdown={this.onSetDropdown}
              onEnterAnswers={this.onEnterAnswers}
              onCloseDropdown={this.onCloseDropdown}
              onDownloadReport={this.onDownloadReport}
              dropdownIndex={this.state.dropdownIndex}
              dropdownIsOpen={this.state.dropdownIsOpen}
              openTestScores={this.openTestScores}
              index={tests.filter(filterTest => filterTest.status === "ASSIGNED").length + index}
            />
          )
      );
  };

  onCloseTestModal = () => this.setState({ openCreateTestModal: false });

  onOpenStudentAnswerModal = () => this.setState({ openEnterAnswerWrapper: true });

  onCloaseAnswerWrapper = async () => {
    this.onSetIsVisibleTopBar(true);
    this.setState({
      openEnterAnswerWrapper: false,
      activeCompletedTestCard: true
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
      currentTestSection: { student_test_id }
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
      selectedTest,
      currentTestSection,
      openTestDetailView,
      opentTestSettingModal
    } = this.state;
    const { user } = this.props;
    return (
      <React.Fragment>
        {!selectedTest && (
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
            <When condition={openTestDetailView}>
              <CompletedTestDetailView
                user={user}
                test={activeTest}
                onDeleteTest={this.onDeleteTest}
                onSaveTestChanges={this.onSaveTestChanges}
              />
            </When>
            <When condition={openEnterAnswerWrapper}>
              <EnterAnswerWrapper
                open={openEnterAnswerWrapper}
                onCloaseAnswerWrapper={this.onCloaseAnswerWrapper}
                onAddStudentAnswerToTest={this.onAddStudentAnswerToTest}
                test={currentTestSection}
              />
            </When>
            <When condition={openCreateTestModal}>
              <NewTestModal
                open={openCreateTestModal}
                onClose={this.onCloseTestModal}
                onSave={this.onSaveNewTest}
              />
            </When>
            <Otherwise>
              <TestSettingModal
                open={opentTestSettingModal}
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
        )}
        {selectedTest && <TestSections test={selectedTest} />}
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
