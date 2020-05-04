import React from "react";
import update from "immutability-helper";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onAddAnswers } from "../../../index/actions";

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

  onSaveStudentAnswer = (updatedProblemCells, index) => {
    this.setState({ problemCells: updatedProblemCells, selectedIndex: index });
    const { label } = this.state.problemCells[index];
    console.log(updatedProblemCells);
    console.log(index);
    // console.log({student_test_id: this.props.studentTestId,
    //   test_problem_id: testProblemId,
    //   answer: label})
    // this.props.dispatchOnAddAnswers({
    //   student_test_id: this.props.studentTestId,
    //   test_problem_id: testProblemId,
    //   answer: label,
    // });
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
        [index]: { selected: { $set: !currentBadge.selected } },
        [selectedIndex]: { selected: { $set: false } },
      });
      this.onSaveStudentAnswer(updatedProblemCells, index);
    }
  };

  render() {
    const { problemCells } = this.state;
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
//   dispatchOnAddAnswers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
//   studentTestId: state.testReducer.studentTestId,
});

const mapDispatchToProps = dispatch => ({
//   dispatchOnAddAnswers: bindActionCreators(onAddAnswers, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProblemRow);
