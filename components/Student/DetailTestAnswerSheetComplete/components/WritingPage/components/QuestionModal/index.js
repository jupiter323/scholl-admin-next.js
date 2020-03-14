import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import Portal from "../../../../../../Portal";
import ClickOffComponentWrapper from "../../../../../../ClickOffComponentWrapper";

import { updateStudentTestQuestionFlagStatusApi } from "../../../../../index/api";
import { makeSelectActiveStudentTestId } from "../../../../../index/selectors";

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
  }

  onHandleQuestionFlagStatus = async (e, status) => {
    const {
      studentTestId,
      question: { test_problem_id }
    } = this.props;
    const postBody = { student_test_id: studentTestId, flag_id: test_problem_id, status: status };
    await updateStudentTestQuestionFlagStatusApi(postBody);
  };

  render() {
    const { open, onCloseQuestionModal, question } = this.props;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={onCloseQuestionModal}>
              <div
                id="modal_video001"
                className="modal modal-answer-single"
                style={{ minWidth: "500px" }}
              >
                <div className="modal-header row mb-0">
                  <div className="col s10">
                    <span className="subtitle">Reading</span>
                    <span className="title">Problem {question.question_number}</span>
                  </div>
                  <div className="col s2 right-align">
                    <a href="#!" className="close modal-close" onClick={onCloseQuestionModal}>
                      <i className="icon-close-thin"></i>
                    </a>
                  </div>
                </div>
                <div className="modal-content">
                  <div className="card-panel">
                    <div className="panel-block">
                      <strong className="subtitle">Review with My Instructor</strong>
                      <form action="#" className="answer-form review-form">
                        <ul
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            margin: "0 -10px -7px"
                          }}
                        >
                          <li>
                            <label>
                              <input
                                className="with-gap"
                                name="review_radio"
                                type="radio"
                                onClick={e => this.onHandleQuestionFlagStatus(e, "UN_FLAGGED ")}
                              />
                              <span>Nope. Got it.</span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                className="with-gap"
                                name="review_radio"
                                type="radio"
                                onClick={e => this.onHandleQuestionFlagStatus(e, "FLAGGED")}
                              />
                              <span>
                                <i className="icon-flag red-text text-darken-3" />
                                Flag for Review
                              </span>
                            </label>
                          </li>
                          <li>
                            <label>
                              <input
                                className="with-gap"
                                name="review_radio"
                                type="radio"
                                onClick={e => this.onHandleQuestionFlagStatus(e, "REVIEWED")}
                              />
                              <span>
                                <i className="icon-flag grey-text text-lighten-1" />
                                Mark Reviewed
                              </span>
                            </label>
                          </li>
                        </ul>
                      </form>
                    </div>
                    <div className="panel-block">
                      <ul className="informers-list">
                        <li className="informer-block">
                          <div
                            className="informer-box"
                            style={{ width: "10%", backgroundColor: "#e5e5e5" }}
                          >
                            <b className="informer-circle" style={{ backgroundColor: "#e5e5e5" }}>
                              A
                            </b>
                          </div>
                          <b className="informer-value">10%</b>
                        </li>
                        <li className="informer-block">
                          <div
                            className="informer-box"
                            style={{ width: "16%", backgroundColor: "#db1d41" }}
                          >
                            <b
                              className="informer-circle"
                              style={{ backgroundColor: "#db1d41", color: "#fff" }}
                            >
                              B
                            </b>
                          </div>
                          <b className="informer-value">16%</b>
                        </li>
                        <li className="informer-block">
                          <div
                            className="informer-box"
                            style={{ width: "37%", backgroundColor: "#d3efde" }}
                          >
                            <b
                              className="informer-circle"
                              style={{ backgroundColor: "#32955c", color: "#fff" }}
                            >
                              C
                            </b>
                          </div>
                          <b className="informer-value">37%</b>
                        </li>
                        <li className="informer-block">
                          <div
                            className="informer-box"
                            style={{ width: "8%", backgroundColor: "#e5e5e5" }}
                          >
                            <b className="informer-circle" style={{ backgroundColor: "#e5e5e5" }}>
                              D
                            </b>
                          </div>
                          <b className="informer-value">8%</b>
                        </li>
                      </ul>
                    </div>
                    <div className="panel-block">
                      <strong className="subtitle">Student’s Notes:</strong>
                      <div
                        className="text-content custom-form"
                        style={{ borderTop: "1px solid gray" }}
                      >
                        <div className="jcf-scrollable height-22" style={{ boxShadow: "none" }}>
                          <div
                            className="text-holder"
                            style={{ height: "100%", overflowY: "scroll" }}
                          >
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                              nonummy nibh euismod tincidunt ut laoreet dolore? tincidunt ut laoreet
                              dolore? tincidunt ut laoreet dolore? re? tincidunt ut laoreet.
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                              nonummy nibh euismod tincidunt ut laoreet do?
                            </p>
                            <p>Hi Student, </p>
                            <p>
                              I’m adding to your notes here.Maybe a suggestion or an answer to your
                              question.
                            </p>
                            <p>-Tutor</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ClickOffComponentWrapper>
          </div>
        )}
        <style jsx>
          {`
            .overlay {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 1999;
            }
            #modal_video001 {
              z-index: 2003;
              opacity: 1;
              transform: scaleX(1) scaleY(1);
            }
            .modal {
              display: block;
              background-color: white;
              position: fixed;
              top: 10%;
              left: 10%;
              box-shadow: none;
            }
            .modal-answer-single {
              opacity: 1;
              visibility: visible;
              display: block !important;
              top: 0 !important;
              left: auto;
              right: 0;
              height: 100vh;
              max-weight: none;
              margin: 0 0 0 auto;
              border-radius: 0;
              width: 100%;
              transform-origin: 100% 0;
            }
            .modal-footer {
              background-color: white;
            }
            .modal-header {
              background: #ec693d
                linear-gradient(to right, #ec693d 0%, #649aab 61%, #30add6 87%, #18b5e9 100%);
              color: #fff;
              padding: 7px 10px 5px;
              min-height: 50px;
              display: flex;
            }
          `}
        </style>
      </Portal>
    );
  }
}

QuestionModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onCloseQuestionModal: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  studentTestId: makeSelectActiveStudentTestId
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(QuestionModal);
