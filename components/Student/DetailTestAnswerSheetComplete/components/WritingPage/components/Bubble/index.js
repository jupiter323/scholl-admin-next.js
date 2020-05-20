import React from "react";
import PropTypes from "prop-types";

const styles = {
  red: {
    position: "relative",
    color: "#fff",
    borderColor: "#fff",
    border: "1px solid",
    backgroundColor: "#db1d41",
    height: "19px",
    width: "19px",
    borderRadius: "50%"
  },
  greenFilled: {
    position: "relative",
    color: "#fff",
    borderColor: "#32955c",
    border: "1px solid",
    backgroundColor: "#32955c",
    height: "19px",
    width: "19px",
    borderRadius: "50%"
  },
  greenBorderOnly: {
    position: "relative",
    color: "#32955c",
    borderColor: "#32955c",
    border: "1px solid",
    backgroundColor: "#fff",
    height: "19px",
    width: "19px",
    borderRadius: "50%"
  },
  plain: {
    position: "relative",
    color: "#a6a8ab",
    border: "1px solid",
    borderColor: "#a6a8ab",
    height: "19px",
    width: "19px",
    borderRadius: "50%"
  }
};

class BubbleGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  mapEmptyBubbles = id => {
    const letters = ["A", "B", "C", "D"];
    const {
      problem: { student_answer }
    } = this.props;
    return letters.map(letter => (
      <li key={letter}>
        <form>
          <label
            htmlFor={`${id}${letter}`}
            style={student_answer ? this.renderBubbleStyle(letter) : styles.plain}
          >
            <span style={{ display: "block", marginTop: "2px", paddingLeft: "4.5px" }}>
              {letter}
            </span>
          </label>
        </form>
      </li>
    ));
  };

  renderBubbleStyle = letter => {
    const {
      problem: { correct_answer, student_answer }
    } = this.props;
    if (student_answer === letter && student_answer === correct_answer) {
      return styles.greenFilled;
    }
    if (student_answer === letter && student_answer !== correct_answer) {
      return styles.red;
    }
    if (letter !== student_answer && letter === !correct_answer) {
      return styles.plain;
    }
    if (letter !== student_answer && letter === correct_answer) {
      return styles.greenBorderOnly;
    }
    return styles.plain;
  };

  render() {
    const {
      problem: { test_problem_id }
    } = this.props;
    return <React.Fragment>{this.mapEmptyBubbles(test_problem_id)}</React.Fragment>;
  }
}

BubbleGroup.propTypes = {
  problem: PropTypes.object.isRequired
};

export default BubbleGroup;
