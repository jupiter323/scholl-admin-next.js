/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/no-did-mount-set-state */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import TestVersionPage from "../TestVersionPage";
import DetailTestScorePage from "../../../DetailTestScorePage";
import DetailTestAnswerSheetComplete from "../../../DetailTestAnswerSheetComplete";
import StrengthsAndWeaknesses from "../../../DetailTestStrengthsAndWeakesses";
import pdfMakeReport from "./pdfMakeReport";

import { makeSelectStudentSections } from "../../../index/selectors";
import { fetchStudentTestSections } from "../../../index/actions";
class EditTestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "scores",
      scoresImages: null,
      analysisBarImages: [],
      analysisCicleImages: [],
      answerSheetImages: [],
<<<<<<< HEAD
      enablePublish: true,
=======
      enablePublish:true,
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
      userInfo: {
        version: "Version: SAT Practice Test #1",
        target: "Score Report",
        test_date: "September 28th, 2018",
        name: "Arnold Studently",
        test_type: "Practice Test",
        order: "3rd"
      },
      subjects: [
        "Practice Test Scores",
        "Reading Analysis",
        "Reading Analysis (cont’d)",
        "Reading Answer Sheet",
        "Writing Analysis",
        "Writing Analysis (cont’d)",
        "Writing Answer Sheet",
        "Math Analysis",
        "Math Analysis (cont'd)",
        "Math Answer Sheet(no calc)",
        "Math Answer Sheet(calculator)"
      ],
<<<<<<< HEAD
      adminInfo: "Study Hut Tutoring | www.studyhut.com | (310) 555-1212 | info@studyhut.com",
      headerGradient: ["#ec693d 0%", "#649aab 61%", "#30add6 87%", "#18b5e9 100%"]
    };
  }

  componentDidMount() {
    this.props.onRef(this);
    const {
      onFetchStudentTestSections,
      sections,
      test: { student_test_id }
    } = this.props;
    if (sections.length === 0) {
      onFetchStudentTestSections(student_test_id);
    }
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

=======
      adminInfo:
        "Study Hut Tutoring | www.studyhut.com | (310) 555-1212 | info@studyhut.com",
      headerGradient: [
        "#ec693d 0%",
        "#649aab 61%",
        "#30add6 87%",
        "#18b5e9 100%"
      ]
    };
  }

>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
  getBase64ImageFromURL = url => {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        resolve(dataURL);
      };
      img.onerror = error => {
        reject(error);
      };
      img.src = url;
    });
  };

  onSetActivePage = activePage => {
    this.setState({
      activePage
    });
  };

  getTargetImage = currentRef => {
    const html2canvas = require("html2canvas");
    const defaultCanvasSetting = {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "rgba(0,0,0,0)",
      removeContainer: true
    };
<<<<<<< HEAD
    const targetImg = html2canvas(currentRef, defaultCanvasSetting).then(canvas => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      return imgData;
    });
