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
      userScoreRef: null,
      sectionScoreRef: null,
      crossTestScoreRef: null,
      subScoreRef: null,
      essayScoreRef: null
    };
  }
  componentDidMount = () => {
    this.setState({
      userScoreRef: this.userScoreRef,
      sectionScoreRef: this.sectionScoreRef,
      crossTestScoreRef: this.crossTestScoreRef,
      subScoreRef: this.subScoreRef,
      essayScoreRef: this.essayScoreRef
    });
  };
  onSetActivePage = activePage => this.setState({ activePage });

  getScoresImgData = () => {
    const imgDataLists = [];
    const html2canvas = require("html2canvas");

    const defaultCanvasSetting = {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "rgba(0,0,0,0)",
      removeContainer: true
    };
    return Promise.all([
      html2canvas(this.state.userScoreRef, defaultCanvasSetting).then(
        canvas => {
          const imgData = canvas.toDataURL("image/png", 1.0);
          const userScoreImg = {
            image: imgData,
            width: 270,
            margin: [0, 50, 0, 0]
          };
          return userScoreImg;
        }
      ),
      html2canvas(this.state.sectionScoreRef, defaultCanvasSetting).then(
        canvas => {
          const imgData = canvas.toDataURL("image/png", 1.0);
          const sectionScoreImg = {
            image: imgData,
            width: 270,
            margin: [0, 50, 0, 0]
          };
          return sectionScoreImg;
        }
      ),
      html2canvas(this.state.crossTestScoreRef, defaultCanvasSetting).then(
        canvas => {
          const imgData = canvas.toDataURL("image/png", 1.0);
          const crossScoreImg = {
            image: imgData,
            width: 350,
          };
          return crossScoreImg;
        }
      ),
      html2canvas(this.state.subScoreRef, defaultCanvasSetting).then(canvas => {
        const imgData = canvas.toDataURL("image/png", 1.0);
        const subScoreImg = {
          image: imgData,
          width: 350,
        };
        return subScoreImg;
      }),
      html2canvas(this.state.essayScoreRef, defaultCanvasSetting).then(
        canvas => {
          const imgData = canvas.toDataURL("image/png", 1.0);
          const essayScoreImg = {
            image: imgData,
            width: 180,
            rowSpan: 2,
            pageBreak: "after"
          };
          return essayScoreImg;
        }
      )
    ]).then(
      ([
        userScoreImg,
        sectionScoreImg,
        crossScoreImg,
        subScoreImg,
        essayScoreImg
      ]) => {
        imgDataLists.push({ columns: [userScoreImg, sectionScoreImg] });
        imgDataLists.push({
          layout: 'noBorders',
          table: {
            widths: [350, 200],
            body: [
              [crossScoreImg, essayScoreImg],
              [subScoreImg, {}]
            ]
          }
        });
        return imgDataLists;
      }
    );
  };

  generateScoreReportPdf = async () => {
    const html2canvas = require("html2canvas");
    const defaultCanvasSetting = {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "rgba(0,0,0,0)",
      removeContainer: true
    };
    const imgDataLists = await this.getScoresImgData();

    this.setState(
      {
        activePage: "answerSheet"
      },
      () => {
        return Promise.all([
          html2canvas(this.readingScoreRef, defaultCanvasSetting).then(
            canvas => {
              const imgData = canvas.toDataURL("image/png", 1.0);
              const readingScoreImg = {
                image: imgData,
                width: 300
              };
              return readingScoreImg;
            }
          ),
          html2canvas(this.readingTypeScoreRef, defaultCanvasSetting).then(
            canvas => {
              const imgData = canvas.toDataURL("image/png", 1.0);
              const readingTypeScoreImg = {
                image: imgData,
                width: 500
              };
              return readingTypeScoreImg;
            }
          )
          // html2canvas(this.readingAnswerSheetRef, defaultCanvasSetting).then(
          //   canvas => {
          //     const imgData = canvas.toDataURL("image/png", 1.0);
          //     const readingAnswerSheetImg = {
          //       image: imgData,
          //       width: 500
          //     };
          //     return readingAnswerSheetImg;
          //   }
          // )
        ])
          .then(([readingScoreImg, readingTypeScoreImg]) => {
            imgDataLists.push(readingScoreImg);
            imgDataLists.push(readingTypeScoreImg);
            // imgDataLists.push(readingAnswerSheetImg);
            return imgDataLists;
          })
          .then(() => {
            pdfMakeReport(imgDataLists);
          });
      }
    );
  };

  setUserScoreRef = target => {
    this.userScoreRef = target;
  };
  setSectionScoreRef = target => {
    this.sectionScoreRef = target;
  };
  setCrossTestScoreRef = target => {
    this.crossTestScoreRef = target;
  };
  setEssayScoreRef = target => {
    this.essayScoreRef = target;
  };

  setSubScoreRef = target => {
    this.subScoreRef = target;
  };
  setReadingScoreRef = target => {
    this.readingScoreRef = target;
  };
  setReadingTypeScoreRef = target => {
    this.readingTypeScoreRef = target;
  };
  setReadingAnswerSheetRef = target => {
    this.readingAnswerSheetRef = target;
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
            userScoreRef={this.setUserScoreRef}
            sectionScoreRef={this.setSectionScoreRef}
            crossTestScoreRef={this.setCrossTestScoreRef}
            essayScoreRef={this.setEssayScoreRef}
            subScoreRef={this.setSubScoreRef}
          />
        </div>
      );
    }
    if (activePage === "answerSheet") {
      return (
        <DetailTestAnswerSheetComplete
          testScoreDetails={test.testScoreDetails}
          readingScoreRef={this.setReadingScoreRef}
          readingTypeScoreRef={this.setReadingTypeScoreRef}
          readingAnswerSheetRef={this.setReadingAnswerSheetRef}
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
                    {/* <PDFDownloadLink
                    document={<PdfDocument />}
                    fileName="movielist.pdf"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? "Loading document..." : "Download now!"
                    } */}
                    {/* <Pdf targetRef={this.userScoreRef} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf> */}
                    Download Score Report
                    <i className="icon-download-file"></i>
                    {/* </PDFDownloadLink> */}
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
