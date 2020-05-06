import React from "react";
import update from "immutability-helper";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';
import { addStudentLessonProblemAnswerApi } from '../../../index/api';

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
      userMessage: "",
      messageType: "",
    };
  }

  componentDidMount() {
    console.log("log: props", this.props);
    const { question: { answer_id, answer_text, answered } } = this.props;
    if (answer_id && !answer_text && answered) {
      this.setAnswerChoice();
    } else if (!answer_id && answer_text && answered) {
      this.setAnswerText();
    }
  }

  setAnswerChoice = () => {
    const { question } = this.props;
    const currentAnswerId = question.answer_id;
    const answerChoices = question.problem.answers;
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
    });
  }

  setAnswerText = () => {
    const { question: { answer_text } } = this.props;
    const setText = !answer_text ? "" : answer_text;
    this.setState({ answer_text: setText });
  }

  onSaveStudentAnswer = async (updatedProblemCells, index) => {
    const { activeLesson, question } = this.props;
    const answerChoices = question.problem.answers;
    this.setState({ problemCells: updatedProblemCells, selectedIndex: index });
    const payload = {
      student_lesson_id: activeLesson.id,
      problem_id: question.problem.id,
      answer_id: answerChoices[index].id,
    };
    const res = await addStudentLessonProblemAnswerApi(payload);
    if (res === 202) {
      this.props.updateProblemList(this.props.problemType, { ...question, answer_id: answerChoices[index].id, answer_text: null, answered: true });
      return this.handleUserMessage('success');
    }
    return this.handleUserMessage('fail');
  };

  handleSubmit = async (e) => {
    const { activeLesson, question } = this.props;
    const payload = {
      student_lesson_id: activeLesson.id,
      problem_id: question.problem.id,
      answer_text: this.state.answer_text,
    };
    const res = await addStudentLessonProblemAnswerApi(payload);
    if (res === 202) {
      this.props.updateProblemList(this.props.problemType, { ...question, answer_id: null, answer_text: this.state.answer_text, answered: true });
      return this.handleUserMessage('success');
    }
    return this.handleUserMessage('fail');
  }

  handleClickBadge = (index) => {
    const currentBadge = this.state.problemCells[index];
    const selectedIndex = this.state.selectedIndex;
    let updatedProblemCells = this.state.problemCells;
    if (selectedIndex === -1) {
      updatedProblemCells = update(this.state.problemCells, {
        [index]: { selected: { $set: !currentBadge.selected } },
      });
    } else {
      updatedProblemCells = update(this.state.problemCells, {
        [selectedIndex]: { selected: { $set: false } },
        [index]: { selected: { $set: !currentBadge.selected } },
      });
    }
    this.onSaveStudentAnswer(updatedProblemCells, index);
  };

  handleChange = (e) => {
    this.setState({ answer_text: e.target.value });
  }

  handleUserMessage = (status) => {
    if (status === 'fail') {
      return this.setState({ userMessage: "Something went wrong updating student answer.", messageType: status });
    }
    return this.setState({ userMessage: "Successfully updated student answer.", messageType: status });
  }

  render() {
    const { problemCells } = this.state;
    if (this.props.question.problem.answers.length === 0) {
      return (
        <>
          <input type="text" className="answer-input" value={this.state.answer_text} onChange={this.handleChange} />
          <button className="btn" onClick={this.handleSubmit}>Submit</button>
          <UserMessage messageType={this.state.messageType}>{this.state.userMessage}</UserMessage>
        </>
      );
    }
    return (
      <>
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
      <UserMessage messageType={this.state.messageType}>{this.state.userMessage}</UserMessage>
      </>
    );
  }
}

const UserMessage = styled.p`
  color: ${props => props.messageType === 'fail' ? "red" : "green"};
`;

ProblemRow.propTypes = {
  activeLesson: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
  updateProblemList: PropTypes.func.isRequired,
  problemType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ProblemRow);
