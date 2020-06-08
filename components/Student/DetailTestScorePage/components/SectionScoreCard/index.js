import React from "react";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";

class SectionScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColorList: [
        {
          id: "Writing and Language",
          colorString: ["#51b349", "rgb(234, 234, 234)"],
        },
        {
          id: "Reading",
          colorString: ["#35a6af", "rgb(234, 234, 234)"],
        },
        {
          id: "Math",
          colorString: ["#567ebf", "rgb(234, 234, 234)"],
        },
      ],
    };
  }
  getCircleBarData = (currentScore, totalPossible, name) => ({
    datasets: [
      {
        data: [totalPossible, totalPossible - currentScore],
        backgroundColor: this.getBgColorByName(name),
      },
    ],
  });

  getBgColorByName = (name) => {
    const { bgColorList } = this.state;
    const ids = bgColorList.map(element => element.id);
    const targetIndex = ids.findIndex(ids => ids === name);
    return bgColorList[targetIndex].colorString;
  }

  mapSectionScores = () => Object.values(this.props.sectionScores).map(score => (
    <div className="col s6 center-align">
      <div className="chart-block chart-block-218">
        <Doughnut
          data={() =>
            this.getCircleBarData(score.current_score, 800, score.name)
          }
          width={215}
          height={215}
          options={{
            cutoutPercentage: 80,
          }}
        />
        <div className="chart-text">
          <span className="title">{score.name === 'Writing and Language' ? 'Writing & Language' : score.name}</span>
          <span className="value">{score.current_score}</span>
          <span className="description">(+{score.delta ? score.delta : 0})</span>
        </div>
      </div>
    </div>
  ))
  render() {
    return (
      <div className="col s12 l6 card-width-546">
        <div className="card-block">
          <h2>
            Section Scores <span className="separator">|</span>
            <span className="quantity">200 to 800</span>
          </h2>
          <div className="card-main-full card">
            <div className="card-content">
              <div className="several-charts-row row mb-0">
                {this.props.sectionScores && this.mapSectionScores()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
SectionScoreCard.propTypes = {
  sectionScores: PropTypes.object.isRequired,
};
export default SectionScoreCard;
