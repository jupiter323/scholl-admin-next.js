import React from "react";
import PropTypes from "prop-types";

const styles = {
  red: {
    color: "#fff",
    borderColor: "#fff",
    border: "1px solid",
    backgroundColor: "#db1d41",
  },
  greenFilled: {
    color: "#fff",
    borderColor: "#32955c",
    border: "1px solid",
    backgroundColor: "#32955c",
  },
  greenBorderOnly: {
    color: "#32955c",
    borderColor: "#32955c",
    border: "1px solid",
    backgroundColor: "#fff",
  },
  plain: {
    color: "#a6a8ab",
    border: "1px solid",
    borderColor: "#a6a8ab",
  },
};

class FreeResponse extends React.Component {
  constructor(props) {
    super(props);
  }

  responseSection = () => {
    const {
      lesson: { is_correct, answer_text, correct_answer_id },
    } = this.props;
    return (
      <>
        <li>
          <span
            className="badge badge-rounded badge-rounded-bordered"
            style={this.renderResponseStyle()}
          >
            {answer_text}
          </span>
        </li>
        {!is_correct && correct_answer_id && (
          <li>
            <span
              className="badge badge-rounded badge-rounded-bordered"
              style={styles.greenBorderOnly}
            >
              {correct_answer_id}
            </span>
          </li>
        )}
      </>
    );
  };

  renderResponseStyle = () => {
    const {
      lesson: { is_correct, correct_answer_id, answer_text },
    } = this.props;
    if (is_correct && correct_answer_id === answer_text) {
      return styles.greenFilled;
    }
    if (!is_correct && correct_answer_id !== answer_text) {
      return styles.red;
    }
    return styles.plain;
  };

  render() {
    const {
      lesson: { id },
    } = this.props;
    return <React.Fragment>{this.responseSection()}</React.Fragment>;
  }
}

FreeResponse.propTypes = {
  lesson: PropTypes.object.isRequired,
};

export default FreeResponse;
