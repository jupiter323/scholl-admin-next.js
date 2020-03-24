import React from "react";
import PropTypes from "prop-types";
import AnswerRow from "../WritingPage/components/AnswerRow";

class MathNoCalcPage extends React.Component {
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
<<<<<<< HEAD
      <div className="slide" id="mathNoCalcAnswerSheetImg">
        <div className="row" style={{ columns: "3 auto", marginLeft: "10px", marginRight: "10px" }}>
          <ol className="answers-list">{this.mapAnswers()}</ol>
=======
      <div className="slide" id = "mathNoCalcAnswerSheetImg">
        <div className="row"  style={{columns: '3 auto', marginLeft: '10px', marginRight: '10px'}}>
          <ol className="answers-list">
            {this.mapMathNoCalcAnswers()}
          </ol>
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
        </div>
      </div>
    );
  }
}

MathNoCalcPage.propTypes = {
<<<<<<< HEAD
  testSection: PropTypes.object
};
=======
  mathNoCalc: PropTypes.object.isRequired,
}
>>>>>>> 5648d67a1ffd519eaa27202bf67e210bab1c7b50
export default MathNoCalcPage;
