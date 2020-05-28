import React from "react";
import PropTypes from "prop-types";

class FreeResponseInput extends React.Component {
  handleInputChange = (e) => {
    const answer = e.target.value;
    const { onAddStudentAnswerToTest, problem, testSection: { student_test_id } } = this.props;
    console.log('log: problem', problem);
    console.log('log: answer', answer);
    // const postBody = {student_test_id, test_problem_id: id, answer}
    onAddStudentAnswerToTest(problem, answer, student_test_id);
  };
  render() {
    return (
      <input
        type="text"
        name="answer"
        onChange={this.handleInputChange}
      />
    );
  }
}

FreeResponseInput.propTypes = {};

export default FreeResponseInput;
