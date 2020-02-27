import React from "react";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";

const data = (totalScore, totalPossible) => ({
  datasets: [
    {
      data: [totalPossible, totalPossible - totalScore],
      backgroundColor: ["#ce237a", "rgb(234, 234, 234)"]
    }
  ]
});

const ReadingPage = ({
  reading: {
    totalCorrect,
    totalPossible,
    passageType: {
      science,
      informationalGraphicPassage,
      historySocialScience,
      USWorldLiterature,
      pairedPassages
    },
    questionType: {
      citingTextualEvidence: {
        citeTextAsEvidence,
        authorsIntentionAndMethod,
        supportOrRefute
      },
      readingClosely: { detailQuestion, supportRefuteAClaim }
    }
  }
}) => (
  <div className="slide">
    <div className="container-sm">
      <div className="row mb-0" style={{ marginTop: "20px" }}>
        <div className="col s12 l5 xl4 chart-column" id="readingScoreRef">
          <div className="chart-block chart-block-large">
            <Doughnut
              data={() => data(totalCorrect, totalPossible)}
              width={250}
              height={250}
              options={{
                cutoutPercentage: 80
              }}
            />
            <div className="chart-text">
              <span className="title">Reading</span>
              <span className="value">{totalCorrect}</span>
              <span className="description">
                out of <b>{totalPossible}</b>
              </span>
            </div>
          </div>
        </div>
        <div className="col s12 l7 xl8">
          <ul className="collapsible expandable collapsible-explain">
            <li>
              <div className="collapsible-header">
                <b>Explain This Graph</b>
              </div>
              <div className="collapsible-body">
                <div className="row mb-0">
                  <div className="col l6">
                    <ul className="legend-list">
                      <li>
                        <div className="legend-frame">
                          <span className="box red darken-2"></span>
                          <strong className="text h3">Focus Here!</strong>
                        </div>
                        <p>
                          Most people with your score would get these correct,
                          but you got them wrong. Work on these and you can pick
                          up some easy points!
                        </p>
                      </li>
                      <li>
                        <div className="legend-frame">
                          <span className="box red lighten-5"></span>
                          <strong className="text h3">Tough Gains</strong>
                        </div>
                        <p>
                          You missed these, but so did most others with a
                          similar score. You’ll likely ﬁnd easier gains
                          elsewhere.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="col l6">
                    <ul className="legend-list">
                      <li>
                        <div className="legend-frame">
                          <span className="box light-green darken-2"></span>
                          <strong className="text h3">Well Done!</strong>
                        </div>
                        <p>
                          You’re overachiving in this category compared to other
                          with your score. Keep up the good work!
                        </p>
                        <p> </p>
                      </li>
                      <li>
                        <div className="legend-frame">
                          <span className="box  light-green lighten-4"></span>
                          <strong className="text h3">Piece o’ Cake</strong>
                        </div>
                        <p>
                          You answered these correctly like others with a
                          similar score.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
           <div className="graphs-section graphs-students">
        <div className="graphs-block">
          <div className="graph-row graph-row-title">
            <div className="graph-col text-column">
              <h3 className="graph-title">
                <span className="badge-rounded-sm light-green lighten-1 badge white-text">
                  100%
                </span>
                Passage Type
              </h3>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear-students">
                <div className="graph-holder" style={{ width: "90%" }}>
                  <div className="graph-admin">
                    <div className="part-red" style={{ width: "20%" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span className="text-large">12</span>
              <span className="text-small">out of</span>
              <span className="text-large">18</span>
            </div>
          </div>
          <div className="graph-row">
            <div className="graph-col text-column">
              <strong className="graph-subtitle">
                <span className="badge-rounded-sm light-green lighten-1 badge white-text">
                  92%
                </span>
                Science
              </strong>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear-students">
                <div className="graph-holder" style={{ width: "50%" }}>
                  <div className="graph-admin">
                    <div className="part-red" style={{ width: "40%" }} />
                  </div>
                  <div className="graph-summary">
                    <div
                      className="graph-summary-holder"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span className="text-large">12</span>
              <span className="text-small">out of</span>
              <span className="text-large">18</span>
            </div>
          </div>
          <div className="graph-row">
            <div className="graph-col text-column">
              <strong className="graph-subtitle">
                <span className="badge-rounded-sm light-green lighten-1 darken-1 badge white-text">
                  78%
                </span>
                Informational Graphic Passage
              </strong>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear-students">
                <div className="graph-holder" style={{ width: "40%" }}>
                  <div className="graph-admin">
                    <div className="part-red" style={{ width: "20%" }} />
                  </div>
                  <div className="graph-summary">
                    <div
                      className="graph-summary-holder"
                      style={{ width: "100%" }}
                    >
                      <div
                        className="block-red"
                        style={{ width: "2%", left: "75%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "2%", left: "85%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "2%", left: "90%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "3%", left: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span className="text-large">12</span>
              <span className="text-small">out of</span>
              <span className="text-large">18</span>
            </div>
          </div>
          <div className="graph-row">
            <div className="graph-col text-column">
            <strong className="graph-subtitle">
                <span className="badge-rounded-sm light-green lighten-1 darken-2 badge white-text">
                  66%
                </span>
                History/Social Science
              </strong>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear-students">
                <div className="graph-holder" style={{ width: "55%" }}>
                  <div className="graph-admin">
                    <div className="part-red" style={{ width: "50%" }} />
                  </div>
                  <div className="graph-summary">
                    <div
                      className="graph-summary-holder"
                      style={{ width: "100%" }}
                    >
                      <div
                        className="block-red"
                        style={{ width: "1%", left: "35%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "1%", left: "48%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "1%", left: "55%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "1%", left: "60%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "1%", left: "70%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "1%", left: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span className="text-large">12</span>
              <span className="text-small">out of</span>
              <span className="text-large">18</span>
            </div>
          </div>
          <div className="graph-row">
            <div className="graph-col text-column">
            <strong className="graph-subtitle">
                <span className="badge-rounded-sm orange darken-5 badge white-text">
                  50%
                </span>
                US &amp; World Literature
              </strong>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear-students">
                <div className="graph-holder" style={{ width: "0%" }}>
                  <div className="graph-admin">
                    <div className="part-red" style={{ width: "0%" }} />
                  </div>
                  <div className="graph-summary">
                    <div
                      className="graph-summary-holder"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span className="text-large">12</span>
              <span className="text-small">out of</span>
              <span className="text-large">18</span>
            </div>
          </div>
          <div className="graph-row">
            <div className="graph-col text-column">
            <strong className="graph-subtitle">
                <span className="badge-rounded-sm light-green lighten-1 darken-2 badge white-text">
                  66%
                </span>
                Paired Passages
              </strong>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear-students">
                <div className="graph-holder" style={{ width: "20%" }}>
                  <div className="graph-admin">
                    <div className="part-red" style={{ width: "30%" }} />
                  </div>
                  <div className="graph-summary">
                    <div
                      className="graph-summary-holder"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span className="text-large">12</span>
              <span className="text-small">out of</span>
              <span className="text-large">18</span>
            </div>
          </div>
        </div>
        <div className="graphs-block">
          <div className="graph-row graph-row-title">
            <div className="graph-col text-column">
            <h3 className="graph-title">
                <span className="badge-rounded-sm light-green lighten-1 badge white-text">
                  100%
                </span>
                Question Type
              </h3>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear-students">
                <div className="graph-holder" style={{ width: "100%" }}>
                  <div className="graph-admin">
                    <div className="part-red" style={{ width: "15%" }} />
                  </div>
                  <div className="graph-summary">
                    <div
                      className="graph-summary-holder"
                      style={{ width: "100%" }}
                    >
                      <div
                        className="block-red"
                        style={{ width: "4%", left: "35%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "5%", left: "48%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "2%", left: "55%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "7%", left: "60%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "10%", left: "70%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "1%", left: "83%" }}
                      />
                      <div
                        className="block-red"
                        style={{ width: "1%", left: "85%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span className="text-large">12</span>
              <span className="text-small">out of</span>
              <span className="text-large">18</span>
            </div>
          </div>
          <div className="graph-row-block">
            <div className="graph-row graph-row-subtitle">
              <div className="graph-col text-column">
              <strong className="graph-subtitle">
                  <span className="badge-rounded-sm light-green lighten-1 darken-1 badge white-text">
                    77%
                  </span>
                  Citing Textual Evidence
                </strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear-students">
                  <div className="graph-holder" style={{ width: "48%" }}>
                    <div className="graph-admin">
                      <div className="part-red" style={{ width: "25%" }} />
                    </div>
                    <div className="graph-summary">
                      <div
                        className="graph-summary-holder"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span className="text-large">12</span>
                <span className="text-small">out of</span>
                <span className="text-large">18</span>
              </div>
            </div>
            <div className="graph-row graph-row-inner">
              <div className="graph-col text-column">
              <strong className="graph-subtitle">
                  <span className="badge-rounded-sm red darken-5 badge white-text">
                    35%
                  </span>
                  Cite Text as Evidence
                </strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear-students">
                  <div className="graph-holder" style={{ width: "20%" }}>
                    <div className="graph-admin">
                      <div className="part-red" style={{ width: "0%" }} />
                    </div>
                    <div className="graph-summary">
                      <div
                        className="graph-summary-holder"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span className="text-large">12</span>
                <span className="text-small">out of</span>
                <span className="text-large">18</span>
              </div>
            </div>
            <div className="graph-row graph-row-inner">
              <div className="graph-col text-column">
              <strong className="graph-subtitle">
                  <span className="badge-rounded-sm light-green lighten-1 darken-2 badge white-text">
                    60%
                  </span>
                  Author’s Intention and Method
                </strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear-students">
                  <div className="graph-holder" style={{ width: "15%" }}>
                    <div className="graph-admin">
                      <div className="part-red" style={{ width: "100%" }} />
                    </div>
                    <div className="graph-summary">
                      <div
                        className="graph-summary-holder"
                        style={{ width: "100%" }}
                      >
                        <div
                          className="block-red"
                          style={{
                            width: "100%",
                            left: "0%"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span className="text-large">12</span>
                <span className="text-small">out of</span>
                <span className="text-large">18</span>
              </div>
            </div>
            <div className="graph-row graph-row-inner">
              <div className="graph-col text-column">
              <strong className="graph-subtitle">
                  <span className="badge-rounded-sm red darken-5 badge white-text">
                    35%
                  </span>
                  Support / Refute a Claim
                </strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear-students">
                  <div className="graph-holder" style={{ width: "25%" }}>
                    <div className="graph-admin">
                      <div className="part-red" style={{ width: "15%" }} />
                    </div>
                    <div className="graph-summary">
                      <div
                        className="graph-summary-holder"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span className="text-large">12</span>
                <span className="text-small">out of</span>
                <span className="text-large">18</span>
              </div>
            </div>
          </div>
          <div className="graph-row-block">
            <div className="graph-row graph-row-subtitle">
              <div className="graph-col text-column">
              <strong className="graph-subtitle">
                  <span className="badge-rounded-sm light-green lighten-1 darken-2 badge white-text">
                    60%
                  </span>
                  Reading Closely
                </strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear-students">
                  <div className="graph-holder" style={{ width: "90%" }}>
                    <div className="graph-admin">
                      <div className="part-red" style={{ width: "25%" }} />
                    </div>
                    <div className="graph-summary">
                      <div
                        className="graph-summary-holder"
                        style={{ width: "100%" }}
                      >
                        <div
                          className="block-red"
                          style={{ width: "4%", left: "35%" }}
                        />
                        <div
                          className="block-red"
                          style={{ width: "5%", left: "48%" }}
                        />
                        <div
                          className="block-red"
                          style={{ width: "2%", left: "55%" }}
                        />
                        <div
                          className="block-red"
                          style={{ width: "7%", left: "60%" }}
                        />
                        <div
                          className="block-red"
                          style={{
                            width: "10%",
                            left: "70%"
                          }}
                        />
                        <div
                          className="block-red"
                          style={{
                            width: "1%",
                            left: "100%"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span className="text-large">12</span>
                <span className="text-small">out of</span>
                <span className="text-large">18</span>
              </div>
            </div>
            <div className="graph-row graph-row-inner">
              <div className="graph-col text-column">
              <strong className="graph-subtitle">
                  <span className="badge-rounded-sm light-green lighten-1 badge white-text">
                    96%
                  </span>
                  Detail Question
                </strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear-students">
                  <div className="graph-holder" style={{ width: "55%" }}>
                    <div className="graph-admin">
                      <div className="part-red" style={{ width: "55%" }} />
                    </div>
                    <div className="graph-summary">
                      <div
                        className="graph-summary-holder"
                        style={{ width: "100%" }}
                      >
                        <div
                          className="block-red"
                          style={{ width: "4%", left: "35%" }}
                        />
                        <div
                          className="block-red"
                          style={{ width: "5%", left: "48%" }}
                        />
                        <div
                          className="block-red"
                          style={{ width: "2%", left: "55%" }}
                        />
                        <div
                          className="block-red"
                          style={{ width: "7%", left: "60%" }}
                        />
                        <div
                          className="block-red"
                          style={{
                            width: "10%",
                            left: "70%"
                          }}
                        />
                        <div
                          className="block-red"
                          style={{
                            width: "1%",
                            left: "100%"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span className="text-large">12</span>
                <span className="text-small">out of</span>
                <span className="text-large">18</span>
              </div>
            </div>
            <div className="graph-row graph-row-inner">
              <div className="graph-col text-column">
              <strong className="graph-subtitle">
                  <span className="badge-rounded-sm light-green lighten-1 darken-1 badge white-text">
                    80%
                  </span>
                  Support / Refute a Claim
                </strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear-students">
                  <div className="graph-holder" style={{ width: "45%" }}>
                    <div className="graph-admin">
                      <div className="part-red" style={{ width: "15%" }} />
                    </div>
                    <div className="graph-summary">
                      <div
                        className="graph-summary-holder"
                        style={{ width: "100%" }}
                      >
                        <div
                          className="block-red"
                          style={{ width: "4%", left: "35%" }}
                        />
                        <div
                          className="block-red"
                          style={{ width: "5%", left: "48%" }}
                        />
                        <div
                          className="block-red"
                          style={{ width: "2%", left: "55%" }}
                        />
                        <div
                          className="block-red"
                          style={{ width: "7%", left: "60%" }}
                        />
                        <div
                          className="block-red"
                          style={{
                            width: "10%",
                            left: "70%"
                          }}
                        />
                        <div
                          className="block-red"
                          style={{
                            width: "1%",
                            left: "100%"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span className="text-large">12</span>
                <span className="text-small">out of</span>
                <span className="text-large">18</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ReadingPage.propTypes = {
  reading: PropTypes.object.isRequired
};

export default ReadingPage;
