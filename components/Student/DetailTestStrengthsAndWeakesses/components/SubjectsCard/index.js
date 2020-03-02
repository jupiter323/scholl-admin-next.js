import React from "react";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";

const readingData = (totalScore, totalPossible) => ({
  datasets: [
    {
      data: [totalPossible, totalPossible - totalScore],
      backgroundColor: ["#35a6af", "rgb(234, 234, 234)"]
    }
  ]
});
const writingData = (totalScore, totalPossible) => ({
  datasets: [
    {
      data: [totalPossible, totalPossible - totalScore],
      backgroundColor: ["#389b7d", "rgb(234, 234, 234)"]
    }
  ]
});
const mathData = (totalScore, totalPossible) => ({
  datasets: [
    {
      data: [totalPossible, totalPossible - totalScore],
      backgroundColor: ["#4785f4", "rgb(234, 234, 234)"]
    }
  ]
});

const SubjectsCard = () => (
  <div className="col s12 l8 card-width-772">
    <div className="card-block">
      <h2>Subjects</h2>
      <div className="card-main-full card">
        <div className="card-content">
          <div className="several-charts-row row mb-0">
            <div className="col s4 center-align" id = "analysisReadingCicleImg">
              <div className="chart-block chart-block-182">
                <Doughnut
                  data={() => readingData(81, 100)}
                  width={200}
                  height={200}
                  options={{
                    cutoutPercentage:75
                  }}
                />
                <div className="chart-text">
                  <span className="title">Reading</span>
                  <span className="value">81%</span>
                  <span className="description">
                    <b>38</b> of <b>52</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align" id = "analysisWritingCircleImg">
              <div className="chart-block chart-block-182">
                <Doughnut
                  data={() => writingData(73, 100)}
                  width={200}
                  height={200}
                  options={{
                    cutoutPercentage:75
                  }}
                />
                <div className="chart-text">
                  <span className="title">Writing</span>
                  <span className="value">73%</span>
                  <span className="description"><b>38</b> of <b>52</b></span>
                </div>
              </div>
            </div>
            <div className="col s4 center-align" id = "analysisMathCircleImg">
              <div className="chart-block chart-block-182">
                <Doughnut
                  data={() => mathData(21, 100)}
                  width={200}
                  height={200}
                  options={{
                    cutoutPercentage:75
                  }}
                />
                <div className="chart-text">
                  <span className="title">Math</span>
                  <span className="value">21%</span>
                  <span className="description"><b>38</b> of <b>52</b></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SubjectsCard.propTypes = {
  //   subjectScores: PropTypes.object.isRequired
};

export default SubjectsCard;
