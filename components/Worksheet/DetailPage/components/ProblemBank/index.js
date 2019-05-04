import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../../../../Portal';

class ProblemBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    }
  }

  render() {
    const { open } = this.props;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="wrapper">
            <div id="modal_add_problem" className="modal-page modal modal-custom" style={{ zIndex: 1003, position: 'fixed', left: '0', right: '0' }}>
              <div className="card-modal grey lighten-3">
                <div className="header-modal-box card-panel light-blue lighten-1 white-text">
                  <div className="header-flex-row row mb-0">
                    <div className="col s12 m4 l5">
                      <div className="header-holder">
                        <div className="header-col">
                          <div className="icon-col">
                            <i className="icon-search"></i>
                          </div>
                        </div>
                        <div className="header-col">
                          <nav className="breadcrumb-header">
                            <div className="nav-wrapper ">
                              <a href="#!" className="breadcrumb modal-close">&lt; Custom Worksheet</a>
                            </div>
                          </nav>
                          <div className="card-panel-text">
                            <h1 className="text-large">Problem Bank</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-panel-description col s8 m3 l2">
                      <div className="card-panel-text">
                        <div className="col-row">
                          <span className="value">24</span>
                          <span className="value-text">worksheet <br />problems</span>
                        </div>
                      </div>
                    </div>
                    <div className="col s2 m1 right-align position-mobile-right">
                      <div className="close-block">
                        <a href="#" className="modal-close close"><i className="icon-close-thin"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="tabs-switcher-holder card-panel-row">
                    {/* <!-- tabs switcher --> */}
                    <ul className="tabs">
                      <li className="tab col s3"><a className="active" href="#tab_problems"><b>Problems</b></a></li>
                      <li className="tab col s3"><a href="#tab_passages"><b>Passages</b></a></li>
                    </ul>
                  </div>
                </div>
                <div className="tabs-content">
                  {/* <!-- tab problems --> */}
                  <div id="tab_problems" className="tab-content">
                    <div className="filter-form-holder">
                      <ul className="collapsible expandable">
                        <li>
                          <div className="collapsible-body">
                            <div className="filter-form_checkbox-list-holder justify-center">
                              <ul className="filter-form_checkbox-list">
                                <li>
                                  <input type="checkbox" id="reading_problems" />
                                  <label htmlFor="reading_problems">Reading</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="writing_problems" />
                                  <label htmlFor="writing_problems">Writing</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="math_problems" />
                                  <label htmlFor="math_problems">Math</label>
                                </li>
                              </ul>
                              <ul className="filter-form_checkbox-list">
                                <li>
                                  <input type="checkbox" id="easy_problems" />
                                  <label htmlFor="easy_problems">Easy</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="medium_problems" />
                                  <label htmlFor="medium_problems">Medium</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="hard_problems" />
                                  <label htmlFor="hard_problems">Hard</label>
                                </li>
                              </ul>
                              <ul className="filter-form_checkbox-list">
                                <li>
                                  <input type="checkbox" id="sat_practice_problems" />
                                  <label htmlFor="sat_practice_problems">SAT Practice</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="skill_builder_problems" />
                                  <label htmlFor="skill_builder_problems">Skill Builder</label>
                                </li>
                              </ul>
                              <ul className="filter-form_checkbox-list">
                                <li>
                                  <input type="checkbox" id="in_workbook_problems" />
                                  <label htmlFor="in_workbook_problems">In Workbook</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="not_workbook_problems" />
                                  <label htmlFor="not_workbook_problems">Not in Workbook</label>
                                </li>
                              </ul>
                            </div>
                            <div className="d-flex row mb-0 justify-center">
                              <div className="col s12 m3">
                                <div className="input-field">
                                  <select id="topic_problems">
                                    <option>Topic</option>
                                    <option>Topic</option>
                                    <option>Topic</option>
                                  </select>
                                  <label className="label" htmlFor="topic_problems">Topic</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-0 d-flex align-items-center">
                            <div className="col s12 l4 hide-on-med-and-down show-on-large">&nbsp;</div>
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
                      <div className="table-header white hide-on-med-and-down">
                        <div className="container-lg">
                          <div className="list-table detail-table">
                            <div className="list-table-header table-header-box">
                              <div className="list-table-row">
                                <div className="list-table-cell checkbox-cell">
                                  <label>
                                    <input type="checkbox" className="filled-in" data-check-pattern="[name^='check_']" />
                                    <span>&nbsp;</span>
                                  </label>
                                </div>
                                <div className="list-table-cell subject-cell">
                                  <a href="#"><span className="sort-holder">Subject <i className="sort-icon custom-icon-traingle-down"></i></span></a>
                                </div>
                                <div className="list-table-cell info-cell"><b>Diﬃculty</b></div>
                                <div className="list-table-cell type-cell"><b>Type</b></div>
                                <div className="list-table-cell in-cell"><b>In Workbook</b></div>
                                <div className="list-table-cell topic-cell"><b>Topic(s)</b></div>
                                <div className="list-table-cell view-cell"><b>&nbsp;</b></div>
                                <div className="list-table-cell drop-cell">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-section content-section-80">
                      <div className="container-lg">
                        <div className="result-row center-align">
                          <b className="result">- 16 matches -</b>
                        </div>
                        <div className="list-view-section">
                          <div className="list-table detail-table">
                            <div className="list-table-header show-on-medium-and-down hide-on-large-only">
                              <div className="list-table-row">
                                <div className="list-table-cell checkbox-cell">
                                  <label>
                                    <input type="checkbox" className="filled-in" data-check-pattern="[name^='check_']" />
                                    <span>&nbsp;</span>
                                  </label>
                                </div>
                                <div className="list-table-cell subject-cell">
                                  <a href="#"><span className="sort-holder">Subject <i className="sort-icon custom-icon-traingle-down"></i></span></a>
                                </div>
                                <div className="list-table-cell info-cell"><b>Diﬃculty</b></div>
                                <div className="list-table-cell type-cell"><b>Type</b></div>
                                <div className="list-table-cell in-cell"><b>In Workbook</b></div>
                                <div className="list-table-cell topic-cell"><b>Topic(s)</b></div>
                                <div className="list-table-cell view-cell"><b>&nbsp;</b></div>
                                <div className="list-table-cell drop-cell">&nbsp;</div>
                              </div>
                            </div>
                            <div className="list-table-body">
                              {/* <!-- card row --> */}
                              <div className="card list-table-row">
                                <div className="list-table-cell checkbox-cell">
                                  <label>
                                    <input type="checkbox" className="filled-in" name="check_01" />
                                    <span>&nbsp;</span>
                                  </label>
                                </div>
                                <div className="list-table-cell subject-cell">
                                  <span>Math</span>
                                </div>
                                <div className="list-table-cell info-cell">
                                  <span>Easy</span>
                                </div>
                                <div className="list-table-cell type-cell">
                                  <span>Skill Builder</span>
                                </div>
                                <div className="list-table-cell in-cell">No</div>
                                <div className="list-table-cell topic-cell">
                                  <span className="chip">Right Trianges</span>
                                  <span className="chip">Trigonometry</span>
                                </div>
                                <div className="list-table-cell view-cell">
                                  <a href="#"><i className="icon-eye"></i></a>
                                </div>
                                <div className="list-table-cell drop-cell">
                                  <a href="#"><i className="icon-plus-circle"></i></a>
                                </div>
                              </div>
                              {/* <!-- card row --> */}
                              <div className="card list-table-row">
                                <div className="list-table-cell checkbox-cell">
                                  <label>
                                    <input type="checkbox" className="filled-in" name="check_02" />
                                    <span>&nbsp;</span>
                                  </label>
                                </div>
                                <div className="list-table-cell subject-cell">
                                  <span>Math</span>
                                </div>
                                <div className="list-table-cell info-cell">
                                  <span>Easy</span>
                                </div>
                                <div className="list-table-cell type-cell">
                                  <span>Skill Builder</span>
                                </div>
                                <div className="list-table-cell in-cell">No</div>
                                <div className="list-table-cell topic-cell">
                                  <span className="chip">Right Trianges</span>
                                  <span className="chip">Trigonometry</span>
                                </div>
                                <div className="list-table-cell view-cell">
                                  <a href="#"><i className="icon-eye"></i></a>
                                </div>
                                <div className="list-table-cell drop-cell">
                                  <a href="#"><i className="icon-plus-circle"></i></a>
                                </div>
                              </div>
                              {/* <!-- card row --> */}
                              <div className="card list-table-row">
                                <div className="list-table-cell checkbox-cell">
                                  <label>
                                    <input type="checkbox" className="filled-in" name="check_03" />
                                    <span>&nbsp;</span>
                                  </label>
                                </div>
                                <div className="list-table-cell subject-cell">
                                  <span>Math</span>
                                </div>
                                <div className="list-table-cell info-cell">
                                  <span>Easy</span>
                                </div>
                                <div className="list-table-cell type-cell">
                                  <span>Skill Builder</span>
                                </div>
                                <div className="list-table-cell in-cell">No</div>
                                <div className="list-table-cell topic-cell">
                                  <span className="chip">Right Trianges</span>
                                  <span className="chip">Trigonometry</span>
                                </div>
                                <div className="list-table-cell view-cell">
                                  <a href="#"><i className="icon-eye"></i></a>
                                </div>
                                <div className="list-table-cell drop-cell">
                                  <a href="#"><i className="icon-plus-circle"></i></a>
                                </div>
                              </div>
                              {/* <!-- card row disabled --> */}
                              <div className="card list-table-row list-row-added">
                                <div className="list-table-cell checkbox-cell">
                                  <label>
                                    <input type="checkbox" className="filled-in" name="check_04" disabled />
                                    <span>&nbsp;</span>
                                  </label>
                                </div>
                                <div className="list-table-cell subject-cell">
                                  <span>Math</span>
                                </div>
                                <div className="list-table-cell info-cell">
                                  <span>Easy</span>
                                </div>
                                <div className="list-table-cell type-cell">
                                  <span>Skill Builder</span>
                                </div>
                                <div className="list-table-cell in-cell">No</div>
                                <div className="list-table-cell topic-cell">
                                  <span className="chip">Right Trianges</span>
                                  <span className="chip">Trigonometry</span>
                                </div>
                                <div className="list-table-cell view-cell">
                                  <a href="#"><i className="icon-eye"></i></a>
                                </div>
                                <div className="list-table-cell drop-cell">
                                  <a href="#"><i className="icon-plus-circle"></i></a>
                                </div>
                              </div>
                              {/* <!-- card row --> */}
                              {/* <!-- card row --> */}
                              {/* <!-- card row --> */}
                              {/* <!-- card row --> */}
                              {/* <!-- card row --> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="add-btn-block">
                      <a href="#" className="dropdown-trigger waves-effect waves-teal btn add-btn" data-target='dropdown_assign_selected_problems'><i className="material-icons">add</i> Add Selected Problems</a>
                      <ul id='dropdown_assign_selected_problems' className='dropdown-content'>
                        <li><a href="#">For Today</a></li>
                        <li><a href="#">For Tomorrow</a></li>
                        <li><a href="#">For Next Session</a></li>
                        <li><a href="#">For Date...</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- tab passages --> */}
                  <div id="tab_passages" className="tab-content">
                    <div className="filter-form-holder">
                      <ul className="collapsible expandable">
                        <li>
                          <div className="collapsible-body">
                            <div className="filter-form_checkbox-list-holder justify-center">
                              <ul className="filter-form_checkbox-list">
                                <li>
                                  <input type="checkbox" id="reading_passages" />
                                  <label htmlFor="reading_passages">Reading</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="writing_passages" />
                                  <label htmlFor="writing_passages">Writing</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="math_passages" />
                                  <label htmlFor="math_passages">Math</label>
                                </li>
                              </ul>
                              <ul className="filter-form_checkbox-list">
                                <li>
                                  <input type="checkbox" id="easy_passages" />
                                  <label htmlFor="easy_passages">Easy</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="medium_passages" />
                                  <label htmlFor="medium_passages">Medium</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="hard_passages" />
                                  <label htmlFor="hard_passages">Hard</label>
                                </li>
                              </ul>
                              <ul className="filter-form_checkbox-list">
                                <li>
                                  <input type="checkbox" id="sat_practice_passages" />
                                  <label htmlFor="sat_practice_passages">SAT Practice</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="skill_builder_passages" />
                                  <label htmlFor="skill_builder_passages">Skill Builder</label>
                                </li>
                              </ul>
                              <ul className="filter-form_checkbox-list">
                                <li>
                                  <input type="checkbox" id="in_workbook_passages" />
                                  <label htmlFor="in_workbook_passages">In Workbook</label>
                                </li>
                                <li>
                                  <input type="checkbox" id="not_workbook_passages" />
                                  <label htmlFor="not_workbook_passages">Not in Workbook</label>
                                </li>
                              </ul>
                            </div>
                            <div className="d-flex row mb-0 justify-center">
                              <div className="col s12 m3">
                                <div className="input-field">
                                  <select id="topic_passages">
                                    <option>Topic</option>
                                    <option>Topic</option>
                                    <option>Topic</option>
                                  </select>
                                  <label className="label" htmlFor="topic_passages">Topic</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-0 d-flex align-items-center">
                            <div className="col s12 l4 hide-on-med-and-down show-on-large">&nbsp;</div>
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
                      <div className="table-header white hide-on-med-and-down">
                        <div className="container-lg">
                          <div className="list-table detail-table">
                            <div className="list-table-header table-header-box">
                              <div className="list-table-row">
                                <div className="list-table-cell checkbox-cell">
                                  <span>&nbsp;</span>
                                </div>
                                <div className="list-table-cell subject-cell">
                                  <a href="#"><span className="sort-holder">Subject <i className="sort-icon custom-icon-traingle-down"></i></span></a>
                                </div>
                                <div className="list-table-cell info-cell"><b>Diﬃculty</b></div>
                                <div className="list-table-cell type-cell"><b>Type</b></div>
                                <div className="list-table-cell in-cell"><b>In Workbook</b></div>
                                <div className="list-table-cell topic-cell"><b>Topic(s)</b></div>
                                <div className="list-table-cell view-cell"><b>&nbsp;</b></div>
                                <div className="list-table-cell drop-cell">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-section content-section-80">
                      <div className="container-lg">
                        <div className="result-row center-align">
                          <b className="result">- 8 matches -</b>
                        </div>
                        {/* <!-- card --> */}
                        <div className="list-view-section">
                          <div className="list-table detail-table">
                            <div className="list-table-header show-on-medium-and-down hide-on-large-only">
                              <div className="list-table-row">
                                <div className="list-table-cell checkbox-cell">
                                  <span>&nbsp;</span>
                                </div>
                                <div className="list-table-cell subject-cell">
                                  <a href="#"><span className="sort-holder">Subject <i className="sort-icon custom-icon-traingle-down"></i></span></a>
                                </div>
                                <div className="list-table-cell info-cell"><b>Diﬃculty</b></div>
                                <div className="list-table-cell type-cell"><b>Type</b></div>
                                <div className="list-table-cell in-cell"><b>In Workbook</b></div>
                                <div className="list-table-cell topic-cell"><b>Topic(s)</b></div>
                                <div className="list-table-cell view-cell"><b>&nbsp;</b></div>
                                <div className="list-table-cell drop-cell">&nbsp;</div>
                              </div>
                            </div>
                            <div className="list-table-body">
                              <div className="combined-holder">
                                <div className="combined-header">
                                  <div className="list-table-row">
                                    <div className="list-table-cell checkbox-cell">
                                      <div className="checkbox-block">
                                        <label>
                                          <input type="checkbox" className="filled-in" />
                                          <span>&nbsp;</span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="list-table-cell subject-cell">
                                      <div className="filter-name">Reading</div>
                                    </div>
                                    <div className="list-table-cell combined-title-cell">
                                      <div className="combined-title">This is Where the Title of the Passage Goes</div>
                                    </div>
                                    <div className="list-table-cell view-cell">
                                      <a href="#"><i className="custom-icon-triangle-right"></i></a>
                                    </div>
                                    <div className="list-table-cell drop-cell">
                                      <a href="#"><i className="icon-plus-circle"></i></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="collection">
                                  {/* <!-- card row --> */}
                                  <div className="collection-item list-table-row">
                                    <div className="list-table-cell checkbox-cell">
                                      <span>&nbsp;</span>
                                    </div>
                                    <div className="list-table-cell subject-cell">
                                      <span>Reading</span>
                                    </div>
                                    <div className="list-table-cell info-cell">
                                      <span>Easy</span>
                                    </div>
                                    <div className="list-table-cell type-cell">
                                      <span>SAT Practice</span>
                                    </div>
                                    <div className="list-table-cell in-cell">No</div>
                                    <div className="list-table-cell topic-cell">
                                      <span className="chip">US &amp; World Literature</span>
                                      <span className="chip">This is about the Length of Longest Tag Name</span>
                                    </div>
                                    <div className="list-table-cell view-cell">
                                      <a href="#"><i className="icon-eye"></i></a>
                                    </div>
                                    <div className="list-table-cell drop-cell">
                                      <span>&nbsp;</span>
                                    </div>
                                  </div>
                                  {/* <!-- card row --> */}
                                  <div className="collection-item list-table-row">
                                    <div className="list-table-cell checkbox-cell">
                                      <span>&nbsp;</span>
                                    </div>
                                    <div className="list-table-cell subject-cell">
                                      <span>Reading</span>
                                    </div>
                                    <div className="list-table-cell info-cell">
                                      <span>Medium</span>
                                    </div>
                                    <div className="list-table-cell type-cell">
                                      <span>SAT Practice</span>
                                    </div>
                                    <div className="list-table-cell in-cell">No</div>
                                    <div className="list-table-cell topic-cell">
                                      <span className="chip">US &amp; World Literature</span>
                                      <span className="chip">Cite Text as Evidence</span>
                                      <span className="chip">Purpose of a Sentence</span>
                                      <span className="chip">Some Have Up to 4 Tags</span>
                                    </div>
                                    <div className="list-table-cell view-cell">
                                      <a href="#"><i className="icon-eye"></i></a>
                                    </div>
                                    <div className="list-table-cell drop-cell">
                                      <span>&nbsp;</span>
                                    </div>
                                  </div>
                                  {/* <!-- card row --> */}
                                  <div className="collection-item list-table-row">
                                    <div className="list-table-cell checkbox-cell">
                                      <span>&nbsp;</span>
                                    </div>
                                    <div className="list-table-cell subject-cell">
                                      <span>Reading</span>
                                    </div>
                                    <div className="list-table-cell info-cell">
                                      <span>Hard</span>
                                    </div>
                                    <div className="list-table-cell type-cell">
                                      <span>SAT Practice</span>
                                    </div>
                                    <div className="list-table-cell in-cell">No</div>
                                    <div className="list-table-cell topic-cell">
                                      <span className="chip">US &amp; World Literature</span>
                                      <span className="chip">Cite Text as Evidence</span>
                                    </div>
                                    <div className="list-table-cell view-cell">
                                      <a href="#"><i className="icon-eye"></i></a>
                                    </div>
                                    <div className="list-table-cell drop-cell">
                                      <span>&nbsp;</span>
                                    </div>
                                  </div>
                                  {/* <!-- card row --> */}
                                  {/* <!-- card row --> */}
                                  {/* <!-- card row --> */}
                                  {/* <!-- card row --> */}
                                  {/* <!-- card row --> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- card added --> */}
                        <div className="list-view-section">
                          <div className="list-table detail-table list-table-added">
                            <div className="list-table-body">
                              <div className="combined-holder">
                                <div className="combined-header">
                                  <div className="list-table-row">
                                    <div className="list-table-cell checkbox-cell">
                                      <div className="checkbox-block">
                                        <label>
                                          <input type="checkbox" className="filled-in" disabled />
                                          <span>&nbsp;</span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="list-table-cell subject-cell">
                                      <div className="filter-name">Reading</div>
                                    </div>
                                    <div className="list-table-cell combined-title-cell">
                                      <div className="combined-title">This is Where the Title of the Passage Goes</div>
                                    </div>
                                    <div className="list-table-cell view-cell">
                                      <a href="#"><i className="custom-icon-triangle-right"></i></a>
                                    </div>
                                    <div className="list-table-cell drop-cell">
                                      <a href="#"><i className="icon-plus-circle"></i></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="collection">
                                  {/* <!-- card row --> */}
                                  <div className="collection-item list-table-row">
                                    <div className="list-table-cell checkbox-cell">
                                      <span>&nbsp;</span>
                                    </div>
                                    <div className="list-table-cell subject-cell">
                                      <span>Reading</span>
                                    </div>
                                    <div className="list-table-cell info-cell">
                                      <span>Easy</span>
                                    </div>
                                    <div className="list-table-cell type-cell">
                                      <span>SAT Practice</span>
                                    </div>
                                    <div className="list-table-cell in-cell">No</div>
                                    <div className="list-table-cell topic-cell">
                                      <span className="chip">US &amp; World Literature</span>
                                      <span className="chip">This is about the Length of Longest Tag Name</span>
                                    </div>
                                    <div className="list-table-cell view-cell">
                                      <a href="#"><i className="icon-eye"></i></a>
                                    </div>
                                    <div className="list-table-cell drop-cell">
                                      <span>&nbsp;</span>
                                    </div>
                                  </div>
                                  {/* <!-- card row --> */}
                                  <div className="collection-item list-table-row">
                                    <div className="list-table-cell checkbox-cell">
                                      <span>&nbsp;</span>
                                    </div>
                                    <div className="list-table-cell subject-cell">
                                      <span>Reading</span>
                                    </div>
                                    <div className="list-table-cell info-cell">
                                      <span>Medium</span>
                                    </div>
                                    <div className="list-table-cell type-cell">
                                      <span>SAT Practice</span>
                                    </div>
                                    <div className="list-table-cell in-cell">No</div>
                                    <div className="list-table-cell topic-cell">
                                      <span className="chip">US &amp; World Literature</span>
                                      <span className="chip">Cite Text as Evidence</span>
                                      <span className="chip">Purpose of a Sentence</span>
                                      <span className="chip">Some Have Up to 4 Tags</span>
                                    </div>
                                    <div className="list-table-cell view-cell">
                                      <a href="#"><i className="icon-eye"></i></a>
                                    </div>
                                    <div className="list-table-cell drop-cell">
                                      <span>&nbsp;</span>
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
                      <a href="#" className="dropdown-trigger waves-effect waves-teal btn add-btn" data-target='dropdown_assign_selected_passeges'><i className="material-icons">add</i> Add Selected Problems</a>
                      <ul id='dropdown_assign_selected_passeges' className='dropdown-content'>
                        <li><a href="#">For Today</a></li>
                        <li><a href="#">For Tomorrow</a></li>
                        <li><a href="#">For Next Session</a></li>
                        <li><a href="#">For Date...</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <style jsx>
          {`
              h4 {
                font-size: 2.28rem;
                line-height: 110%;
                margin: 1.52rem 0 .912rem 0;
                margin-top: 0;
              }
              .overlay {
                position: fixed;
                background-color: rgba(0, 0, 0, 0.7);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 999;
              }
              .card-modal {
                margin: 0;
                border-radius: 6px;
              }
              #modal_Location1 {
                border-radius: 6px;
              }
              .modal {
                display: block;
                background-color: white;
                position: absolute;
                top: 10%;
                right: 10%;
                left: 10%;
                box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
              }
              .modal-custom {
                opacity: 1;
                visibility: visible;
              }
              .modal-footer {
                background-color: white;
              }
            `}
        </style>
      </Portal>
    );
  }
}

ProblemBank.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default ProblemBank;
