/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Portal from '../../../../Portal';
import FilterSection from './components/FilterSection';
import TableHeader from './components/TableHeader';

import sampleProblems from '../../../utils/sampleProblems';
import samplePassages from '../../../utils/samplePassages';
import { topicMap, workbookMap, subjectMap, difficultyMap, typeMap } from '../../../utils/worksheetFilterMap';
import { subjectAscending, subjectDescending } from '../../../../utils/sortFunctions';

class ProblemBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addProblemsDropdownOpen: false,
      openSection: 'problems',
      topicFilter: '',
      subjectFilters: [],
      difficultyFilters: [],
      typeFilters: [],
      workbookFilters: [],
      sort: '',
      selectedProblems: [],
      selectedPassages: [],
      problems: sampleProblems,
      passages: samplePassages,
    }
  }

  onToggleAddProblemDropdown = () => this.setState(({ addProblemsDropdownOpen }) => ({ addProblemsDropdownOpen: !addProblemsDropdownOpen }))

  onChangeOpenSection = (openSection) => this.setState({ openSection })
  onSetFilteredTopicState = (topicFilter) => this.setState({ topicFilter })
  onClearFilters = () => this.setState({ subjectFilters: [], difficultyFilters: [], typeFilters: [], workbookFilters: [], topicFilter: '' })

  onSetAscendingSort = () => this.setState({ sort: 'ascending' });
  onSetDescendingSort = () => this.setState({ sort: 'descending' });

  onSortBySubject = (problemsOrPassages) => {
    const { sort } = this.state;
    if (sort === 'ascending') {
      return problemsOrPassages.sort(subjectAscending);
    }
    return problemsOrPassages.sort(subjectDescending);
  }
  // Difficulty and type filters are similar enough to reuse the same reduce function, topic and workbook are unique enough to get repetitive for the sake of readability
  onFilterPassages = (passages, filterType, filter) => {
    switch (filterType) {
      case 'difficulty':
      case 'type':
        return passages.reduce((finalArr, passage) => {
          passage.problems.map(problem => {
            if (filter.indexOf(problem[filterType]) !== -1 && finalArr.indexOf(passage) === -1) {
              finalArr.push(passage);
            }
          });
          return finalArr;
        }, []);
      case 'topic':
        return passages.reduce((finalArr, passage) => {
          passage.problems.map(problem => {
            if (problem.topics.indexOf(filter) !== -1 && finalArr.indexOf(passage) === -1) {
              finalArr.push(passage);
            }
          });
          return finalArr;
        }, []);
      case 'workbook':
        return passages.reduce((finalArr, passage) => {
          passage.problems.map(problem => {
            if (filter.indexOf(workbookMap[problem.inWorkbook]) !== -1 && finalArr.indexOf(passage) === -1) {
              finalArr.push(passage);
            }
          });
          return finalArr;
        }, []);
      default:
        break;
    }
  }

  // Problems get filtered with basic filter functions, passages get passed into onFilterPassages since a few of the filters are based on the problems nested in each passage
  onFilterProblemsOrPassages = (type) => {
    const { subjectFilters, difficultyFilters, typeFilters, workbookFilters, topicFilter, problems: allProblems, passages: allPassages } = this.state;
    let problemsOrPassages;
    if (type === 'problems') {
      problemsOrPassages = allProblems;
    } else {
      problemsOrPassages = allPassages;
    }
    if (subjectFilters.length) {
      problemsOrPassages = problemsOrPassages.filter(problemOrPassage => subjectFilters.indexOf(problemOrPassage.subject) !== -1);
    }
    if (difficultyFilters.length) {
      if (type === 'problems') {
        problemsOrPassages = problemsOrPassages.filter(problem => difficultyFilters.indexOf(problem.difficulty) !== -1);
      } else {
        problemsOrPassages = this.onFilterPassages(problemsOrPassages, 'difficulty', difficultyFilters);
      }
    }
    if (typeFilters.length) {
      if (type === 'problems') {
        problemsOrPassages = problemsOrPassages.filter(problem => typeFilters.indexOf(problem.type) !== -1);
      } else {
        problemsOrPassages = this.onFilterPassages(problemsOrPassages, 'type', typeFilters);
      }
    }
    if (workbookFilters.length) {
      if (type === 'problems') {
        problemsOrPassages = problemsOrPassages.filter(problem => workbookFilters.indexOf(workbookMap[problem.inWorkbook]) !== -1);
      } else {
        problemsOrPassages = this.onFilterPassages(problemsOrPassages, 'workbook', workbookFilters);
      }
    }
    if (topicFilter.length) {
      if (type === 'problems') {
        problemsOrPassages = problemsOrPassages.filter(problem => problem.topics.indexOf(topicFilter) !== -1);
      } else {
        problemsOrPassages = this.onFilterPassages(problemsOrPassages, 'topic', topicFilter);
      }
    }
    return problemsOrPassages;
  }

  onAddSelectedProblems = (addTime) => {
    const { selectedProblems, selectedPassages } = this.state;
    const { addSelectedProblems } = this.props;
    addSelectedProblems(selectedProblems, selectedPassages, addTime);
    this.setState({ selectedPassages: [], selectedProblems: [], addProblemsDropdownOpen: false });
   }

  getMappableProblemsOrPassages = (type) => {
    const { subjectFilters, difficultyFilters, typeFilters, workbookFilters, topicFilter, sort, problems: allProblems, passages: allPassages } = this.state;
    let problemsOrPassages;
    if (type === 'problems') {
      problemsOrPassages = allProblems;
    } else {
      problemsOrPassages = allPassages;
    }
    if (topicFilter.length || subjectFilters.length || difficultyFilters.length || typeFilters.length || workbookFilters.length) {
      problemsOrPassages = this.onFilterProblemsOrPassages(type);
    }
    if (sort) {
      return this.onSortBySubject(problemsOrPassages);
    }
    return problemsOrPassages;
  }

  determineSort = () => {
    const { sort } = this.state;
    if (sort === '' || sort === 'descending') {
      return this.onSetAscendingSort();
    }
    return this.onSetDescendingSort();
  }

  handleFilterClick = (filterType, filter) => {
    const { subjectFilters: currentSubjectFilters, difficultyFilters: currentDifficultyFilters,
      typeFilters: currentTypeFilters, workbookFilters: currentWorkbookFilters } = this.state;
    let modifiedFilterCurrentState;
    let modifiedFilterName;
    let modifiedFilterUpdatedState;
    switch (filterType) {
      case 'subject':
        modifiedFilterCurrentState = currentSubjectFilters;
        modifiedFilterName = 'subjectFilters';
        break;
      case 'difficulty':
        modifiedFilterCurrentState = currentDifficultyFilters;
        modifiedFilterName = 'difficultyFilters';
        break;
      case 'type':
        modifiedFilterCurrentState = currentTypeFilters;
        modifiedFilterName = 'typeFilters';
        break;
      case 'workbook':
        modifiedFilterCurrentState = currentWorkbookFilters;
        modifiedFilterName = 'workbookFilters';
        break;
      default:
        break;
    }
    if (modifiedFilterCurrentState.indexOf(filter) === -1) {
      modifiedFilterUpdatedState = update(modifiedFilterCurrentState, {
        $push: [filter],
      });
    } else {
      const filterIndex = modifiedFilterCurrentState.indexOf(filter);
      modifiedFilterUpdatedState = update(modifiedFilterCurrentState, {
        $splice: [[ filterIndex, 1 ]],
      });
    }
    this.setState({ [modifiedFilterName]: modifiedFilterUpdatedState });
  }

  toggleSelectAllProblemsOrPassages = () => {
    const { openSection: type, problems, passages, selectedProblems: currentSelectedProblems, selectedPassages: currentSelectedPassages } = this.state;
    let clickedTypeCurrentState;
    let clickedTypeName;
    let clickedAllOfType;
    if (type === 'problems') {
      clickedTypeCurrentState = currentSelectedProblems;
      clickedTypeName = 'selectedProblems';
      clickedAllOfType = problems;
    } else {
      clickedTypeCurrentState = currentSelectedPassages;
      clickedTypeName = 'selectedPassages';
      clickedAllOfType = passages;
    }
    if (clickedTypeCurrentState.length === 0) {
      this.setState({ [clickedTypeName]: clickedAllOfType });
    } else {
      this.setState({ [clickedTypeName]: [] });
    }
  }

  // Conditionally updates the selected problem or passages array depending on the incoming type name
  handleProblemOrPassageClick = (type, value) => {
    const { selectedProblems: currentSelectedProblems, selectedPassages: currentSelectedPassages } = this.state;
    let clickedTypeCurrentState;
    let clickedTypeName;
    if (type === 'problem') {
      clickedTypeCurrentState = currentSelectedProblems;
      clickedTypeName = 'selectedProblems';
    } else {
      clickedTypeCurrentState = currentSelectedPassages;
      clickedTypeName = 'selectedPassages';
    }
    let clickedTypeUpdatedState;
    if (clickedTypeCurrentState.map(selectedElement => selectedElement.id).indexOf(value.id) === -1) {
      clickedTypeUpdatedState = update(clickedTypeCurrentState, {
        $push: [value],
      });
    } else {
      const selectedIndex = clickedTypeCurrentState.map(selectedElement => selectedElement.id).indexOf(value.id);
      clickedTypeUpdatedState = update(clickedTypeCurrentState, {
        $splice: [[ selectedIndex, 1 ]],
      });
    }
    this.setState({ [clickedTypeName]: clickedTypeUpdatedState });
  }

  mapProblems = () => this.getMappableProblemsOrPassages('problems').map(problem => {
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
              checked={selectedProblems.map(selectedProblem => selectedProblem.id).indexOf(problem.id) !== -1}
              onChange={() => this.handleProblemOrPassageClick('problem', problem)}
            />
            <span>&nbsp;</span>
          </label>
        </div>
        <div className="list-table-cell subject-cell">
          <span>{subjectMap[problem.subject]}</span>
        </div>
        <div className="list-table-cell info-cell">
          <span>{difficultyMap[problem.difficulty]}</span>
        </div>
        <div className="list-table-cell type-cell">
          <span>{typeMap[problem.type]}</span>
        </div>
        <div className="list-table-cell in-cell">{problem.inWorkbook ? 'Yes' : 'No'}</div>
        <div className="list-table-cell topic-cell">
          {problem.topics.map(topic => <span className="chip">{topicMap[topic]}</span>)}
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

  mapPassages = () => this.getMappableProblemsOrPassages('passages').map(passage => {
    const { selectedPassages } = this.state;
    const selected = selectedPassages.map(selectedPassage => selectedPassage.id).indexOf(passage.id) !== -1;
    return (
      <div className="list-view-section">
        <div className={selected ? "list-table detail-table list-table-added" : "list-table detail-table"}>
          <TableHeader sortBySubject={this.determineSort} />
          <div className="list-table-body">
            <div className="combined-holder">
              <div className="combined-header">
                <div className="list-table-row">
                  <div className="list-table-cell checkbox-cell">
                    <div className="checkbox-block">
                      <label>
                        <input
                          type="checkbox"
                          className="filled-in"
                          checked={selectedPassages.map(selectedPassage => selectedPassage.id).indexOf(passage.id) !== -1}
                          onChange={() => this.handleProblemOrPassageClick('passage', passage)}
                        />
                        <span>&nbsp;</span>
                      </label>
                    </div>
                  </div>
                  <div className="list-table-cell subject-cell">
                    <div className="filter-name">{subjectMap[passage.subject]}</div>
                  </div>
                  <div className="list-table-cell combined-title-cell">
                    <div className="combined-title">{passage.title}</div>
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
                {passage.problems.map(problem => (
                  <div className="collection-item list-table-row">
                    <div className="list-table-cell checkbox-cell">
                      <span>&nbsp;</span>
                    </div>
                    <div className="list-table-cell subject-cell">
                      <span>{subjectMap[problem.subject]}</span>
                    </div>
                    <div className="list-table-cell info-cell">
                      <span>{difficultyMap[problem.difficulty]}</span>
                    </div>
                    <div className="list-table-cell type-cell">
                      <span>{typeMap[problem.type]}</span>
                    </div>
                    <div className="list-table-cell in-cell">{problem.inWorkbook ? 'Yes' : 'No'}</div>
                    <div className="list-table-cell topic-cell">
                      {problem.topics.map(topic => <span className="chip">{topicMap[topic]}</span>)}
                    </div>
                    <div className="list-table-cell view-cell">
                      <a href="#"><i className="icon-eye"></i></a>
                    </div>
                    <div className="list-table-cell drop-cell">
                      <span>&nbsp;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })

  render() {
    const { open, onClose } = this.props;
    const { openSection, subjectFilters, difficultyFilters, typeFilters, workbookFilters, addProblemsDropdownOpen } = this.state;
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
                        {/* TODO: Figure out what this number is supposed to reflect */}
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
                        style={{ borderBottom: openSection === 'problems' ? '2px solid white' : '' }}
                      >
                        <a className={openSection === 'problems' ? 'active' : ''} href="#" onClick={() => this.onChangeOpenSection('problems')}>
                          <b>Problems</b>
                        </a>
                      </li>
                      <li
                        className="tab col s3"
                        style={{ borderBottom: openSection === 'passages' ? '2px solid white' : '' }}
                      >
                        <a className={openSection === 'passages' ? 'active' : ''} href="#" onClick={() => this.onChangeOpenSection('passages')}>
                          <b>Passages</b>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tabs-content">
                  <FilterSection
                    onSetFilteredTopicState={this.onSetFilteredTopicState}
                    onClearFilters={this.onClearFilters}
                    sortBySubject={this.determineSort}
                    toggleSelectAllProblemsOrPassages={this.toggleSelectAllProblemsOrPassages}
                    handleFilterClick={this.handleFilterClick}
                    subjectFilters={subjectFilters}
                    difficultyFilters={difficultyFilters}
                    typeFilters={typeFilters}
                    workbookFilters={workbookFilters}
                  />
                  <Choose>
                    <When condition={openSection === 'problems'}>
                      <div id="tab_problems" className="tab-content active">
                        <div className="content-section content-section-80">
                          <div className="container-lg">
                            <div className="result-row center-align">
                              <b className="result">- {this.getMappableProblemsOrPassages('problems').length} matches -</b>
                            </div>
                            <div className="list-view-section">
                              <div className="list-table detail-table">
                                <TableHeader sortBySubject={this.determineSort} />
                                <div className="list-table-body">
                                  {this.mapProblems()}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </When>
                    <Otherwise>
                      <div id="tab_passages" className="tab-content active">
                        <div className="content-section content-section-80">
                          <div className="container-lg">
                            <div className="result-row center-align">
                              <b className="result">- {this.getMappableProblemsOrPassages('passages').length} matches -</b>
                            </div>
                            {this.mapPassages()}
                          </div>
                        </div>
                      </div>
                    </Otherwise>
                  </Choose>
                  <div className="add-btn-block">
                    <a
                      href="#"
                      className="dropdown-trigger waves-effect waves-teal btn add-btn"
                      data-target='dropdown_assign_selected_passeges'
                      onClick={this.onToggleAddProblemDropdown}
                    >
                      <i className="material-icons">add</i>
                      Add Selected Problems
                    </a>
                    <ul
                      id='dropdown_assign_selected_passeges'
                      className='dropdown-content'
                      style={{ display: addProblemsDropdownOpen ? 'block' : '0', opacity: addProblemsDropdownOpen ? '1' : '0' }}
                    >
                      <li><a href="#" onClick={() => this.onAddSelectedProblems('today')}>For Today</a></li>
                      <li><a href="#" onClick={() => this.onAddSelectedProblems('tomorrow')}>For Tomorrow</a></li>
                      <li><a href="#" onClick={() => this.onAddSelectedProblems('nextSession')}>For Next Session</a></li>
                      <li><a href="#" onClick={() => this.onAddSelectedProblems('date')}>For Date...</a></li>
                    </ul>
                  </div>
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
  addSelectedProblems: PropTypes.func.isRequired,
}

export default ProblemBank;
