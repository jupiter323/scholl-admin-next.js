/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import Moment from "moment";
import { connect } from "react-redux";
import { compose } from "redux";
import FutureTestCard from "./components/FutureTestCard";
import CompletedTestCard from "./components/CompletedTestCard";
import TestSections from "../TestSections";
// import sampleTests from "./utils/sampleTests";
import EditTestModal from "./components/EditTestModal";
import NewTestModal from "./components/TestModal";
import StartTestWrapper from "./components/StartTestPage";
import CompletedTestDetailView from "./components/CompletedTestDetailView";
import { setIsVisibleTopBar } from "../index/actions";

import {
  assignTestToStudentApi,
  addStudentAnswerToTestApi,
  fetchTestsByStudentIdApi,
  fetchStudentTestScoreApi
} from "../index/api";

const uuidGenerator = require("uuid/v4");
class DetailTestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: [],
      currentTestSection: {},
      dropdownIndex: null,
      dropdownIsOpen: false,
      editTestModalOpen: false,
      testDetailViewOpen: false,
      activeCompletedTestCard: false,
      StartTestWrapperOpen: false,
      activeTest: null,
      selectedTest: null,
      createTestModalOpen: false,
      existTestsData: false
    };
  }

  componentDidMount = async () => {
    if (this.state.tests.length === 0) {
      const { id } = this.props.user;
      const { formattedStudentTests: tests } = await fetchTestsByStudentIdApi(id);
      if (tests.length !== 0) {
        this.setState({
          tests,
          existTestsData: true
        });
      } else {
        this.setState({
          existTestsData: false
        });
      }
    }
  };

  onGetStudentScoresByStudentTestId = async(test) =>{
    const { student_test_id } = test;
    const { formattedTestScores } = await fetchStudentTestScoreApi(student_test_id);
    return formattedTestScores.scores;
  }

  onToggleEditTestModal = (activeTest = null) => {
    this.onSetIsVisibleTopBar(false);
    this.setState(
      ({ editTestModalOpen }) => ({
        editTestModalOpen: !editTestModalOpen,
        activeTest
      }),
      this.onCloseDropdown
    );
  };

  onToggleCompleteTestDetailView = () => {
    this.setState(({ testDetailViewOpen }) => ({
      testDetailViewOpen: !testDetailViewOpen
    }));
  };

  onSetDropdown = dropdownIndex =>
    this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () =>
    this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  onCreateTest = event => {
    event.preventDefault();
    this.setState({ createTestModalOpen: true });
    console.warn("Pending implementation of create test UI and functionality");
  };

  onEnterAnswers = (currentTestId,test) => {
    const currentTestSection = this.state.tests.find(test => test.test_id === currentTestId);
    this.setState({ StartTestWrapperOpen: true, currentTestSection });
  };

  onEditTest = () =>
    console.warn("Pending implementation edit test UI and functionality");
  onDownloadReport = () =>
    console.warn(
      "Pending implementation of download report ui and functionality"
    );
  onDeleteTest = () => {
    this.onSetIsVisibleTopBar(true);
    this.setState({ editTestModalOpen: false }, () =>
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
    console.warn(
      "Pending save test changes functionality",
      testVersion,
      settings
    );
  };
  openTestScores = index => {
    const { tests } = this.state;
    const newTestArray = tests.filter(test => test.status === "complete");
    this.setState({ selectedTest: newTestArray[index.index] });
  };

  mapCompletedTests = () => {
    const {
      activeCompletedTestCard,
      scores,
      existTestsData,
      tests
    } = this.state;
    //We are using 0 as index.In the future,The Completed Test Card should be mapping so that index should be unique
    return tests
      .filter(test => test.status === "COMPLETED").map((test, index) =>existTestsData && (
            <CompletedTestCard
              scores={this.onGetStudentScoresByStudentTestId()}
              test={test}
              index={test.test_id}
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
      .filter(test => test.status === "ASSIGNED")
      .map(
        (test, index) =>
          existTestsData && (
            <FutureTestCard
              futureTest
              test={test}
              key={`future-${test.test_id}`}
              onEditTest={() => this.onToggleEditTestModal(test)}
              onDeleteTest={this.onDeleteTest}
              onSetDropdown={this.onSetDropdown}
              onEnterAnswers={this.onEnterAnswers}
              onCloseDropdown={this.onCloseDropdown}
              onDownloadReport={this.onDownloadReport}
              dropdownIndex={this.state.dropdownIndex}
              dropdownIsOpen={this.state.dropdownIsOpen}
              openTestScores={this.openTestScores}
              index={
                tests.filter(filterTest => filterTest.status === "ASSIGNED")
                  .length + index
              }
            />
          )
      );
  };

  onCloseTestModal = () => this.setState({ createTestModalOpen: false });

  onOpenStudentAnswerModal = () =>
    this.setState({ StartTestWrapperOpen: true });

  onActiveCompletedTestCard = async () => {
    this.setState({
      StartTestWrapperOpen: false,
      activeCompletedTestCard: true,
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
    const { currentTestSection:{student_test_id} } = this.state;
    const postBody = {
      student_test_id,
      test_problem_id,
      answer
    };
    await addStudentAnswerToTestApi(postBody);
  };

  render() {
    const {
      editTestModalOpen,
      createTestModalOpen,
      StartTestWrapperOpen,
      activeTest,
      selectedTest,
      currentTestSection,
      testDetailViewOpen
    } = this.state;
    const { user } = this.props;
    return (
      <React.Fragment>
        {!selectedTest && (
          <Choose>
            <When condition={editTestModalOpen}>
              <EditTestModal
                user={user}
                test={activeTest}
                onDeleteTest={this.onDeleteTest}
                onSaveTestChanges={this.onSaveTestChanges}
              />
            </When>
            <When condition={testDetailViewOpen}>
              <CompletedTestDetailView
                user={user}
                test={activeTest}
                onDeleteTest={this.onDeleteTest}
                onSaveTestChanges={this.onSaveTestChanges}
              />
            </When>
            <When condition={StartTestWrapperOpen}>
              <StartTestWrapper
                open={StartTestWrapperOpen}
                onActiveCompletedTestCard={this.onActiveCompletedTestCard}
                onAddStudentAnswerToTest={this.onAddStudentAnswerToTest}
                test={currentTestSection}
              />
            </When>
            <When condition={createTestModalOpen}>
              <NewTestModal
                open={createTestModalOpen}
                onClose={this.onCloseTestModal}
                onSave={this.onSaveNewTest}
              />
            </When>
            <Otherwise>
              <div className="content-section">
                <div className="section-holder">
                  <div className="content-container">
                    <h2>Completed Tests</h2>
                    <div className="row d-flex-content card-width-366">
                      {this.mapCompletedTests()}
                    </div>
                  </div>
                  <div className="content-container">
                    <h2>Future Tests</h2>
                    <div className="row d-flex-content card-width-366">
                      {this.mapFutureTests()}
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
