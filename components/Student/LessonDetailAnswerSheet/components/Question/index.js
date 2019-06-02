import React from 'react';
import PropTypes from 'prop-types';

const difficultyMap = {
  'Easy': 'E',
  'Medium': 'M',
  'Difficult': 'D',
};

// correct answer
// selected answer

const getAnswerColor = (answer) => {
  if (answer.correctAnswer) {
    return (
      {
      color: '#3eb777', borderColor: '#32955c',
      }
    );
  }
  return null;
}

class Question extends React.Component {

  mapAnswerChoices = () => {
    const { question: { answerType, answerChoices } } = this.props;
    if (answerType === 'letter') {
      return (
        <ul className="answer-list">
          {answerChoices.map(answer => (
            <li key={answer.answerLetter}>
              <span className="badge-circle badge-circle-bordered" style={getAnswerColor(answer)}>{answer.answerLetter}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <ul className="answer-list">
        {answerChoices.map(answer => (
          <li key={answer.answerValue}>
            <span className="badge badge-rounded badge-rounded-bordered" style={getAnswerColor(answer)}>{answer.answerValue}</span>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const { onOpenQuestionModal, question } = this.props;
    return (
      <li className="answers-list-holder">
        <div className="answer-row row mb-0">
          <div className="col col-120">
            {this.mapAnswerChoices()}
          </div>
          <div className="col col-30">
            <span className="status-info">{difficultyMap[question.difficulty]}</span>
          </div>
          {question.hasVideo && (
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
            <span className="status-answer invisible" style={{ color: '#c0272d' }}>
              <i className="icon-flag"></i><b className="status-text">Review</b>
            </span>
          </div>
          <div className="dropdown-block col col-35">
            <a className='modal-trigger' onClick={() => onOpenQuestionModal(question)} href="#"><i className="material-icons dots-icon">more_vert</i></a>
          </div>
        </div>
      </li>
    );
  }
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onOpenQuestionModal: PropTypes.func.isRequired,
};

export default Question;
