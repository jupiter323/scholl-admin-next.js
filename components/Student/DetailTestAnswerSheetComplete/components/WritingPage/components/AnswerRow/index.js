import React from "react";
import PropTypes from "prop-types";
import QuestionModal from "../QuestionModal";
import BubbleGroup from "../Bubble";

class AnswerRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      flagged: false
    };
  }

  onOpenQuestionModal = () => this.setState({ open: true });
  onCloseQuestionModal = () => this.setState({ open: false });

  mapNumberBubbles = () => {
    const {
      problem: { answer, correct_answer }
    } = this.props;
    if (answer === correct_answer) {
      return (
        <li key={answer}>
          <span
            className="badge badge-rounded badge-rounded-bordered"
            style={{ color: "#fff", borderColor: "#32955c", backgroundColor: "#3eb777" }}
          >
            {answer}
          </span>
        </li>
      );
    }
    return (
      <React.Fragment>
        {answer && (
          <li key={answer}>
            <span
              className="badge badge-rounded badge-rounded-bordered"
              style={{ color: "#fff", borderColor: "#ad1e3e", backgroundColor: "#db1d41" }}
            >
              {answer}
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
    const { open, flagged } = this.state;
    return (
      <React.Fragment>
        <QuestionModal
          open={open}
          onOpenQuestionModal={this.onOpenQuestionModal}
          onCloseQuestionModal={this.onCloseQuestionModal}
          question={problem}
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
                    <BubbleGroup id={problem.test_problem_id} problem={problem} />
                  </Otherwise>
                </Choose>
              </ul>
            </div>
            <div className="col col-30">
              <span className="status-info">E</span>
            </div>
            <div className="col col-auto">
              <If condition={flagged}>
                <span className="status-answer" style={{ color: "#c0272d" }}>
                  <i className="icon-flag"></i>
                  <b className="status-text">Review</b>
                </span>
              </If>
            </div>
            <div className="dropdown-block col col-35">
              <a className="modal-trigger" href="#" onClick={this.onOpenQuestionModal}>
                <i className="material-icons dots-icon">more_vert</i>
              </a>
            </div>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

AnswerRow.propTypes = {
  problem: PropTypes.object
};

export default AnswerRow;
