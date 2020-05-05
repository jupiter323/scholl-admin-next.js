import React from "react";
import update from "immutability-helper";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addStudentLessonProblemAnswer } from "../../../index/actions";

class ProblemRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1,
      problemCells: [
        {
          id: 0,
          label: "A",
          selected: false,
        },
        {
          id: 1,
          label: "B",
          selected: false,
        },
        {
          id: 2,
          label: "C",
          selected: false,
        },
        {
          id: 3,
          label: "D",
          selected: false,
        },
      ],
      answerChoices: [],
      answer_text: "",
    };
  }

  componentDidMount() {
    console.log("log: props", this.props);
    const { question: { problem } } = this.props;
    console.log(problem.answer_id);
    console.log(problem.answer_text);
    console.log(problem.answered);
    if (problem.answer_id && !problem.answer_text && problem.answered) {
      this.setAnswerChoice();
    } else if (!problem.answer_id && problem.answer_text && problem.answered) {
      console.log('run condition');
      this.setAnswerText();
    }
  }

  setAnswerChoice = () => {
    const { question } = this.props;
    const currentAnswerId = question.answer_id;
    const answerChoices = question.problem.answers;
    this.setState({ answerChoices });
    const currentSelection = answerChoices
      .map((answer, index) => {
        if (answer.id === currentAnswerId) {
          return index;
        }
        return null;
      })
      .filter((index) => index !== null)[0];

    if (typeof currentSelection !== "number") return;

    this.setState({
      problemCells: update(this.state.problemCells, {
        [currentSelection]: { selected: { $set: true } },
      }),
      selectedIndex: currentSelection,
      answerChoices,
    });
  }

  setAnswerText = () => {
    console.log('run function');
    const { question: { problem: { answer_text } } } = this.props;
    const setText = !answer_text ? "" : answer_text;
    console.log('log: setText', setText);
    this.setState({ answer_text: setText });
  }

  onSaveStudentAnswer = (updatedProblemCells, index) => {
    const { activeLesson, question, dispatchOnAddAnswers } = this.props;
    this.setState({ problemCells: updatedProblemCells, selectedIndex: index });
    console.log("log: answerChoices", this.state.answerChoices);

    const payload = {
      student_lesson_id: activeLesson.id,
      problem_id: question.problem.id,
      answer_id: this.state.answerChoices[index].id,
    };
    dispatchOnAddAnswers(payload);
  };

  handleClickBadge = (index) => {
    const currentBadge = this.state.problemCells[index];
    const selectedIndex = this.state.selectedIndex;
    if (selectedIndex === -1) {
      const updatedProblemCells = update(this.state.problemCells, {
        [index]: { selected: { $set: !currentBadge.selected } },
      });
      this.onSaveStudentAnswer(updatedProblemCells, index);
    } else {
      const updatedProblemCells = update(this.state.problemCells, {
        [selectedIndex]: { selected: { $set: false } },
        [index]: { selected: { $set: !currentBadge.selected } },
      });
      this.onSaveStudentAnswer(updatedProblemCells, index);
    }
  };

  handleChange = (e) => {
    this.setState({ answer_text: e.target.value });
  }

  handleSubmit = (e) => {
    const { activeLesson, question, dispatchOnAddAnswers } = this.props;
    const payload = {
      student_lesson_id: activeLesson.id,
      problem_id: question.problem.id,
      answer_text: this.state.answer_text,
    };
    dispatchOnAddAnswers(payload);
  }

  render() {
    const { problemCells } = this.state;
    if (this.props.question.problem.answers.length === 0) {
      return (
        <>
          <input type="text" className="answer-input" value={this.state.openAnswer} onChange={this.handleChange} />
          <button className="btn" onClick={this.handleSubmit}>Submit</button>
        </>
      );
    }
    return (
      //   <li className="answers-list-holder">
      <ul className="answer-list">
        {problemCells.map((cell, index) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => this.handleClickBadge(index)}
            key={index}
          >
            <span
              className="badge-circle badge-circle-bordered"
              style={{
                color: cell.selected ? "#fff" : "",
                borderColor: cell.selected ? "#19b4e9" : "",
                backgroundColor: cell.selected ? "#19b4e9" : "",
              }}
            >
              {cell.label}
            </span>
          </li>
        ))}
      </ul>
      //   </li>
    );
  }
}

ProblemRow.propTypes = {
  activeLesson: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
  dispatchOnAddAnswers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  //   studentTestId: state.testReducer.studentTestId,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchOnAddAnswers: bindActionCreators(addStudentLessonProblemAnswer, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProblemRow);
