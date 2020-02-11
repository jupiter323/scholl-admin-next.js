/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import { Doughnut } from "react-chartjs-2";

// import { data, subjectMap, testSectionCardColorMap, graphColorMap } from '../../../utils/testSectionCardUtils';

export const data = percentage => ({
  datasets: [
    {
      data: [percentage, 100 - percentage],
      backgroundColor: ["#00bbf7", "#eaeaea"],
    },
  ],
});

class TestCard extends React.Component {
  handleDropdownClick = event => {
    const {
      onSetDropdown,
      onCloseDropdown,
      dropdownIsOpen,
      index,
    } = this.props;
    event.preventDefault();
    if (dropdownIsOpen) {
      return onCloseDropdown();
    }
    return onSetDropdown(index);
  };

  mapTestSubjects = () => {
    const { test, futureTest } = this.props;
    const { subjects } = test;
    return subjects.map((subject, index) => (
      <div className="chart-block chart-block-test" key={index}>
        <Choose>
          <When condition={!futureTest}>
            <Doughnut
              data={() => data(subjects.length ? (subject.currentScore / subject.targetScore) * 100 : 0)}
              height={104}
              width={104}
              options={{ cutoutPercentage: 80 }}
            />
            <span className="value-max" style={{ top: "0px" }}>
              {subject.targetScore}
            </span>
          </When>
          <Otherwise>
            <span className="value-max">{subject.targetScore}</span>
            <div className="js-donut-chart"></div>
          </Otherwise>
        </Choose>
        <div className="chart-text">
          <Choose>
            <When condition={subject.subject === "Reading & Writing" && !futureTest}>
              <span className="title">
                Reading <br /> &amp; Writing
              </span>
            </When>
            <Otherwise>
              <span className="title">{subject.subject}</span>
            </Otherwise>
          </Choose>
          <span className="value">{subject.currentScore}</span>
          <span className="description">+{subject.totalGain}</span>
        </div>
      </div>
    ));
  };

  render() {
    const {
      test,
      futureTest = false,
      dropdownIndex,
      index,
      dropdownIsOpen,
      onEnterAnswers,
      onEditTest,
      onDownloadReport,
      onDeleteTest,
      openTestScores,
    } = this.props;
    const {
      test_description,
      version = "",
      assignment_date,
      weekNumber,
      initialScore,
      targetScore,
      currentScore,
    } = test;
    return (
      <div className="col s12 m8 l7 xl5">
        <div className="card-main-col">
          <div className={futureTest ? "card-test card-main card-disabled card" : "card-test card-main card"}>
            <div className="card-content">
              <div className=" card-panel-row row mb-0">
                <div className="col s7">
                  <div className="card-title-block" style={{ marginTop: !futureTest ? "-30px" : "0px" }}>
                    <h4 className="h2" style={{ minWidth: "200px" }}>
                      <a href="#" onClick={() => openTestScores({ index })}>
                        {test_description}
                      </a>
                    </h4>
                    <time className="date" style={{ marginBottom: futureTest ? "20px" : "" }} >
                      {Moment(assignment_date).format("MM/DD/YY")} (week {weekNumber})
                    </time>
                    <If condition={!futureTest}>
                      <p>Version {version}</p>
                    </If>
                  </div>
                  <div className="chart-container chart-container-test">
                    <div className="chart-holder">
                      <span className="svg-curved-bar">
                        <Doughnut
                          data={() => data(initialScore ? Number((currentScore - initialScore) / (targetScore - initialScore)) * 100 : 0)}
                          options={{
                            circumference: 1 * Math.PI,
                            rotation: 1 * Math.PI,
                            cutoutPercentage: 60,
                            tooltips: false,
                          }}
                        />
                        <span className="js-diff-holder">
                          <span className="js-diff">
                            <span
                              className="txt"
                              style={{
                                opacity: "1",
                                bottom: "75px",
                                color: "black",
                                fontWeight: "600",
                                fontSize: "12px",
                              }}
                            >
                              +{currentScore - initialScore}
                            </span>
                          </span>
                        </span>
                      </span>
                      <span className="chart-value" style={{ backgroundColor: "#00bbf7" }}>
                        <span > {currentScore}</span>
                      </span>
                    </div>
                    <div className="chart-row">
                      <div className="chart-col chart-start">
                        <span className="amount">{initialScore}</span> <br />
                        <span className="amount-text">initial</span>
                      </div>
                      <div className="chart-col chart-end">
                        <span className="amount">{targetScore}</span> <br />
                        <span className="amount-text">target</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s5 right-align">
                  <div
                    className="row icons-row"
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="dropdown-block col">
                      <a href="#" className="dropdown-trigger btn" onClick={this.handleDropdownClick}>
                        <i className="material-icons dots-icon">more_vert</i>
                      </a>
                      <If condition={dropdownIsOpen && dropdownIndex === index}>
                        <ul
                          id="dropdown01"
                          className="dropdown-content"
                          style={{
                            display: "block",
                            transformOrigin: "0px 0px 0px",
                            opacity: "1",
                            transform: "scaleX(1) scaleY(1)",
                          }}
                        >
                          <li>
                            <a href="#" onClick={onEnterAnswers}>
                              Enter Answers
                            </a>
                          </li>
                          <li>
                            <a href="#" onClick={onEditTest}>
                              Edit
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              onClick={onDownloadReport}
                              className="disabled"
                            >
                              Download Report
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              onClick={onDeleteTest}
                              className="red-text text-darken-3"
                            >
                              Delete
                            </a>
                          </li>
                        </ul>
                      </If>
                    </div>
                  </div>
                  {this.mapTestSubjects()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TestCard.propTypes = {
  index: PropTypes.number,
  futureTest: PropTypes.bool,
  dropdownIndex: PropTypes.number,
  test: PropTypes.object.isRequired,
  onEditTest: PropTypes.func.isRequired,
  onDeleteTest: PropTypes.func.isRequired,
  onSetDropdown: PropTypes.func.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  onEnterAnswers: PropTypes.func.isRequired,
  onCloseDropdown: PropTypes.func.isRequired,
  onDownloadReport: PropTypes.func.isRequired,
  openTestScores: PropTypes.func.isRequired,
};

export default TestCard;
