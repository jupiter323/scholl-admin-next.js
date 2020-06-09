import React from "react";
import PropTypes from "prop-types";

const styles = {
  red: {
    color: "#fff",
    border: "1px solid #fff",
    backgroundColor: "#db1d41",
  },
  greenFilled: {
    color: "#fff",
    border: "1px solid #32955c",
    backgroundColor: "#32955c",
  },
  greenBorderOnly: {
    color: "#32955c",
    border: "1px solid #32955c",
    backgroundColor: "#fff",
  },
  plain: {
    color: "#a6a8ab",
    border: "1px solid #a6a8ab",
  },
};

class FreeResponse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
    };
  }

  // responseSection = () => {
  //   const {
  //     lesson: { is_correct, answer_text, correct_answer_id },
  //   } = this.props;
  //   return (
  //     <>
  //       <li>
  //         <span
  //           className="badge badge-rounded badge-rounded-bordered"
  //           style={this.renderResponseStyle()}
  //         >
  //           {!answer_text ? "Free Response" : answer_text}
  //         </span>
  //       </li>
  //       {!is_correct && correct_answer_id && (
  //         <li>
  //           <span
  //             className="badge badge-rounded badge-rounded-bordered"
  //             style={styles.greenBorderOnly}
  //           >
  //             {correct_answer_id}
  //           </span>
  //         </li>
  //       )}
  //     </>
  //   );
  // };

  // renderResponseStyle = () => {
  //   const {
  //     lesson: { is_correct, correct_answer_id, answer_text },
  //   } = this.props;
  //   if (is_correct && answer_text && correct_answer_id === answer_text) {
  //     return styles.greenFilled;
  //   }
  //   if (!is_correct && answer_text && correct_answer_id !== answer_text) {
  //     return styles.red;
  //   }
  //   return styles.plain;
  // };

  // render() {
  //   const {
  //     lesson: { id },
  //   } = this.props;
  //   return <React.Fragment>{this.responseSection()}</React.Fragment>;
  // }
  handleInputChange = (e) => {
    e.preventDefault();
    const answer = e.target.value;
    // const { onAddFreeResponseAnswerToTest, problem, testSection: { student_test_id } } = this.props;
    // const postBody = { student_test_id, test_problem_id: problem.id, answer };
    // onAddFreeResponseAnswerToTest(postBody, problem.test_section_id);
    // this.setState({ answer });
  };

  render() {
    // const { answerStatus } = this.props;
    // let style = {};
    // !answerStatus.complete ? style = this.state.basicStyle : !answerStatus.isCorrect ? style = this.state.incorrectStyle : style = this.state.correctStyle;
    return (
      <input
        className="badge badge-rounded badge-rounded-bordered"
        // style={style}
        type="text"
        name="answer"
        defaultValue={this.state.answer}
        onChange={this.handleInputChange}
      />
    );
  }
}

FreeResponse.propTypes = {
  lesson: PropTypes.object.isRequired,
};

export default FreeResponse;
