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
      lesson: { answer_text, problem },
    } = this.props;
    const answerChoices = problem.answers.map(choice => choice.text);
    const hasMatchingAnswer = answerChoices.indexOf(answer_text);
    if (answer_text && hasMatchingAnswer !== -1) {
      return styles.greenFilled;
    }
    if (answer_text && hasMatchingAnswer === -1) {
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

    onAnswerStudentLessonDebounce(
      postBody,
      problemType,
      "fill-in-blank",
      {
        hasScoring: this.props.hasScoring,
        isAnsCorrect: this.isAnswerCorrect(answer),
        isPrevAnsCorrect: this.isAnswerCorrect(lesson.answer_text),
      });
    this.setState({ answer });
  };

  isAnswerCorrect = (answer) => {
    const { lesson } = this.props;
    for (const lessAnswer of lesson.problem.answers) {
      if (lessAnswer.text === answer) return true;
    }
    return false;
  }

  renderCorrectAnswer = () => {
    const { lesson: { problem }, hasDisplayAnswers } = this.props;
    const answerChoices = problem.answers.map(choice => choice.text);
    return hasDisplayAnswers && (
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
