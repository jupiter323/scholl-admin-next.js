import React from "react";
import PropTypes from "prop-types";

class AnswerRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerList: [
        {
          id: 0,
          lable: "A"
        },
        {
          id: 1,
          lable: "B"
        },
        {
          id: 2,
          lable: "C"
        },
        {
          id: 3,
          lable: "D"
        }
      ]
    };
  }

  setSelectedCell = title => {
    return (
      <span
        className="badge-circle badge-circle-bordered"
        style={{
          color: "#fff",
          borderColor: "#19b4e9",
          backgroundColor: "#19b4e9"
        }}
      >
        {title}
      </span>
    );
  };
  setUnSelectedCell = label => {
    return <span className="badge-circle badge-circle-bordered">{label}</span>;
  };

  render() {
    const { answerRow } = this.props;
    return (
      <li className="answers-list-holder">
        {this.props.answerRow.answerInput === true ? (
          <input type="text" className="answer-input" tabIndex={0} />
        ) : (
          <ul className="answer-list">
            {this.state.answerList.map((answer, index) => (
              <li>
                {answer.id === this.props.answerRow.selectedIndex
                  ? this.setSelectedCell(answer.lable)
                  : this.setUnSelectedCell(answer.lable)}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }
}

AnswerRow.propTypes = {
  answerRow: PropTypes.array.isRequired
};

export default AnswerRow;
