import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import moment from 'moment';

import FilterSection from './components/FilterSection';
import LessonCard from './components/LessonCard';
import sampleLessons from '../../../utils/sampleLessons';
import { pageNumberSort, problemSort, timeEstimateSort, subjectSort } from '../../../utils/sortOptions';

const lessonTypeMap = {
  'Challenge + Practice': 'challenge',
  'Homework Drill': 'homework',
  'Reading from Workbook': 'readingFromWorkbook',
};

class AssignLessonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: '',
      unitFilter: '',
      titleFilter: '',
      typeFilters: [],
      subjectFilters: [],
      selectedLessons: [],
      lessons: sampleLessons,
      dropdownIndex: null,
      dropdownIsOpen: false,
      assignSelectedDropdownOpen: false,
    };
  }

  onToggleAssignSelectedDropdown = () => this.setState(({ assignSelectedDropdownOpen }) => ({ assignSelectedDropdownOpen: !assignSelectedDropdownOpen }))

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  onResetModal = () => this.setState({ subjectFilters: [], typeFilters: [], sort: '' })
  onSetSort = (sort) => this.setState({ sort })

  onSetFilteredState = (titleFilter, value) => this.setState({ [titleFilter]: value })
  onUnsetFilteredState = (titleFilter) => this.setState({ [titleFilter]: '' })

  onCloseModal = () => {
    const { onClose } = this.props;
    onClose();
    this.onResetModal();
  }

  // eslint-disable-next-line consistent-return
  onSortLessons = (lessons) => {
    const { sort } = this.state;
    switch (sort) {
      case 'pageNumber':
        return lessons.sort(pageNumberSort);
      case 'problems':
        return lessons.sort(problemSort);
      case 'timeEstimate':
        return lessons.sort(timeEstimateSort);
      case 'subject':
        return lessons.sort(subjectSort);
      default:
        break;
    }
  }

  onFilterByTitle = () => {
    const { lessons, titleFilter } = this.state;
    return lessons.reduce((finalArr, currentLesson) => {
      const { title } = currentLesson;
      const lessonString = title.replace(/\s/g, "").toLowerCase();
      if (lessonString.indexOf(titleFilter) !== -1 && finalArr.indexOf(currentLesson) === -1) {
        finalArr.push(currentLesson);
      }
      return finalArr;
    }, []);
  }

  onFilterByUnit = () => {
    const { lessons, unitFilter } = this.state;
    return lessons.reduce((finalArr, currentLesson) => {
      const { unit } = currentLesson;
      const lessonString = unit.replace(/\s/g, "").toLowerCase();
      if (lessonString.indexOf(unitFilter) !== -1 && finalArr.indexOf(currentLesson) === -1) {
        finalArr.push(currentLesson);
      }
      return finalArr;
    }, []);
  }

  onFilterLessons = () => {
    const { subjectFilters, typeFilters, lessons: allLessons } = this.state;
    let lessons = allLessons;
    if (subjectFilters.length) {
      lessons = lessons.filter(lesson => subjectFilters.indexOf(lesson.subject) !== -1);
    }
    if (typeFilters.length) {
      lessons = lessons.filter(lesson => typeFilters.indexOf(lessonTypeMap[lesson.type]) !== -1);
    }
    return lessons;
  }

  getMappableLessons = () => {
    const { subjectFilters, typeFilters, sort, unitFilter, titleFilter, lessons } = this.state;
    let mappableLessons = lessons;
    if (titleFilter.length) {
      mappableLessons = this.onFilterByTitle();
    }
    if (unitFilter.length) {
      mappableLessons = this.onFilterByUnit();
    }
    if (subjectFilters.length || typeFilters.length) {
      mappableLessons = this.onFilterLessons();
    }
    if (sort) {
      return this.onSortLessons(mappableLessons);
    }
    return mappableLessons;
  }

  handleFilterClick = (filterType, filter) => {
    const { subjectFilters: currentSubjectFilters, typeFilters: currentTypeFilters } = this.state;
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

  handleLessonClick = (lesson) => {
    const { selectedLessons } = this.state;
    let modifiedLessons;
    if (selectedLessons.indexOf(lesson) === -1) {
      modifiedLessons = update(selectedLessons, {
        $push: [lesson],
      });
    } else {
      const lessonIndex = selectedLessons.indexOf(lesson);
      modifiedLessons = update(selectedLessons, {
        $splice: [[ lessonIndex, 1 ]],
      });
    }
    this.setState({ selectedLessons: modifiedLessons });
  }

  assignLessons = (date) => {
    const { onAssignLessons } = this.props;
    const { selectedLessons } = this.state;
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
    this.onResetModal();
    onAssignLessons(selectedLessons, assignDate);
  }

  mapLessons = () => this.getMappableLessons().map((lesson, index) => (
    <LessonCard
      lesson={lesson}
      index={index}
      key={lesson.id}
      onSetDropdown={this.onSetDropdown}
      onCloseDropdown={this.onCloseDropdown}
      dropdownIndex={this.state.dropdownIndex}
      dropdownIsOpen={this.state.dropdownIsOpen}
      handleLessonClick={this.handleLessonClick}
      selectedLessons={this.state.selectedLessons}
    />
  ))

  render() {
    const { open } = this.props;
    const { assignSelectedDropdownOpen, subjectFilters, typeFilters, sort } = this.state;
    return (
      <div>
        {open && (
          <div className="wrapper">
              <div className="card-modal card-main card switcher-section grey lighten-3" style = {{minWidth:"100%"}}>
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
                      <div className="row icons-row"><a href="#" onClick={this.onCloseModal} className="modal-close close"><i className="icon-close-thin"></i></a></div>
                    </div>
                  </div>
                </div>
                <FilterSection
                  sort={sort}
                  typeFilters={typeFilters}
                  subjectFilters={subjectFilters}
                  onSetSort={this.onSetSort}
                  onClearFilters={this.onResetModal}
                  handleFilterClick={this.handleFilterClick}
                  onSetFilteredState={this.onSetFilteredState}
                  onUnsetFilteredState={this.onUnsetFilteredState}
                />
                <div className="card-content">
                  <div className="card-body">
                    <div className="result-row center-align">
                      <b className="result"> - {this.getMappableLessons().length} results -</b>
                    </div>
                    <div className="checkboxes-section row d-flex-content card-width-322">
                      {this.mapLessons()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-btn-block">
                <a
                  href="#"
                  onClick={this.onToggleAssignSelectedDropdown}
                  data-target='dropdown_assign_selected_lessons'
                  className="dropdown-trigger waves-effect waves-teal btn add-btn"
                >
                  <i className="material-icons">add</i> Assign Selected
                </a>
                <ul
                  className='dropdown-content'
                  id='dropdown_assign_selected_lessons'
                  style={{ display: assignSelectedDropdownOpen ? 'block' : '0', opacity: assignSelectedDropdownOpen ? '1' : '0' }}
                >
                  <li><a href="#" onClick={() => this.assignLessons('today')}>For Today</a></li>
                  <li><a href="#" onClick={() => this.assignLessons('tomorrow')}>For Tomorrow</a></li>
                  <li><a href="#" onClick={() => this.assignLessons('nextSession')}>For Next Session</a></li>
                  <li><a href="#" onClick={() => this.assignLessons('customDate')}>For Date...</a></li>
                </ul>
              </div>
          </div>
        )}
        <style jsx>
          {`
            .card-modal {
              margin: 0;
              border-radius: 6px;
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
      </div>
    );
  }
}

AssignLessonModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAssignLessons: PropTypes.func.isRequired,
};

export default AssignLessonModal;
