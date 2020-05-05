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
    };
  }

  componentDidMount() {
    console.log('log: props', this.props);
    const { question } = this.props;
    const currentAnswerId = question.answer_id;
    const answerChoices = question.problem.answers;
    const currentSelection = answerChoices.map((answer, index) => {
      if (answer.id === currentAnswerId) {
        return index;
      }
      return null;
    }).filter(index => index !== null)[0];

    if (typeof currentSelection !== 'number') return;

    this.setState({
      problemCells: update(this.state.problemCells, {
        [currentSelection]: { selected: { $set: true } },
      }),
      selectedIndex: currentSelection,
      answerChoices,
    });
  }

  onSaveStudentAnswer = (updatedProblemCells, index) => {
    const { activeLesson, question, dispatchOnAddAnswers } = this.props;
    this.setState({ problemCells: updatedProblemCells, selectedIndex: index });
    const { label } = this.state.problemCells[index];
    console.log(this.state);
    console.log(label);
    // Dispatch from here
    const payload = {
      student_lesson_id: activeLesson.id,
      problem_id: question.id,
      answer_id: this.state.answerChoices[index],
    };
    console.log('log: payload', payload);
    // dispatchOnAddAnswers()
  };

  handleClickBadge = index => {
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

  render() {
    const { problemCells } = this.state;
    console.log('edit props', this.props);
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
  question: PropTypes.string.isRequired,
  dispatchOnAddAnswers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
//   studentTestId: state.testReducer.studentTestId,
});

const mapDispatchToProps = dispatch => ({
  dispatchOnAddAnswers: bindActionCreators(addStudentLessonProblemAnswer, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProblemRow);
