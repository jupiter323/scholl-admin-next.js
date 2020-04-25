import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import Portal from "../../../../common/Portal";
import ClickOffComponentWrapper from "../../../../common/ClickOffComponentWrapper";

import { addStudentLessonProblemFlagApi } from "../../../index/api";
import { makeSelectActiveLesson } from "../../../index/selectors";
import RadialBar from "../../../../common/RadialBar";
import { ConvertSecondsToMinutesSeconds } from '../../../../utils/ConvertSecondsToMinutesSeconds';
import VideoPlayer from '../VideoPlayer';
import {
  addVideoWatchedTime
} from '../../../index/api';
class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'UN_FLAGGED',
      originalTestProblemId: '',
      videoWatchedTime: 0,
      intervalId: null,
      watchedVideo: false,
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const { question: { test_problem_id, video_watched_seconds } } = nextProps;
    const { originalTestProblemId } = this.state;
    if (test_problem_id !== originalTestProblemId && this.props.question.flag) {
      const { question: { flag: { status } } } = this.props;
      this.setState({
        status: status
      })
    }
    if (video_watched_seconds) {
      this.setState({
        videoWatchedTime: video_watched_seconds
      })
    }
  }

  onHandleQuestionFlagStatus = async (_e, status) => {
    const {
      activeLesson: { id: lessonId },
      onChangeFlagState
    } = this.props;
    onChangeFlagState(status)
    const { question: { problem: { id: problemId } } } = this.props;
    const postBody = { problem_id: problemId, student_lesson_id: lessonId, flag_status: 'FLAGGED' };
    await addStudentLessonProblemFlagApi(postBody);

  };

  recordVideoWatchedTime = () => {
    this.setState({
      videoWatchedTime: this.state.videoWatchedTime + 1,
    })
  }

  onHandleWatchedVideo = (status) => {
    if (status === 'STARTED') {
      const intervalId = setInterval(this.recordVideoWatchedTime, 1000);
      this.setState({
        watchedVideo: true,
        intervalId
      })
    } else {
      clearInterval(this.state.intervalId);
    }
  }

  onCloseQuestionModal = async () => {
    const { onCloseQuestionModal, question: { problem: { id }, }, activeLesson: { id: lessonId }, } = this.props;
    if (this.state.watchedVideo) {
      clearInterval(this.state.intervalId);
      const { videoWatchedTime } = this.state;
      const postBody = {
        problem_id: id,
        student_lesson_id: lessonId,
        watched_seconds: videoWatchedTime
      }
      await addVideoWatchedTime(postBody);
    }
    onCloseQuestionModal();
  }


  render() {
    const { open, question: { problem: { reference_number, video: { url: videoURL, duration } } } } = this.props;
    const { videoWatchedTime } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={this.onCloseQuestionModal}>
              <div id="modal_video001" className="modal modal-answer-single">
                <div className="modal-header row mb-0">
                  <div className="col s10">
                    <span className="subtitle">Reading</span>
                    <span className="title">Problem {reference_number}</span>
                  </div>
                  <div className="col s2 right-align">
                    <a href="#!" className="close modal-close" onClick={this.onCloseQuestionModal}>
                      <i className="icon-close-thin"></i>
                    </a>
                  </div>
                </div>
                <div className="modal-content">
                  <div className="card-panel">  <div className="panel-block">
                    <div className="embed-responsive">
                      <VideoPlayer url={videoURL} onHandleWatchedVideo={this.onHandleWatchedVideo} />
                    </div>
                  </div></div>
                  <div className="card-panel">
                    <div className="panel-block">
                      <strong className="subtitle">Review with My Instructor</strong>
                      <form action="#" className="answer-form review-form">
                        <ul>
                          <li>
                            <label>
                              <input
                                className="with-gap"
                                name="review_radio"
                                type="radio"
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
                        </ul>
                      </form>
                    </div>
                    <div className="panel-block" style={{ width: '60%', float: 'left' }}>
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
                    <div className="col panel-block">
                      <div className="chart-block chart-block-test">
                        <RadialBar
                          svgWidth={150}
                          svgHeight={150}
                          strokeWidth={10}
                          maxValue={duration}
                          currentValue={20}
                          strokeColor="#00BBF7"
                        />
                        <div className="chart-text">
                          <span className="value" style={{ fontSize: '32px', color: 'rgb(0, 187, 247)' }}>{ConvertSecondsToMinutesSeconds(videoWatchedTime)}</span>
                          <span className="title" style={{ fontSize: '14px' }}>out of</span>
                          <span className="description" style={{ fontSize: '32px' }}>
                            {ConvertSecondsToMinutesSeconds(duration)}
                          </span>
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
  activeLesson: makeSelectActiveLesson(),
})

export default connect(mapStateToProps, null)(QuestionModal);
