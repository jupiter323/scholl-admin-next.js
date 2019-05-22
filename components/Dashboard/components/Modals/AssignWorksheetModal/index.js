import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import moment from 'moment';

import Portal from '../../../../Portal';

import FilterSection from './components/FilterSection';
import WorksheetCard from './components/WorksheetCard';
import { difficultySort, problemSort, timeEstimateSort, subjectSort } from '../../../utils/sortOptions';
import sampleWorksheets from '../../../utils/sampleWorksheets';

const worksheetTypeMap = {
  'SAT Practice': 'satPractice',
  'Skill Builders': 'skillBuilders',
  'Mixed': 'mixedType',
};

const worksheetSourceMap = {
  'Built-In': 'builtIn',
  'User Created': 'userCreated',
};

const worksheetDifficultyMap = {
  'Easy': 'easy',
  'Medium': 'medium',
  'Difficult': 'difficult',
  'Mixed': 'mixedDifficulty',
};

const worksheetSubjectMap = {
  'Reading': 'readingSubject',
  'Writing': 'writingSubject',
  'Math': 'mathSubject',
  'Mixed': 'mixedSubject',
};

class AssignWorksheetModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: '',
      unitFilter: '',
      titleFilter: '',
      typeFilters: [],
      sourceFilters: [],
      subjectFilters: [],
      selectedWorksheets: [],
      difficultyFilters: [],
      worksheets: sampleWorksheets,
      dropdownIndex: null,
      dropdownIsOpen: false,
      assignSelectedDropdownOpen: false,
    };
  }

  onToggleAssignSelectedDropdown = () => this.setState(({ assignSelectedDropdownOpen }) => ({ assignSelectedDropdownOpen: !assignSelectedDropdownOpen }))

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  onResetModal = () => this.setState({ sourceFilters: [], difficultyFilters: [], subjectFilters: [], typeFilters: [], sort: '' })
  onSetSort = (sort) => this.setState({ sort })

  onSetFilteredState = (titleFilter, value) => this.setState({ [titleFilter]: value })
  onUnsetFilteredState = (titleFilter) => this.setState({ [titleFilter]: '' })

  onCloseModal = () => {
    const { onClose } = this.props;
    onClose();
    this.onResetModal();
  }

  // eslint-disable-next-line consistent-return
  onSortWorksheets = (worksheets) => {
    const { sort } = this.state;
    switch (sort) {
      case 'difficulty':
        return worksheets.sort(difficultySort);
      case 'problems':
        return worksheets.sort(problemSort);
      case 'timeEstimate':
        return worksheets.sort(timeEstimateSort);
      case 'subject':
        return worksheets.sort(subjectSort);
      default:
        break;
    }
  }

  onFilterByTitle = () => {
    const { worksheets, titleFilter } = this.state;
    return worksheets.reduce((finalArr, currentWorksheet) => {
      const { title } = currentWorksheet;
      const worksheetString = title.replace(/\s/g, "").toLowerCase();
      if (worksheetString.indexOf(titleFilter) !== -1 && finalArr.indexOf(currentWorksheet) === -1) {
        finalArr.push(currentWorksheet);
      }
      return finalArr;
    }, []);
  }

  onFilterByUnit = () => {
    const { worksheets, unitFilter } = this.state;
    return worksheets.reduce((finalArr, currentWorksheet) => {
      const { unit } = currentWorksheet;
      const worksheetString = unit.replace(/\s/g, "").toLowerCase();
      if (worksheetString.indexOf(unitFilter) !== -1 && finalArr.indexOf(currentWorksheet) === -1) {
        finalArr.push(currentWorksheet);
      }
      return finalArr;
    }, []);
  }

  onFilterWorksheets = () => {
    const { subjectFilters, typeFilters, sourceFilters, difficultyFilters, worksheets: allWorksheets } = this.state;
    let worksheets = allWorksheets;
    if (subjectFilters.length) {
      worksheets = worksheets.filter(worksheet => subjectFilters.indexOf(worksheetSubjectMap[worksheet.subject]) !== -1);
    }
    if (typeFilters.length) {
      worksheets = worksheets.filter(worksheet => typeFilters.indexOf(worksheetTypeMap[worksheet.type]) !== -1);
    }
    if (sourceFilters.length) {
      worksheets = worksheets.filter(worksheet => sourceFilters.indexOf(worksheetSourceMap[worksheet.source]) !== -1);
    }
    if (difficultyFilters.length) {
      worksheets = worksheets.filter(worksheet => difficultyFilters.indexOf(worksheetDifficultyMap[worksheet.difficulty]) !== -1);
    }
    return worksheets;
  }

  getMappableWorksheets = () => {
    const { subjectFilters, typeFilters, difficultyFilters, sourceFilters, sort, unitFilter, titleFilter, worksheets } = this.state;
    let mappableWorksheets = worksheets;
    if (titleFilter.length) {
      mappableWorksheets = this.onFilterByTitle();
    }
    if (unitFilter.length) {
      mappableWorksheets = this.onFilterByUnit();
    }
    if (subjectFilters.length || typeFilters.length || difficultyFilters.length || sourceFilters.length) {
      mappableWorksheets = this.onFilterWorksheets();
    }
    if (sort) {
      return this.onSortWorksheets(mappableWorksheets);
    }
    return mappableWorksheets;
  }

  handleFilterClick = (filterType, filter) => {
    const { sourceFilters: currentSourceFilters, difficultyFilters: currentDifficultyFilters,
      subjectFilters: currentSubjectFilters, typeFilters: currentTypeFilters } = this.state;
    let modifiedFilterCurrentState;
    let modifiedFilterName;
    let modifiedFilterUpdatedState;
    switch (filterType) {
      case 'subject':
        modifiedFilterCurrentState = currentSubjectFilters;
        modifiedFilterName = 'subjectFilters';
        break;
      case 'type':
        modifiedFilterCurrentState = currentTypeFilters;
        modifiedFilterName = 'typeFilters';
        break;
      case 'source':
        modifiedFilterCurrentState = currentSourceFilters;
        modifiedFilterName = 'sourceFilters';
        break;
      case 'difficulty':
        modifiedFilterCurrentState = currentDifficultyFilters;
        modifiedFilterName = 'difficultyFilters';
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

  handleWorksheetClick = (worksheet) => {
    const { selectedWorksheets } = this.state;
    let modifiedWorksheets;
    if (selectedWorksheets.indexOf(worksheet) === -1) {
      modifiedWorksheets = update(selectedWorksheets, {
        $push: [worksheet],
      });
    } else {
      const worksheetIndex = selectedWorksheets.indexOf(worksheet);
      modifiedWorksheets = update(selectedWorksheets, {
        $splice: [[ worksheetIndex, 1 ]],
      });
    }
    this.setState({ selectedWorksheets: modifiedWorksheets });
  }

  assignWorksheets = (date) => {
    const { onAssignWorksheets } = this.props;
    const { selectedWorksheets } = this.state;
    let assignDate;
    switch (date) {
      case 'today':
        assignDate = moment().format('MM/DD/YY');
        break;
      case 'tomorrow':
        assignDate = moment().add(1, 'days').format('MM/DD/YY');
        break;
      case 'nextSession':
        break;
      case 'customDate':
        assignDate = '01/05/19';
        break;
      default:
        break;
    }
    this.onToggleAssignSelectedDropdown();
    onAssignWorksheets(selectedWorksheets, assignDate);
  }

  mapWorksheets = () => this.getMappableWorksheets().map((worksheet, index) => (
    <WorksheetCard
      worksheet={worksheet}
      index={index}
      key={worksheet.id}
      onSetDropdown={this.onSetDropdown}
      onCloseDropdown={this.onCloseDropdown}
      dropdownIndex={this.state.dropdownIndex}
      dropdownIsOpen={this.state.dropdownIsOpen}
      handleWorksheetClick={this.handleWorksheetClick}
      selectedWorksheets={this.state.selectedWorksheets}
    />
  ))

  render() {
    const { open } = this.props;
    const { assignSelectedDropdownOpen, typeFilters, sourceFilters, subjectFilters, difficultyFilters, sort } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="wrapper">
            <div id="modal_assign_worksheet" className="modal-page modal modal-custom" style={{ zIndex: '1003' }}>
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
                      <div className="row icons-row"><a href="#" onClick={this.onCloseModal} className="modal-close close"><i className="icon-close-thin"></i></a></div>
                    </div>
                  </div>
                </div>
                <FilterSection
                  sort={sort}
                  typeFilters={typeFilters}
                  sourceFilters={sourceFilters}
                  subjectFilters={subjectFilters}
                  difficultyFilters={difficultyFilters}
                  onSetSort={this.onSetSort}
                  onClearFilters={this.onResetModal}
                  handleFilterClick={this.handleFilterClick}
                  onSetFilteredState={this.onSetFilteredState}
                  onUnsetFilteredState={this.onUnsetFilteredState}
                />
                <div className="card-content">
                  <div className="card-body">
                    <div className="result-row center-align">
                      <b className="result"> - {this.getMappableWorksheets().length} results -</b>
                    </div>
                    <div className="checkboxes-section row d-flex-content card-width-322">
                      {this.mapWorksheets()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-btn-block">
                <a
                  href="#"
                  data-target='dropdown_assign_selected'
                  onClick={this.onToggleAssignSelectedDropdown}
                  className="dropdown-trigger waves-effect waves-teal btn add-btn"
                >
                  <i className="material-icons">add</i> Assign Selected
                </a>
                <ul
                  className='dropdown-content'
                  id='dropdown_assign_selected'
                  style={{ display: assignSelectedDropdownOpen ? 'block' : '0', opacity: assignSelectedDropdownOpen ? '1' : '0' }}
                >
                  <li><a href="#" onClick={() => this.assignWorksheets('today')}>For Today</a></li>
                  <li><a href="#" onClick={() => this.assignWorksheets('tomorrow')}>For Tomorrow</a></li>
                  <li><a href="#" onClick={() => this.assignWorksheets('nextSession')}>For Next Session</a></li>
                  <li><a href="#" onClick={() => this.assignWorksheets('customDate')}>For Date...</a></li>
                </ul>
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

AssignWorksheetModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAssignWorksheets: PropTypes.func.isRequired,
};

export default AssignWorksheetModal;
