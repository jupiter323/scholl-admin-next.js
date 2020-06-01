import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import ClickOffComponentWrapper from "../../../../../../ClickOffComponentWrapper";
import { updateFlagStatus } from "../../../../../index/actions";

class DropDownOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "UN_FLAGGED",
    };
  }

  componentWillReceiveProps = (nextProps) => {
    const {
      question: {
        flag: { status },
      },
      question,
    } = nextProps;
    if (question.flag.status !== this.state.status) {
      this.setState({
        status,
      });
    }
  };

  onHandleQuestionFlagStatus = async (_e, status) => {
    const {
      studentTestId,
      onUpdateFlagStatus,
      question: {
        flag: { id },
      },
      question,
      onCloseQuestionModal,
    } = this.props;
    // User validation
    if (status === this.state.status) return;
    if (this.state.status === "UN_FLAGGED" && status === "REVIEWED" && !id) {
      return toast.error(`There is no flag to mark reviwed.`, {
        className: "update-error",
        progressClassName: "progress-bar-error",
      });
    }
    // Continue with request
    let postBody = {};
    const newQuestion = question;

    if (status === "FLAGGED" && !id) {
      postBody = { student_test_id: studentTestId, test_problem_id: question.id };
    } else {
      postBody = { student_test_id: studentTestId, flag_id: id, status };
    }
    newQuestion.flag.status = status;
    onUpdateFlagStatus(postBody, status, newQuestion);
    onCloseQuestionModal();
  };

  render() {
    const {
      open,
      onCloseQuestionModal,
    } = this.props;
    return (
      <If condition={open}>
        <ClickOffComponentWrapper onOuterClick={() => onCloseQuestionModal()}>
          <ul
            id="dropdown01"
            className="dropdown-content dropdown-wide"
            style={{
              display: "block",
              opacity: "1",
              transform: "scaleX(1) scaleY(1)",
            }}
          >
            <li>
              <a className="option" href="#" onClick={(e) => this.onHandleQuestionFlagStatus(e, "FLAGGED")}>Add Flag</a>
            </li>
            <li>
              <a className="option" href="#!" onClick={(e) => this.onHandleQuestionFlagStatus(e, "REVIEWED")}>Mark Flag Reviewed</a>
            </li>
            <li>
              <a className="option" href="#!" onClick={(e) => this.onHandleQuestionFlagStatus(e, "UN_FLAGGED")}>Remove Flag</a>
            </li>
          </ul>
        </ClickOffComponentWrapper>
        <style jsx>{`
            .option {
              font-weight: normal;
            }
          `}</style>
      </If>
    );
  }
}

DropDownOptions.propTypes = {
  open: PropTypes.bool.isRequired,
  onCloseQuestionModal: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onUpdateFlagStatus: (payload, status, question) =>
      dispatch(updateFlagStatus(payload, status, question)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(DropDownOptions);
