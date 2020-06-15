import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import QuestionModal from "../QuestionModal";
import BubbleGroup from "../Bubble";
import FreeResponse from '../FreeResponse';
import {
  answerStudentLessonProblem,
  answerStudentLessonDebounce,
  flagStudentLessonProblem,
} from '../../../index/actions';
import { makeSelectActiveLesson } from '../../../index/selectors';

class AnswerRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      originalTestProblemId: "",
    };
  }

  componentDidMount = () => {
    const { problem: { id } } = this.props;
    const { originalTestProblemId } = this.state;
    if (id !== originalTestProblemId) {
      this.setState({
        originalTestProblemId: id,
      });
    }
  }

  onOpenQuestionModal = () => this.setState({ open: true });
  onCloseQuestionModal = () => this.setState({ open: false });

  isFreeResponse = () => {
    const { problem } = this.props;
    if (problem.problem.format === "Multiple") {
      return false;
    }
    return true;
  }

  isLessonSectionCompleted = () => {
    const { activeLesson, problemType } = this.props;
    switch (problemType) {
      case "drillProblems":
        if (activeLesson.status === "COMPLETED") return true;
        break;
      case "challengeProblems":
        if (activeLesson.sections[0].status === "COMPLETED") return true;
        break;
      case "practiceProblems":
        if (activeLesson.sections[1].status === "COMPLETED") return true;
        break;
      default:
        return false;
        break;
    }
  }


  render() {
    const { problem, onAnswerStudentLessonProblem, onAnswerStudentLessonDebounce, activeLesson } = this.props;
    const { open } = this.state;
    return (
      <React.Fragment>
        <QuestionModal
          open={open}
          onOpenQuestionModal={this.onOpenQuestionModal}
          onCloseQuestionModal={this.onCloseQuestionModal}
          question={problem}
          activeLesson={activeLesson}
          onFlagStudentLessonProblem={this.props.onFlagStudentLessonProblem}
        />
        <li
          className="answers-list-holder"
          key={problem.id}
          style={{ marginRight: "15px" }}
        >
          <div className="answer-row row mb-0">
            <div className="col col-120">
              <ul className="answer-list">
                {this.isFreeResponse() ?
                  <FreeResponse
                    lesson={problem}
                    onAnswerStudentLessonDebounce={onAnswerStudentLessonDebounce}
                    studentLessonId={activeLesson.id}
                    problemType={this.props.problemType}
                    hasDisplayAnswers={this.isLessonSectionCompleted()}
                  /> :
                  <BubbleGroup
                    lesson={problem}
                    onAnswerStudentLessonProblem={onAnswerStudentLessonProblem}
                    studentLessonId={activeLesson.id}
                    problemType={this.props.problemType}
                  />}
              </ul>
            </div>
            <div className="col col-30">
              <span className="status-info">E</span>
            </div>
            <div className="col col-auto">
              <Choose>
                <When condition={problem.flag_status === 'FLAGGED'}>
                  <span className="status-answer" style={{ color: "#c0272d" }}>
                    <i className="icon-flag"></i>
                    <b className="status-text">Review</b>
                  </span>
                </When>
                <When condition={problem.flag_status === 'REVIEWED'}>
                  <span className="status-answer status-disabled" style={{ color: "#c0272d" }}>
                    <i className="icon-flag"></i>
                    <b className="status-text">Review</b>
                  </span>
                </When>
              </Choose>
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

const mapStateToProps = createStructuredSelector({
  activeLesson: makeSelectActiveLesson(),
});

const mapDispatchToProps = (dispatch) => ({
  onAnswerStudentLessonProblem: (postBody, problemType, format) => dispatch(answerStudentLessonProblem(postBody, problemType, format)),
  onAnswerStudentLessonDebounce: (postBody, problemType, format) => dispatch(answerStudentLessonDebounce(postBody, problemType, format)),
  onFlagStudentLessonProblem: (postBody) => dispatch(flagStudentLessonProblem(postBody)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerRow);
