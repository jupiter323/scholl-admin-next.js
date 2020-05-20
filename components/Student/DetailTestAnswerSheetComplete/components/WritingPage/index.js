import React from 'react';
import PropTypes from 'prop-types';
import AnswerRow from './components/AnswerRow';

class WritingPage extends React.Component {
  mapAnswers = () => {
    const {testSection: {problems: problemsSection}, testSection} = this.props;
    return (
      problemsSection.problems &&
      problemsSection.problems.map(problem =>
        <AnswerRow key={problem.test_problem_id} problem={problem} testSection={testSection} onAddStudentAnswerToTest={this.props.onAddStudentAnswerToTest}/>
      )
    );
  };

  render() {
    return (
      <div className="slide" id="writingAnswerSheetImg">
        <div className="row" style={{columns: '3 auto', marginLeft: '10px', marginRight: '10px'}}>
          <ol className="answers-list">
            {this.mapAnswers()}
          </ol>
        </div>
      </div>
    );
  }
}

WritingPage.propTypes = {
  testSection: PropTypes.object,
};

export default WritingPage;
