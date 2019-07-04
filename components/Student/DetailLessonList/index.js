/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import moment from 'moment';
import FilterSection from './components/FilterSection';
import FullView from './components/FullView';
import { dueDateAscending, subjectAscending, subjectDescending, passageAscending, passageDescending, lessonNameDescending, lessonNameAscending, statusDescending, statusAscending, availableDateAscending, availableDateDescending, dueDate, alertsAscending, alertsDescending, completionDateAscending, completionDateDescending, lessonTypeAscending, lessonTypeDescending} from '../../utils/sortFunctions';
import ListView from './components/ListView';
import AssignLessonModal from './components/AssignLessonModal';

class DetailLessonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
      lessons: this.props.user.lessons,
      modalOpen: false,
      currentView: 'full',
      active: 'full',
      statusFilters: [],
      subjectFilters: [],
      scoreStatusFilters: [],
      flagFilters: [],
      classTypeFilters: [],
      dueDateFilters: [],
      sort: "",
      nameFilter: "",
      unitFilter: "",
    }
  };

  onOpenModal = () => this.setState({modalOpen: true});
  onCloseModal = () => this.setState({modalOpen: false}, console.log('clicked'));
  onClearFilters = () => this.setState({ statusFilters: [], subjectFilters: [], completeFilters: [], flagFilters: [], classTypeFilters: [], dueDateFilters: [], unitFilter: "", nameFilter: "" })
  onSetSort = (sort) => this.setState({sort})
  onSetFilteredState = (lesson) => this.setState({nameFilter: lesson })
  onUnsetFilteredState = (filter) => this.setState({[filter]: "" })
  onChangeView = (view) => this.setState({currentView: view, active: view})

  onSetUnitFilter = (unit) => this.setState({unitFilter: unit})

  onSortLessons = (lessons) => {
    const { sort } = this.state;
    switch(sort) {
      case 'subjectAscending':
        return lessons.sort(subjectAscending);
      case 'subjectDescending':
        return lessons.sort(subjectDescending);
      case 'passageAscending':
        return lessons.sort(passageAscending);
      case 'statusAscending':
        return lessons.sort(statusAscending);
      case 'passageDescending':
        return lessons.sort(passageDescending);
      case 'statusDescending':
        return lessons.sort(statusDescending);   
      case 'availableDateAscending':
          return lessons.sort(availableDateAscending);
      case 'availableDateDescending':
       return lessons.sort(availableDateDescending)
      case 'dueDateDescending':
        return lessons.sort(dueDate);
      case 'dueDateAscending':
        return lessons.sort(dueDateAscending)
      case 'alertsAscending':
        return lessons.sort(alertsAscending);
      case 'alertsDescending':
        return lessons.sort(alertsDescending);
      case 'lessonNameAscending':
        return lessons.sort(lessonNameAscending);
      case 'lessonNameDescending':
        return lessons.sort(lessonNameDescending);
      case 'completionDateAscending':
        return lessons.sort(completionDateAscending);
      case 'completionDateDescending':
        return lessons.sort(completionDateDescending);
      case 'lessonTypeAscending':
        return lessons.sort(lessonTypeAscending);
      case 'lessonTypeDescending':
        return lessons.sort(lessonTypeDescending);  
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
  onCloneLesson = (index) => {
    const { lessons } = this.state;
    this.setState(prevState => {
      prevState.lessons.push(lessons[index]);
      return { lessons: prevState.lessons}
     })
  }

  onDeleteLesson = (index) => {
    const { lessons } = this.state;
    const newLessonsArray = this.arrayItemRemover(lessons, lessons[index])
    this.setState({lessons: newLessonsArray})
  }
  // TODO: separate due date method
  // note: unassigned and incomplete are filtering opposite, but this works for some reason
  onFilterLessons = () => {
    const { statusFilters, subjectFilters, unitFilter, classTypeFilters, scoreStatusFilters, flagFilters, lessons: allLessons } = this.state;
    let lessons = allLessons;
    if (scoreStatusFilters.length && scoreStatusFilters.indexOf("all") === -1) {
      lessons = lessons.filter(lesson => scoreStatusFilters.indexOf(lesson.scoreStatus) !== -1);
    }
    if (statusFilters.length && statusFilters.indexOf("all") === -1) {
      lessons = lessons.filter(lesson => statusFilters.indexOf(lesson.status) !== -1);
    }
    if (subjectFilters.length && subjectFilters.indexOf('all') === -1) {
      lessons = lessons.filter(lesson => subjectFilters.indexOf(lesson.subject) !== -1)
    }
    if (flagFilters.length && flagFilters.indexOf('all') === -1) {
      lessons = lessons.filter(lesson => lesson.alerts.length !== 0)
    }
    if (classTypeFilters.length && classTypeFilters.indexOf("all") === -1) {
      lessons = lessons.filter(lesson => classTypeFilters.indexOf(lesson.classType) !== -1)
    }
    if (unitFilter.length && unitFilter.indexOf('all') === -1) {
      lessons = lessons.filter(lesson => unitFilter.indexOf(lesson.unitNumber) !== -1)
    }
    return lessons;
  }

  getMappableLessons = () => {
    const { sort, unitFilter, lessons, dueDateFilters, nameFilter, statusFilters, subjectFilters, scoreStatusFilters, classTypeFilters, flagFilters} = this.state;
    let mappableLessons = lessons;
    if (nameFilter.length) {
      mappableLessons = this.onFilterByName();
    }
    if (statusFilters.length || unitFilter.length || scoreStatusFilters.length || subjectFilters.length || classTypeFilters.length || flagFilters.length) {
      mappableLessons = this.onFilterLessons();
    }
    if (dueDateFilters.length){
      mappableLessons = this.filterDueDate();
    }
    if (sort) {
      return this.onSortLessons(mappableLessons)
    }
    return mappableLessons
  }

  
  // may need to alter dueNextSession depending if client wants ALL vs incomplete/overdue
  // TODO: only works with one due date filter, not multiple
   filterDueDate = () => {
     const { user } = this.props;
    const { dueDateFilters, lessons: allLessons } = this.state;
    let lessons = allLessons;
    // const set = new Set();
    if (dueDateFilters.length && dueDateFilters.indexOf('all') === -1) {
      if (dueDateFilters.includes('overdue')) {
      lessons = lessons.filter(lesson => lesson.overdue === true)
    
      }
      if(dueDateFilters.includes('dueToday')) {
        lessons = lessons.filter(lesson => lesson.dueDate === moment().format("MM/DD/Y"))
      
      }
      if(dueDateFilters.includes('dueThisWeek')) {
        lessons = lessons.filter(lesson => moment(lesson.dueDate).format('w') === moment().format("W"))
        
      }
      if (dueDateFilters.includes('dueNextSession')) {
        lessons = lessons.filter(lesson => moment(user.nextSession).isSameOrAfter(lesson.dueDate, 'day'))
      
      }
      return lessons
      // set.add(lessons);
    }
    // console.log(set)
    // const filteredLessons = Array.from(set);
    // console.log(filteredLessons)
    return lessons
  }


  handleFilterClick = (filterType, filter) => {
    const { subjectFilters: currentSubjectFilters, scoreStatusFilters: currentScoreStatusFilters, statusFilters: currentStatusFilters, flagFilters: currentFlagFilters, dueDateFilters: currentDueDateFilters, classTypeFilters: currentClassTypeFilters } = this.state;
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
      case 'score':
        modifiedFilterCurrentState = currentScoreStatusFilters;
        modifiedFilterName = 'scoreStatusFilters';
        break;
      case 'alerts':
          modifiedFilterCurrentState = currentFlagFilters;
          modifiedFilterName = 'flagFilters';
          break;
      case 'dueDate':
          modifiedFilterCurrentState = currentDueDateFilters;
          modifiedFilterName = 'dueDateFilters';
          break;
      case 'classType':
          modifiedFilterCurrentState = currentClassTypeFilters;
          modifiedFilterName = 'classTypeFilters';
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
        $splice: [[ filterIndex, 1 ]],
      });
    }
    this.setState({ [modifiedFilterName]: modifiedFilterUpdatedState });
  }

  
  arrayItemRemover = (array, value) => array.filter((lesson) => lesson !== value)

  renderCurrentView = () => {
    const {active } = this.state;
    if (active === 'full') {
      return <FullView lessons={this.getMappableLessons()} onDeleteLesson={this.onDeleteLesson} onCloneLesson={this.onCloneLesson}/>
    }
    return <ListView lessons={this.getMappableLessons()} onSetSort={this.onSetSort} sort={this.state.sort}/>
  }


  render() {
    const { currentView, subjectFilters, statusFilters, scoreStatusFilters, flagFilters, dueDateFilters, classTypeFilters } = this.state;
    return (
      <React.Fragment>
        <FilterSection
        currentView={currentView}
        onChangeView={this.onChangeView}
        onHandleFilterClick={this.onHandleFilterClick}
        onClearFilters={this.onClearFilters}
        onSetFilteredState={this.onSetFilteredState}
        onUnsetFilteredState={this.onUnsetFilteredState}
        onSetSort={this.onSetSort}
        subjectFilters={subjectFilters}
        statusFilters={statusFilters}
        scoreStatusFilters={scoreStatusFilters}
        flagFilters={flagFilters}
        dueDateFilters={dueDateFilters}
        classTypeFilters={classTypeFilters}
        handleFilterClick={this.handleFilterClick}
        onSetUnitFilter={this.onSetUnitFilter}
        filterDueDate={this.filterDueDate}
        />
        {this.renderCurrentView()}
        <AssignLessonModal open={this.state.modalOpen} lessons={this.props.user.lessons} onCloseModal={this.onCloseModal}/>
      <a href="#" onClick={this.onOpenModal} className="waves-effect waves-teal btn add-btn modal-trigger"><i className="material-icons">add</i>Assign Lesson</a>
      </React.Fragment>
    )
  }
}

DetailLessonList.propTypes = {
  user: PropTypes.object.isRequired,
};

export default DetailLessonList;
