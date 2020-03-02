import React from "react";
import PropTypes from "prop-types";

const MathPage = ({
  reading: {
    questionType: {}
  }
}) => (
  <div className="slide">
    <div className="container-sm">
      <div className="graphs-section graphs-students" id = "mathAnalysisBarImg">
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
                  11112%
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

MathPage.propTypes = {
  reading: PropTypes.object.isRequired
};

export default MathPage;
