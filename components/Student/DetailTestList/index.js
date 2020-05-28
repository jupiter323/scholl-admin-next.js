/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import Moment from 'moment';
import { toast } from 'react-toastify';
import Toast from '../../Toast';
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
  setStudentAssignedTests,
  deleteStudentTest,
  updateTestFlag,
  assignNewTest,
  fetchStudentTestSections,
  addNewTestToStudentTests,
  setActiveTestScores,
} from "../index/actions";
import {
  makeSelectOverDueStudentTests,
  makeSelectCompletedStudentTests,
  makeSelectAssignedStudentTests,
  makeSelectStudentTests,
  makeSelectTests,
  makeSelectActiveStudent,
  makeSelectFetchStudentTestsStatus,
} from '../index/selectors';
import {
  assignTestToStudentApi,
  addStudentAnswerToTestApi,
  updateStudentTestStatusApi,
  fetchStudentTestScoreApi,
} from '../index/api';

class DetailTestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTest: {},
      activePage: "scores",
      dropdownIndex: null,
      dropdownIsOpen: false,
      openEditTestModal: false,
      openCreateTestModal: false,
      opentTestSettingModal: false,
      openEnterAnswerWrapper: false,
    };
  }

  componentDidMount = async () => {
    const { onFetchStudentTests, studentTests, activeStudent, user,studentTestsFetchedStatus } = this.props;
    if (studentTests.length === 0 && !studentTestsFetchedStatus) {
      onFetchStudentTests(user);
    } else if (studentTests.length > 0 && studentTests[0].student_id !== activeStudent.id && !studentTestsFetchedStatus) {
      onFetchStudentTests(user);
    }
  };

  onSetActiveTestComplete = () => this.setState({ activeTest: { ...this.state.activeTest, status: "COMPLETED" } })

  onToggleEditTestModal = async (activeTest) => {
    const { onSetActiveStudentTestId } = this.props;
    onSetActiveStudentTestId(activeTest.student_test_id);
    this.onSetIsVisibleTopBar(false);
    this.setState(
      ({ openEditTestModal }) => ({
        openEditTestModal: true,
        openEnterAnswerWrapper: false,
        activeTest,
        activePage: 'scores',
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
    console.warn('Pending implementation of create test UI and functionality');
  };

  onEnterAnswers = async currentTestId => {
    this.props.onFetchStudentTestSections({ id: this.props.user.id, student_test_id: currentTestId });
    this.onSetIsVisibleTopBar(false);
    this.onCloseDropdown();
    const activeTest = this.props.studentTests.find(test => test.student_test_id === currentTestId);
    if (activeTest.status === 'ASSIGNED') {
      const postBody = {
        student_test_id: currentTestId,
        status: 'STARTED',
      };
      await updateStudentTestStatusApi(postBody);
    } else if (activeTest.status === 'COMPLETED') {
      const { onSetScores, activeStudent: { id } } = this.props;
      const response = await fetchStudentTestScoreApi(id, currentTestId);
      onSetScores(response);
    }
    // this.setState({ openEnterAnswerWrapper: true, activeTest });
    this.setState({ openEditTestModal: true, activeTest, activePage: "answerSheet" });
  };

  onDownloadReport = activeTest => {
    console.log('downloading...');
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
  };
  onSetIsVisibleTopBar = value => {
    const { onSetIsVisibleTopBar } = this.props;
    onSetIsVisibleTopBar(value);
  };
  onSaveTestChanges = (testVersion, settings) => {
    this.onToggleEditTestModal();
    this.onSetIsVisibleTopBar(true);
    console.warn('Pending save test changes functionality', testVersion, settings);
  };

  mapCompletedTests = () => {
    const { dropdownIndex, dropdownIsOpen } = this.state;
    const { completes } = this.props;
    return completes.map((test, index) =>
      (<CompletedTestCard
        test={test}
        index={`completed${index}`}
        key={`completed-${index}`}
        onEnterAnswers={this.onEnterAnswers}
        onEditTest={() => this.onToggleEditTestModal({ ...test, status: 'COMPLETED' })}
        onSetDropdown={this.onSetDropdown}
        onCloseDropdown={this.onCloseDropdown}
        onDownloadReport={this.onDownloadReport}
        dropdownIndex={dropdownIndex}
        dropdownIsOpen={dropdownIsOpen}
        onTestFlagReviewed={this.onTestFlagReviewed}
        onDeleteTest={this.onDeleteTest}
        handleTestSettingModalOpen={() => this.handleTestSettingModalOpen(test)}
      />),
    );
  };

  mapAssignedTests = () => {
    const { dropdownIndex, dropdownIsOpen } = this.state;
    const { assigneds } = this.props;
    return assigneds.map((test, index) =>
      (<AssignedTestCard
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
      />),
    );
  };
  mapOverDueTests = () => {
    const { dropdownIndex, dropdownIsOpen } = this.state;
    const { overdues } = this.props;
    return overdues.map((test, index) =>
      (<OverDueTestCard
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
      />),
    );
  };

  onCloseTestModal = () => this.setState({ openCreateTestModal: false });
  onCloaseAnswerWrapper = async () => {
    this.onSetIsVisibleTopBar(true);
    this.setState({
      openEnterAnswerWrapper: false,
    });
    this.onCloseDropdown();
  };

  onSaveNewTest = async test => {
    const { tests } = this.props;
    if (!this.props.activeStudent.active && tests.length >= 1) {
      return toast.error(`This student is not activated. A free student account can only be assigned one free test.`, {
        className: 'update-error',
        progressClassName: 'progress-bar-error',
      });
    }
    this.onCloseTestModal();
    const test_sections = [];
    const testIds = tests.map(test => test.id);
    const currentTestIndex = testIds.findIndex(testId => testId === test.version);
    const currentTest = tests[currentTestIndex];

    const { user: { id } } = this.props;
    currentTest.test_sections.map(testSection => {
      if (testSection.name === 'Reading' && test.reading) {
        test_sections.push(testSection);
      }
      if (testSection.name === 'Writing' && test.writing) {
        test_sections.push(testSection);
      }
      if (testSection.name === 'Math (No Calculator)' && test.mathNoCalc) {
        test_sections.push(testSection);
      }
      if (testSection.name === 'Math (Calculator)' && test.mathWithCalc) {
        test_sections.push(testSection);
      }
    });
    if (test_sections.length === 0) {
      return toast.error(`Cannot assign a test without selecting one or more sections.`, {
        className: 'update-error',
        progressClassName: 'progress-bar-error',
      });
    }
    const postBody = {
      student_id: id,
      test_id: test.version,
      assignment_date: Moment(test.assignDate).format('YYYY-MM-DD'),
      due_date: Moment(test.dueDate).format('YYYY-MM-DD'),
      test_section_ids: test_sections.map(testSection => testSection.id),
      is_timed: test.isTimed,
    };
    const { student_test_id } = await assignTestToStudentApi(postBody);
    if (student_test_id) {
      const formattedNewTest = {
        assignment_date: test.assignDate,
        due_date: test.dueDate,
        due_status: '',
        status: 'ASSIGNED',
        student_id: id,
        student_test_id,
        test_description: currentTest.description,
        test_form: '3',
        test_id: test.version,
        test_name: currentTest.name,
      };
      const { onAssignNewTest, onAddNewTestToStudentTests } = this.props;
      onAssignNewTest(formattedNewTest);
      onAddNewTestToStudentTests(formattedNewTest);
    } else {
      toast.error(`This student is not activated. A free student account can only be assigned one free test.`, {
        className: 'update-error',
        progressClassName: 'progress-bar-error',
      });
    }
  };

  onAddStudentAnswerToTest = async (test_problem_id, answer) => {
    const { activeTest: { student_test_id } } = this.state;
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
    const { user, completes, assigneds, overdues,studentTestsFetchedStatus } = this.props;
    return (
      <React.Fragment>
        <Toast />
        <Choose>
          <When condition={openEditTestModal}>
            <EditTestModal
              onRef={ref => (this.editTestModal = ref)}
              user={user}
              test={activeTest}
              onDeleteTest={this.onDeleteTest}
              onSaveTestChanges={this.onSaveTestChanges}
              onCloseEditTestModal={this.onCloseEditTestModal}
              activePage={this.state.activePage}
              onOpentTestScore={this.onToggleEditTestModal}
            />
          </When>
          <When condition={openEnterAnswerWrapper}>
            {/* <EnterAnswerWrapper
              open={openEnterAnswerWrapper}
              onCloaseAnswerWrapper={this.onCloaseAnswerWrapper}
              onAddStudentAnswerToTest={this.onAddStudentAnswerToTest}
              test={activeTest}
              onOpentTestScore={() => this.onToggleEditTestModal(activeTest)}
            /> */}
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
                {overdues.length !== 0 && studentTestsFetchedStatus &&
                  <div className="content-container">
                    <CardHeader title="OverDue" amount={overdues.length} themeColor="#e94319" />
                    <div className="row d-flex-content card-width-366">
                      {this.mapOverDueTests()}
                    </div>
                  </div>}
                {assigneds.length !== 0 && studentTestsFetchedStatus &&
                  <div className="content-container">
                    <CardHeader title="Assigned" amount={assigneds.length} themeColor="#39b44a" />
                    <div className="row d-flex-content card-width-366">
                      {this.mapAssignedTests()}
                    </div>
                  </div>}
                {completes.length !== 0 && studentTestsFetchedStatus &&
                  <div className="content-container">
                    <CardHeader title="Completed" amount={completes.length} themeColor="#39b44a" />
                    <div className="row d-flex-content card-width-366">
                      {this.mapCompletedTests()}
                    </div>
                  </div>}
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
  onSetStudentAssignedTests: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  completes: makeSelectCompletedStudentTests(),
  assigneds: makeSelectAssignedStudentTests(),
  overdues: makeSelectOverDueStudentTests(),
  studentTests: makeSelectStudentTests(),
  tests: makeSelectTests(),
  activeStudent: makeSelectActiveStudent(),
  studentTestsFetchedStatus:makeSelectFetchStudentTestsStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSetIsVisibleTopBar: value => dispatch(setIsVisibleTopBar(value)),
    onFetchStudentTests: user => dispatch(fetchStudentTests(user)),
    onSetActiveStudentTestId: studentTestId => dispatch(setActiveStudentTestId(studentTestId)),
    onDeleteStudentTest: (studentTestId, studentId, type) => dispatch(deleteStudentTest(studentTestId, studentId, type)),
    onUpdateTestFlag: (studentTestId, studentId) => dispatch(updateTestFlag(studentTestId, studentId)),
    onAssignNewTest: (newTest) => dispatch(assignNewTest(newTest)),
    onFetchStudentTestSections: (studentInfo) => dispatch(fetchStudentTestSections(studentInfo)),
    onAddNewTestToStudentTests: (studentInfo) => dispatch(addNewTestToStudentTests(studentInfo)),
    onSetScores: scores => dispatch(setActiveTestScores(scores)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(DetailTestList);
