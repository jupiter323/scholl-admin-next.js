import React from "react";
import PropTypes from "prop-types";
import AnswerRow from "./components/AnswerRow";

class WritingPage extends React.Component {
<<<<<<< HEAD
  mapAnswers = () => {
    const {
      testSection: { problems }
    } = this.props;
    return (
      problems &&
      problems.map(problem => <AnswerRow key={problem.test_problem_id} problem={problem} />)
    );
=======
  mapSampleAnswers = () => {
    const { sampleAnswers } = this.props;
    return sampleAnswers.map((question, index) => (
      <AnswerRow key={question.id} question={question} index={index} />
    ));
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
  };

  render() {
    return (
      <div className="slide" id="writingAnswerSheetImg">
<<<<<<< HEAD
        <div className="row" style={{ columns: "3 auto", marginLeft: "10px", marginRight: "10px" }}>
          <ol className="answers-list">{this.mapAnswers()}</ol>
=======
        <div
          className="row"
          style={{ columns: "3 auto", marginLeft: "10px", marginRight: "10px" }}
        >
          <ol className="answers-list">{this.mapSampleAnswers()}</ol>
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
        </div>
      </div>
    );
  }
}

WritingPage.propTypes = {
<<<<<<< HEAD
  testSection: PropTypes.object
=======
  sampleAnswers: PropTypes.array.isRequired
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
};

export default WritingPage;
