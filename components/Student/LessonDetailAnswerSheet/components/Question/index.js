import React from 'react';
import PropTypes from 'prop-types';

import { difficultyMap, getAnswerColor, getCompleteAnswerColor } from '../../utils';

class Question extends React.Component {
  mapAnswerChoices = () => {
    const { question: { answerType, answerChoices, studentAnswer }, answerSheetComplete } = this.props;
    if (answerSheetComplete) {
      if (answerType === 'letter') {
        return (
          <ul className="answer-list">
            {answerChoices.map(answer => (
              <li key={answer.answerLetter}>
                <span
                  className="badge-circle badge-circle-bordered"
                  style={getCompleteAnswerColor('letter', answer, studentAnswer)}
                >
                  {answer.answerLetter}
                </span>
              </li>
            ))}
          </ul>
        );
      }
      return (
        <ul className="answer-list">
          {answerChoices.map(answer => (
            <li key={answer.answerValue}>
              <span
                className="badge badge-rounded badge-rounded-bordered"
                style={getCompleteAnswerColor('value', answer, studentAnswer)}
              >
                {answer.answerValue}
              </span>
            </li>
          ))}
        </ul>
      )
    }
    if (answerType === 'letter') {
      return (
        <ul className="answer-list">
          {answerChoices.map(answer => (
            <li key={answer.answerLetter}>
              <span
                className="badge-circle badge-circle-bordered"
                style={getAnswerColor(answer)}
              >
                {answer.answerLetter}
              </span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <ul className="answer-list">
        {answerChoices.map(answer => (
          <li key={answer.answerValue}>
            <span
              className="badge badge-rounded badge-rounded-bordered"
              style={getAnswerColor(answer)}
            >
              {answer.answerValue}
            </span>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const { onOpenQuestionModal, question, answerSheetComplete } = this.props;
    const { difficulty, hasVideo, flagged, studentNotes } = question;
    return (
      <li className="answers-list-holder">
        <div className="answer-row row mb-0">
          <div className="col col-120">
            {this.mapAnswerChoices()}
          </div>
          <div className="col col-30">
            <span className="status-info">{difficultyMap[difficulty]}</span>
          </div>
          {hasVideo && (
            <div className="col col-43">
              <span className="play-progress" data-video-id="video001">
                <span className="play"></span>
                <svg viewBox="0 0 50 50" width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className="circle-static" cx="25.8" cy="24.3" r="22.8" style={{ strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                  <circle className="circle-progress" cx="25.8" cy="24.3" r="22.8" style={{ stroke: 'none', strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                </svg>
              </span>
            </div>
          )}
          <div className="col col-auto">
            <If condition={answerSheetComplete && flagged}>
              <span className="status-answer" style={{ color: '#c0272d' }}>
                <i className="icon-flag"></i><b className="status-text">Review</b>
              </span>
            </If>
          </div>
          <div className="dropdown-block col col-35">
            <a className='modal-trigger' onClick={() => onOpenQuestionModal(question)} href="#"><i className="material-icons dots-icon">more_vert</i></a>
          </div>
        </div>
        <If condition={answerSheetComplete && studentNotes}>
          <div className="comment-block">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?</p>
          </div>
        </If>
      </li>
    );
  }
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onOpenQuestionModal: PropTypes.func.isRequired,
  answerSheetComplete: PropTypes.bool.isRequired,
};

export default Question;
