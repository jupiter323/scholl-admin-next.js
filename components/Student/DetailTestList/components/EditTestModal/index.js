/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import moment from 'moment';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {toast} from 'react-toastify';
import TestVersionPage from '../TestVersionPage';
import DetailTestScorePage from '../../../DetailTestScorePage';
import DetailTestAnswerSheetComplete from '../../../DetailTestAnswerSheetComplete';
import StrengthsAndWeaknesses from '../../../DetailTestStrengthsAndWeakesses';
import pdfMakeReport from './pdfMakeReport';
import {
  makeSelectStudentSections,
  makeSelectActiveStudentToken,
  makeSelectTests,
  makeSelectAssignedStudentTests,
  makeSelectActiveStudent,
  makeSelectActiveTestScores,
  makeSelectErrorMessages,
} from '../../../index/selectors';
import {
  setStudentAssignedTests,
  setStudentCompletedTests,
  updateTestStatus,
  setActiveTestScores,
  getTestScores,
  resetErrorMessage,
  fetchStudentTestSections,
} from '../../../index/actions';
import {
  updateStudentTestSectionStatusApi,
  updateStudentTestStatusApi,
  fetchTestsByStudentIdApi,
} from '../../../index/api';

import {css} from '@emotion/core';
import BarLoader from 'react-spinners/BarLoader';

class EditTestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: props.activePage,
      scoresImages: null,
      analysisBarImages: [],
      analysisCicleImages: [],
      answerSheetImages: [],
      enablePublish: true,
      adminInfo: 'Study Hut Tutoring | www.studyhut.com | (310) 555-1212 | info@studyhut.com',
      userInfo: {
        version: '',
        target: 'Score Report',
        test_date: '',
        name: '',
        test_type: 'Practice Test',
        order: '3rd',
      },
      headerGradient: ['#ec693d 0%', '#649aab 61%', '#30add6 87%', '#18b5e9 100%'],
      readingSectionCompleted: false,
      writingSectionCompleted: false,
      mathNoCalcSectionCompleted: false,
      mathCalcSectionCompleted: false,
      fetchScoresMsg: '',
      updateTestStatusMsg: '',
      updateTestSectionMessage: '',
      circleImageHeight: 0,
    };
  }

  componentDidMount = async () => {
    const {
      onFetchStudentTestSections,
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
    this.props.onRef(this);
  };

  componentWillUnmount() {
    this.props.onRef(undefined);
    this.props.onResetErrorMessage('fetchScoresMsg');
    this.props.onResetErrorMessage('updateTestStatusMsg');
  }

  componentWillReceiveProps(nextProps) {
    const {activePage, sections, errorMessages} = nextProps;
    const {onCloseEditTestModal} = this.props;
    if (activePage !== this.state.activePage && activePage !== this.props.activePage) {
      this.setState({activePage});
    }
    if (sections.length !== 0) {
      const {tests, test: {test_id}} = this.props;
      sections.map(section => {
        if (section.test_section_status === 'COMPLETED') {
          const testIds = tests.map(test => test.id);
          const currentTestIndex = testIds.findIndex(testId => testId === test_id);
          const currentTestSections = tests[currentTestIndex].test_sections;
          const testSectionIndex = currentTestSections.findIndex(
            testSection => testSection.id === section.test_section_id
          );
          // If no match return and wait for new props
          if (!currentTestSections[testSectionIndex]) return;

          const sectionType = currentTestSections[testSectionIndex].name;
          switch (sectionType) {
            case 'Reading':
              return this.setState({readingSectionCompleted: true});
            case 'Writing':
              return this.setState({writingSectionCompleted: true});
            case 'Math (Calculator)':
              return this.setState({mathCalcSectionCompleted: true});
            case 'Math (No Calculator)':
              return this.setState({mathNoCalcSectionCompleted: true});
            default:
          }
        }
      });
    }
    const errorConditon = name =>
      errorMessages[name] && errorMessages[name] !== this.state[name] && errorMessages[name] !== '';
    if (errorConditon('fetchScoresMsg')) {
      this.setState({fetchScoresMsg: errorMessages.fetchScoresMsg});
      toast.error(errorMessages.fetchScoresMsg);
      onCloseEditTestModal();
    }
    if (errorConditon('updateTestStatusMsg')) {
      this.setState({updateTestStatusMsg: errorMessages.updateTestStatusMsg});
      toast.error(errorMessages.updateTestStatusMsg);
      onCloseEditTestModal();
    }
  }

  getBase64ImageFromURL = url =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        resolve(dataURL);
      };
      img.onerror = error => {
        reject(error);
      };
      img.src = url;
    });

  onSetActivePage = activePage => {
    this.setState({
      activePage,
    });
  };

  getTargetImage = currentRef => {
    const html2canvas = require('html2canvas');
    const defaultCanvasSetting = {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: 'rgba(0,0,0,0)',
      removeContainer: true,
    };
    const targetImg = html2canvas(currentRef, defaultCanvasSetting).then(canvas => {
      const imgData = canvas.toDataURL('image/png', 1.0);
      return imgData;
    });
    return targetImg;
  };

  getData = item =>
    new Promise(resolve => {
      const currentChild = item.child;
      this.setState(
        {
          activePage: item.state,
        },
        async () => {
          const data = await this[currentChild].getComponentImages();
          switch (item.state) {
            case 'StrengthsAndWeaknesses':
              this.setState({
                analysisCicleImages: data.circleImageList,
                analysisBarImages: data.barImageList,
              });
              break;
            case 'answerSheet':
              this.setState({
                answerSheetImages: data,
              });
              break;
            case 'scores':
              this.setState({
                scoresImages: data,
              });
              break;
            default:
              break;
          }
          resolve();
        }
      );
    });

  generateScoreReportPdf = async () => {
    this.setState({
      enablePublish: false,
    });
    const imgDataLists = [];
    const {adminInfo, headerGradient} = this.state;
    const coverBackgroundImg = './static/images/sunset.jpg';
    const logoImg = './static/images/study-hut-logo.png';
    const backgroundImage = await this.getBase64ImageFromURL(
      `${coverBackgroundImg}?auto=compress&cs=tinysrgb&dpr=1&w=500`
    );
    const logo = await this.getBase64ImageFromURL(
      `${logoImg}?auto=compress&cs=tinysrgb&dpr=1&w=500`
    );
    const pageStates = [
      {
        state: 'scores',
        child: 'ScoresChild',
      },
      {
        state: 'StrengthsAndWeaknesses',
        child: 'AnalysisChild',
      },
      {
        state: 'answerSheet',
        child: 'AnswerSheetChild',
      },
    ];
    const getImagesPromise = pageStates.reduce(
      (accumulatorPromise, item) =>
        accumulatorPromise
          .then(async () => {
            const images = await this.getData(item);
          })
          .catch(console.error),
      Promise.resolve()
    );

    getImagesPromise.then(() => {
      this.setState({
        enablePublish: true,
      });
      const {scoresImages, analysisCicleImages, analysisBarImages, answerSheetImages} = this.state;
      let subjects = [];
      const CONTENT_WIDTH = 545.28;
      subjects.push('Practice Test Scores');
      imgDataLists.push({
        image: scoresImages,
        width: CONTENT_WIDTH,
        margin: [0, 20, 0, 0],
        pageBreak: 'after',
      });
      const testArray = [
        {
          id: 0,
          subject: 'Reading Answersheet',
        },
        {
          id: 1,
          subject: 'Writing Answersheet',
        },
        {
          id: 2,
          subject: 'Math Answer Sheet(no calc)',
        },
      ];
      const getCircleImageHeightPromise = this.getTargetImageHeight(analysisCicleImages[0], 300);
      getCircleImageHeightPromise.then(circleImageHeight => {
        const testPromise = testArray.reduce(
          (accumulatorPromise, item) =>
            accumulatorPromise
              .then(async () => {
                const getBarImageHeightPromise = this.getTargetImageHeight(
                  analysisBarImages[item.id],
                  CONTENT_WIDTH
                );
                getBarImageHeightPromise.then(barImageHeight => {
                  subjects.push(item.subject);
                  imgDataLists.push({
                    image: answerSheetImages[item.id],
                    width: CONTENT_WIDTH,
                    margin: [0, 20, 0, 0],
                    pageBreak: 'after',
                  });

                  if (barImageHeight > 746.89) {
                    //OverSized
                    setTimeout(async () => {
                      const overSizedImagesAmount = this.getSplitedImageAmount(
                        circleImageHeight,
                        barImageHeight
                      );
                      const splitedImages = await this.splitImages(
                        circleImageHeight.toFixed(1),
                        barImageHeight.toFixed(1),
                        overSizedImagesAmount,
                        analysisBarImages[item.id]
                      );
                      imgDataLists.push({
                        image: analysisCicleImages[item.id],
                        width: 300,
                        margin: [0, 20, 0, 0],
                      });
                      for (let i = 0; i < overSizedImagesAmount; i++) {
                        i === 0
                          ? subjects.push(this.getSubjectLabelById(item.id))
                          : subjects.push(this.getSubjectLabelById(item.id) + ' (cont’d)');
                        imgDataLists.push({
                          image: splitedImages[i],
                          width: CONTENT_WIDTH,
                          margin: [0, 20, 0, 0],
                          pageBreak: 'after',
                        });
                      }
                    }, 1000);
                  } else {
                    subjects.push(this.getSubjectLabelById(item.id));
                    imgDataLists.push({
                      image: analysisCicleImages[item.id],
                      width: 300,
                      margin: [0, 20, 0, 0],
                    });
                    imgDataLists.push({
                      image: analysisBarImages[item.id],
                      width: CONTENT_WIDTH,
                      margin: [0, 20, 0, 0],
                    });
                  }
                });
              })
              .catch(console.error),
          Promise.resolve()
        );
        testPromise.then(() => {
          setTimeout(() => {
            subjects.push('Math Answer Sheet(calculator)');
            imgDataLists.push({
              image: answerSheetImages[3],
              width: CONTENT_WIDTH,
              margin: [0, 20, 0, 0],
            });
            const {
              test: {test_description, completion_date},
              activeStudent: {studentInformation: {firstName, lastName}},
            } = this.props;
            const userInfo = update(this.state.userInfo, {
              $merge: {
                name: `${firstName} ${lastName}`,
                version: test_description,
                test_date: moment(completion_date).format('MMMM Do YYYY'),
              },
            });
            pdfMakeReport(
              imgDataLists,
              userInfo,
              subjects,
              adminInfo,
              backgroundImage,
              headerGradient,
              logo
            );
          }, 3000);
        });
      });
    });
  };

  getSubjectLabelById = id => {
    switch (id) {
      case 0:
        return 'Reading Analysis';
      case 1:
        return 'Writing Analysis';
      case 2:
        return 'Math Analysis';
      default:
        return 'Reading Analysis';
    }
  };

  getSplitedImageAmount = (circleImageHeight, barImageHeight, pageHeight = 765) => {
    let delta = 0;
    const CUT_PAGE_SIZE = 767;
    const subImageHeight = barImageHeight - circleImageHeight;
    const mod = subImageHeight % CUT_PAGE_SIZE;
    if (mod !== 0) {
      delta = delta + 1;
    }
    const amount = Math.floor(subImageHeight / CUT_PAGE_SIZE) + delta;
    return amount;
  };

  splitImages = (circleImageHeight, barImageHeight, amount, imagString) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.onload = () => {
        setTimeout(() => {
          let splitedImages = []; // to push into oud base64 strings
          let subImageHeight = 766.89;
          const OVERSIZED_OFFSET = 200;
          const CONTENT_WIDTH = 545.28;
          for (let i = 0; i < amount; i++) {
            const canvas = document.createElement('canvas');
            canvas.width = CONTENT_WIDTH * 4; //important for resolution
            canvas.height =
              i === 0
                ? (subImageHeight - circleImageHeight) * 4 - OVERSIZED_OFFSET
                : subImageHeight * 4; //important for resolution
            const ctx = canvas.getContext('2d');
            ctx.scale(4, 4); //important for resolution
            ctx.imageSmoothingEnabled = false;
            ctx.webkitImageSmoothingEnabled = false;
            ctx.mozImageSmoothingEnabled = false;
            const y = i === 0 ? 0 : circleImageHeight - subImageHeight * i + OVERSIZED_OFFSET;
            ctx.drawImage(img, 0, y, CONTENT_WIDTH, barImageHeight); // img, x, y, w, h
            splitedImages.push(canvas.toDataURL()); // ("image/jpeg") for jpeg
          }
          resolve(splitedImages);
        }, 100);
      };
      img.onerror = error => {
        reject(error);
      };
      img.src = imagString;
    });

  getImageSizeFromBase64String = base64string =>
    new Promise(resolve => {
      let img = document.createElement('img');
      img.setAttribute('src', base64string);
      setTimeout(function() {
        const imgSize = {
          imgWidth: img.width,
          imgHeight: img.height,
        };
        resolve(imgSize);
      }, 0);
    });

  getTargetImageHeight = async (targetImageString, targetImageWidth) => {
    const targetImage = await this.getImageSizeFromBase64String(targetImageString);
    const targetImageHeight = targetImageWidth / targetImage.imgWidth * targetImage.imgHeight;
    return Number(targetImageHeight);
  };

  onUpdateTestSectionMsg = message => this.setState({updateTestSectionMessage: message});

  renderCurrentPage = () => {
    const {activePage} = this.state;
    const {test, user, onDeleteTest, onSaveTestChanges, onOpentTestScore} = this.props;
    if (activePage === 'testVersion') {
      return (
        <TestVersionPage
          test={test}
          user={user}
          onDeleteTest={onDeleteTest}
          onSaveTestChanges={onSaveTestChanges}
        />
      );
    }
    if (activePage === 'scores') {
      return (
        <div id="wrapper">
          <DetailTestScorePage
            test={test}
            getTargetImage={this.getTargetImage}
            onRef={ref => (this.ScoresChild = ref)}
            onGetTestScores={this.props.onGetTestScores}
          />
        </div>
      );
    }
    if (activePage === 'answerSheet') {
      const {
        readingSectionCompleted,
        writingSectionCompleted,
        mathNoCalcSectionCompleted,
        mathCalcSectionCompleted,
        updateTestSectionMessage,
        setIsCompleted,
      } = this.state;
      return (
        <DetailTestAnswerSheetComplete
          testScoreDetails={test}
          getTargetImage={this.getTargetImage}
          onRef={ref => (this.AnswerSheetChild = ref)}
          handleTestScore={this.handleTestScore}
          completedSections={{
            readingSectionCompleted,
            writingSectionCompleted,
            mathNoCalcSectionCompleted,
            mathCalcSectionCompleted,
          }}
          setIsCompleted={setIsCompleted}
          test={this.props.test}
          updateTestSectionMessage={updateTestSectionMessage}
          onUpdateTestSectionMsg={this.onUpdateTestSectionMsg}
          openTestScores={onOpentTestScore}
        />
      );
    }

    if (activePage === 'StrengthsAndWeaknesses') {
      return (
        <StrengthsAndWeaknesses
          getTargetImage={this.getTargetImage}
          onRef={ref => (this.AnalysisChild = ref)}
          test={this.props.test}
          activeStudent={this.props.activeStudent}
        />
      );
    }
    return null;
  };

  handleTestScore = async (activeSection, problemsByTest) => {
    // Check for non-existing sections and set them to completed
    const {
      testReadingProblems,
      testWritingProblems,
      testMathCalcProblems,
      testMathNoCalcProblems,
    } = problemsByTest;
    if (!testReadingProblems) this.setState({readingSectionCompleted: true});
    if (!testWritingProblems) this.setState({writingSectionCompleted: true});
    if (!testMathCalcProblems) this.setState({mathCalcSectionCompleted: true});
    if (!testMathNoCalcProblems) this.setState({mathNoCalcSectionCompleted: true});

    // @TODO bring back started check for a test that was just created
    // if (activeTest.test_section_status === 'STARTED') {
    const {tests, test: {test_id}, test} = this.props;
    const postBody = {
      student_test_id: test.student_test_id,
      student_test_section_id: activeSection.id,
      student_test_section_status: 'COMPLETED',
    };
    const res = await updateStudentTestSectionStatusApi(postBody);
    if (res && res.message) {
      return this.onUpdateTestSectionMsg(
        'Something went wrong completing this test section. Please try again later.'
      );
    }

    // Update current section as completed
    const currentTestSectionId = activeSection.test_section_id;
    const testIds = tests.map(test => test.id);
    const currentTestIndex = testIds.findIndex(testId => testId === test_id);
    const currentTestSections = tests[currentTestIndex].test_sections;
    const testSectionIds = currentTestSections.map(testSection => testSection.id);
    const currentTestSectionIndex = testSectionIds.findIndex(
      testSectionId => testSectionId === currentTestSectionId
    );
    const currentTestSection = currentTestSections[currentTestSectionIndex];
    switch (currentTestSection.name) {
      case 'Math (Calculator)':
        this.setState({
          mathCalcSectionCompleted: true,
        });
        break;
      case 'Writing':
        this.setState({
          writingSectionCompleted: true,
        });
        break;
      case 'Math (No Calculator)':
        this.setState({
          mathNoCalcSectionCompleted: true,
        });
        break;
      case 'Reading':
        this.setState({
          readingSectionCompleted: true,
        });
        break;
      default:
        this.setState({
          readingSectionCompleted: true,
        });
    }
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
        student_test_id: test.student_test_id,
        status: 'COMPLETED',
      };
      const {onOpentTestScore, onUpdateTestStatus} = this.props;
      const currentTestStatus =
        test.due_status === 'OVERDUE' ? 'overdueStudentTests' : 'assignedStudentTests';
      onUpdateTestStatus(postBody, currentTestStatus, test.student_id);
      // Delay set on saga before running onOpentTestScore()
      onOpentTestScore({...test, status: 'COMPLETED'});
    }
  };

  render() {
    const {test, user, onCloseEditTestModal} = this.props;
    const {activePage, enablePublish} = this.state;
    const {title, test_name} = test;
    const {studentInformation: {firstName, lastName}} = user;
    const completedTest = test.status === 'COMPLETED';
    return (
      <div className="wrapper">
        <div
          className="card-modal card-main card switcher-section grey lighten-5 modal"
          style={{
            zIndex: '1003',
            display: 'block',
            position: 'absolute',
            top: '0',
            minHeight: '100%',
            minWidth: '100%',
          }}
        >
          <div className="header-row card-panel light-blue lighten-1 white-text">
            <div className="card-panel-row row">
              <div className="icon-col col s1">
                <i className="icon-letter-a" />
              </div>
              <div className="col s9">
                <div className="card-panel-text center-align">
                  <div className="text-xlarge">
                    {title}
                  </div>
                  <div className="text-small">
                    Version: {test_name}
                  </div>
                </div>
              </div>
              <div className="col s1 right-align">
                <div className="close-block">
                  <a href="#" className="modal-close close">
                    <i className="icon-close-thin" onClick={onCloseEditTestModal} />
                  </a>
                </div>
              </div>
            </div>
            <div className="header-row-block card-panel-row row">
              <div className="col s3">&nbsp;</div>
              <div className="col s9 right-align">
                <div>
                  <span className="name">
                    {firstName} {lastName}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-header white">
            <div className="nav-additional">
              <ul className="menu-additional">
                {completedTest &&
                  <li className="col s3">
                    <a
                      className={activePage === 'scores' ? 'active' : ''}
                      onClick={() => enablePublish && this.onSetActivePage('scores')}
                      href="#"
                    >
                      Scores
                    </a>
                  </li>}
                <li className="col s3">
                  <a
                    className={activePage === 'answerSheet' ? 'active' : ''}
                    onClick={() => enablePublish && this.onSetActivePage('answerSheet')}
                    href="#"
                  >
                    Answer Sheet
                  </a>
                </li>
                {completedTest &&
                  <li className="col s3">
                    <a
                      className={activePage === 'StrengthsAndWeaknesses' ? 'active' : ''}
                      onClick={() =>
                        enablePublish && this.onSetActivePage('StrengthsAndWeaknesses')}
                      href="#"
                    >
                      Strengths &amp; Weaknesses
                    </a>
                  </li>}
                {completedTest &&
                  <li className="menu-special col s3">
                    <a href="#" onClick={() => enablePublish && this.generateScoreReportPdf()}>
                      Download Score Report
                      <i className="icon-download-file" />
                    </a>
                  </li>}
              </ul>
            </div>
          </div>
          <div className="sweet-loading">
            <BarLoader
              height={3}
              width={'100%'}
              color={'#36D7B7'}
              loading={!this.state.enablePublish}
            />
          </div>
          {!this.state.enablePublish &&
            <div style={{textAlign: 'center', padding: 10}}>
              please wait the test score report downloading...
            </div>}
          <div className="content-section">
            <div className="content-section-holder">
              {this.renderCurrentPage()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditTestModal.propTypes = {
  test: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onDeleteTest: PropTypes.func.isRequired,
  onSaveTestChanges: PropTypes.func.isRequired,
  onCloseEditTestModal: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sections: makeSelectStudentSections(),
  studentToken: makeSelectActiveStudentToken(),
  tests: makeSelectTests(),
  assignedTests: makeSelectAssignedStudentTests(),
  activeStudent: makeSelectActiveStudent(),
  activeTestScores: makeSelectActiveTestScores(),
  errorMessages: makeSelectErrorMessages(),
});
function mapDispatchToProps(dispatch) {
  return {
    onFetchStudentTestSections: postBody => dispatch(fetchStudentTestSections(postBody)),
    onSetAssignedTests: tests => dispatch(setStudentAssignedTests(tests)),
    onSetCompletedTests: tests => dispatch(setStudentCompletedTests(tests)),
    onUpdateTestStatus: (payload, currentStatus, studentId) =>
      dispatch(updateTestStatus(payload, currentStatus, studentId)),
    onSetScores: scores => dispatch(setActiveTestScores(scores)),
    onGetTestScores: postBody => dispatch(getTestScores(postBody)),
    onResetErrorMessage: errorName => dispatch(resetErrorMessage(errorName)),
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(EditTestModal);
