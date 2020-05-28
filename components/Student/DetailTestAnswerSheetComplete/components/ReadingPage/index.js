import React from 'react';
import PropTypes from 'prop-types';
import AnswerRow from '../WritingPage/components/AnswerRow';

class ReadingPage extends React.Component {
  mapAnswers = () => {
    console.log('log: testSection', testSection);
    const { testSection: { problems: problemsSection }, testSection } = this.props;
    return (
      problemsSection.problems &&
      problemsSection.problems.map(problem =>
        <AnswerRow key={problem.test_problem_id} testSection={testSection} onAddStudentAnswerToTest={this.props.onAddStudentAnswerToTest} problem={problem} updateProblemView={this.props.updateProblemView} />,
      )
    );
  };

  render() {
    return (
      <div className="slide" id="readingAnswerSheetImg">
        <div className="row" style={{ columns: '3 auto', marginLeft: '10px', marginRight: '10px' }}>
          <ol className="answers-list" style={{ marginBottom: '40px' }}>
            {this.mapAnswers()}
          </ol>
        </div>
      </div>
    );
  }
}

ReadingPage.propTypes = {
  testSection: PropTypes.object,
};

export default ReadingPage;
