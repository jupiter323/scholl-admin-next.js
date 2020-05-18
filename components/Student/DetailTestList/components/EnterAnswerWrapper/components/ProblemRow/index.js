import React from "react";
import update from "immutability-helper";
import PropTypes from "prop-types";

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
    };
  }

  componentDidMount = () => {
    const { problem } = this.props;
    if (!problem && !problem.student_answer) {
      return;
    }
    const studentAnswer = problem.student_answer;
    let index = -1;
    switch (studentAnswer) {
      case "A":
        index = 0;
        break;
      case "B":
        index = 1;
        break;
      case "C":
        index = 2;
        break;
      case "D":
        index = 3;
        break;
      default:
        break;
    }
    if (index !== -1) this.handleClickBadge(index, false);
  };

  handleClickBadge = (index, isSavingStudentAns) => {
    const currentBadge = this.state.problemCells[index];
    const selectedIndex = this.state.selectedIndex;
    if (selectedIndex === -1) {
      const updatedProblemCells = update(this.state.problemCells, {
        [index]: { selected: { $set: !currentBadge.selected } },
      });
      this.onSaveStudentAnswer(updatedProblemCells, index);
    } else {
      const updatedProblemCells = update(this.state.problemCells, {
        [index]: { selected: { $set: !currentBadge.selected } },
        [selectedIndex]: { selected: { $set: false } },
      });
      this.onSaveStudentAnswer(updatedProblemCells, index, isSavingStudentAns);
    }
  };

  onSaveStudentAnswer = (updatedProblemCells, index, isSavingStudentAns) => {
    const { onAddStudentAnswerToTest, problem } = this.props;
    this.setState({ problemCells: updatedProblemCells, selectedIndex: index });
    const { label } = this.state.problemCells[index];
    if (isSavingStudentAns) onAddStudentAnswerToTest(problem.id, label);
  };
  render() {
    const { problemCells } = this.state;
    return (
      <li className="answers-list-holder">
        {/* we are not using input box for now */}
        {/* {this.props.problem.answerInput === true ? (<input type="text" className="answer-input" tabIndex={0} />):( */}
        <ul className="answer-list">
          {problemCells.map((cell, index) => (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => this.handleClickBadge(index, true)}
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
        {/* )} */}
      </li>
    );
  }
}

ProblemRow.propTypes = {
  problem: PropTypes.object.isRequired,
  onAddStudentAnswerToTest: PropTypes.func.isRequired,
};

export default ProblemRow;
