import React from "react";
import PropTypes from "prop-types";

const styles = {
  red: {
    color: "#fff",
    border: "1px solid #fff",
    backgroundColor: "#db1d41",
  },
  greenFilled: {
    color: "#fff",
    border: "1px solid #32955c",
    backgroundColor: "#32955c",
  },
  greenBorderOnly: {
    color: "#32955c",
    border: "1px solid #32955c",
    backgroundColor: "#fff",
  },
  plain: {
    color: "#a6a8ab",
    border: "1px solid #a6a8ab",
  },
};

class FreeResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: props.lesson.answer_text,
    };
  }

  renderResponseStyle = () => {
    const {
      lesson: { is_correct, correct_answer_id, answer_text },
    } = this.props;
    if (is_correct && answer_text && correct_answer_id === answer_text) {
      return styles.greenFilled;
    }
    if (!is_correct && answer_text && correct_answer_id !== answer_text) {
      return styles.red;
    }
    return styles.plain;
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const answer = e.target.value;
    const { onAnswerStudentLessonDebounce, lesson, studentLessonId, problemType } = this.props;
    const postBody = {
      student_lesson_id: studentLessonId,
      problem_id: lesson.problem.id,
      answer_text: answer,
    };
    onAnswerStudentLessonDebounce(postBody, problemType, "fill-in-blank");
    this.setState({ answer });
  };

  renderCorrectAnswer = () => {
    const { lesson } = this.props;
    const answerChoices = lesson.problem.answers.map(choice => choice.text);
    // Only show if the section or drill is completed
    // if answer is correct and matches, show answer that matches the users
    // if answer is incorrect just show the first answer in the list
    return (
      <li>
        <span
          className="badge badge-rounded badge-rounded-bordered"
          style={this.renderResponseStyle()}
        >
          {answerChoices[0]}
        </span>
      </li>
    );
  }

  render() {
    console.log('log: this.props.lesson', this.props.lesson);
    return (
      <>
      <input
        className="badge badge-rounded badge-rounded-bordered"
        // style={style}
        type="text"
        name="answer"
        defaultValue={this.state.answer}
        onChange={this.handleInputChange}
      />
      {this.renderCorrectAnswer()}
      </>
    );
  }
}

FreeResponse.propTypes = {
  lesson: PropTypes.object.isRequired,
};

export default FreeResponse;
