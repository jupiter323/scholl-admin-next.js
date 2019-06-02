/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../../../../Portal';
import ClickOffComponentWrapper from '../../../../ClickOffComponentWrapper';

import { getAnswerChoiceColors, getAnswerPercentageBreakdownColors } from '../../utils';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewedWithStudent: false,
    }
  }

  toggleReviewedStatus = () => this.setState(({ reviewedWithStudent }) => ({ reviewedWithStudent: !reviewedWithStudent }))

  mapAnswerChoices = () => {
    const { question: { answerChoices, studentAnswer } } = this.props;
    if (answerChoices[0].answerLetter) {
      return answerChoices.map(answer => (
        <li className="answer-block">
          <div className="answer-box" style={getAnswerChoiceColors(answer.answerLetter, answer.correctAnswer, studentAnswer)}>
            <b className="answer-circle">{answer.answerLetter}.</b>
            <span className="answer-text">{answer.answerText}</span>
          </div>
        </li>
      ))
    }
    return answerChoices.map(answer => (
      <li className="answer-block">
        <div className="answer-box" style={getAnswerChoiceColors(answer.answerValue, answer.correctAnswer, studentAnswer)}>
          <span className="answer-text" style={{ marginLeft: '30px' }}>{answer.answerValue}</span>
        </div>
      </li>
    ))
  }

  renderAnswerPercentageBreakdown = () => {
    const { question: { answerChoices, studentAnswer } } = this.props;
    if (answerChoices[0].answerLetter) {
      return answerChoices.map(answer => (
        <li className="informer-block">
          <div className="informer-box" style={getAnswerPercentageBreakdownColors('half', answer.answerLetter, answer.answerPercentage, answer.correctAnswer, studentAnswer)}>
            <b className="informer-circle" style={getAnswerPercentageBreakdownColors('full', answer.answerLetter, answer.answerPercentage, answer.correctAnswer, studentAnswer)}>{answer.answerLetter}</b>
          </div>
          <b className="informer-value">{answer.answerPercentage}%</b>
        </li>
      ))
    }
    return answerChoices.map(answer => (
      <li className="informer-block">
        <div className="informer-box" style={getAnswerPercentageBreakdownColors('half', answer.answerValue, answer.answerPercentage, answer.correctAnswer, studentAnswer)}>
          <b className="informer-circle" style={getAnswerPercentageBreakdownColors('full', answer.answerValue, answer.answerPercentage, answer.correctAnswer, studentAnswer)}>{answer.answerValue}</b>
        </div>
        <b className="informer-value">{answer.answerPercentage}%</b>
      </li>
    ))
  }

  render() {
    const { open, onCloseModal, question = {} } = this.props;
    const { reviewedWithStudent } = this.state;
    const { topic, questionType, question: questionText, hasVideo, flagged, questionNumber, videoSource, studentNotes, passage, videoThumbnail } = question;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={onCloseModal}>
              <div id="modal_video001" className="modal modal-answer">
                <div className="modal-header row mb-0">
                  <div className="col s10">
                    <span className="subtitle">{topic}</span>
                    <span className="title">{questionType} Problem #{questionNumber}</span>
                  </div>
                  <div className="col s2 right-align">
                    <a href="#" className="close modal-close"><i className="icon-close-thin"></i></a>
                  </div>
                </div>
                <div className="modal-content">
                  <div className="d-flex row mb-0">
                    <div className="col s12 l6 order-lg-2">
                      {hasVideo && (
                        <div className="card-panel">
                          <div className="video-frame">
                            <div className="embed-responsive embed-responsive-16by9">
                              <video id="video001" className="in-modal embed-responsive-item" data-current-time="0" poster={videoThumbnail} preload="metadata" controls playsinline>
                              <source type="video/mp4" src={videoSource} />
                              </video>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="card-panel">
                        <div className="panel-block">
                          <div className="d-flex align-items-center row mb-0">
                            {flagged && (
                              <div className="col">
                                <span className="status-answer" style={{ color: '#c0272d' }}>
                                  <i className="icon-flag"></i><b className="status-text">Flagged</b>
                                </span>
                              </div>
                            )}
                            <div className="col">
                              <label>
                                <input
                                  type="checkbox"
                                  className="filled-in"
                                  checked={reviewedWithStudent}
                                  onChange={this.toggleReviewedStatus}
                                />
                                <span><b>Reviewed with Student</b></span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="panel-block">
                          <ul className="informers-list">
                            {this.renderAnswerPercentageBreakdown()}
                          </ul>
                        </div>
                        <div className="panel-block">
                          <strong className="subtitle">Student’s Notes:</strong>
                          <div className="text-content custom-form">
                            <div className="jcf-scrollable height-22">
                              <div className="text-holder">
                                {studentNotes}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 l6 order-lg-1">
                      <div className="card-panel">
                        <div className="text-content custom-form">
                          <div className="jcf-scrollable height-45">
                            <div className="text-holder">
                              {passage}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-panel">
                        <strong className="h3 subtitle">{questionText}</strong>
                        <ul className="answer-full-list">
                          {this.mapAnswerChoices()}
                        </ul>
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
              z-index: 9999;
            }
            .modal-answer {
              opacity: 1;
              visibility: visible;
            }
          `}
        </style>
      </Portal>
    );
  }
}

QuestionModal.propTypes = {
  open: PropTypes.bool.isRequired,
  question: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
}

export default QuestionModal;
