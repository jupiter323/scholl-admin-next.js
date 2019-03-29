import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class DetailSummaryPage extends React.Component {
  render() {
    return (
        <div className="content-section">
          <div className="container">
            <div className="cards-section">
              <div className="row d-flex justify-content-center mb-0">
                <div className="col s12 l7 card-width-747">
                  <div className="card-main card card-chart">
                    <div className="card-content">
                      <h2>Course Progress</h2>
                      <div className="progress-block">
                        <div className="progress-legend">
                          <div className="legend-block">
                            <span className="small-text">Start Date</span>
                            <time dateTime="2018-06-13" className="large-text">6/13/18</time>
                          </div>
                          <div className="legend-block">
                            <span className="small-text">Test Date</span>
                            <time dateTime="2018-10-06" className="large-text">Oct SAT (10/6/18)</time>
                          </div>
                        </div>
                        <div className="progress">
                          <div className="determinate" style={{ width: '70%' }}>
                            <span className="progress-label">75%</span>
                          </div>
                        </div>
                      </div>
                      <div className="charts-container">
                        <div className="row mb-0">
                          <div className="col">
                            <div className="chart-block">
                              <div className="js-donut-chart js-donut-middle" data-stroke-width="20" data-source='./inc/score-data-improvement.json'></div>
                              <div className="chart-text">
                                <span className="title">Improvement</span>
                                <span className="value">90%</span>
                                <span className="description">vs target score</span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="chart-block">
                              <div className="js-donut-chart js-donut-middle" data-stroke-width="20" data-source='./inc/score-data-lessons.json'></div>
                              <div className="chart-text">
                                <span className="title">Lessons</span>
                                <span className="value">78%</span>
                                <span className="description">vs scheduled lessons</span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="chart-block">
                              <div className="js-donut-chart js-donut-middle" data-stroke-width="20" data-source='./inc/score-data-instruction.json'></div>
                              <div className="chart-text">
                                <span className="title">Instruction</span>
                                <span className="value">63%</span>
                                <span className="description">vs scheduled instruction</span>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="chart-block">
                              <div className="js-donut-chart js-donut-middle" data-stroke-width="20" data-source='./inc/score-data-practice-tests.json'></div>
                              <div className="chart-text">
                                <span className="title">Practice Tests</span>
                                <span className="value">50%</span>
                                <span className="description">vs scheduled tests</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="chart-legend">
                          <div className="row mb-0">
                            <div className="col legend-frame">
                              <span className="box complete"></span>
                              <span className="text">Complete</span>
                            </div>
                            <div className="col legend-frame">
                              <span className="box behind"></span>
                              <span className="text">Behind Schedule</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 l5 card-width-366">
                  <div className="card-main card card-chart">
                    <div className="card-content">
                      <h2>Overdue Work</h2>
                      <ul className="points-list-large">
                        <li className="style-red-darken">
                          <span className="badge-circle">16 <span className="badge-text">Lessons</span></span>
                        </li>
                        <li className="style-pink-darken">
                          <span className="badge-circle">0 <span className="badge-text">Worksheets</span></span>
                        </li>
                        <li>
                          <span className="badge-circle">2 <span className="badge-text">Quizzes</span></span>
                        </li>
                        <li className="style-blue-light">
                          <span className="badge-circle">0 <span className="badge-text">Quizzes Tests</span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mb-0">
                <div className="col s12 l5 card-width-366">
                  <ul className="alerts-list">
                    <li className="card card-alert">
                      <span className="icon-box purple darken-3"><i className="icon-pencil2"></i></span>
                      <div className="alert-text purple-text text-darken-3">
                        <p><b>Questions Answered</b></p>
                        <div className="value"><b className="text-large">734</b></div>
                      </div>
                    </li>
                    <li className="card card-alert alert-blue-dark">
                      <span className="icon-box cyan darken-2"><i className="icon-videocam"></i></span>
                      <div className="alert-text cyan-text text-darken-2">
                        <p><b>Video Watched</b></p>
                        <div className="value">
                          <b className="text-large">4</b><span className="text-small">hrs</span> <b className="text-large">26</b><span className="text-small">min</span>
                        </div>
                      </div>
                    </li>
                    <li className="card card-alert">
                      <span className="icon-box pink darken-2"><i className="icon-note"></i></span>
                      <div className="alert-text pink-text text-darken-2">
                        <p><b>Notes Taken</b></p>
                        <div className="value"><b className="text-large">59</b></div>
                      </div>
                    </li>
                    <li className="card card-alert">
                      <span className="icon-box green darken-3"><i className="icon-clock"></i></span>
                      <div className="alert-text green-text text-darken-3">
                        <p><b>Total Time Logged In</b></p>
                        <div className="value">
                          <b className="text-large">8</b><span className="text-small">hrs</span> <b className="text-large">14</b><span className="text-small">min</span>
                        </div>
                      </div>
                    </li>
                    <li className="card card-alert">
                      <span className="icon-box orange darken-2"><i className="icon-arrow-right"></i></span>
                      <div className="alert-text orange-text text-darken-2">
                        <p><b>Last Log In</b></p>
                        <div className="value">
                          <span className="text-large">3:48</span> <span className="text-small">pm</span>
                        </div>
                      </div>
                    </li>
                    <li className="card card-alert">
                      <span className="icon-box red"><i className="icon-bell"></i></span>
                      <div className="alert-text red-text">
                        <p><b>On-Time Percentage</b></p>
                        <div className="value"><b className="text-large">73%</b></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col s12 l7 card-width-747">
                  <div className="card-main card card-chart">
                    <div className="card-content">
                      <h2>Test Scores</h2>
                      <div className="tabs-container tabs-charts-container">
                        <ul className="tabs">
                          <li className="tab col s5 l4">
                            <a className="active" href="#scores_tab01">Composite Score</a>
                          </li>
                          <li className="tab col s5 l4">
                            <a href="#scores_tab02">Subject Scores</a>
                          </li>
                        </ul>
                        <div id="scores_tab01" className="tab-content">
                          <div className="card-panel panel-scores light-blue accent-2 white-text z-depth-1">
                            <ul className="panel-list">
                              <li className="panel-block">
                                <strong className="text-small">Reading</strong>
                                <strong className="text-large">+80</strong>
                              </li>
                              <li className="panel-block">
                                <strong className="text-small">Writing</strong>
                                <strong className="text-large">+30</strong>
                              </li>
                              <li className="panel-block">
                                <strong className="text-small">Math</strong>
                                <strong className="text-large">+110</strong>
                              </li>
                              <li className="panel-block">
                                <strong className="text-small">Composite</strong>
                                <strong className="text-large">+220</strong>
                              </li>
                            </ul>
                          </div>
                          <div className="chart-line-container js-scrollable-chart">
                            <div className="js-spline-chart" data-source='./inc/score-spline-data_composite.json'>
                            </div>
                          </div>
                        </div>
                        <div id="scores_tab02" className="tab-content">
                          <div className="card-panel panel-scores light-blue accent-2 white-text">
                            <ul className="panel-list">
                              <li className="panel-block">
                                <strong className="text-small">Reading</strong>
                                <strong className="text-large">+55</strong>
                              </li>
                              <li className="panel-block">
                                <strong className="text-small">Writing</strong>
                                <strong className="text-large">+42</strong>
                              </li>
                              <li className="panel-block">
                                <strong className="text-small">Math</strong>
                                <strong className="text-large">+99</strong>
                              </li>
                              <li className="panel-block">
                                <strong className="text-small">Composite</strong>
                                <strong className="text-large">+196</strong>
                              </li>
                            </ul>
                          </div>
                          <div className="js-scrollable-chart">
                            <div className="js-spline-chart" data-source='./inc/score-spline-data_subject.json'>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-block">
              <h2 className="h1">Strengths &amp; Weaknesses</h2>
              <div className="card-main-full card">
                <div className="tabs-container">
                  <div className="card-panel light-blue accent-2 white-text">
                    <ul className="tabs">
                      <li className="tab col s4 l3">
                        <a className="active" href="#tabs_tab01">Reading</a>
                      </li>
                      <li className="tab col s4 l3">
                        <a href="#tabs_tab02">Writing</a>
                      </li>
                      <li className="tab col s4 l3">
                        <a href="#tabs_tab02">Math</a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-content tabs-content">
                    <div id="tabs_tab01" className="tab-content">
                      <div className="row mb-0">
                        <div className="col s12 l5 xl4 chart-column">
                          <div className="chart-block chart-block-large">
                            <div className="js-donut-chart js-donut-large" data-stroke-width="32" data-source='./inc/score-data-reading.json'></div>
                            <div className="chart-text">
                              <span className="title">Reading</span>
                              <span className="value">39</span>
                              <span className="description">out of <b>52</b></span>
                            </div>
                          </div>
                        </div>
                        <div className="col s12 l7 xl8">
                          <ul className="collapsible expandable collapsible-explain">
                            <li>
                              <div className="collapsible-header"><b>Explain This Graph</b></div>
                              <div className="collapsible-body">
                                <div className="row mb-0">
                                  <div className="col l6">
                                    <ul className="legend-list">
                                      <li>
                                        <div className="legend-frame">
                                          <span className="box red darken-2"></span>
                                          <strong className="text h3">Focus Here!</strong>
                                        </div>
                                        <p>Most people with your score would get these correct, but you got them wrong. Work on these and you can pick up some easy points!</p>
                                      </li>
                                      <li>
                                        <div className="legend-frame">
                                          <span className="box red lighten-5"></span>
                                          <strong className="text h3">Tough Gains</strong>
                                        </div>
                                        <p>You missed these, but so did most others with a similar score. You’ll likely ﬁnd easier gains elsewhere.</p>
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
                                        <p>You’re overachiving in this category compared to other with your score. Keep up the good work!</p>
                                      </li>
                                      <li>
                                        <div className="legend-frame">
                                          <span className="box  light-green lighten-4"></span>
                                          <strong className="text h3">Piece o’ Cake</strong>
                                        </div>
                                        <p>You answered these correctly like others with a similar score.</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="graphs-section">
                        <div className="graphs-block">
                          <div className="graph-row graph-row-title">
                            <div className="graph-col text-column">
                              <h3 className="graph-title">Passage Type</h3>
                            </div>
                            <div className="graph-col graph-container">
                              <div className="graph-linear">
                                <div className="part-left">
                                  <div className="part-green-light" style={{ width: '100%' }}>
                                    <div className="part-red" style={{ width: '80%' }}></div>
                                  </div>
                                </div>
                                <div className="part-right">
                                  <div className="part-red-light" style={{ width: '80%'}}>
                                    <div className="part-green" style={{ width: '0' }}></div>
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
                              <strong className="graph-subtitle">Science</strong>
                            </div>
                            <div className="graph-col graph-container">
                              <div className="graph-linear">
                                <div className="part-left">
                                  <div className="part-green-light" style={{ width: '85%' }}>
                                    <div className="part-red" style={{ width: '0' }}></div>
                                  </div>
                                </div>
                                <div className="part-right">
                                  <div className="part-red-light" style={{ width: '100%' }}>
                                    <div className="part-green" style={{ width: '70%' }}></div>
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
                              <strong className="graph-subtitle">Informational Graphic Passage</strong>
                            </div>
                            <div className="graph-col graph-container">
                              <div className="graph-linear">
                                <div className="part-left">
                                  <div className="part-green-light" style={{ width: '75%' }}>
                                    <div className="part-red" style={{ width: '70%' }}></div>
                                  </div>
                                </div>
                                <div className="part-right">
                                  <div className="part-red-light" style={{ width: '70%' }}>
                                    <div className="part-green" style={{ width: '0' }}></div>
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
                              <strong className="graph-subtitle">History/Social Science</strong>
                            </div>
                            <div className="graph-col graph-container">
                              <div className="graph-linear">
                                <div className="part-left">
                                  <div className="part-green-light" style={{ width: '85%' }}>
                                    <div className="part-red" style={{ width: '5%' }}></div>
                                  </div>
                                </div>
                                <div className="part-right">
                                  <div className="part-red-light" style={{ width: '15%' }}>
                                    <div className="part-green" style={{ width: '0' }}></div>
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
                              <strong className="graph-subtitle">US &amp; World Literature</strong>
                            </div>
                            <div className="graph-col graph-container">
                              <div className="graph-linear">
                                <div className="part-left">
                                  <div className="part-green-light" style={{ width: '45%' }}>
                                    <div className="part-red" style={{ width: '85%' }}></div>
                                  </div>
                                </div>
                                <div className="part-right">
                                  <div className="part-red-light" style={{ width: '0' }}>
                                    <div className="part-green" style={{ width: '0' }}></div>
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
                              <strong className="graph-subtitle">Paired Passages</strong>
                            </div>
                            <div className="graph-col graph-container">
                              <div className="graph-linear">
                                <div className="part-left">
                                  <div className="part-green-light" style={{ width: '35%' }}>
                                    <div className="part-red" style={{ width: '0' }}></div>
                                  </div>
                                </div>
                                <div className="part-right">
                                  <div className="part-red-light" style={{ width: '60%' }}>
                                    <div className="part-green" style={{ width: '10%' }}></div>
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
                              <h3 className="graph-title">Question Type</h3>
                            </div>
                            <div className="graph-col graph-container">
                              <div className="graph-linear">
                                <div className="part-left">
                                  <div className="part-green-light" style={{ width: '85%' }}>
                                    <div className="part-red" style={{ width: '12%' }}></div>
                                  </div>
                                </div>
                                <div className="part-right">
                                  <div className="part-red-light" style={{ width: '95%' }}>
                                    <div className="part-green" style={{ width: '0' }}></div>
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
                          {/* <!-- block with inners rows --> */}
                          <div className="graph-row-block">
                            <div className="graph-row graph-row-subtitle">
                              <div className="graph-col text-column">
                                <strong className="graph-subtitle">Citing Textual Evidence</strong>
                              </div>
                              <div className="graph-col graph-container">
                                <div className="graph-linear">
                                  <div className="part-left">
                                    <div className="part-green-light" style={{ width: '55%' }}>
                                      <div className="part-red" style={{ width: '0' }}></div>
                                    </div>
                                  </div>
                                  <div className="part-right">
                                    <div className="part-red-light" style={{ width: '70%' }}>
                                      <div className="part-green" style={{ width: '12%' }}></div>
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
                                <strong className="graph-subtitle">Cite Text as Evidence</strong>
                              </div>
                              <div className="graph-col graph-container">
                                <div className="graph-linear">
                                  <div className="part-left">
                                    <div className="part-green-light" style={{ width: '20%' }}>
                                      <div className="part-red" style={{ width: '85%' }}></div>
                                    </div>
                                  </div>
                                  <div className="part-right">
                                    <div className="part-red-light" style={{ width: '70%' }}>
                                      <div className="part-green" style={{ width: '0' }}></div>
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
                                <strong className="graph-subtitle">Author’s Intention and Method</strong>
                              </div>
                              <div className="graph-col graph-container">
                                <div className="graph-linear">
                                  <div className="part-left">
                                    <div className="part-green-light" style={{ width: '55%' }}>
                                      <div className="part-red" style={{ width: '7%' }}></div>
                                    </div>
                                  </div>
                                  <div className="part-right">
                                    <div className="part-red-light" style={{ width: '15%' }}>
                                      <div className="part-green" style={{ width: '0' }}></div>
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
                                <strong className="graph-subtitle">Support / Refute a Claim</strong>
                              </div>
                              <div className="graph-col graph-container">
                                <div className="graph-linear">
                                  <div className="part-left">
                                    <div className="part-green-light" style={{ width: '47%' }}>
                                      <div className="part-red" style={{ width: '12%' }}></div>
                                    </div>
                                  </div>
                                  <div className="part-right">
                                    <div className="part-red-light" style={{ width: '0' }}>
                                      <div className="part-green" style={{ width: '0' }}></div>
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
                                <strong className="graph-subtitle">Reading Closely</strong>
                              </div>
                              <div className="graph-col graph-container">
                                <div className="graph-linear">
                                  <div className="part-left">
                                    <div className="part-green-light" style={{ width: '12%' }}>
                                      <div className="part-red" style={{ width: '0' }}></div>
                                    </div>
                                  </div>
                                  <div className="part-right">
                                    <div className="part-red-light" style={{ width: '55%' }}>
                                      <div className="part-green" style={{ width: '10%' }}></div>
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
                                <strong className="graph-subtitle">Detail Question</strong>
                              </div>
                              <div className="graph-col graph-container">
                                <div className="graph-linear">
                                  <div className="part-left">
                                    <div className="part-green-light" style={{ width: '100%' }}>
                                      <div className="part-red" style={{ width: '8%' }}></div>
                                    </div>
                                  </div>
                                  <div className="part-right">
                                    <div className="part-red-light" style={{ width: '95%' }}>
                                      <div className="part-green" style={{ width: '0' }}></div>
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
                                <strong className="graph-subtitle">Support / Refute a Claim</strong>
                              </div>
                              <div className="graph-col graph-container">
                                <div className="graph-linear">
                                  <div className="part-left">
                                    <div className="part-green-light" style={{ width: '75%' }}>
                                      <div className="part-red" style={{ width: '0' }}></div>
                                    </div>
                                  </div>
                                  <div className="part-right">
                                    <div className="part-red-light" style={{ width: '100%' }}>
                                      <div className="part-green" style={{ width: '70%' }}></div>
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
                    <div id="tabs_tab02" className="tab-content">
                      <h3>Tab 02 content</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quasi inventore expedita maxime, vero magnam architecto eius laudantium corrupti! Ut fuga sit corrupti, vitae cum temporibus sed dolore labore! Fugit.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolorem nihil minus, quasi, dicta cupiditate aut magni ea veniam natus provident eveniet tempore iure minima placeat distinctio ducimus quo cum.</p>
                    </div>
                    <div id="tabs_tab03" className="tab-content">
                      <h3>Tab 03 content</h3>
                      <p>Expedita quibusdam sed, temporibus quasi dolorem iure non inventore quaerat sit mollitia dolores minima illo perspiciatis omnis delectus, recusandae quos, incidunt ratione.</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, enim? Itaque reprehenderit, id eos quasi optio est. Soluta alias, minima consequuntur obcaecati odio maiores, molestiae, vel ipsum modi delectus enim!</p>
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
