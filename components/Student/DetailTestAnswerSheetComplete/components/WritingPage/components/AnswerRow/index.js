import React from "react";
import PropTypes from "prop-types";
import QuestionModal from "../QuestionModal";
import BubbleGroup from "../Bubble";

class AnswerRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      status: '',
    };
  }

  componentDidMount = () => {
    if (this.props.problem.flag) {
      const { problem: { flag: { status } } } = this.props;
      this.setState({
        status,
      });
    }
  }

  onChangeFlagState = (status) => {
    this.setState({
      status,
    });
  }

  onOpenQuestionModal = () => this.setState({ open: true });
  onCloseQuestionModal = () => this.setState({ open: false });

  mapNumberBubbles = () => {
    const {
      problem: { student_answer, correct_answer },
    } = this.props;
    if (student_answer === correct_answer) {
      return (
        <li key={student_answer}>
          <span
            className="badge badge-rounded badge-rounded-bordered"
            style={{ color: "#fff", borderColor: "#32955c", backgroundColor: "#3eb777" }}
          >
            {student_answer}
          </span>
        </li>
      );
    }
    return (
      <React.Fragment>
        {student_answer && (
          <li key={student_answer}>
            <span
              className="badge badge-rounded badge-rounded-bordered"
              style={{ color: "#fff", borderColor: "#ad1e3e", backgroundColor: "#db1d41" }}
            >
              {student_answer}
            </span>
          </li>
        )}
        <li key={correct_answer}>
          <span
            className="badge badge-rounded badge-rounded-bordered"
            style={{ color: "#32955c", borderColor: "#32955c", backgroundColor: "#fff" }}
          >
            {correct_answer}
          </span>
        </li>
      </React.Fragment>
    );
  };

  getAnswerType = problem => {
    const { correct_answer } = problem;
    return Number(correct_answer);
  };

  render() {
    const { problem } = this.props;
    const { open, status } = this.state;
    return (
      <React.Fragment>
        <QuestionModal
          open={open}
          onOpenQuestionModal={this.onOpenQuestionModal}
          onCloseQuestionModal={this.onCloseQuestionModal}
          question={problem}
          onChangeFlagState={this.onChangeFlagState}
        />
        <li
          className="answers-list-holder"
          key={problem.test_problem_id}
          style={{ marginRight: "15px" }}
        >
          <div className="answer-row row mb-0">
            <div className="col col-120">
              <ul className="answer-list">
                <Choose>
                  <When condition={this.getAnswerType(problem)}>{this.mapNumberBubbles()}</When>
                  <Otherwise>
                    <BubbleGroup 
                      id={problem.id} 
                      testSection={this.props.testSection} onAddStudentAnswerToTest={this.props.onAddStudentAnswerToTest} 
                      problem={problem} 
                    />
                  </Otherwise>
                </Choose>
              </ul>
            </div>
            <div className="col col-30">
              <span className="status-info">E</span>
            </div>
            <div className="col col-auto">
              <If condition={status === 'FLAGGED'}>
                <span className="status-answer" style={{ color: "#c0272d" }}>
                  <i className="icon-flag"></i>
                  <b className="status-text">Review</b>
                </span>
              </If>
              <If condition={status === 'REVIEWED'}>
                <span className="status-answer status-disabled" style={{ color: "#c0272d" }}>
                  <i className="icon-flag"></i>
                  <b className="status-text">Review</b>
                </span>
              </If>
            </div>
            <If condition={status === 'FLAGGED'}>
              <div className="dropdown-block col col-35">
                <a className="modal-trigger" href="#" onClick={this.onOpenQuestionModal}>
                  <i className="material-icons dots-icon">more_vert</i>
                </a>
              </div>
            </If>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

AnswerRow.propTypes = {
  problem: PropTypes.object,
};

export default AnswerRow;
