/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import Moment from "moment";
import { connect } from "react-redux";
import { compose } from "redux";
<<<<<<< HEAD
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
  makeSelectStudentTests
} from "../index/selectors";
import { assignTestToStudentApi, addStudentAnswerToTestApi } from "../index/api";

// import sampleTests from "./utils/sampleTests";
=======
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
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50

const uuidGenerator = require("uuid/v4");

class DetailTestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      activeTest: {},
      dropdownIndex: null,
      dropdownIsOpen: false,
      openEditTestModal: false,
      openCreateTestModal: false,
      opentTestSettingModal: false,
      openEnterAnswerWrapper: false
=======
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
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
    };
  }

  componentDidMount = async () => {
<<<<<<< HEAD
    const { onFetchStudentTests, overdues, completes, assigneds, user } = this.props;
    if (overdues.length === 0 && completes.length === 0 && assigneds.length === 0) {
      onFetchStudentTests(user);
=======
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
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
    }
  };

  onGetStudentScoresByStudentTestId = async(test) =>{
    const { student_test_id } = test;
    const { formattedTestScores } = await fetchStudentTestScoreApi(student_test_id);
    return formattedTestScores.scores;
  }

  onToggleEditTestModal = (activeTest = null) => {
    const { onSetActiveStudentTestId } = this.props;
    onSetActiveStudentTestId(activeTest.student_test_id);
    this.onSetIsVisibleTopBar(false);
    this.setState(
<<<<<<< HEAD
      ({ openEditTestModal }) => ({
        openEditTestModal: !openEditTestModal,
        openEnterAnswerWrapper: false,
=======
      ({ editTestModalOpen }) => ({
        editTestModalOpen: !editTestModalOpen,
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
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

  onToggleCompleteTestDetailView = () => {
    this.setState(({ testDetailViewOpen }) => ({
      testDetailViewOpen: !testDetailViewOpen
    }));
  };

  onSetDropdown = dropdownIndex =>
    this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () =>
    this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  handleTestSettingModalOpen = activeTest => {
    this.onCloseDropdown();
    this.setState(({ opentTestSettingModal }) => ({
      activeTest,
      opentTestSettingModal: !opentTestSettingModal
    }));
  };

  onCreateTest = event => {
    event.preventDefault();
<<<<<<< HEAD
    this.setState({ openCreateTestModal: true });
    console.warn("Pending implementation of create test UI and functionality");
  };

  onEnterAnswers = currentTestId => {
    this.onSetIsVisibleTopBar(false);
    this.onCloseDropdown();
    const activeTest = this.props.tests.find(test => test.test_id === currentTestId);
    this.setState({ openEnterAnswerWrapper: true, activeTest });
  };

  onDownloadReport = activeTest => {
    console.log("downloading...");
    this.onSetIsVisibleTopBar(false);
    this.onCloseDropdown();
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
=======
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
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
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
<<<<<<< HEAD
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
        key={`future-${test.test_id}`}
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
      openEnterAnswerWrapper: false
=======
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
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
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
<<<<<<< HEAD
    const {
      activeTest: { student_test_id }
    } = this.state;
=======
    const { currentTestSection:{student_test_id} } = this.state;
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
    const postBody = {
      student_test_id,
      test_problem_id,
      answer
    };
    await addStudentAnswerToTestApi(postBody);
  };

  render() {
    const {
<<<<<<< HEAD
      openEditTestModal,
      openCreateTestModal,
      openEnterAnswerWrapper,
      activeTest,
      opentTestSettingModal
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
=======
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
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
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
<<<<<<< HEAD
  onSetIsVisibleTopBar: PropTypes.func.isRequired,
  completes: PropTypes.array,
  overdues: PropTypes.array,
  assigneds: PropTypes.array
=======
  onSetIsVisibleTopBar: PropTypes.func.isRequired
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
};

const mapStateToProps = createStructuredSelector({
  completes: makeSelectCompletedStudentTests(),
  assigneds: makeSelectAssignedStudentTests(),
  overdues: makeSelectOverDueStudentTests(),
  tests: makeSelectStudentTests()
});

function mapDispatchToProps(dispatch) {
  return {
<<<<<<< HEAD
    onSetIsVisibleTopBar: value => dispatch(setIsVisibleTopBar(value)),
    onFetchStudentTests: user => dispatch(fetchStudentTests(user)),
    onSetActiveStudentTestId: studentTestId => dispatch(setActiveStudentTestId(studentTestId))
=======
    onSetIsVisibleTopBar: value => dispatch(setIsVisibleTopBar(value))
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(DetailTestList);