=======
    const targetImg = html2canvas(currentRef, defaultCanvasSetting).then(
      canvas => {
        const imgData = canvas.toDataURL("image/png", 1.0);
        return imgData;
      }
    );
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
    return targetImg;
  };

  getData = item => {
    return new Promise(async resolve => {
      const currentChild = item.child;
      this.setState(
        {
          activePage: item.state
        },
        async () => {
          const data = await this[currentChild].getComponentImages();
          switch (item.state) {
            case "StrengthsAndWeaknesses":
              this.setState({
                analysisCicleImages: data.circleImageList,
                analysisBarImages: data.barImageList
              });
              break;
            case "answerSheet":
              this.setState({
                answerSheetImages: data
              });
              break;
            case "scores":
              this.setState({
                scoresImages: data
              });
              break;
          }
          resolve();
        }
      );
    });
  };

  generateScoreReportPdf = async () => {
    this.setState({
<<<<<<< HEAD
      enablePublish: false
    });
=======
      enablePublish:false,
    })
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
    let imgDataLists = [];
    const { userInfo, subjects, adminInfo, headerGradient } = this.state;
    const coverBackgroundImg = "./static/images/sunset.jpg";
    const logoImg = "./static/images/study-hut-logo.png";
    const backgroundImage = await this.getBase64ImageFromURL(
      coverBackgroundImg + "?auto=compress&cs=tinysrgb&dpr=1&w=500"
    );
    const logo = await this.getBase64ImageFromURL(
      logoImg + "?auto=compress&cs=tinysrgb&dpr=1&w=500"
    );
    const pageStates = [
      {
        state: "scores",
        child: "ScoresChild"
      },
      {
        state: "StrengthsAndWeaknesses",
        child: "AnalysisChild"
      },
      {
        state: "answerSheet",
        child: "AnswerSheetChild"
      }
    ];
    const getImagesPromise = pageStates.reduce((accumulatorPromise, item) => {
      return accumulatorPromise
        .then(async () => {
          const images = await this.getData(item);
        })
        .catch(console.error);
    }, Promise.resolve());

    getImagesPromise.then(() => {
      this.setState({
<<<<<<< HEAD
        enablePublish: true
      });
=======
        enablePublish:true
      })
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
      const {
        scoresImages,
        analysisCicleImages,
        analysisBarImages,
        answerSheetImages
      } = this.state;
      imgDataLists.push({
        image: scoresImages,
        width: 550,
        margin: [0, 20, 0, 0],
        pageBreak: "after"
      });
      for (let i = 0; i < 3; i++) {
        imgDataLists.push({
          image: analysisCicleImages[i],
          width: 300,
          margin: [0, 20, 0, 0]
        });
        imgDataLists.push({
          image: analysisBarImages[i],
          width: 550,
          margin: [0, 20, 0, 0],
          pageBreak: "after"
        });
        imgDataLists.push({
          image: analysisBarImages[i],
          width: 550,
          margin: [0, 20, 0, 0],
          pageBreak: "after"
        });
        imgDataLists.push({
          image: answerSheetImages[i],
          width: 550,
          margin: [0, 20, 0, 0],
          pageBreak: "after"
        });
      }
      imgDataLists.push({
        image: answerSheetImages[3],
        width: 550,
        margin: [0, 20, 0, 0]
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
    });
  };

  renderCurrentPage = () => {
    const { activePage } = this.state;
    const { test, user, onDeleteTest, onSaveTestChanges } = this.props;
    if (activePage === "testVersion") {
      return (
        <TestVersionPage
          test={test}
          user={user}
          onDeleteTest={onDeleteTest}
          onSaveTestChanges={onSaveTestChanges}
        />
      );
    }
    if (activePage === "scores") {
      return (
        <div id="wrapper">
          <DetailTestScorePage
            test={test}
            getTargetImage={this.getTargetImage}
            onRef={ref => (this.ScoresChild = ref)}
          />
        </div>
      );
    }
    if (activePage === "answerSheet") {
      return (
        <DetailTestAnswerSheetComplete
          testScoreDetails={test.testScoreDetails}
          getTargetImage={this.getTargetImage}
          onRef={ref => (this.AnswerSheetChild = ref)}
        />
      );
    }

    if (activePage === "StrengthsAndWeaknesses") {
      return (
        <StrengthsAndWeaknesses
          testScoreDetails={test.testScoreDetails}
          getTargetImage={this.getTargetImage}
          onRef={ref => (this.AnalysisChild = ref)}
        />
      );
    }
    return null;
  };

  render() {
<<<<<<< HEAD
    const { test, user, onCloseEditTestModal } = this.props;
    const { activePage, enablePublish } = this.state;
=======
    const { test, user } = this.props;
    const { activePage,enablePublish } = this.state;
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
    const { title, version: testVersion } = test;
    const {
      studentInformation: { firstName, lastName }
    } = user;
    return (
      <div className="wrapper">
        <div
          className="card-modal card-main card switcher-section grey lighten-5 modal"
          style={{
            zIndex: "1003",
            display: "block",
            position: "absolute",
            top: "0",
            minHeight: "100%",
            minWidth: "100%"
          }}
        >
          <div className="header-row card-panel light-blue lighten-1 white-text">
            <div className="card-panel-row row">
              <div className="icon-col col s1">
                <i className="icon-letter-a"></i>
              </div>
              <div className="col s9">
                <div className="card-panel-text center-align">
                  <div className="text-xlarge">{title}</div>
                  <div className="text-small">Version: SAT Practice Test #{testVersion}</div>
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
                <li className="col s3">
                  <a
                    className={activePage === "scores" ? "active" : ""}
                    onClick={() => enablePublish && this.onSetActivePage("scores")}
                    href="#"
                  >
                    Scores
                  </a>
                </li>
                <li className="col s3">
                  <a
                    className={activePage === "answerSheet" ? "active" : ""}
                    onClick={() => enablePublish && this.onSetActivePage("answerSheet")}
                    href="#"
                  >
                    Answer Sheet
                  </a>
                </li>
                <li className="col s3">
                  <a
<<<<<<< HEAD
                    className={activePage === "StrengthsAndWeaknesses" ? "active" : ""}
                    onClick={() => enablePublish && this.onSetActivePage("StrengthsAndWeaknesses")}
=======
                    className={
                      activePage === "StrengthsAndWeaknesses" ? "active" : ""
                    }
                    onClick={() =>
                      enablePublish && this.onSetActivePage("StrengthsAndWeaknesses")
                    }
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
                    href="#"
                  >
                    Strengths &amp; Weaknesses
                  </a>
                </li>
                {/* <li className="col s3">
                  <a
                    className={activePage === "testVersion" ? "active" : ""}
                    onClick={() => this.onSetActivePage("testVersion")}
                    href="#"
                  >
                    Test Version
                  </a>
                </li> */}
                <li className="menu-special col s3">
                  <a href="#" onClick={() => enablePublish && this.generateScoreReportPdf()}>
                    Download Score Report
                    <i className="icon-download-file"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content-section">
            <div className="content-section-holder">{this.renderCurrentPage()}</div>
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
  onCloseEditTestModal: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  sections: makeSelectStudentSections()
});
function mapDispatchToProps(dispatch) {
  return {
    onFetchStudentTestSections: studentTestId => dispatch(fetchStudentTestSections(studentTestId))
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(EditTestModal);
