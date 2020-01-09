import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question';

class PracticeQuestions extends React.Component {
  mapQuestions = () => this.props.questions.map(question => (
    <Question
      key={question.id}
      question={question}
      questionDropdownIndex={this.props.questionDropdownIndex}
      questionDropdownOpen={this.props.questionDropdownOpen}
      answerSheetComplete={this.props.answerSheetComplete}
      onOpenQuestionModal={this.props.onOpenQuestionModal}
      handleQuestionDropdownClick={this.props.handleQuestionDropdownClick}
    />
  ))

  render() {
    return (
      <div className="col s12 l6">
        <div className="card-block">
          <h2>Practice</h2>
          <div className="card">
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

PracticeQuestions.propTypes = {
  questions: PropTypes.array.isRequired,
  questionDropdownIndex: PropTypes.number,
  answerSheetComplete: PropTypes.bool.isRequired,
  onOpenQuestionModal: PropTypes.func.isRequired,
  questionDropdownOpen: PropTypes.bool.isRequired,
  handleQuestionDropdownClick: PropTypes.func.isRequired,
};

export default PracticeQuestions;
