import React from 'react';
// import PropTypes from 'prop-types';

class AssignLessonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
      <div id="modal_assign_lesson" className="modal-page modal modal-custom">
        <div className="card-modal card-main card switcher-section grey lighten-3">
          <div className="header-row card-panel light-blue lighten-1 white-text">
            <div className="card-panel-row row">
              <div className="col s11">
                <div className="d-flex">
                  <div className="icon-col">
                    <i className="icon-books-l"></i>
                  </div>
                  <div className="card-panel-text">
                    <div className="text-large">Assign Lessons</div>
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
                        <input type="checkbox" id="reading_lesson" />
                        <label htmlFor="reading_lesson">Reading</label>
                      </li>
                      <li>
                        <input type="checkbox" id="writing_lesson" />
                        <label htmlFor="writing_lesson">Writing</label>
                      </li>
                      <li>
                        <input type="checkbox" id="math_lesson" />
                        <label htmlFor="math_lesson">Math</label>
                      </li>
                    </ul>
                    <ul className="filter-form_checkbox-list">
                      <li>
                        <input type="checkbox" id="challenge_lesson" />
                        <label htmlFor="challenge_lesson">Challenge + Practice</label>
                      </li>
                      <li>
                        <input type="checkbox" id="homework_lesson" />
                        <label htmlFor="homework_lesson">Homework Drill</label>
                      </li>
                      <li>
                        <input type="checkbox" id="read_workbook_lesson" />
                        <label htmlFor="read_workbook_lesson">Reading from Workbook</label>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex row mb-0 justify-center">
                    <div className="col s12 m3">
                      <div className="search-field input-field">
                        <input type="search" id="search_lesson" className="input-control validate" placeholder="Speci" />
                        <button type="submit" className="search-button"><i className="icon-search"></i></button>
                        <label className="label" htmlFor="search_lesson">Search</label>
                      </div>
                    </div>
                    <div className="col s12 m3">
                      <div className="search-field input-field">
                        <input type="search" id="search_unit_lesson" className="input-control validate" placeholder="Math Unit #3" />
                        <button type="submit" className="search-button"><i className="icon-search"></i></button>
                        <label className="label" htmlFor="search_unit_lesson">Search</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-0 d-flex align-items-center">
                  <div className="col s12 l4">
                    <div className="row mb-0">
                      <div className="col s12 m6">
                        <div className="input-field">
                          <select id="sort_lesson">
                            <option>Page Number</option>
                            <option>Page Number</option>
                            <option>Page Number</option>
                          </select>
                          <label className="label" htmlFor="sort_lesson">Sort By</label>
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
                {/* <!-- card User --> */}
                <div className="card-main-col col s12 m8 l7 xl5">
                  <div className="card-checkbox">
                    <input type="checkbox" />
                    <div className="checkbox-card card-main card-lesson-detail card-assigned card">
                      <div className="card-panel" style={{ backgroundColor: '#666', color: '#fff' }}>
                        <div className="card-panel-row row">
                          <div className="icon-col col s2">
                            <span className="block-icon">
                              <i className="icon-books-l"></i>
                              <span className="text-icon">Lesson</span>
                            </span>
                          </div>
                          <div className="col s9">
                            <div className="card-panel-text">
                              <div className="text-small">Reading Unit #2</div>
                              <div className="text-large">Reading Charts and Graphs</div>
                              <div className="text-small">Subject: Reading</div>
                            </div>
                          </div>
                          <div className="align-top col s1 right-align">
                            <div className="row icons-row">
                              <div className="dropdown-block col">
                                {/* <!-- Dropdown Trigger --> */}
                                <a className='dropdown-trigger btn' href='#' data-target='dropdown_lesson_01'><i className="material-icons dots-icon">more_vert</i></a>
                                {/* <!-- Dropdown Structure --> */}
                                <ul id='dropdown_lesson_01' className='dropdown-content dropdown-wide'>
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
                      </div>
                      <div className="card-content">
                        <div className="chart-container">
                          <div className="chart-holder">
                            <span className="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 0}' data-duration="1">
                              {/* <!-- do not change path attribute "d" !!! --> */}
                              <svg  width="110px" height="110px" viewBox=" 0 0 110 110">
                                <path fill="none" style={{ strokeWidth: '22', stroke: '#d6d6d6' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
                                <path data-dinamic fill="none" style={{ strokeWidth: '22', stroke: '#62b771' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
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
                        <div className="card-footer-row center-align">
                          <div className="card-footer-holder">
                            <p>p.128  (Challange + Practice)</p>
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
        <div className="add-btn-block">
          <a href="#" className="dropdown-trigger waves-effect waves-teal btn add-btn" data-target='dropdown_assign_selected_lessons'><i className="material-icons">add</i> Assign Selected</a>
          <ul id='dropdown_assign_selected_lessons' className='dropdown-content'>
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

export default AssignLessonModal;

/* <!-- Modal structure Assign Lesson --> */