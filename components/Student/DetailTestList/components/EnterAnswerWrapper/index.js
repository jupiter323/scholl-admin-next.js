import React from "react";
import update from "immutability-helper";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import NavBar from "./common/NavBar";
import InCompleteTestSection from "./components/InCompleteSection";
import PreStartTestSection from "./components/StartSection";

import { addStudentAnswerToTestApi, updateStudentTestSectionStatusApi } from "../../../index/api";
import { makeSelectStudentSections, makeSelectActiveStudentToken, makeSelectActiveStudent, makeSelectTests } from "../../../index/selectors";
import { fetchStudentTestSections } from "../../../index/actions";

class EnterAnswerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewTest: false,
      startedTest: false,
      testSections: [],
      studentTestId: "",
      testReadingProblems: {},
      testWritingProblems: {},
      testMathCalcProblems: {},
      testMathNoCalcProblems: {},
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
      test: { student_test_id },
      activeStudent: { id },
    } = this.props;
    const postBody = {
      id,
      student_test_id,
      studentToken,
    };
    onFetchStudentTestSections(postBody);
  };

  componentWillReceiveProps = nextProps => {
    const { sections, student_test_id } = nextProps;
    if (sections.length !== 0) {
      this.onSetProblems(sections, student_test_id);
    }
  };

  onSetProblems = (sections, studentTestId) => {
    const { tests, test: { test_id } } = this.props;
    const testIds = tests.map(test => test.id);
    const currentTestIndex = testIds.findIndex(testId => testId === test_id);
    const currentTestSections = tests[currentTestIndex].test_sections;
    sections.map(section => {
      const testSectionIds = currentTestSections.map(testSection => testSection.id);
      const currentTestSectionIndex = testSectionIds.findIndex(
        testSectionId => testSectionId === section.test_section_id,
      );
      const currentTestSection = currentTestSections[currentTestSectionIndex];
      if (!currentTestSection) return;
      switch (currentTestSection.name) {
        case 'Math (Calculator)':
          this.setState({
            testMathCalcProblems: section,
          });
          break;
        case 'Writing':
          this.setState({
            testWritingProblems: section,
          });
          break;
        case 'Math (No Calculator)':
          this.setState({
            testMathNoCalcProblems: section,
          });
          break;
        case 'Reading':
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
        [name]: { $set: true },
        [currentSection]: { $set: false },
      });
    } else {
      updatedState = update(this.state.updatedState, {
        [name]: { $set: true },
        [currentSection]: { $set: false },
        activeSection: { $set: name },
      });
    }
    this.setState({ updatedState });
    const currentProblems = this.getCurrentTestProblems(name);
    const test_section_id = currentProblems.id;
    const postBody = {
      student_test_id: currentProblems.student_test_id,
      student_test_section_id: test_section_id,
      student_test_section_status: "STARTED",
    };
    await updateStudentTestSectionStatusApi(postBody);
    if (name === "showInCompleteTest") {
      this.setState({
        previewTest: false,
        startedTest: true,
      });
    } else {
      this.setState({
        previewTest: true,
        startedTest: false,
      });
    }
  };

  onAddStudentAnswerToTest = async (test_problem_id, answer) => {
    const { studentTestId } = this.state;
    const postBody = {
      student_test_id: studentTestId,
      test_problem_id,
      answer,
    };
    await addStudentAnswerToTestApi(postBody);
  };

  getCurrentTestProblems = (name) => {
    const activeSection = name || this.state.updatedState.activeSection;
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
        return testReadingProblems;
    }
  };

  handleTestScore = async (activeTest) => {
    const { readingSectionCompleted, writingSectionCompleted, mathCalcSectionCompleted, mathNoCalcSectionCompleted } = this.state;
    if (readingSectionCompleted && writingSectionCompleted && mathCalcSectionCompleted && mathNoCalcSectionCompleted) {
      const { onOpentTestScore } = this.props;
      onOpentTestScore(activeTest);
    } else {
      const sectionName = activeTest.name;
      switch (sectionName) {
        case "Reading":
          this.setState({
            readingSectionCompleted: true,
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
        case "Math (Calculator)":
          this.setState({
            mathCalcSectionCompleted: true,
          });
          break;
        default:
          this.setState({
            readingSectionCompleted: true,
          });
      }
      const postBody = {
        student_test_id: activeTest.student_test_id,
        student_test_section_id: activeTest.id,
        student_test_section_status: "COMPLETED",
      };
      await updateStudentTestSectionStatusApi(postBody);
    }
  }

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
    const { startedTest, previewTest } = this.state;
    const {
      onCloaseAnswerWrapper,
      open,
      test: { test_description },
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
                existingSections={this.getExistingSections()}
              />
              <PreStartTestSection
                open={previewTest}
                onSetActivePage={this.onSetActivePage}
                testSection={this.getCurrentTestProblems()}
              />
              <InCompleteTestSection
                open={startedTest}
                onAddStudentAnswerToTest={onAddStudentAnswerToTest}
                testSection={this.getCurrentTestProblems()}
                onStudentTestScore={onCloaseAnswerWrapper}
                handleTestScore={this.handleTestScore}
              />
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
