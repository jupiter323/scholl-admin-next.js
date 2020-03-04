import React from "react";
import PropTypes from "prop-types";
import AnswerRow from "./components/AnswerRow";

class WritingPage extends React.Component {
  mapSampleAnswers = () => {
    const { sampleAnswers } = this.props;
    return sampleAnswers.map((question, index) => (
      <AnswerRow key={question.id} question={question} index={index} />
    ));
  };

  render() {
    return (
      <div className="slide" id="writingAnswerSheetImg">
        <div
          className="row"
          style={{ columns: "3 auto", marginLeft: "10px", marginRight: "10px" }}
        >
          <ol className="answers-list">{this.mapSampleAnswers()}</ol>
        </div>
      </div>
    );
  }
}

WritingPage.propTypes = {
  sampleAnswers: PropTypes.array.isRequired
};

export default WritingPage;
