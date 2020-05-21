import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import AnswerSheetNavBar from './components/AnswerSheetNavBar';
import ReadingPage from './components/ReadingPage';
import WritingPage from './components/WritingPage';
import MathNoCalcPage from './components/MathNoCalcPage';
import MathCalculatorPage from './components/MathCalculatorPage';
import EssayPage from './components/EssayPage';
import {
  makeSelectStudentSections,
  makeSelectActiveStudentToken,
  makeSelectActiveStudent,
  makeSelectTests,
} from '../index/selectors';
import {fetchStudentTestSections, addStudentAnswerToTest} from '../index/actions';
import {updateStudentTestSectionStatusApi} from '../index/api';

class DetailTestAnswerSheetComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: "",
      isOpened: false,
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
      updatedSectionStatus: {},
    };
  }

  componentDidMount() {
    const {
      onFetchStudentTestSections,
      sections,
      studentToken,
      testScoreDetails: { student_test_id },
      activeStudent: { id },
    } = this.props;
    const postBody = {
      id,
      student_test_id,
      studentToken,
    };
    onFetchStudentTestSections(postBody);
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  componentWillReceiveProps = (nextProps) => {
    const { sections, student_test_id } = nextProps;
    if (sections.length !== 0) {
      this.onSetProblems(sections, student_test_id);
    }
  };

  onSetProblems = (sections, studentTestId) => {
    const {
      tests,
      testScoreDetails: { test_id },
    } = this.props;
    const testIds = tests.map((test) => test.id);
    const currentTestIndex = testIds.findIndex((testId) => testId === test_id);
    const currentTestSections = tests[currentTestIndex].test_sections;
    sections.map((section) => {
      const testSectionIds = currentTestSections.map((testSection) => testSection.id);
      const currentTestSectionIndex = testSectionIds.findIndex(
        (testSectionId) => testSectionId === section.test_section_id
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

  getComponentImages = () =>
    new Promise((resolve) => {
      const imgDataList = [];
      const componentRefs = [
        { id: "readingAnswerSheetImg", state: "reading" },
        { id: "writingAnswerSheetImg", state: "writing" },
        { id: "mathNoCalcAnswerSheetImg", state: "math (no calc)" },
        { id: "mathCalcAnswerSheetImg", state: "math (calculator)" },
      ];
      const getImgListPromise = componentRefs.reduce(
        (accumulatorPromise, item) =>
          accumulatorPromise
            .then(async () => {
              const result = await this.getData(item);
              return imgDataList.push(result);
            })
            .catch(console.error),
        Promise.resolve()
      );
      getImgListPromise.then(() => {
        resolve(imgDataList);
      });
    });

  getData = (item) =>
    new Promise((resolve) => {
      this.setState({ activeSlide: item.state }, async () => {
        const currentImg = await this.onHandleTargetImage(item.id);
        resolve(currentImg);
      });
    });

  onHandleTargetImage = async (currentRef) => {
    const { getTargetImage } = this.props;
    const currentImg = await getTargetImage(document.getElementById(currentRef));
    return currentImg;
  };

  onSetActiveSlide = (activeSlide) => this.setState({ activeSlide });

  renderCurrentSlide = () => {
    const { activeSlide } = this.state;
    const { sections } = this.props;
    if (sections) {
      const {
        testReadingProblems,
        testWritingProblems,
        testMathCalcProblems,
        testMathNoCalcProblems,
      } = this.state;
      if (activeSlide === "reading") {
        this.updateSectionStatus(activeSlide, testReadingProblems);
        return (
          testReadingProblems && (
            <ReadingPage
              testSection={testReadingProblems}
              onAddStudentAnswerToTest={this.onAddStudentAnswerToTest}
            />
          )
        );
      }
      if (activeSlide === "writing") {
        this.updateSectionStatus(activeSlide, testWritingProblems);
        return (
          testWritingProblems && (
            <WritingPage
              testSection={testWritingProblems}
              onAddStudentAnswerToTest={this.onAddStudentAnswerToTest}
            />
          )
        );
      }
      if (activeSlide === "math (no calc)") {
        this.updateSectionStatus(activeSlide, testMathNoCalcProblems);
        return (
          testMathNoCalcProblems && (
            <MathNoCalcPage
              testSection={testMathNoCalcProblems}
              onAddStudentAnswerToTest={this.onAddStudentAnswerToTest}
            />
          )
        );
      }
      if (activeSlide === "math (calculator)") {
        this.updateSectionStatus(activeSlide, testMathCalcProblems);
        return (
          testMathCalcProblems && (
            <MathCalculatorPage
              testSection={testMathCalcProblems}
              onAddStudentAnswerToTest={this.onAddStudentAnswerToTest}
            />
          )
        );
      }
      if (activeSlide === "essay") {
        return <EssayPage />;
      }
    } else {
      return null;
    }
  };

  onAddStudentAnswerToTest = async (test_problem_id, answer, student_test_id) => {
    const { dispatchAddStudentAnswerToTest } = this.props;
    const postBody = {
      student_test_id,
      test_problem_id,
      answer,
    };
    dispatchAddStudentAnswerToTest(postBody, student_test_id);
  };

  updateSectionStatus = async (activeSlide, currentSection) => {
    if (!currentSection) return;
    if (currentSection.test_section_status === "CREATED") {
      if (!this.state.updatedSectionStatus[`${activeSlide}Section`]) {
        const postBody = {
          student_test_id: currentSection.student_test_id,
          student_test_section_id: currentSection.id,
          student_test_section_status: "STARTED",
        };
        await updateStudentTestSectionStatusApi(postBody);
        this.setState({
          updatedSectionStatus: {
            ...this.state.updatedSectionStatus,
            [`${activeSlide}Section`]: "STARTED",
          },
        });
      }
    }
  };

  getExistingSections = () => {
    const {
      testReadingProblems,
      testWritingProblems,
      testMathCalcProblems,
      testMathNoCalcProblems,
    } = this.state;
    return {
      reading: !!testReadingProblems,
      writing: !!testWritingProblems,
      mathCalc: !!testMathCalcProblems,
      mathNoCalc: !!testMathNoCalcProblems,
    };
  };

  render() {
    const { activeSlide } = this.state;
    return (
      <div className="card-main-full card">
        <div className="slick-tabs-gallery">
          <AnswerSheetNavBar
            activeSlide={activeSlide}
            onSetActiveSlide={this.onSetActiveSlide}
            updateSectionStatus={this.updateSectionStatus}
            getExistingSections={this.getExistingSections()}
          />
        </div>
        <div className="card-content">
          <div className="main-slick">{this.renderCurrentSlide()}</div>
        </div>
      </div>
    );
  }
}

DetailTestAnswerSheetComplete.propTypes = {
  getTargetImage: PropTypes.func.isRequired,
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
    dispatchAddStudentAnswerToTest: (payload, sectionId) => dispatch(addStudentAnswerToTest(payload, sectionId))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(DetailTestAnswerSheetComplete);
