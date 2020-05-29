import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addFreeResponseAnswerToTest } from '../../../../../index/actions';

class FreeResponseInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: props.problem.student_answer,
      basicStyle: { width: "50px" },
      incorrectStyle: { color: "#fff", borderColor: "#ad1e3e", backgroundColor: "#db1d41", width: "50px" },
      correctStyle: { color: "#fff", borderColor: "#32955c", backgroundColor: "#3eb777", width: "50px" },
    };
  }

  handleInputChange = (e) => {
    e.preventDefault();
    const answer = e.target.value;
    const { onAddFreeResponseAnswerToTest, problem, testSection: { student_test_id } } = this.props;
    const postBody = { student_test_id, test_problem_id: problem.id, answer };
    onAddFreeResponseAnswerToTest(postBody, problem.test_section_id);
    this.setState({ answer });
  };

  render() {
    const { answerStatus } = this.props;
    let style = {};
    !answerStatus.complete ? style = this.state.basicStyle : !answerStatus.isCorrect ? style = this.state.incorrectStyle : style = this.state.correctStyle;
    return (
      <input
        className="badge badge-rounded badge-rounded-bordered"
        style={style}
        type="text"
        name="answer"
        defaultValue={this.state.answer}
        onChange={this.handleInputChange}
      />
    );
  }
}

FreeResponseInput.propTypes = {
  problem: PropTypes.object,
  answerStatus: PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return {
    onAddFreeResponseAnswerToTest: (postBody, sectionId) => dispatch(addFreeResponseAnswerToTest(postBody, sectionId)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(FreeResponseInput);
