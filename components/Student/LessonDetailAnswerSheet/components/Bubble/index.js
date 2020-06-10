import React from "react";
import PropTypes from "prop-types";

const styles = {
  red: {
    position: "relative",
    color: "#fff",
    border: "1px solid #fff",
    backgroundColor: "#db1d41",
    height: "19px",
    width: "19px",
    borderRadius: "50%",
  },
  greenFilled: {
    position: "relative",
    color: "#fff",
    border: "1px solid #32955c",
    backgroundColor: "#32955c",
    height: "19px",
    width: "19px",
    borderRadius: "50%",
  },
  greenBorderOnly: {
    position: "relative",
    color: "#32955c",
    border: "1px solid #32955c",
    backgroundColor: "#fff",
    height: "19px",
    width: "19px",
    borderRadius: "50%",
  },
  plain: {
    position: "relative",
    color: "#a6a8ab",
    border: "1px solid #a6a8ab",
    height: "19px",
    width: "19px",
    borderRadius: "50%",
  },
  blueFilled: {
    position: "relative",
    color: "#fff",
    border: "1px solid #40c4ff",
    backgroundColor: "#40c4ff",
    height: "19px",
    width: "19px",
    borderRadius: "50%",
  },
};

class BubbleGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClickBadge = (index) => {
    const { onAnswerStudentLessonProblem, lesson, studentLessonId, problemType } = this.props;
    let answerId = lesson.problem.answers[index].id;
    if (lesson.problem.answers[index].id === lesson.answer_id) {
      answerId = null;
    }
    const postBody = {
      student_lesson_id: studentLessonId,
      problem_id: lesson.problem.id,
      answer_id: answerId,
    };
    onAnswerStudentLessonProblem(postBody, problemType, "multiple");
  }

  mapEmptyBubbles = id => {
    const letters = ["A", "B", "C", "D"];
    return letters.map((letter, index) => (
      <li key={letter} onClick={() => this.handleClickBadge(index)}>
        <form>
          <label
            htmlFor={`${id}${letter}`}
            style={this.renderBubbleStyle(index)}
          >
            <span style={{ display: "block", marginTop: "2px", paddingLeft: "4.5px" }}>
              {letter}
            </span>
          </label>
        </form>
      </li>
    ));
  };

  getCorrectAnswerIndexMatchedId = (answer) => answer === this.props.lesson.correct_answer_id;
  getStudentAnswerIndexMatchedId = (answer) => answer === this.props.lesson.answer_id;

  getCorrectAnswerIndex = (answerIds) => {
    const correctAnswerIndex = answerIds.findIndex(this.getCorrectAnswerIndexMatchedId);
    return correctAnswerIndex;
  }
  getStudentAnswerIndex = (answerIds) => {
    const studentAnswerIndex = answerIds.findIndex(this.getStudentAnswerIndexMatchedId);
    return studentAnswerIndex;
  }

  renderBubbleStyle = index => {
    const {
      lesson: { is_correct },
      lesson,
    } = this.props;
    const answerIds = this.props.lesson.problem.answers.map(answer => answer.id);
    const correctAnswerIndex = this.getCorrectAnswerIndex(answerIds);
    const studentAnswerIndex = this.getStudentAnswerIndex(answerIds);
    const matchingAnswers = correctAnswerIndex === studentAnswerIndex;
    const condition = correctAnswerIndex || correctAnswerIndex === 0 ? matchingAnswers : is_correct;
    if (correctAnswerIndex === index && condition) {
      return styles.greenFilled;
    }
    if (correctAnswerIndex === index && !condition) {
      return styles.greenBorderOnly;
    }
    if (index === studentAnswerIndex && !condition && correctAnswerIndex !== -1) {
      return styles.red;
    }
    if (correctAnswerIndex === -1 && studentAnswerIndex !== -1 && studentAnswerIndex === index) {
      return styles.blueFilled;
    }
    return styles.plain;
  };

  render() {
    const {
      lesson: { id },
    } = this.props;
    return <React.Fragment>{this.mapEmptyBubbles(id)}</React.Fragment>;
  }
}

BubbleGroup.propTypes = {
  lesson: PropTypes.object.isRequired,
};

export default BubbleGroup;
