/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/no-did-mount-set-state */
import React from "react";
import PropTypes from "prop-types";
import TestVersionPage from "../TestVersionPage";
import DetailTestScorePage from "../../../DetailTestScorePage";
import DetailTestAnswerSheetComplete from "../../../DetailTestAnswerSheetComplete";
import pdfMakeReport from "./pdfMakeReport";

class EditTestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "scores",
      activeWritingPdf: false
    };
  }
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
    const targetImg = html2canvas(currentRef, defaultCanvasSetting).then(
      canvas => {
        const imgData = canvas.toDataURL("image/png", 1.0);
        return imgData;
      }
    );
    return targetImg;
  };

  getScoresImgData = async () => {
    const imgDataLists = [];
    const [scoresImages] = await Promise.all([
      this.getTargetImage(document.getElementById("scoresRef"))
    ]);
    imgDataLists.push({
      image: scoresImages,
      width: 550,
      margin: [0, 50, 0, 0],
      pageBreak: "after"
    });
    return imgDataLists;
  };

  getAnswerSheetImgData = async () => {
    const imgDataLists = [];
    const [readingScoreImg, readingTypeScoreImg] = await Promise.all([
      this.getTargetImage(document.getElementById("readingScoreRef")),
      this.getTargetImage(document.getElementById("readingTypeScoreRef"))
    ]);
    imgDataLists.push({
      image: readingScoreImg,
      width: 300,
      margin: [0, 20, 0, 0]
    });
    imgDataLists.push({
      image: readingTypeScoreImg,
      width: 550,
      pageBreak: "after"
    });
    imgDataLists.push({
      image: readingTypeScoreImg,
      width: 550,
      margin: [0, 20, 0, 0],
      pageBreak: "after"
    });
    return imgDataLists;
  };

  generateScoreReportPdf = async () => {
    let imgDataLists = [];
    const { activePage } = this.state;
    let getScoreImgPromise = new Promise(async (resolve, reject) => {
      if (activePage === "scores") {
        const scoresImages = await this.getScoresImgData();
        imgDataLists.push(scoresImages);
        resolve();
      } else {
        this.setState({ activePage: "scores" }, () => {
          setTimeout(async () => {
            const scoresImages = await this.getScoresImgData();
            imgDataLists.push(scoresImages);
            resolve();
          }, 1000);
        });
      }
    });

    getScoreImgPromise.then(() => {
      let getAnswerSheetImgPromise = new Promise(async (resolve, reject) => {
        this.setState({ activePage: "answerSheet" }, () => {
          setTimeout(async () => {
            const answerSheetImages = await this.getAnswerSheetImgData();
            imgDataLists.push(answerSheetImages);
            resolve();
          }, 1000);
        });
      });
      getAnswerSheetImgPromise.then(() => {
        this.setState({ activeWritingPdf: true }, () => {
          setTimeout(async () => {
            const [readingAnswerSheetImg] = await Promise.all([
              this.getTargetImage(
                document.getElementById("readingAnswerSheetRef")
              )
            ]);
            imgDataLists.push({
              image: readingAnswerSheetImg,
              width: 550,
              margin: [0, 20, 0, 0],
              pageBreak: "after"
            });
            pdfMakeReport(imgDataLists);
          }, 1000);
        });
      });
    });
  };

  renderCurrentPage = () => {
    const { activePage, activeWritingPdf } = this.state;
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
          <DetailTestScorePage test={test} />
        </div>
      );
    }
    if (activePage === "answerSheet") {
      return (
        <DetailTestAnswerSheetComplete
          testScoreDetails={test.testScoreDetails}
          activeWritingPdf={activeWritingPdf}
        />
      );
    }
    return null;
  };

  render() {
    const { test, user } = this.props;
    const { activePage } = this.state;
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
                  <div className="text-small">
                    Version: SAT Practice Test #{testVersion}
                  </div>
                </div>
              </div>
              <div className="col s1 right-align">
                <div className="row icons-row">&nbsp;</div>
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
                    onClick={() => this.onSetActivePage("scores")}
                    href="#"
                  >
                    Scores
                  </a>
                </li>
                <li className="col s3">
                  <a
                    className={activePage === "answerSheet" ? "active" : ""}
                    onClick={() => this.onSetActivePage("answerSheet")}
                    href="#"
                  >
                    Answer Sheet
                  </a>
                </li>
                <li className="col s3">
                  <a
                    className={
                      activePage === "StrengthsAndWeaknesses" ? "active" : ""
                    }
                    onClick={() =>
                      this.onSetActivePage("StrengthsAndWeaknesses")
                    }
                    href="#"
                  >
                    Strengths &amp; Weaknesses
                  </a>
                </li>
                <li className="col s3">
                  <a
                    className={activePage === "testVersion" ? "active" : ""}
                    onClick={() => this.onSetActivePage("testVersion")}
                    href="#"
                  >
                    Test Version
                  </a>
                </li>
                <li className="menu-special col s3">
                  <a href="#" onClick={() => this.generateScoreReportPdf()}>
                    Download Score Report
                    <i className="icon-download-file"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
  onSaveTestChanges: PropTypes.func.isRequired
};

export default EditTestModal;
