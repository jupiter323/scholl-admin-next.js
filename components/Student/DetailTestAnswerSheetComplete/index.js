import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {toast} from 'react-toastify';
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
  makeSelectActiveStudentTestId,
  makeSelectActiveTestScores,
} from '../index/selectors';

import {
  fetchStudentTestSections,
  addStudentAnswerToTest,
  setEssayScore,
  resetErrorMessage,
} from '../index/actions';
import {updateStudentTestSectionStatusApi} from '../index/api';
import {makeSelectErrorMessages} from '../index/selectors';
class DetailTestAnswerSheetComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: '',
      isOpened: false,
      testSections: [],
      studentTestId: '',
      testReadingProblems: null,
      testWritingProblems: null,
      testMathCalcProblems: null,
      testMathNoCalcProblems: null,
      activeTestSection: null,
      updatedState: {
        activeReadingSection: false,
        showInCompleteTest: false,
        activeWritingSection: false,
        activeMathNoCalcSection: false,
        activeMathWithCalcSection: false,
        activeSection: '',
      },
      updatedSectionStatus: {},
      showSectionMessage: false,
      answerTestProblemMessage: null,
      testFlagMessage: null,
      fetchSectionsMessage: null,
      enableScoreReport: false,
      sections: [],
    };
  }

  componentDidMount() {
    this.props.onRef(this);
    this.delayFetchStudentTestSections();
  }
  componentWillUnmount() {
    const {onResetErrorMessage} = this.props;
    this.props.onRef(undefined);
    onResetErrorMessage('answerTestProblemMessage');
    onResetErrorMessage('testFlagMessage');
    onResetErrorMessage('fetchSectionsMessage');
    onResetErrorMessage('fetchProblemsMessage');
  }

  componentWillReceiveProps = nextProps => {
    const {
      sections,
      student_test_id,
      errorMessages: {
        answerTestProblemMessage,
        testFlagMessage,
        fetchSectionsMessage,
        fetchProblemsMessage,
      },
    } = nextProps;
    const {enableScoreReport} = this.state;
    this.setState({
      sections,
    });
    if (sections.length !== 0 && !enableScoreReport) {
      this.onSetProblems(sections, student_test_id);
    }
    if (answerTestProblemMessage !== this.state.answerTestProblemMessage) {
      this.onErrorMessage(answerTestProblemMessage);
    }
    if (testFlagMessage !== this.state.testFlagMessage) {
      this.onErrorMessage(testFlagMessage);
    }
    if (fetchProblemsMessage !== this.state.fetchProblemsMessage) {
      this.setState({fetchProblemsMessage});
    }
    if (fetchSectionsMessage !== this.state.fetchSectionsMessage) {
      this.setState({fetchSectionsMessage});
    }
  };

  delayFetchStudentTestSections = () => {
    const {
      onFetchStudentTestSections,
      studentToken,
      testScoreDetails: {student_test_id},
      activeStudent: {id},
    } = this.props;
    const postBody = {
      id,
      student_test_id,
      studentToken,
    };
    return new Promise(async resolve => {
      onFetchStudentTestSections(postBody);
      resolve();
    });
  };
  onErrorMessage(message) {
    if (!message) this.setState({[message]: message});
    toast.error(message, {
      className: 'update-error',
      progressClassName: 'progress-bar-error',
    });
    this.setState({[message]: message});
  }
  onSetProblems = (sections, studentTestId) => {
    return new Promise(async resolve => {
      const {tests, testScoreDetails: {test_id}} = this.props;
      const testIds = tests.map(test => test.id);
      const currentTestIndex = testIds.findIndex(testId => testId === test_id);
      const currentTestSections = tests[currentTestIndex].test_sections;
      sections.map(section => {
        const testSectionIds = currentTestSections.map(testSection => testSection.id);
        const currentTestSectionIndex = testSectionIds.findIndex(
          testSectionId => testSectionId === section.test_section_id
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
        showSectionMessage: false,
      });
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  getComponentImages = () =>
    new Promise(resolve => {
      this.setState({
        enableScoreReport: true,
      });
      const imgDataList = [];
      const componentRefs = [
        {id: 'readingAnswerSheetImg', state: 'reading'},
        {id: 'writingAnswerSheetImg', state: 'writing'},
        {id: 'mathNoCalcAnswerSheetImg', state: 'math (no calc)'},
        {id: 'mathCalcAnswerSheetImg', state: 'math (calculator)'},
      ];
      this.delayFetchStudentTestSections().then(() => {
        setTimeout(() => {
          this.onSetProblems(this.state.sections).then(() => {
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
        }, 20000);
      });
    });

  getData = item =>
    new Promise(resolve => {
      this.setState({activeSlide: item.state}, async () => {
        const currentImg = await this.onHandleTargetImage(item.id);
        resolve(currentImg);
      });
    });

  onHandleTargetImage = async currentRef => {
    const {getTargetImage} = this.props;
    const currentImg = await getTargetImage(document.getElementById(currentRef));
    return currentImg;
  };

  onSetActiveSlide = activeSlide => {
    const {
      testReadingProblems,
      testWritingProblems,
      testMathCalcProblems,
      testMathNoCalcProblems,
    } = this.state;
    let currentSection;
    switch (activeSlide) {
      case 'reading':
        currentSection = testReadingProblems;
        break;
      case 'writing':
        currentSection = testWritingProblems;
        break;
      case 'math (no calc)':
        currentSection = testMathNoCalcProblems;
        break;
      case 'math (calculator)':
        currentSection = testMathCalcProblems;
        break;
      default:
        currentSection = testReadingProblems;
        break;
    }
    this.setState({activeSlide, activeTestSection: currentSection});
  };

  renderCurrentSlide = () => {
    const {activeSlide, fetchSectionsMessage} = this.state;
    const {sections, activeStudentTestId, activeTestScores, onSetEssayScore} = this.props;
    if (sections) {
      const {
        testReadingProblems,
        testWritingProblems,
        testMathCalcProblems,
        testMathNoCalcProblems,
      } = this.state;
      if (activeSlide === 'reading') {
        this.updateSectionStatus(activeSlide, testReadingProblems);
        return (
          testReadingProblems &&
          <ReadingPage
            testSection={testReadingProblems}
            onAddStudentAnswerToTest={this.onAddStudentAnswerToTest}
            fetchProblemsMessage={this.state.fetchProblemsMessage}
          />
        );
      } else if (activeSlide === 'writing') {
        this.updateSectionStatus(activeSlide, testWritingProblems);
        return (
          testWritingProblems &&
          <WritingPage
            testSection={testWritingProblems}
            onAddStudentAnswerToTest={this.onAddStudentAnswerToTest}
            fetchProblemsMessage={this.state.fetchProblemsMessage}
          />
        );
      } else if (activeSlide === 'math (no calc)') {
        this.updateSectionStatus(activeSlide, testMathNoCalcProblems);
        return (
          testMathNoCalcProblems &&
          <MathNoCalcPage
            testSection={testMathNoCalcProblems}
            onAddStudentAnswerToTest={this.onAddStudentAnswerToTest}
            fetchProblemsMessage={this.state.fetchProblemsMessage}
          />
        );
      } else if (activeSlide === 'math (calculator)') {
        this.updateSectionStatus(activeSlide, testMathCalcProblems);
        return (
          testMathCalcProblems &&
          <MathCalculatorPage
            testSection={testMathCalcProblems}
            onAddStudentAnswerToTest={this.onAddStudentAnswerToTest}
            fetchProblemsMessage={this.state.fetchProblemsMessage}
          />
        );
      } else if (activeSlide === 'essay') {
        return (
          <EssayPage
            testId={activeStudentTestId}
            testScores={activeTestScores}
            setEssayScore={onSetEssayScore}
          />
        );
      }
      if (!fetchSectionsMessage) {
        return <h1 style={{textAlign: 'center'}}>Loading Problems...</h1>;
      }
      return (
        <h1 style={{textAlign: 'center', color: 'red'}}>
          {fetchSectionsMessage}
        </h1>
      );
    }
    return null;
  };

  onAddStudentAnswerToTest = async (problem, answer, student_test_id) => {
    const {dispatchAddStudentAnswerToTest} = this.props;
    const postBody = {
      student_test_id,
      test_problem_id: problem.id,
      answer,
    };
    dispatchAddStudentAnswerToTest(postBody, problem.test_section_id);
  };

  updateSectionStatus = async (activeSlide, currentSection) => {
    if (!currentSection) return;
    if (currentSection.test_section_status === 'CREATED') {
      if (!this.state.updatedSectionStatus[`${activeSlide}Section`]) {
        const postBody = {
          student_test_id: currentSection.student_test_id,
          student_test_section_id: currentSection.id,
          student_test_section_status: 'STARTED',
        };
        await updateStudentTestSectionStatusApi(postBody);
        this.setState({
          updatedSectionStatus: {
            ...this.state.updatedSectionStatus,
            [`${activeSlide}Section`]: 'STARTED',
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
    const {
      activeSlide,
      activeTestSection,
      testReadingProblems,
      testWritingProblems,
      testMathCalcProblems,
      testMathNoCalcProblems,
    } = this.state;
    const {completedSections} = this.props;
    let showSectionMessage = this.state.showSectionMessage;
    switch (activeSlide) {
      case 'reading':
        if (completedSections.readingSectionCompleted) {
          showSectionMessage = true;
        }
        break;
      case 'writing':
        if (completedSections.writingSectionCompleted) {
          showSectionMessage = true;
        }
        break;
      case 'math (no calc)':
        if (completedSections.mathNoCalcSectionCompleted) {
          showSectionMessage = true;
        }
        break;
      case 'math (calculator)':
        if (completedSections.mathCalcSectionCompleted) {
          showSectionMessage = true;
        }
        break;
      default:
        break;
    }
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
          {showSectionMessage &&
            <p
              style={{
                color: 'white',
                backgroundColor: '#28a745',
                fontSize: '14px',
                borderRadius: '25px',
              }}
              className="center-align"
            >
              This test section is complete. You can still edit answer choices if needed.
            </p>}
          <div className="main-slick">
            {this.renderCurrentSlide()}
          </div>
          {activeSlide &&
            activeSlide !== 'essay' &&
            !showSectionMessage &&
            <div className="row">
              <div className="btn-holder right-align">
                <a
                  href="#"
                  className="btn btn-xlarge waves-effect waves-light bg-blue"
                  onClick={() =>
                    this.props.handleTestScore(activeTestSection, {
                      testReadingProblems,
                      testWritingProblems,
                      testMathNoCalcProblems,
                      testMathCalcProblems,
                    })}
                >
                  Score Test Section
                </a>
              </div>
            </div>}
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
  activeStudentTestId: makeSelectActiveStudentTestId(),
  activeTestScores: makeSelectActiveTestScores(),
  errorMessages: makeSelectErrorMessages(),
});
function mapDispatchToProps(dispatch) {
  return {
    onFetchStudentTestSections: postBody => dispatch(fetchStudentTestSections(postBody)),
    onSetEssayScore: score => dispatch(setEssayScore(score)),
    dispatchAddStudentAnswerToTest: (payload, sectionId) =>
      dispatch(addStudentAnswerToTest(payload, sectionId)),
    onResetErrorMessage: errorName => dispatch(resetErrorMessage(errorName)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(DetailTestAnswerSheetComplete);
