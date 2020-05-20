import React from 'react';
import update from 'immutability-helper';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import PropTypes from 'prop-types';
import NavBar from './common/NavBar';
import InCompleteTestSection from './components/InCompleteSection';
import PreStartTestSection from './components/StartSection';
import { toast } from 'react-toastify';
import Toast from '../../../../Toast';
import {
  addStudentAnswerToTestApi,
  updateStudentTestSectionStatusApi,
  updateStudentTestStatusApi,
} from '../../../index/api';
import {
  makeSelectStudentSections,
  makeSelectActiveStudentToken,
  makeSelectActiveStudent,
  makeSelectTests,
} from '../../../index/selectors';
import {fetchStudentTestSections} from '../../../index/actions';


class EnterAnswerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewTest: false,
      startedTest: false,
      testSections: [],
      studentTestId: "",
      testReadingProblems: null,
      testWritingProblems: null,
      testMathCalcProblems: null,
      testMathNoCalcProblems: null,
      updatedState: {
        activeReadingSection: true,
        showInCompleteTest: false,
        activeWritingSection: false,
        activeMathNoCalcSection: false,
        activeMathWithCalcSection: false,
        activeSection: "",
      },
      readingSectionCompleted: false,
      writingSectionCompleted: false,
      mathCalcSectionCompleted: false,
      mathNoCalcSectionCompleted: false,
    };
  }

  componentDidMount = () => {
    const {
      onFetchStudentTestSections,
      sections,
      studentToken,
      test: {student_test_id},
      activeStudent: {id},
    } = this.props;
    const postBody = {
      id,
      student_test_id,
      studentToken,
    };
    onFetchStudentTestSections(postBody);
  };

  componentWillReceiveProps = (nextProps) => {
    const { sections, student_test_id } = nextProps;
    if (sections.length !== 0) {
      this.onSetProblems(sections, student_test_id);
    }
  };

  onSetProblems = (sections, studentTestId) => {
    const {
      tests,
      test: { test_id },
    } = this.props;
    const testIds = tests.map((test) => test.id);
    const currentTestIndex = testIds.findIndex((testId) => testId === test_id);
    const currentTestSections = tests[currentTestIndex].test_sections;
    sections.map((section) => {
      const testSectionIds = currentTestSections.map((testSection) => testSection.id);
      const currentTestSectionIndex = testSectionIds.findIndex(
        (testSectionId) => testSectionId === section.test_section_id,
      );
      const currentTestSection = currentTestSections[currentTestSectionIndex];
      if (!currentTestSection) return;
      switch (currentTestSection.name) {
        case "Math (Calculator)":
          this.setState({
            testMathCalcProblems: section,
          });
          break;
        case "Writing":
          this.setState({
            testWritingProblems: section,
          });
          break;
        case "Math (No Calculator)":
          this.setState({
            testMathNoCalcProblems: section,
          });
          break;
        case "Reading":
          this.setState({
            testReadingProblems: section,
          });
          break;
        default:
          this.setState({
            testReadingProblems: section,
          });
          break;
      }
    });
    this.setState({
      testSections: sections,
      studentTestId,
    });
  };

  onSetActivePage = async (name) => {
    const currentSection = this.state.updatedState.activeSection;
    let updatedState;
    if (name === 'showInCompleteTest') {
      updatedState = update(this.state.updatedState, {
        [name]: {$set: true},
        [currentSection]: {$set: false},
      });
    } else {
      updatedState = update(this.state.updatedState, {
        [name]: {$set: true},
        [currentSection]: {$set: false},
        activeSection: {$set: name},
      });
    }
    this.setState({ updatedState });
    if (name === "showInCompleteTest") {
      const currentProblems = this.getCurrentTestProblems();
      const test_section_id = currentProblems.id;
      const postBody = {
        student_test_id: currentProblems.student_test_id,
        student_test_section_id: test_section_id,
        student_test_section_status: 'STARTED',
      };
      const response = await updateStudentTestSectionStatusApi(postBody);
      if (response && response.ok === true) {
        // Check for successful response before starting test or no answers will get recorded
        toast.success("Test section is now STARTED.");
        this.setState({
          previewTest: false,
          startedTest: true,
        });
      }
    } else {
      this.setState({
        previewTest: true,
        startedTest: false,
      });
    }
  };

  onAddStudentAnswerToTest = async (test_problem_id, answer) => {
    const {studentTestId} = this.state;
    const postBody = {
      student_test_id: studentTestId,
      test_problem_id,
      answer,
    };
    await addStudentAnswerToTestApi(postBody);
  };

  getCurrentTestProblems = () => {
    const activeSection = this.state.updatedState.activeSection;
    const {
      testReadingProblems,
      testWritingProblems,
      testMathCalcProblems,
      testMathNoCalcProblems,
    } = this.state;
    switch (activeSection) {
      case "activeReadingSection":
        return testReadingProblems;
      case "activeWritingSection":
        return testWritingProblems;
      case "activeMathWithCalcSection":
        return testMathCalcProblems;
      case "activeMathNoCalcSection":
        return testMathNoCalcProblems;
      default:
        return '';
    }
  };

  handleTestScore = async (activeTest) => {
    // Check for non-existing sections and set them to completed
    const {
      testReadingProblems,
      testWritingProblems,
      testMathCalcProblems,
      testMathNoCalcProblems,
    } = this.state;
    if (!testReadingProblems) this.setState({ readingSectionCompleted: true });
    if (!testWritingProblems) this.setState({ writingSectionCompleted: true });
    if (!testMathCalcProblems) this.setState({ mathCalcSectionCompleted: true });
    if (!testMathNoCalcProblems) this.setState({ mathNoCalcSectionCompleted: true });

    // Update current section as completed
    const {
      tests,
      test: { test_id },
    } = this.props;
    const currentTestSectionId = activeTest.test_section_id;
    const testIds = tests.map((test) => test.id);
    const currentTestIndex = testIds.findIndex((testId) => testId === test_id);
    const currentTestSections = tests[currentTestIndex].test_sections;
    const testSectionIds = currentTestSections.map((testSection) => testSection.id);
    const currentTestSectionIndex = testSectionIds.findIndex(
      (testSectionId) => testSectionId === currentTestSectionId,
    );
    const currentTestSection = currentTestSections[currentTestSectionIndex];
    switch (currentTestSection.name) {
      case "Math (Calculator)":
        this.setState({
          mathCalcSectionCompleted: true,
        });
        break;
      case "Writing":
        this.setState({
          writingSectionCompleted: true,
        });
        break;
      case "Math (No Calculator)":
        this.setState({
          mathNoCalcSectionCompleted: true,
        });
        break;
      case "Reading":
        this.setState({
          readingSectionCompleted: true,
        });
        break;
      default:
        this.setState({
          readingSectionCompleted: true,
        });
    }
    // @TODO bring back started check for a test that was just created
    // if (activeTest.test_section_status === 'STARTED') {
    const postBody = {
      student_test_id: activeTest.student_test_id,
      student_test_section_id: activeTest.id,
      student_test_section_status: "COMPLETED",
    };
    await updateStudentTestSectionStatusApi(postBody);
    const {
      readingSectionCompleted,
      writingSectionCompleted,
      mathCalcSectionCompleted,
      mathNoCalcSectionCompleted,
    } = this.state;
    if (
      readingSectionCompleted &&
        writingSectionCompleted &&
        mathCalcSectionCompleted &&
        mathNoCalcSectionCompleted
    ) {
      const postBody = {
        student_test_id: activeTest.student_test_id,
        status: "COMPLETED",
      };
      await updateStudentTestStatusApi(postBody);
      toast.success("All test sections have been COMPLETED.");
      const { onOpentTestScore } = this.props;
      onOpentTestScore(activeTest);
    } else {
      toast.success("Test section is now COMPLETED.");
    }
    // }
    // }
  };

  getExistingSections = () => {
    const { testReadingProblems, testWritingProblems, testMathCalcProblems, testMathNoCalcProblems } = this.state;
    return {
      reading: !!testReadingProblems,
      writing: !!testWritingProblems,
      mathCalc: !!testMathCalcProblems,
      mathNoCalc: !!testMathNoCalcProblems,
    };
  }

  render() {
    const {
      startedTest,
      previewTest,
      updatedState,
    } = this.state;
    const {
      onCloaseAnswerWrapper,
      open,
      test: {test_description},
      test,
      onAddStudentAnswerToTest,
    } = this.props;
    if (!test) return;
    return (
      <React.Fragment>
        {open && (
          <div className="starting">
            <div className="main-holder grey lighten-5">
              <NavBar
                onCloaseAnswerWrapper={onCloaseAnswerWrapper}
                onSetActivePage={this.onSetActivePage}
                testDescription={test_description}
                active={updatedState.activeSection}
                existingSections={this.getExistingSections()}
              />
              <PreStartTestSection
                open={previewTest && this.getCurrentTestProblems()}
                onSetActivePage={this.onSetActivePage}
                testSection={this.getCurrentTestProblems()}
              />
              <InCompleteTestSection
                open={startedTest && this.getCurrentTestProblems()}
                onAddStudentAnswerToTest={onAddStudentAnswerToTest}
                testSection={this.getCurrentTestProblems()}
                onStudentTestScore={onCloaseAnswerWrapper}
                handleTestScore={this.handleTestScore}
              />
              <Toast />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

EnterAnswerWrapper.propTypes = {
  onCloaseAnswerWrapper: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  test: PropTypes.object,
  onOpentTestScore: PropTypes.func.isRequired,
  onAddStudentAnswerToTest: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sections: makeSelectStudentSections(),
  studentToken: makeSelectActiveStudentToken(),
  activeStudent: makeSelectActiveStudent(),
  tests: makeSelectTests(),
});
function mapDispatchToProps(dispatch) {
  return {
    onFetchStudentTestSections: postBody => dispatch(fetchStudentTestSections(postBody)),
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(EnterAnswerWrapper);
