import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question';

class ChallengeQuestions extends React.Component {
  mapQuestions = () => this.props.questions.map(question => (
    <Question
      key={question.id}
      question={question}
      answerSheetComplete={this.props.answerSheetComplete}
      onOpenQuestionModal={this.props.onOpenQuestionModal}
    />
  ))

  render() {
    return (
      <div className="col s12 l6">
        <div className="card-block">
          <h2>Challenge</h2>
          <div className="card-answer card">
            <div className="card-content">
              <ol className="answers-list">
                {this.mapQuestions()}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChallengeQuestions.propTypes = {
  questions: PropTypes.array.isRequired,
  answerSheetComplete: PropTypes.string.isRequired,
  onOpenQuestionModal: PropTypes.func.isRequired,
};

export default ChallengeQuestions;
