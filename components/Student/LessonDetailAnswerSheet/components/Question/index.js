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

  onChangeFlagState = (status) => {
    this.setState({
      status,
    });
  }

  onOpenQuestionModal = () => this.setState({ open: true });
  onCloseQuestionModal = () => this.setState({ open: false });


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
          key={problem.id}
          style={{ marginRight: "15px" }}
        >
          <div className="answer-row row mb-0">
            <div className="col col-120">
              <ul className="answer-list">
                <BubbleGroup lesson={problem} />
              </ul>
            </div>
            <div className="col col-30">
              <span className="status-info">E</span>
            </div>
            <div className="col col-auto">
              <If condition={status === 'FLAGGED' || this.props.problem.flag_status === 'FLAGGED'}>
                <span className="status-answer" style={{ color: "#c0272d" }}>
                  <i className="icon-flag"></i>
                  <b className="status-text">Review</b>
                </span>
              </If>
              <If condition={this.props.problem.flag_status === 'REVIEWED'}>
                <span className="status-answer status-disabled" style={{ color: "#c0272d" }}>
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
  problem: PropTypes.object,
};

export default AnswerRow;
