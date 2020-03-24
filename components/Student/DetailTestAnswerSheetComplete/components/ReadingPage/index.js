<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";
import AnswerRow from "../WritingPage/components/AnswerRow";

class ReadingPage extends React.Component {
  mapAnswers = () => {
    const {
      testSection: { problems }
    } = this.props;
    return (
      problems &&
      problems.map(problem => <AnswerRow key={problem.test_problem_id} problem={problem} />)
    );
  };

  render() {
    return (
      <div className="slide" id="readingAnswerSheetImg">
        <div className="row" style={{ columns: "3 auto", marginLeft: "10px", marginRight: "10px" }}>
          <ol className="answers-list">{this.mapAnswers()}</ol>
        </div>
      </div>
    );
=======
import React from 'react';
import PropTypes from 'prop-types';
import AnswerRow from '../WritingPage/components/AnswerRow';


class ReadingPage extends React.Component {

  mapMathNoCalcAnswers = () => {
    const { mathNoCalc: {sampleAnswers} } = this.props;
    return sampleAnswers.map(question => (
      <AnswerRow question={question} key={question.id} />
    ))
  }

  render() {
    return (
      <div className="slide" id = "readingAnswerSheetImg">
        <div className="row"  style={{columns: '3 auto', marginLeft: '10px', marginRight: '10px'}}>
          <ol className="answers-list">
            {this.mapMathNoCalcAnswers()}
          </ol>
        </div>
      </div>
    )
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
  }
}

ReadingPage.propTypes = {
<<<<<<< HEAD
  testSection: PropTypes.object
};

=======
  mathNoCalc: PropTypes.object.isRequired,
}
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
export default ReadingPage;
