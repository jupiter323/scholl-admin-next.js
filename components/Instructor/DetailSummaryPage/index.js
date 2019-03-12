import React from 'react';
// import PropTypes from 'prop-types';

class DetailSummaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <div className="content-section">
        <div className="content-section-holder">
          <div className="container">
            <div className="cards-section">
              <div className="dashboard-section">
                <div className="dashboard-row js-sortable js-masonry row" data-masonry-options='{"columnWidth": 1, "itemSelector": ".grid-item", "gutter": 31}'>
                  <div className="grid-item card-width-366">
                    <div className="card-block">
                      <h2>Average Improvement</h2>
                      <div className="card-main-full card">
                        <div className="card-content">
                          <ul className="points-list-custom">
                            <li className="point-custom-large style-aqua">
                              <span className="badge-circle">218 <span className="badge-text">points</span></span>
                            </li>
                            <li>
                              <ul>
                                <li className="style-green-light">
                                  <span className="badge-circle">+78 <span className="badge-text">Reading &amp; Writing</span></span>
                                </li>
                                <li className="style-blue-lightdark">
                                  <span className="badge-circle">120 <span className="badge-text">Math</span></span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item card-width-556">
                    <div className="card-block">
                      <h2>Pipeline</h2>
                      <div className="card-main-full card">
                        <div className="card-content">
                          <ul className="points-list-bordered-large">
                            <li className="style-unactive">
                              <span className="badge-circle badge-circle-bordered">26 <span className="badge-text">Unactivated</span></span>
                            </li>
                            <li className="style-current">
                              <span className="badge-circle badge-circle-bordered">5 <span className="badge-text">Current</span></span>
                            </li>
                            <li className="style-complete">
                              <span className="badge-circle badge-circle-bordered">18 <span className="badge-text">Complete</span></span>
                            </li>
                            <li className="style-waiting">
                              <span className="badge-circle badge-circle-bordered">12 <span className="badge-text">Waiting for <br />Final Score</span></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item card-width-556 order-sm-4">
                    <div className="card-block">
                      <h2>Student Improvement</h2>
                      <div className="card-main-full card">
                        <div className="card-content">
                          <ul className="vertical-graphs-container">
                            <li className="vertical-graph-block">
                              <div className="vertical-graph-frame">
                                <span className="vertical-graph">
                                  <span className="graph-value">25%</span>
                                  <span className="vertical-graph-box red darken-1" style={{ height: '25%' }}></span>
                                </span>
                                <span className="graph-legend">no gain</span>
                              </div>
                            </li>
                            <li className="vertical-graph-block">
                              <div className="vertical-graph-frame">
                                <span className="vertical-graph">
                                  <span className="graph-value">35%</span>
                                  <span className="vertical-graph-box pink darken-3" style={{ height: '35%' }}></span>
                                </span>
                                <span className="graph-legend">0 to 50 <br />points</span>
                              </div>
                            </li>
                            <li className="vertical-graph-block">
                              <div className="vertical-graph-frame">
                                <span className="vertical-graph">
                                  <span className="graph-value">65%</span>
                                  <span className="vertical-graph-box purple accent-4" style={{ height: '65%' }}></span>
                                </span>
                                <span className="graph-legend">50 to 99 <br />points</span>
                              </div>
                            </li>
                            <li className="vertical-graph-block">
                              <div className="vertical-graph-frame">
                                <span className="vertical-graph">
                                  <span className="graph-value">75%</span>
                                  <span className="vertical-graph-box purple darken-3" style={{ height: '75%' }}></span>
                                </span>
                                <span className="graph-legend">100-149 <br />points</span>
                              </div>
                            </li>
                            <li className="vertical-graph-block">
                              <div className="vertical-graph-frame">
                                <span className="vertical-graph">
                                  <span className="graph-value">60%</span>
                                  <span className="vertical-graph-box  deep-purple accent-4" style={{ height: '60%' }}></span>
                                </span>
                                <span className="graph-legend">150-199 <br />points</span>
                              </div>
                            </li>
                            <li className="vertical-graph-block">
                              <div className="vertical-graph-frame">
                                <span className="vertical-graph">
                                  <span className="graph-value">90%</span>
                                  <span className="vertical-graph-box  indigo accent-4" style={{ height: '90%' }}></span>
                                </span>
                                <span className="graph-legend">200+ <br />points</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item card-width-366 order-sm-3">
                    <div className="card-block">
                      <h2>Target Scores</h2>
                      <div className="card-main-full card">
                        <div className="card-content">
                          <div className="chart-container chart-container-xllarge">
                            <div className="chart-holder">
                              <span className="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 89}' data-duration="1">
                                <svg width="207px" height="207px" viewBox="0 0 207 207" preserveAspectRatio="xMidYMid meet">
                                  <path fill="none" style={{ strokeWidth: '42', stroke: '#eaeaea' }} d="M 26.909645526174018 134.16215259197702 A 82.5 82.5 0 1 1 180.09035447382598 134.16215259197702"></path>
                                  <path data-dinamic fill="none" style={{ strokeWidth: '42', stroke: '#00bbf7' }} d="M 26.909645526174018 134.16215259197702 A 82.5 82.5 0 0 1 26.909645526174018 134.16215259197702"></path>
                                </svg>
                              </span>
                              <span className="chart-value" style={{ backgroundColor: '#00bbf7' }}><span data-count-up data-start-val="0" data-end-val="89" data-duration="1">89</span>%</span>
                            </div>
                            <div className="chart-row">
                              <div className="chart-col chart-start">
                                <b className="amount-text">Total Students</b>
                              </div>
                              <div className="chart-col chart-end">
                                <b className="amount-text">Hit Target Score</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-width-750 order-sm-5">
                  <div className="card-block">
                    <h2>Average (per course)</h2>
                    <ul className="alerts-list list-in-columns">
                      <li className="card card-alert">
                        <span className="icon-box icon-box green darken-3"><i className="icon-clock"></i></span>
                        <div className="alert-text green-text text-darken-3">
                          <p><b>Hours of Instruction</b></p>
                          <div className="value"><b className="text-large">22.3</b></div>
                        </div>
                      </li>
                      <li className="card card-alert">
                        <span className="icon-box purple accent-4"><i className="icon-books"></i></span>
                        <div className="alert-text purple-text text-accent-4">
                          <p><b>Lessons</b></p>
                          <div className="value"><b className="text-large">59.7</b></div>
                        </div>
                      </li>
                      <li className="card card-alert">
                        <span className="icon-box light-blue darken-1"><i className="icon-note"></i></span>
                        <div className="alert-text light-blue-text text-darken-1">
                          <p><b>Worksheets</b></p>
                          <div className="value"><b className="text-large">4.6</b></div>
                        </div>
                      </li>
                      <li className="card card-alert">
                        <span className="icon-box pink darken-1"><i className="icon-clock"></i></span>
                        <div className="alert-text pink-text text-darken-1">
                          <p><b>Pactice Tests</b></p>
                          <div className="value"><b className="text-large">1.4</b></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailSummaryPage;
