import React from 'react';

class DetailTestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: [],
    };
  }

  render() {
    // const { tests } = this.state;
    return (
      <div className="content-section">
        <div className="section-holder">
          {/* <!-- content container --> */}
          <div className="content-container">
            <h2>Completed Tests</h2>
            <div className="row d-flex-content card-width-366">

            {/* <!-- card --> */}
              <div className="col s12 m8 l7 xl5">
                <div className="card-main-col">
                  <div className="card-test card-main card">
                    <div className="card-content">
                      <div className="card-panel-row row">
                        <div className="col">&nbsp;</div>
                        <div className="col">
                          <div className="row icons-row">
                            <div className="dropdown-block col">
                              {/* <!-- Dropdown Trigger --> */}
                              <a className='dropdown-trigger btn' href='#' data-target='dropdown01'><i className="material-icons dots-icon">more_vert</i></a>
                              {/* <!-- Dropdown Structure --> */}
                              <ul id='dropdown01' className='dropdown-content'>
                                <li><a href="#!">Enter Answers</a></li>
                                <li><a href="#!">Edit</a></li>
                                <li><a href="#!" className="disabled">Download Report</a></li>
                                <li><a href="#!" className="red-text text-darken-3">Delete</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-test-row row d-flex mb-0">
                        <div className="col s7">
                          <div className="card-title-block">
                            <h4 className="h2">1st Practice Test</h4>
                            <time dateTime="2018-12-09" className="date">9/12/2018 (week 4)</time>
                            <p>Version 1105pre</p>
                          </div>
                          <div className="chart-container chart-container-test">
                            <div className="chart-holder">
                              <span className="svg-curved-bar" data-values='{"from": 1100, "to": 1460, "current": 1210}' data-duration="1">
                                <svg  width="198px" height="198px" viewBox="0 0 198 198">
                                  <path fill="none" style={{ strokeWidth: '38', stroke: '#eaeaea' }} d="M 24.730565358714188 128.73299645282623 A 80 80 0 1 1 173.2694346412858 128.73299645282623"></path>
                                  <path data-dinamic fill="none" style={{ strokeWidth: '38', stroke: '#00bbf7' }} d="M 24.730565358714188 128.73299645282623 A 80 80 0 0 1 24.730565358714188 128.73299645282623"></path>
                                </svg>
                                <span className="js-diff-holder"><span className="js-diff"><span className="txt"></span></span></span>
                              </span>
                              <span className="chart-value" style={{ backgroundColor: '#00bbf7' }}><span data-count-up data-start-val="1100" data-end-val="1210" data-duration="1">1210</span></span>
                            </div>
                            <div className="chart-row">
                              <div className="chart-col chart-start">
                                <span className="amount">1100</span>
                                <span className="amount-text">initial</span>
                              </div>
                              <div className="chart-col chart-end">
                                <span className="amount">1460</span>
                                <span className="amount-text">target</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col s5 right-align">
                          <div className="chart-block chart-block-test">
                            <span className="value-max">800</span>
                            <div className="js-donut-chart" data-stroke-width="15" data-source='./inc/score-data-test-reading.json'></div>
                            <div className="chart-text">
                              <span className="title">Reading <br /> &amp; Writing</span>
                              <span className="value">420</span>
                              <span className="description">+80</span>
                            </div>
                          </div>
                          <div className="chart-block chart-block-test">
                            <span className="value-max">800</span>
                            <div className="js-donut-chart" data-stroke-width="15" data-source='./inc/score-data-test-math.json'></div>
                            <div className="chart-text">
                              <span className="title">Math</span>
                              <span className="value">500</span>
                              <span className="description">+110</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- card --> */}
              <div className="col s12 m8 l7 xl5">
                <div className="card-main-col">
                  <div className="card-test card-main card">
                    <div className="card-content">
                      <div className="card-panel-row row">
                        <div className="col">&nbsp;</div>
                        <div className="col">
                          <div className="row icons-row">
                            <div className="dropdown-block col">
                              {/* <!-- Dropdown Trigger --> */}
                              <a className='dropdown-trigger btn' href='#' data-target='dropdown02'><i className="material-icons dots-icon">more_vert</i></a>
                              {/* <!-- Dropdown Structure --> */}
                              <ul id='dropdown02' className='dropdown-content'>
                                <li><a href="#!">Enter Answers</a></li>
                                <li><a href="#!">Edit</a></li>
                                <li><a href="#!" className="disabled">Download Report</a></li>
                                <li><a href="#!" className="red-text text-darken-3">Delete</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-test-row row d-flex mb-0">
                        <div className="col s7">
                          <div className="card-title-block">
                            <h4 className="h2">2nd Practice Test</h4>
                            <time dateTime="2018-12-09" className="date">9/12/2018 (week 4)</time>
                            <p>Version 1105pre</p>
                          </div>
                          <div className="chart-container chart-container-test">
                            <div className="chart-holder">
                              <span className="svg-curved-bar" data-values='{"from": 1100, "to": 1460, "current": 1210}' data-duration="1">
                                <svg  width="198px" height="198px" viewBox="0 0 198 198">
                                  <path fill="none" style={{ strokeWidth: '38', stroke: '#eaeaea' }} d="M 24.730565358714188 128.73299645282623 A 80 80 0 1 1 173.2694346412858 128.73299645282623"></path>
                                  <path data-dinamic fill="none" style={{ strokeWidth: '38', stroke: '#00bbf7' }} d="M 24.730565358714188 128.73299645282623 A 80 80 0 0 1 24.730565358714188 128.73299645282623"></path>
                                </svg>
                                <span className="js-diff-holder"><span className="js-diff"><span className="txt"></span></span></span>
                              </span>
                              <span className="chart-value" style={{ backgroundColor: '#00bbf7' }}><span data-count-up data-start-val="1100" data-end-val="1210" data-duration="1">1210</span></span>
                            </div>
                            <div className="chart-row">
                              <div className="chart-col chart-start">
                                <span className="amount">1100</span>
                                <span className="amount-text">initial</span>
                              </div>
                              <div className="chart-col chart-end">
                                <span className="amount">1460</span>
                                <span className="amount-text">target</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col s5 right-align">
                          <div className="chart-block chart-block-test">
                            <span className="value-max">800</span>
                            <div className="js-donut-chart" data-stroke-width="15" data-source='./inc/score-data-test-reading.json'></div>
                            <div className="chart-text">
                              <span className="title">Reading <br /> &amp; Writing</span>
                              <span className="value">420</span>
                              <span className="description">+80</span>
                            </div>
                          </div>
                          <div className="chart-block chart-block-test">
                            <span className="value-max">800</span>
                            <div className="js-donut-chart" data-stroke-width="15" data-source='./inc/score-data-test-math.json'></div>
                            <div className="chart-text">
                              <span className="title">Math</span>
                              <span className="value">500</span>
                              <span className="description">+110</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- card --> */}
              <div className="col s12 m8 l7 xl5">
                <div className="card-main-col">
                  <div className="card-test card-main card">
                    <div className="card-content">
                      <div className="card-panel-row row">
                        <div className="col">&nbsp;</div>
                        <div className="col">
                          <div className="row icons-row">
                            <div className="dropdown-block col">
                              {/* <!-- Dropdown Trigger --> */}
                              <a className='dropdown-trigger btn' href='#' data-target='dropdown03'><i className="material-icons dots-icon">more_vert</i></a>
                              {/* <!-- Dropdown Structure --> */}
                              <ul id='dropdown03' className='dropdown-content'>
                                <li><a href="#!">Enter Answers</a></li>
                                <li><a href="#!">Edit</a></li>
                                <li><a href="#!" className="disabled">Download Report</a></li>
                                <li><a href="#!" className="red-text text-darken-3">Delete</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-test-row row d-flex mb-0">
                        <div className="col s7">
                          <div className="card-title-block">
                            <h4 className="h2">3rd Practice Test</h4>
                            <time dateTime="2018-12-09" className="date">9/12/2018 (week 4)</time>
                            <p>Version 1105pre</p>
                          </div>
                          <div className="chart-container chart-container-test">
                            <div className="chart-holder">
                              <span className="svg-curved-bar" data-values='{"from": 1100, "to": 1460, "current": 1210}' data-duration="1">
                                <svg  width="198px" height="198px" viewBox="0 0 198 198">
                                  <path fill="none" style={{ strokeWidth: '38', stroke: '#eaeaea' }} d="M 24.730565358714188 128.73299645282623 A 80 80 0 1 1 173.2694346412858 128.73299645282623"></path>
                                  <path data-dinamic fill="none" style={{ strokeWidth: '38', stroke: '#00bbf7' }} d="M 24.730565358714188 128.73299645282623 A 80 80 0 0 1 24.730565358714188 128.73299645282623"></path>
                                </svg>
                                <span className="js-diff-holder"><span className="js-diff"><span className="txt"></span></span></span>
                              </span>
                              <span className="chart-value" style={{ backgroundColor: '#00bbf7' }}><span data-count-up data-start-val="1100" data-end-val="1210" data-duration="1">1210</span></span>
                            </div>
                            <div className="chart-row">
                              <div className="chart-col chart-start">
                                <span className="amount">1100</span>
                                <span className="amount-text">initial</span>
                              </div>
                              <div className="chart-col chart-end">
                                <span className="amount">1460</span>
                                <span className="amount-text">target</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col s5 right-align">
                          <div className="chart-block chart-block-test">
                            <span className="value-max">800</span>
                            <div className="js-donut-chart" data-stroke-width="15" data-source='./inc/score-data-test-reading.json'></div>
                            <div className="chart-text">
                              <span className="title">Reading <br /> &amp; Writing</span>
                              <span className="value">420</span>
                              <span className="description">+80</span>
                            </div>
                          </div>
                          <div className="chart-block chart-block-test">
                            <span className="value-max">800</span>
                            <div className="js-donut-chart" data-stroke-width="15" data-source='./inc/score-data-test-math.json'></div>
                            <div className="chart-text">
                              <span className="title">Math</span>
                              <span className="value">500</span>
                              <span className="description">+110</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* <!-- content container --> */}
          <div className="content-container">
            <h2>Future Tests</h2>
            <div className="row d-flex-content card-width-366">

              {/* <!-- card --> */}
              <div className="col s12 m8 l7 xl5">
                <div className="card-main-col">
                  <div className="card-test card-disabled card-main card">
                    <div className="card-content">
                      <div className="card-panel-row row">
                        <div className="col">&nbsp;</div>
                        <div className="col">
                          <div className="row icons-row">
                            <div className="dropdown-block col">
                              {/* <!-- Dropdown Trigger --> */}
                              <a className='dropdown-trigger btn' href='#' data-target='dropdown04'><i className="material-icons dots-icon">more_vert</i></a>
                              {/* <!-- Dropdown Structure --> */}
                              <ul id='dropdown04' className='dropdown-content'>
                                <li><a href="#!">Enter Answers</a></li>
                                <li><a href="#!">Edit</a></li>
                                <li><a href="#!" className="disabled">Download Report</a></li>
                                <li><a href="#!" className="red-text text-darken-3">Delete</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-test-row row d-flex mb-0">
                        <div className="col s7">
                          <div className="card-title-block">
                            <h4 className="h2">4th Practice Test</h4>
                            <time dateTime="2018-12-09" className="date">9/12/2018 (week 4)</time>
                          </div>
                          <div className="chart-container chart-container-test">
                            <div className="chart-holder">
                              <span className="svg-curved-bar" data-values='{"from": 1100, "to": 1460, "current": 1210}' data-duration="1">
                                <svg  width="198px" height="198px" viewBox="0 0 198 198">
                                  <path fill="none" style={{ strokeWidth: '38', stroke: '#eaeaea' }} d="M 24.730565358714188 128.73299645282623 A 80 80 0 1 1 173.2694346412858 128.73299645282623"></path>
                                  <path data-dinamic fill="none" style={{ strokeWidth: '38', stroke: '#00bbf7' }} d="M 24.730565358714188 128.73299645282623 A 80 80 0 0 1 24.730565358714188 128.73299645282623"></path>
                                </svg>
                                <span className="js-diff-holder"><span className="js-diff"><span className="txt"></span></span></span>
                              </span>
                              <span className="chart-value" style={{ backgroundColor: '#00bbf7' }}><span data-count-up data-start-val="1100" data-end-val="1210" data-duration="1">1210</span></span>
                            </div>
                            <div className="chart-row">
                              <div className="chart-col chart-start">
                                <span className="amount">1100</span>
                                <span className="amount-text">initial</span>
                              </div>
                              <div className="chart-col chart-end">
                                <span className="amount">1460</span>
                                <span className="amount-text">target</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col s5 right-align">
                          <div className="chart-block chart-block-test">
                            <span className="value-max">800</span>
                            <div className="js-donut-chart" data-stroke-width="15" data-source='./inc/score-data-test-reading.json'></div>
                            <div className="chart-text">
                              <span className="title">Reading <br /> &amp; Writing</span>
                              <span className="value">420</span>
                              <span className="description">+80</span>
                            </div>
                          </div>
                          <div className="chart-block chart-block-test">
                            <span className="value-max">800</span>
                            <div className="js-donut-chart" data-stroke-width="15" data-source='./inc/score-data-test-math.json'></div>
                            <div className="chart-text">
                              <span className="title">Math</span>
                              <span className="value">500</span>
                              <span className="description">+110</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- card --> */}
              <div className="col s12 m8 l7 xl5">
                <div className="card-main-col">
                  <div className="card-test card-disabled card-main card">
                    <div className="card-content">
                      <div className="card-panel-row row">
                        <div className="col">&nbsp;</div>
                        <div className="col">
                          <div className="row icons-row">
                            <div className="dropdown-block col">
                              {/* <!-- Dropdown Trigger --> */}
                              <a className='dropdown-trigger btn' href='#' data-target='dropdown05'><i className="material-icons dots-icon">more_vert</i></a>
                              {/* <!-- Dropdown Structure --> */}
                              <ul id='dropdown05' className='dropdown-content'>
                                <li><a href="#!">Enter Answers</a></li>
                                <li><a href="#!">Edit</a></li>
                                <li><a href="#!" className="disabled">Download Report</a></li>
                                <li><a href="#!" className="red-text text-darken-3">Delete</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-test-row row d-flex mb-0">
                        <div className="col s7">
                          <div className="card-title-block">
                            <h4 className="h2">Oct SAT</h4>
                            <time dateTime="2018-12-09" className="date">9/12/2018 (week 4)</time>
                          </div>
                          <div className="chart-container chart-container-test">
                            <div className="chart-holder">
                              <span className="svg-curved-bar" data-values='{"from": 1100, "to": 1460, "current": 1210}' data-duration="1">
                                <svg  width="198px" height="198px" viewBox="0 0 198 198">
                                  <path fill="none" style={{ strokeWidth: '38', stroke: '#eaeaea' }} d="M 24.730565358714188 128.73299645282623 A 80 80 0 1 1 173.2694346412858 128.73299645282623"></path>
                                  <path data-dinamic fill="none" style={{ strokeWidth: '38', stroke: '#00bbf7' }} d="M 24.730565358714188 128.73299645282623 A 80 80 0 0 1 24.730565358714188 128.73299645282623"></path>
                                </svg>
                                <span className="js-diff-holder"><span className="js-diff"><span className="txt"></span></span></span>
                              </span>
                              <span className="chart-value" style={{ backgroundColor: '#00bbf7' }}><span data-count-up data-start-val="1100" data-end-val="1210" data-duration="1">1210</span></span>
                            </div>
                            <div className="chart-row">
                              <div className="chart-col chart-start">
                                <span className="amount">1100</span>
                                <span className="amount-text">initial</span>
                              </div>
                              <div className="chart-col chart-end">
                                <span className="amount">1460</span>
                                <span className="amount-text">target</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col s5 right-align">
                          <div className="chart-block chart-block-test">
                            <span className="value-max">800</span>
                            <div className="js-donut-chart" data-stroke-width="15" data-source='./inc/score-data-test-reading.json'></div>
                            <div className="chart-text">
                              <span className="title">Reading <br /> &amp; Writing</span>
                              <span className="value">420</span>
                              <span className="description">+80</span>
                            </div>
                          </div>
                          <div className="chart-block chart-block-test">
                            <span className="value-max">800</span>
                            <div className="js-donut-chart" data-stroke-width="15" data-source='./inc/score-data-test-math.json'></div>
                            <div className="chart-text">
                              <span className="title">Math</span>
                              <span className="value">500</span>
                              <span className="description">+110</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default DetailTestList;
