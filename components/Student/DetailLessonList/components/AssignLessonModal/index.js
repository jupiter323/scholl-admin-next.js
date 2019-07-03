import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import statusColorMap from '../../../DetailWorksheetPage/utils/statusColorMap';
import Portal from '../../../../Portal';
import LessonListItem from './components/LessonListItem';
import { totalProblemsDescending, totalProblemsAscending, timeEstimate, timeEstimateAscending, subjectAscending, subjectDescending, passageAscending, passageDescending, lessonNameDescending, lessonNameAscending, statusDescending, statusAscending, alertsAscending, alertsDescending, lessonTypeAscending, lessonTypeDescending } from '../../../../utils/sortFunctions';
import ModalFilterSection from '../ModalFilterSection';

class AssignLessonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: this.props.lessons,
      statusFilters: [],
      subjectFilters: [],
      lessonTypeFilters: [],
      sort: "",
      nameFilter: "",
      unitFilter: "",
      checked: false,
      checkedLessons: [],
    }
  }

  onToggleChecked = () => this.setState({ checked: !this.state.checked })
  onClearFilters = () => this.setState({ statusFilters: [], subjectFilters: [], lessonTypeFilters: [], unitFilter: "", nameFilter: "" })
  onSetSort = (sort) => this.setState({ sort })
  onSetFilteredState = (lesson) => this.setState({ nameFilter: lesson })
  onUnsetFilteredState = (filter) => this.setState({ [filter]: "" })
  onSetUnitFilter = (unit) => this.setState({ unitFilter: unit })


  onSortLessons = (lessons) => {
    const { sort } = this.state;
    switch (sort) {
      case 'subjectAscending':
        return lessons.sort(subjectAscending);
      case 'subjectDescending':
        return lessons.sort(subjectDescending);
      case 'passageAscending':
        return lessons.sort(passageAscending);
      case 'passageDescending':
        return lessons.sort(passageDescending);
      case 'statusAscending':
        return lessons.sort(statusAscending);
      case 'statusDescending':
        return lessons.sort(statusDescending);
      case 'alertsAscending':
        return lessons.sort(alertsAscending);
      case 'alertsDescending':
        return lessons.sort(alertsDescending);
      case 'lessonNameAscending':
        return lessons.sort(lessonNameAscending);
      case 'lessonNameDescending':
        return lessons.sort(lessonNameDescending);
      case 'lessonTypeAscending':
        return lessons.sort(lessonTypeAscending);
      case 'lessonTypeDescending':
        return lessons.sort(lessonTypeDescending);
      case 'timeEstimateDescending':
        return lessons.sort(timeEstimate);
      case 'timeEstimateAscending':
        return lessons.sort(timeEstimateAscending);
      case 'totalProblemsDescending':
        return lessons.sort(totalProblemsDescending);
      case 'totalProblemsAscending':
        return lessons.sort(totalProblemsAscending);
      default:
        break;
    }
  }

  onFilterByName = () => {
    const { lessons, nameFilter } = this.state;
    return lessons.reduce((finalArr, currentLesson) => {
      const { lessonName } = currentLesson;
      const lessonString = lessonName.replace(/\s/g, "").toLowerCase();
      if (lessonString.indexOf(nameFilter) !== -1 && finalArr.indexOf(currentLesson) === -1) {
        finalArr.push(currentLesson);
      }
      return finalArr;
    }, []);
  }

  onFilterLessons = () => {
    const { statusFilters, subjectFilters, lessonTypeFilters, unitFilter, lessons: allLessons } = this.state;
    let lessons = allLessons;
    if (statusFilters.length && statusFilters.indexOf('all') === -1) {
      if (statusFilters.indexOf("Unassigned") !== -1) {
        lessons = lessons.filter(lesson => statusFilters.indexOf(lesson.status) !== -1)
      } else
        lessons = lessons.filter(lesson => lesson.assigned === true)

    }
    if (subjectFilters.length && subjectFilters.indexOf('all') === -1) {
      lessons = lessons.filter(lesson => subjectFilters.indexOf(lesson.subject) !== -1)
    }
    if (lessonTypeFilters.length && lessonTypeFilters.indexOf('all') === -1) {
      lessons = lessons.filter(lesson => lessonTypeFilters.indexOf(lesson.lessonType) !== -1)
    }
    if (unitFilter.length && unitFilter.indexOf('all') === -1) {
      lessons = lessons.filter(lesson => unitFilter.indexOf(lesson.unitNumber) !== -1)
    }
    return lessons;
  }

  setSortType = (name) => {
    const { sort } = this.state;
    if (sort !== `${name}Ascending` && sort !== `${name}Descending`) {
      this.onSetSort(`${name}Ascending`)
    }
    if (sort === `${name}Descending`) {
      this.onSetSort(`${name}Ascending`)
    }
    else {
      this.onSetSort(`${name}Descending`)
    }
  }


  getMappableLessons = () => {
    const { sort, unitFilter, lessons, statusFilters, subjectFilters, lessonTypeFilters, nameFilter } = this.state;
    let mappableLessons = lessons;
    if (nameFilter.length) {
      mappableLessons = this.onFilterByName();
    }
    if (statusFilters.length || unitFilter.length || lessonTypeFilters.length || subjectFilters.length) {
      mappableLessons = this.onFilterLessons();
    }
    if (sort) {
      return this.onSortLessons(mappableLessons)
    }
    return mappableLessons
  }

  handleFilterClick = (filterType, filter) => {
    const { subjectFilters: currentSubjectFilters, statusFilters: currentStatusFilters, lessonTypeFilters: currentLessonTypeFilters } = this.state;
    let modifiedFilterCurrentState;
    let modifiedFilterName;
    let modifiedFilterUpdatedState;
    switch (filterType) {
      case 'subject':
        modifiedFilterCurrentState = currentSubjectFilters;
        modifiedFilterName = 'subjectFilters';
        break;
      case 'status':
        modifiedFilterCurrentState = currentStatusFilters;
        modifiedFilterName = 'statusFilters';
        break;
      case 'lessonType':
        modifiedFilterCurrentState = currentLessonTypeFilters;
        modifiedFilterName = 'lessonTypeFilters';
        break;
      default:
        break;
    }
    // Decide whether we're adding or removing the selected filter
    if (modifiedFilterCurrentState.indexOf(filter) === -1) {
      modifiedFilterUpdatedState = update(modifiedFilterCurrentState, {
        $push: [filter],
      });
    } else {
      const filterIndex = modifiedFilterCurrentState.indexOf(filter);
      modifiedFilterUpdatedState = update(modifiedFilterCurrentState, {
        $splice: [[filterIndex, 1]],
      });
    }
    this.setState({ [modifiedFilterName]: modifiedFilterUpdatedState });
  }


  mapLessonListItem = () => {
    return this.getMappableLessons().map((lesson, index) =>
      <LessonListItem
        lesson={lesson}
        index={index}
        selectAll={this.state.checked}
        addCheckedLessons={this.addCheckedLessons} />
    )
  }

  // addCheckedLessons = (lesson) => {
  //   this.setState(prevState => {
  //     prevState.checkedLessons.push(lesson);
  //     return { checkedLessons: prevState.checkedLessons}
  //   })
  // }


  renderTableHeader = () => (
    <div className="list-table-row">
      <div className="list-table-cell icon-cell">
        <label htmlFor="selectAll">
          <input
            type="checkbox"
            id="selectAll"
            defaultChecked={this.state.checked}
            onChange={this.onToggleChecked}
            className="filled-in"
          />
          <span><b>&nbsp;</b></span>
        </label>
      </div>
      <div className="list-table-cell name-cell" value="lessonName">
        <a href="#" onClick={() => this.setSortType("lessonName")}><b>Lesson</b></a>
      </div>
      <div className="list-table-cell completed-cell">
        <a href="#" onClick={() => this.setSortType("status")}><b>Status</b></a>
      </div>
      <div className="list-table-call completed-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div className="list-table-cell completed-cell" style={{ marginLeft: '5px' }}>
        <a href="#" onClick={() => this.setSortType("subject")}><b>Subject</b></a>
      </div>
      <div className="list-table-cell completed-cell" >
        <a href="#" onClick={() => this.setSortType("passage")}><b>Page</b></a>
      </div>
      <div className="list-table-cell date-cell">
        <a href="#" onClick={() => this.setSortType("timeEstimate")}><b>Time Est</b></a>
      </div>
      <div className="list-table-cell type-cell" style={{ marginLeft: '13px', paddingLeft: '-1px' }}>
        <a href="#" onClick={() => this.setSortType("totalProblems")}><b>Problems</b></a>
      </div>
      <div className="list-table-cell completed-cell">
        <a href="#" onClick={() => this.setSortType("lessonType")}><b>Type</b></a>
      </div>
      <div className="list-table-cell flags-cell"><b>&nbsp;</b></div>
      <div className="list-table-cell flags-cell"><b>&nbsp;</b></div>
      <div className="list-table-cell flags-cell">
        <a href="#" onClick={() => this.setSortType("alerts")}><b>Flags</b></a>
      </div>
    </div>
  )


  render() {
    const { lessons, subjectFilters, statusFilters, lessonTypeFilters } = this.state;
    const { open } = this.props;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <div id="assign-lesson-modal" className="modal modal-custom">
              <div className="title-row card-panel" id="assign-lessons-header">
                <div className="mobile-header">
                </div>
                <h2 className="h1 white-text">
                  <span className="heading-holder">
                    <i className="icon-books"></i>
                    <span className="heading-block">Assign Lessons</span>
                  </span>
                </h2>
              </div>
              <ModalFilterSection
                handleFilterClick={this.handleFilterClick}
                subjectFilters={subjectFilters}
                statusFilters={statusFilters}
                lessonTypeFilters={lessonTypeFilters}
                onClearFilters={this.onClearFilters}
                onSetFilteredState={this.onSetFilteredState}
                onUnsetFilteredState={this.onUnsetFilteredState}
                onSetSort={this.onSetSort}
                onSetUnitFilter={this.onSetUnitFilter}
              />
              <div className="content-section">
                <div className="container-md">
                  <div className="result-row center-align">
                    <b className="result"> - {lessons.length} Lessons</b>
                  </div>
                  <div className="list-view-section" style={{ margin: '0 -160px' }}>
                    <div className="list-table">
                      <div className="list-table-header">
                        {this.renderTableHeader()}
                      </div>
                      <div className="list-table-body">
                        {this.mapLessonListItem()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="waves-effect waves-teal btn add-btn modal-trigger"><i className="material-icons">add</i>Assign Selected</a>
          </div>
        )}
        <style jsx>
          {`
            .overlay {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 999;
            }
            #assign-lesson-modal {
              border-radius: 6px;
              
            }
            .modal {
              display: block;
              background-color: white;
              position: absolute;
              top: 20%;
              right: 0%;
              left: 13%;
              box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
            }
            .modal-footer {
              background-color: white;
            }
            .modal-custom {
              opacity: 1;
              visibility: visible;
              max-width: 1280px !important;
            }
            #assign-lessons-header {
              background: rgb(24,181,233) !important
              background: linear-gradient(90deg, rgba(24,181,233,1) 0%, rgba(8,107,140,1) 100%) !important;
            }
          `}
        </style>
      </Portal>
    )
  }
}

AssignLessonModal.propTypes = {
  lessons: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
}
export default AssignLessonModal