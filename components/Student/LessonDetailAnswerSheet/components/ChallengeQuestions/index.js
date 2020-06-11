import React from 'react';
import PropTypes from 'prop-types';
import Question from '../Question';

class ChallengeQuestions extends React.Component {
  mapQuestions = () => {
    if (this.props.questions.length !== 0) {
      return this.props.questions.map(problem => (
        <Question
          key={problem.id}
          problem={problem}
          updateProblemList={this.props.updateProblemList}
          problemType={this.props.problemType}
        />
      ));
    }
  }

  render() {
    return (
      <div className="col s12 l12">
        <div className="card-block">
          <h2>Challenge</h2>
          <div className="card-answer card">
            <div className="card-content">
              <ol className="answers-list">
                {this.mapQuestions()}
              </ol>
              {this.props.submitLessonButton('challenge')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChallengeQuestions.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default ChallengeQuestions;
