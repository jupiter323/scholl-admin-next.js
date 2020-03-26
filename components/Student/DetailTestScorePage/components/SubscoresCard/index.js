import React from "react";
import PropTypes from "prop-types";

class SubScoresCard extends React.Component {
  constructor(props) {
    super(props);
  }
  renderProgressElement = (item) => (
    <div className="progress-block progress-block-md">
      <div className="progress-legend">
        <div className="legend-block">
          <span className="text">{item.name}</span>
        </div>
      </div>
      <div
        className="progress progress-rounded-md"
        style={{ borderRadius: "13px" }}
      >
        <div
          className="determinate"
          style={{
            width: `${(item.current_score / 15) * 100}%`,
            backgroundColor: "#f5883f",
            borderRadius: "13px",
          }}
        >
          <span className="progress-label">
            {item.current_score}
          </span>
        </div>
      </div>
    </div>
  )
  mapProgressBar = () => {
    const { subScores } = this.props;
    const newRowIndex = Math.floor(subScores.length / 2);
    return (
      <React.Fragment><div className="col s12 m6">
        {subScores.map((item, index) => {
          if (index > newRowIndex) {

          } else {
            return this.renderProgressElement(item);
          }
        })}
      </div>
      <div className="col s12 m6">
        {subScores.map((item, index) => {
          if (index <= newRowIndex) {

          } else {
            return this.renderProgressElement(item);
          }
        })}
      </div></React.Fragment>);
  }
  render() {
    return (
      <div className="col s12 l6 card-width-546" >
        <div className="card-block">
          <h2>
            Subscores <span className="separator">|</span>{" "}
            <span className="quantity">1 to 15</span>
          </h2>
          <div className="card-main-full card">
            <div className="card-content">
              <div className="progress-section">
                <div className="row mb-0">
                  {this.mapProgressBar()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


SubScoresCard.propTypes = {
  subScores: PropTypes.object.isRequired,
};

export default SubScoresCard;
