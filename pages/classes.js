import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Classes extends Component {
  render() {
    return (
      <React.Fragment>
        <main id="main" role="main">
        <div className="main-holder grey lighten-5 switcher-section">
          <div className="title-row card-panel">
            <div className="mobile-header">
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
            <nav className="breadcrumb-holder">
              <div className="nav-wrapper ">
                <a href="#!" className="breadcrumb">&lt; Classes</a>
              </div>
            </nav>
            <h2 className="h1 white-text">
              <span className="heading-holder">
                <i className="icon-members"></i>
                <span className="heading-block">Some Class in June</span>
              </span>
            </h2>
            {/* <!-- navigation additional --> */}
            <nav className="nav-additional">
              <ul className="menu-additional js-flex-nav" data-more-text="More">
                <li><a href="#">Summary</a></li>
                <li><a href="#">Calendar</a></li>
                <li><a href="#">Lessons</a></li>
                <li><a href="#">Worksheets</a></li>
                <li><a className="active" href="#">Test Sctions</a></li>
                <li><a href="#">Account</a></li>
              </ul>
            </nav>
          </div>
          <div className="filter-form-holder">
            <ul className="collapsible expandable">
              <li>
                <div className="collapsible-body">
                  <div className="filter-form_checkbox-list-holder justify-center">
                    <ul className="filter-form_checkbox-list">
                      <li>
                        <input type="checkbox" id="reading" />
                        <label htmlFor="reading">Reading</label>
                      </li>
                      <li>
                        <input type="checkbox" id="writing" />
                        <label htmlFor="writing">Writing</label>
                      </li>
                      <li>
                        <input type="checkbox" id="math" />
                        <label htmlFor="math">Math</label>
                      </li>
                    </ul>
                    <ul className="filter-form_checkbox-list">
                      <li>
                        <input type="checkbox" id="future" />
                        <label htmlFor="future">Future</label>
                      </li>
                      <li>
                        <input type="checkbox" id="available" />
                        <label htmlFor="available">Available</label>
                      </li>
                      <li>
                        <input type="checkbox" id="complete" />
                        <label htmlFor="complete">Complete</label>
                      </li>
                    </ul>
                    <ul className="filter-form_checkbox-list">
                      <li>
                        <input type="checkbox" id="hasReviewFlags" />
                        <label htmlFor="hasReviewFlags">Has Review Flags</label>
                      </li>
                    </ul>
                    <ul className="filter-form_checkbox-list">
                      <li>
                        <input type="checkbox" id="dueToday" />
                        <label htmlFor="dueToday">Due Today</label>
                      </li>
                      <li>
                        <input type="checkbox" id="dueNextSession" />
                        <label htmlFor="dueNextSession">Due By Next Session</label>
                      </li>
                      <li>
                        <input type="checkbox" id="dueThisWeek" />
                        <label htmlFor="dueThisWeek">Due this Week</label>
                      </li>
                      <li>
                        <input type="checkbox" id="overdue" />
                        <label htmlFor="overdue">Overdue</label>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex row mb-0 justify-center">
                    <div className="col s12 m4">
                      <div className="search-field input-field">
                        <input type="search" id="test_version_search" className="input-control  validate" />
                        <button type="submit" className="search-button"><i className="icon-search"></i></button>
                        <label className="label" htmlFor="test_version_search">Test Version</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-0 d-flex align-items-center">
                  <div className="col s12 l4">
                    <div className="row mb-0">
                      <div className="col s12 xl7">
                        <div className="input-field">
                          <select id="sort_test_section">
                            <option>Available On Date</option>
                            <option>Available On</option>
                            <option>Available On</option>
                          </select>
                          <label className="label" htmlFor="sort_test_section">Sort By</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col s12 l4 hide-on-med-and-down show-on-large">&nbsp;</div>
                  <div className="col s12 l4">
                    <div className="option-filters">
                      <div className="option-item clear"><a href="#">Clear Filters</a></div>
                      <div className="option-item">
                        <span className="collapsible-header"><span className="hide-text">Hide</span> <span className="open-text">Open</span> Filters</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="content-section">
            <div className="result-row center-align">
              <b className="result"> - 23 results -</b>
            </div>
            <div className="row d-flex-content card-width-272">
              {/* <!-- card --> */}
              <div className="card-main-col col s12 m8 l7 xl5">
                <div className="card-main test-card card">
                  <div className="card-panel panel-border">
                    <div className="card-panel-row row">
                      <div className="icon-col col s2">
                        <span className="block-icon">
                          <i className="icon-assign-section"></i>
                          <span className="text-icon">Assigned <br />Test Section</span>
                        </span>
                      </div>
                      <div className="col s8">
                        <div className="card-panel-text">
                          <div className="text-large truncate">Math (calculator) Section</div>
                          <div className="text-small truncate">Version: SAT Practice Test #3</div>
                        </div>
                      </div>
                      <div className="position-top right-align">
                        <div className="icons-row">
                          <span className="badge-rounded-xs badge red darken-2 white-text"><b className="badge-text">3</b> <i className="icon-flag"></i></span>
                          <div className="dropdown-block col">
                            {/* <!-- Dropdown Trigger --> */}
                            <a className='dropdown-trigger btn' href='#' data-target='dropdown01'><i className="material-icons dots-icon">more_vert</i></a>
                            {/* <!-- Dropdown Structure --> */}
                            <ul id='dropdown01' className='dropdown-content dropdown-wide'>
                              <li>
                                {/* <!-- Modal Trigger --> */}
                                <a href="#modal_user_edit" className="modal-trigger link-block">View Details</a>
                              </li>
                              <li><a href="#!">Dismiss Flags</a></li>
                              <li><a href="#!">Reset</a></li>
                              <li><a href="#!" className="link-delete">Delete</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="d-flex sameheight-all row mb-0">
                      <div className="col s6">
                        <div className="chart-container">
                          <div className="chart-holder">
                            <span className="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 96}' data-duration="1">
                              {/* <!-- do not change path attribute "d" !!! --> */}
                              <svg  width="110px" height="110px" viewBox=" 0 0 110 110">
                                <path fill="none" style={{ strokeWidth: '22', stroke: '#eaeaea' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
                                <path data-dinamic fill="none" style={{ strokeWidth: '22', stroke: '#0064f4' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
                              </svg>
                            </span>
                            <span className="chart-value" style={{ backgroundColor: '#0064f4' }}><span data-count-up data-start-val="0" data-end-val="96" data-duration="1"></span><span className="percentage">%</span></span>
                          </div>
                          <div className="chart-row">
                            <div className="chart-col chart-start">&nbsp;</div>
                            <div className="chart-col chart-end">
                              <span className="amount" style={{ color: '#0064f4' }}>10</span>
                            </div>
                          </div>
                          <div className="chart-description">
                            <dl className="dl-horizontal">
                              <dt>Time Est:</dt>
                              <dd>20 min</dd>
                            </dl>
                            <dl className="dl-horizontal">
                              <dt>Problems:</dt>
                              <dd>16</dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="col s6 right-align justify-end">
                        <div className="chart-description">
                          <dl className="dl-horizontal">
                            <dt>Available:</dt>
                            <dd><time dateTime="2018-12-15">12/15/18</time></dd>
                          </dl>
                          <dl className="dl-horizontal">
                            <dt>Due:</dt>
                            <dd><time dateTime="2018-12-15">12/15/18</time></dd>
                          </dl>
                        </div>
                        <div className="align-self-end">
                          <span className="badge badge-rounded-md blue accent-4 white-text">Exemplary</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- card --> */}
              <div className="card-main-col col s12 m8 l7 xl5">
                <div className="card-main test-card card">
                  <div className="card-panel panel-border">
                    <div className="card-panel-row row">
                      <div className="icon-col col s2">
                        <span className="block-icon">
                          <i className="icon-assign-section"></i>
                          <span className="text-icon">Assigned <br />Test Section</span>
                        </span>
                      </div>
                      <div className="col s8">
                        <div className="card-panel-text">
                          <div className="text-large truncate">Writing Section</div>
                          <div className="text-small truncate">Version: SAT Practice Test #3</div>
                        </div>
                      </div>
                      <div className="position-top right-align">
                        <div className="icons-row">
                          <div className="dropdown-block col">
                            {/* <!-- Dropdown Trigger --> */}
                            <a className='dropdown-trigger btn' href='#' data-target='dropdown02'><i className="material-icons dots-icon">more_vert</i></a>
                            {/* <!-- Dropdown Structure --> */}
                            <ul id='dropdown02' className='dropdown-content dropdown-wide'>
                              <li>
                                {/* <!-- Modal Trigger --> */}
                                <a href="#modal_user_edit" className="modal-trigger link-block">View Details</a>
                              </li>
                              <li><a href="#!">Dismiss Flags</a></li>
                              <li><a href="#!">Reset</a></li>
                              <li><a href="#!" className="link-delete">Delete</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="d-flex sameheight-all row mb-0">
                      <div className="col s6">
                        <div className="chart-container">
                          <div className="chart-holder">
                            <span className="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 96}' data-duration="1">
                              {/* <!-- do not change path attribute "d" !!! --> */}
                              <svg  width="110px" height="110px" viewBox=" 0 0 110 110">
                                <path fill="none" style={{ strokeWidth: '22', stroke: '#eaeaea' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
                                <path data-dinamic fill="none" style={{ strokeWidth: '22', stroke: '#c10078' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
                              </svg>
                            </span>
                            <span className="chart-value" style={{ backgroundColor: '#c10078' }}><span data-count-up data-start-val="0" data-end-val="96" data-duration="1"></span><span className="percentage">%</span></span>
                          </div>
                          <div className="chart-row">
                            <div className="chart-col chart-start">&nbsp;</div>
                            <div className="chart-col chart-end">
                              <span className="amount" style={{ color: '#c10078' }}>10</span>
                            </div>
                          </div>
                          <div className="chart-description">
                            <dl className="dl-horizontal">
                              <dt>Time Est:</dt>
                              <dd>20 min</dd>
                            </dl>
                            <dl className="dl-horizontal">
                              <dt>Problems:</dt>
                              <dd>16</dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="col s6 right-align justify-end">
                        <div className="chart-description">
                          <dl className="dl-horizontal">
                            <dt>Available:</dt>
                            <dd><time dateTime="2018-12-15">12/15/18</time></dd>
                          </dl>
                          <dl className="dl-horizontal">
                            <dt>Due:</dt>
                            <dd><time dateTime="2018-12-15">12/15/18</time></dd>
                          </dl>
                        </div>
                        <div className="align-self-end">
                          <span className="badge badge-rounded-md purple white-text">Developing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- card --> */}
              <div className="card-main-col col s12 m8 l7 xl5">
                <div className="card-main test-card card-disabled  card">
                  <div className="card-panel panel-border">
                    <div className="card-panel-row row">
                      <div className="icon-col col s2">
                        <span className="block-icon">
                          <i className="icon-assign-section"></i>
                          <span className="text-icon">Assigned <br />Test Section</span>
                        </span>
                      </div>
                      <div className="col s8">
                        <div className="card-panel-text">
                          <div className="text-large truncate">Writing Section</div>
                          <div className="text-small truncate">Version: SAT Practice Test #3</div>
                        </div>
                      </div>
                      <div className="position-top right-align">
                        <div className="icons-row">
                          <div className="dropdown-block col">
                            {/* <!-- Dropdown Trigger --> */}
                            <a className='dropdown-trigger btn' href='#' data-target='dropdown03'><i className="material-icons dots-icon">more_vert</i></a>
                            {/* <!-- Dropdown Structure --> */}
                            <ul id='dropdown03' className='dropdown-content dropdown-wide'>
                              <li>
                                {/* <!-- Modal Trigger --> */}
                                <a href="#modal_user_edit" className="modal-trigger link-block">View Details</a>
                              </li>
                              <li><a href="#!">Dismiss Flags</a></li>
                              <li><a href="#!">Reset</a></li>
                              <li><a href="#!" className="link-delete">Delete</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="d-flex sameheight-all row mb-0">
                      <div className="col s6">
                        <div className="chart-container">
                          <div className="chart-holder">
                            <span className="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 0}' data-duration="1">
                              {/* <!-- do not change path attribute "d" !!! --> */}
                              <svg  width="110px" height="110px" viewBox=" 0 0 110 110">
                                <path fill="none" style={{ strokeWidth: '22', stroke: '#eaeaea' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
                                <path data-dinamic fill="none" style={{ strokeWidth: '22', stroke: '#0064f4' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
                              </svg>
                            </span>
                            <span className="chart-value" style={{ backgroundColor: '#0064f4' }}><span data-count-up data-start-val="0" data-end-val="0" data-duration="1"></span><span className="percentage">%</span></span>
                          </div>
                          <div className="chart-row">
                            <div className="chart-col chart-start">&nbsp;</div>
                            <div className="chart-col chart-end">
                              <span className="amount" style={{ color: '#c10078' }}>10</span>
                            </div>
                          </div>
                          <div className="chart-description">
                            <dl className="dl-horizontal">
                              <dt>Time Est:</dt>
                              <dd>20 min</dd>
                            </dl>
                            <dl className="dl-horizontal">
                              <dt>Problems:</dt>
                              <dd>16</dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="col s6 right-align justify-end">
                        <div className="chart-description">
                          <dl className="dl-horizontal">
                            <dt>Available:</dt>
                            <dd><time dateTime="2018-12-15">12/15/18</time></dd>
                          </dl>
                          <dl className="dl-horizontal">
                            <dt>Due:</dt>
                            <dd><time dateTime="2018-12-15">12/15/18</time></dd>
                          </dl>
                        </div>
                        <div className="align-self-end">
                          <span className="badge badge-rounded-md grey darken-4 white-text">Assigned</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- card --> */}
              {/* <!-- card --> */}
              {/* <!-- card --> */}
              {/* <!-- card --> */}
            </div>
          </div>
        </div>
        <div className="add-btn-block dropdown-small">
          <a href="#" className="dropdown-trigger waves-effect waves-teal btn add-btn" data-target='dropdown_assign_selected'><i className="material-icons">add</i> Assign Test Section</a>
          <ul id='dropdown_assign_selected' className='dropdown-content dropdown-small'>
            <li><a href="#">From Saved</a></li>
            <li><a href="#">Create New</a></li>
          </ul>
        </div>
      </main>
      </React.Fragment>
    );
  }
}

export default Classes;
