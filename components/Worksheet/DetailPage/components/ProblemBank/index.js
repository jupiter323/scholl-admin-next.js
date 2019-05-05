import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Portal from '../../../../Portal';
import FilterSection from './components/FilterSection';
import sampleProblems from '../../../utils/sampleProblems';
import { subject } from '../../../../utils/sortFunctions';

class ProblemBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: 'problems',
      filterTopic: '',
      selectedProblems: [],
      selectedPassages: [],
      problems: sampleProblems,
    }
  }

  onChangeOpenSection = (openSection) => this.setState({ openSection })

  onSetFilteredTopicState = (filterTopic) => this.setState({ worksheetsAreFiltered: true, filterTopic })
  onUnsetFilteredTopicState = () => this.setState({ filterTopic: '' }, this.checkForFilteredState)

  // TODO: change this function to handle array of topics instead of just one
  onFilterByTopic = (preFilteredProblems = []) => {
    const { problems: allProblems, filterTopic } = this.state;
    let problems;
    if (preFilteredProblems.length) {
      problems = preFilteredProblems;
    } else {
      problems = allProblems;
    }
    return problems.reduce((finalArr, currentWorksheet) => {
      const { topic } = currentWorksheet;
      if (topic === filterTopic && finalArr.indexOf(currentWorksheet) === -1) {
        finalArr.push(currentWorksheet);
      }
      return finalArr;
    }, []);
  }

  getMappableProblems = () => {
    const { filterTopic, problems: allProblems, sort } = this.state;
    let problems;
    if (filterTopic.length) {
      problems = this.onFilterByTopic();
    } else {
      problems = allProblems;
    }
    if (sort) {
      return problems.sort(subject);
    }
    return problems;
  }

  handleProblemOrPassageClick = (type, value) => {
    if (type === 'problem') {
      const { selectedProblems: currentSelectedProblems } = this.state;
      let selectedProblems;
      if (currentSelectedProblems.map(selectedProblem => selectedProblem.id).indexOf(value.id) === -1) {
        selectedProblems = update(currentSelectedProblems, {
          $push: [value],
        });
      } else {
        const problemIndex = currentSelectedProblems.map(selectedProblem => selectedProblem.id).indexOf(value.id);
        selectedProblems = update(currentSelectedProblems, {
          $splice: [[ problemIndex, 1 ]],
        });
      }
      this.setState({ selectedProblems });
    } else {
      const { selectedPassages: currentSelectedPassages } = this.state;
      let selectedPassages;
      if (currentSelectedPassages.map(selectedPassage => selectedPassage.id).indexOf(value.id) === -1) {
        selectedPassages = update(currentSelectedPassages, {
          $push: [value],
        });
      } else {
        const passageIndex = currentSelectedPassages.map(selectedPassage => selectedPassage.id).indexOf(value.id);
        selectedPassages = update(currentSelectedPassages, {
          $splice: [[ passageIndex, 1 ]],
        });
      }
      this.setState({ selectedPassages });
    }
  }

  mapProblems = () => this.getMappableProblems().map(problem => {
    const { selectedProblems } = this.state;
    const selected = selectedProblems.map(selectedProblem => selectedProblem.id).indexOf(problem.id) !== -1;
    return (
      <div className={selected ? "card list-table-row list-row-added" : "card list-table-row"}>
        <div className="list-table-cell checkbox-cell">
          <label>
            <input
              type="checkbox"
              className="filled-in"
              name="check_01"
              onClick={() => this.handleProblemOrPassageClick('problem', problem)}
            />
            <span>&nbsp;</span>
          </label>
        </div>
        <div className="list-table-cell subject-cell">
          <span>{problem.subject}</span>
        </div>
        <div className="list-table-cell info-cell">
          <span>{problem.difficulty}</span>
        </div>
        <div className="list-table-cell type-cell">
          <span>{problem.type}</span>
        </div>
        <div className="list-table-cell in-cell">{problem.inWorkbook}</div>
        <div className="list-table-cell topic-cell">
          {problem.topics.map(topic => <span className="chip">{topic}</span>)}
          {/* <span className="chip">Right Trianges</span>
          <span className="chip">Trigonometry</span> */}
        </div>
        <div className="list-table-cell view-cell">
          <a href="#"><i className="icon-eye"></i></a>
        </div>
        <div className="list-table-cell drop-cell">
          <a href="#"><i className="icon-plus-circle"></i></a>
        </div>
      </div>
    )
  })

  render() {
    const { open, onClose } = this.props;
    const { openSection } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="wrapper">
            <div id="modal_add_problem" className="modal-page modal modal-custom" style={{ zIndex: '1003' }}>
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
                        <a href="#" className="modal-close close" onClick={onClose}><i className="icon-close-thin"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="tabs-switcher-holder card-panel-row">
                    <ul className="tabs">
                      <li
                        className="tab col s3"
                      >
                        <a className={openSection === 'problems' ? 'active' : ''} href="#" onClick={() => this.onChangeOpenSection('problems')}>
                          <b>Problems</b>
                        </a>
                      </li>
                      <li
                        className="tab col s3"
                      >
                        <a className={openSection === 'passages' ? 'active' : ''} href="#" onClick={() => this.onChangeOpenSection('passages')}>
                          <b>Passages</b>
                        </a>
                      </li>
                      <li
                        className="indicator"
                        style={{ width: '67px', left: openSection === 'problems' ? '455px' : '565px'  }}
                      >
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tabs-content">
                  <FilterSection
                    onSetFilteredTopicState={this.onSetFilteredTopicState}
                    onUnsetFilteredTopicState={this.onUnsetFilteredTopicState}
                  />
                  <Choose>
                    <When condition={openSection === 'problems'}>
                      {/* <!-- tab problems --> */}
                      <div id="tab_problems" className="tab-content active">
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
                                  {this.mapProblems()}
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
                    </When>
                    <Otherwise>
                      {/* <!-- tab passages --> */}
                      <div id="tab_passages" className="tab-content active">
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
                    </Otherwise>
                  </Choose>
                </div>
              </div>
            </div>
          </div>
        )}
        <style jsx>
          {`
              .card-modal {
                margin: 0;
                border-radius: 6px;
              }
              .wrapper {
                min-height: 0px;
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
  onClose: PropTypes.func.isRequired,
}

export default ProblemBank;
