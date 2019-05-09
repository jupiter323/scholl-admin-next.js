import React from 'react';
// import PropTypes from 'prop-types';

class AssignWorksheetModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
      <div id="modal_assign_worksheet" className="modal-page modal modal-custom">
        <div className="card-modal card-main card switcher-section grey lighten-3">
          <div className="header-row card-panel light-blue lighten-1 white-text">
            <div className="card-panel-row row">
              <div className="col s11">
                <div className="d-flex">
                  <div className="icon-col">
                    <i className="icon-sheets-w"></i>
                  </div>
                  <div className="card-panel-text">
                    <div className="text-large">Assign Worksheets</div>
                  </div>
                </div>
              </div>
              <div className="col s1 right-align">
                <div className="row icons-row"><a href="#" className="modal-close close"><i className="icon-close-thin"></i></a></div>
              </div>
            </div>
          </div>
          <div className="filter-form-holder">
            <ul className="collapsible expandable">
              <li>
                <div className="collapsible-body">
                  <div className="filter-form_checkbox-list-holder justify-center">
                    <ul className="filter-form_checkbox-list">
                      <li>
                        <input type="checkbox" id="reading_worksheet" />
                        <label htmlFor="reading_worksheet">Reading</label>
                      </li>
                      <li>
                        <input type="checkbox" id="writing_worksheet" />
                        <label htmlFor="writing_worksheet">Writing</label>
                      </li>
                      <li>
                        <input type="checkbox" id="math_worksheet" />
                        <label htmlFor="math_worksheet">Math</label>
                      </li>
                      <li>
                        <input type="checkbox" id="mixed_worksheet_01" />
                        <label htmlFor="mixed_worksheet_01">Mixed</label>
                      </li>
                    </ul>
                    <ul className="filter-form_checkbox-list">
                      <li>
                        <input type="checkbox" id="sat_worksheet" />
                        <label htmlFor="sat_worksheet">SAT Practice</label>
                      </li>
                      <li>
                        <input type="checkbox" id="skill_worksheet" />
                        <label htmlFor="skill_worksheet">Skill Builders</label>
                      </li>
                      <li>
                        <input type="checkbox" id="mixed_worksheet_02" />
                        <label htmlFor="mixed_worksheet_02">Mixed</label>
                      </li>
                    </ul>
                    <ul className="filter-form_checkbox-list">
                      <li>
                        <input type="checkbox" id="built_in_worksheet" />
                        <label htmlFor="built_in_worksheet">Built-In</label>
                      </li>
                      <li>
                        <input type="checkbox" id="user_created_worksheet" />
                        <label htmlFor="user_created_worksheet">User Created</label>
                      </li>
                    </ul>
                    <ul className="filter-form_checkbox-list">
                      <li>
                        <input type="checkbox" id="easy_worksheet" />
                        <label htmlFor="easy_worksheet">Easy</label>
                      </li>
                      <li>
                        <input type="checkbox" id="medium_worksheet" />
                        <label htmlFor="medium_worksheet">Medium</label>
                      </li>
                      <li>
                        <input type="checkbox" id="diﬃcult_worksheet" />
                        <label htmlFor="diﬃcult_worksheet">Diﬃcult</label>
                      </li>
                      <li>
                        <input type="checkbox" id="mixed_worksheet_03" />
                        <label htmlFor="mixed_worksheet_03">Mixed</label>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex row mb-0 justify-center">
                    <div className="col s12 m3">
                      <div className="search-field input-field">
                        <input type="search" id="search_worksheet" className="input-control validate" placeholder="Speci" />
                        <button type="submit" className="search-button"><i className="icon-search"></i></button>
                        <label className="label" htmlFor="search_worksheet">Search</label>
                      </div>
                    </div>
                    <div className="col s12 m3">
                      <div className="search-field input-field">
                        <input type="search" id="search_unit_worksheet" className="input-control validate" placeholder="Math Unit #3" />
                        <button type="submit" className="search-button"><i className="icon-search"></i></button>
                        <label className="label" htmlFor="search_unit_worksheet">Search</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-0 d-flex align-items-center">
                  <div className="col s12 l4">
                    <div className="row mb-0">
                      <div className="col s12 m6">
                        <div className="input-field">
                          <select id="sort_worksheet">
                            <option>Page Number</option>
                            <option>Page Number</option>
                            <option>Page Number</option>
                          </select>
                          <label className="label" htmlFor="sort_worksheet">Sort By</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="switcher-block col s12 l4">
                    <div className="view-switcher">
                      <ul className="switcher center-align">
                        <li className="active" data-view="view-full"><a href="#">Month View</a></li>
                        <li data-view="view-list"><a href="#">Day View</a></li>
                      </ul>
                    </div>
                  </div>
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
          <div className="card-content">
            <div className="card-body">
              <div className="result-row center-align">
                <b className="result"> - 23 results -</b>
              </div>
              <div className="checkboxes-section row d-flex-content card-width-322">
                {/* <!-- card --> */}
                <div className="card-main-col col s12 m8 l7 xl5">
                  <div className="card-checkbox">
                    <input type="checkbox" />
                    <div className="checkbox-card card-main card-lesson-detail card-assigned card">
                      <div className="card-panel" style={{ backgroundColor: '#666', color: '#fff' }}>
                        <div className="card-panel-row row">
                          <div className="icon-col col s2">
                            <span className="block-icon">
                              <i className="icon-sheets-w"></i>
                            </span>
                          </div>
                          <div className="col s9">
                            <div className="card-panel-text">
                              <div className="text-small">Worksheet (Math)</div>
                              <div className="text-large">Triangle Practice </div>
                            </div>
                          </div>
                          <div className="align-top col s1 right-align">
                            <div className="row icons-row">
                              <div className="dropdown-block col">
                                {/* <!-- Dropdown Trigger --> */}
                                <a className='dropdown-trigger btn' href='#' data-target='dropdown_worksheet_01'><i className="material-icons dots-icon">more_vert</i></a>
                                {/* <!-- Dropdown Structure --> */}
                                <ul id='dropdown_worksheet_01' className='dropdown-content dropdown-wide'>
                                  <li>
                                    {/* <!-- Modal Trigger --> */}
                                    <a href="#" className="modal-trigger link-block">Edit</a>
                                  </li>
                                  <li><a href="#!">Clone</a></li>
                                  <li><a href="#!">Show Owner</a></li>
                                  <li><a href="#!">Delete</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-top-block">
                          <div className="d-flex row mb-0">
                            <div className="left-col col s6">
                              <dl className="dl-horizontal">
                                <dt>Problem Type:</dt>
                                <dd>SAT Practice</dd>
                              </dl>
                            </div>
                            <div className="right-col col s6 right-align">
                              <dl className="dl-horizontal">
                                <dt>Diﬃculty:</dt>
                                <dd>Beginner</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="chart-container">
                          <div className="chart-holder">
                            <span className="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 0}' data-duration="1">
                              {/* <!-- do not change path attribute "d" !!! --> */}
                              <svg  width="110px" height="110px" viewBox=" 0 0 110 110">
                                <path fill="none" style={{ strokeWidth: '22', stroke: '#eaeaea' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
                                <path data-dinamic fill="none" style={{ strokeWidth: '22', stroke: '#31837a' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
                              </svg>
                            </span>
                            <span className="chart-value" style={{ backgroundColor: '#4d4d4d' }}></span>
                          </div>
                          <div className="chart-description">
                            <dl className="dl-horizontal">
                              <dt>Time Est:</dt>
                              <dd>14 min</dd>
                            </dl>
                            <dl className="dl-horizontal">
                              <dt>Problems:</dt>
                              <dd>16</dd>
                            </dl>
                          </div>
                        </div>
                        <div className="card-text">
                          <dl className="dl-horizontal">
                            <dt>Worksheet Source:</dt>
                            <dd>User Created</dd>
                          </dl>
                        </div>
                        <div className="card-inner-row">
                          <div className="row-holder">
                            <ul className="classification-list">
                              <li className="class-box">Right Trianges</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- card --> */}
                <div className="card-main-col col s12 m8 l7 xl5">
                  <div className="card-checkbox">
                    <input type="checkbox" />
                    <div className="checkbox-card card-main card-lesson-detail card-assigned card">
                      <div className="card-panel" style={{ backgroundColor: '#666', color: '#fff' }}>
                        <div className="card-panel-row row">
                          <div className="icon-col col s2">
                            <span className="block-icon">
                              <i className="icon-sheets-w"></i>
                            </span>
                          </div>
                          <div className="col s9">
                            <div className="card-panel-text">
                              <div className="text-small">Worksheet (Math)</div>
                              <div className="text-large">Triangle Practice </div>
                            </div>
                          </div>
                          <div className="align-top col s1 right-align">
                            <div className="row icons-row">
                              <div className="dropdown-block col">
                                {/* <!-- Dropdown Trigger --> */}
                                <a className='dropdown-trigger btn' href='#' data-target='dropdown_worksheet_02'><i className="material-icons dots-icon">more_vert</i></a>
                                {/* <!-- Dropdown Structure --> */}
                                <ul id='dropdown_worksheet_02' className='dropdown-content dropdown-wide'>
                                  <li>
                                    {/* <!-- Modal Trigger --> */}
                                    <a href="#" className="modal-trigger link-block">Edit</a>
                                  </li>
                                  <li><a href="#!">Clone</a></li>
                                  <li><a href="#!">Show Owner</a></li>
                                  <li><a href="#!">Delete</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-top-block">
                          <div className="d-flex row mb-0">
                            <div className="left-col col s6">
                              <dl className="dl-horizontal">
                                <dt>Problem Type:</dt>
                                <dd>SAT Practice</dd>
                              </dl>
                            </div>
                            <div className="right-col col s6 right-align">
                              <dl className="dl-horizontal">
                                <dt>Diﬃculty:</dt>
                                <dd>Beginner</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="chart-container">
                          <div className="chart-holder">
                            <span className="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 0}' data-duration="1">
                              {/* <!-- do not change path attribute "d" !!! --> */}
                              <svg  width="110px" height="110px" viewBox=" 0 0 110 110">
                                <path fill="none" style={{ strokeWidth: '22', stroke: '#eaeaea' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
                                <path data-dinamic fill="none" style={{ strokeWidth: '22', stroke: '#31837a' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
                              </svg>
                            </span>
                            <span className="chart-value" style={{ backgroundColor: '#4d4d4d' }}></span>
                          </div>
                          <div className="chart-description">
                            <dl className="dl-horizontal">
                              <dt>Time Est:</dt>
                              <dd>14 min</dd>
                            </dl>
                            <dl className="dl-horizontal">
                              <dt>Problems:</dt>
                              <dd>16</dd>
                            </dl>
                          </div>
                        </div>
                        <div className="card-text">
                          <dl className="dl-horizontal">
                            <dt>Worksheet Source:</dt>
                            <dd>Build-In</dd>
                          </dl>
                        </div>
                        <div className="card-inner-row">
                          <div className="row-holder">
                            <ul className="classification-list">
                              <li className="class-box">Right Trianges</li>
                              <li className="class-box">Some Topic</li>
                              <li className="class-box">Right Trianges</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- card --> */}
                <div className="card-main-col col s12 m8 l7 xl5">
                  <div className="card-checkbox">
                    <input type="checkbox" />
                    <div className="checkbox-card card-main card-lesson-detail card-assigned card">
                      <div className="card-panel" style={{ backgroundColor: '#666', color: '#fff' }}>
                        <div className="card-panel-row row">
                          <div className="icon-col col s2">
                            <span className="block-icon">
                              <i className="icon-sheets-w"></i>
                            </span>
                          </div>
                          <div className="col s9">
                            <div className="card-panel-text">
                              <div className="text-small">Worksheet (Math)</div>
                              <div className="text-large">Triangle Practice </div>
                            </div>
                          </div>
                          <div className="align-top col s1 right-align">
                            <div className="row icons-row">
                              <div className="dropdown-block col">
                                {/* <!-- Dropdown Trigger --> */}
                                <a className='dropdown-trigger btn' href='#' data-target='dropdown_worksheet_03'><i className="material-icons dots-icon">more_vert</i></a>
                                {/* <!-- Dropdown Structure --> */}
                                <ul id='dropdown_worksheet_03' className='dropdown-content dropdown-wide'>
                                  <li>
                                    {/* <!-- Modal Trigger --> */}
                                    <a href="#" className="modal-trigger link-block">Edit</a>
                                  </li>
                                  <li><a href="#!">Clone</a></li>
                                  <li><a href="#!">Show Owner</a></li>
                                  <li><a href="#!">Delete</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-top-block">
                          <div className="d-flex row mb-0">
                            <div className="left-col col s6">
                              <dl className="dl-horizontal">
                                <dt>Problem Type:</dt>
                                <dd>SAT Practice</dd>
                              </dl>
                            </div>
                            <div className="right-col col s6 right-align">
                              <dl className="dl-horizontal">
                                <dt>Diﬃculty:</dt>
                                <dd>Beginner</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="chart-container">
                          <div className="chart-holder">
                            <span className="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 0}' data-duration="1">
                              {/* <!-- do not change path attribute "d" !!! --> */}
                              <svg  width="110px" height="110px" viewBox=" 0 0 110 110">
                                <path fill="none" style={{ strokeWidth: '22', stroke: '#eaeaea' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
                                <path data-dinamic fill="none" style={{ strokeWidth: '22', stroke: '#31837a' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
                              </svg>
                            </span>
                            <span className="chart-value" style={{ backgroundColor: '#4d4d4d' }}></span>
                          </div>
                          <div className="chart-description">
                            <dl className="dl-horizontal">
                              <dt>Time Est:</dt>
                              <dd>14 min</dd>
                            </dl>
                            <dl className="dl-horizontal">
                              <dt>Problems:</dt>
                              <dd>16</dd>
                            </dl>
                          </div>
                        </div>
                        <div className="card-text">
                          <dl className="dl-horizontal">
                            <dt>Worksheet Source:</dt>
                            <dd>Build-In</dd>
                          </dl>
                        </div>
                        <div className="card-inner-row">
                          <div className="row-holder">
                            <ul className="classification-list">
                              <li className="empty-box">no classiﬁcation</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- card --> */}
              </div>
            </div>
          </div>
        </div>
        <div className="add-btn-block">
          <a href="#" className="dropdown-trigger waves-effect waves-teal btn add-btn" data-target='dropdown_assign_selected'><i className="material-icons">add</i> Assign Selected</a>
          <ul id='dropdown_assign_selected' className='dropdown-content'>
            <li><a href="#">For Today</a></li>
            <li><a href="#">For Tomorrow</a></li>
            <li><a href="#">For Next Session</a></li>
            <li><a href="#">For Date...</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AssignWorksheetModal;

/* <!-- Modal structure Assign Worksheet --> */