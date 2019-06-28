/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import FilterSection from './components/FilterSection';
import FullView from './components/FullView';
import { passage, statusAscending, availableDate, dueDate, alerts} from '../../utils/sortFunctions';
import ListView from './components/ListView';

class DetailLessonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
      lessons: this.props.user.lessons,
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

  onClearFilters = () => this.setState({ statusFilters: [], subjectFilters: [], completeFilters: [], flagFilters: [], classTypeFilters: [], dueDateFilters: [], unitFilter: "", nameFilter: "" })
  onSetSort = (sort) => this.setState({sort})
  onSetFilteredState = (lesson) => this.setState({nameFilter: lesson })
  onUnsetFilteredState = (filter) => this.setState({[filter]: "" })
  onChangeView = (view) => this.setState({currentView: view, active: view})

  onSetUnitFilter = (unit) => this.setState({unitFilter: unit})

  onSortLessons = (lessons) => {
    const { sort } = this.state;
    switch(sort) {
      case 'passage':
        return lessons.sort(passage);
      case 'status':
          return lessons.sort(statusAscending);
      case 'availableDate':
          return lessons.sort(availableDate);
      case 'dueDate':
        return lessons.sort(dueDate);
      case 'alerts':
        return lessons.sort(alerts);
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
// NOT WORKING
  // onFilterCompletionStatus = () => {
  //   const { completeFilters, lessons: allLessons} = this.state;
  //   let lessons = allLessons;
  //   if (completeFilters.length && completeFilters.indexOf('complete') !== -1) {
  //     return lessons.filter(lesson => lesson.completed === true)
  // }
  //  if (completeFilters.indexOf('unassigned')) {
  //   lessons = lessons.filter(lesson => lesson.status === 'Started')
  // }
  //  if (completeFilters.length && completeFilters.indexOf('incomplete')) {
  //     lessons = lessons.filter(lesson => lesson.assigned === false)
  //   }
  //   return lessons
  // }

 
  getMappableLessons = () => {
    const { sort, unitFilter, lessons, nameFilter, statusFilters, subjectFilters, scoreStatusFilters, classTypeFilters, flagFilters} = this.state;
    let mappableLessons = lessons;
    if (nameFilter.length) {
      mappableLessons = this.onFilterByName();
    }
    if (statusFilters.length || unitFilter.length || scoreStatusFilters.length || subjectFilters.length || classTypeFilters.length || flagFilters.length) {
      mappableLessons = this.onFilterLessons();
    }
    // if (dueDateFilters) {
    //   mappableLessons= this.calculateDueDate();
    // }
    // if (completeFilters.length) {
    //   mappableLessons = this.onFilterCompletionStatus();
    // }
    if (sort) {
      return this.onSortLessons(mappableLessons)
    }

    return mappableLessons
  }

   calculateDueDate = () => {
    const { dueDateFilters, lessons: allLessons } = this.state;
    let lessons = allLessons;
    if (dueDateFilters.length && dueDateFilters.indexOf('all') === -1) {
      lessons = lessons.filter(lesson => dueDateFilters.indexOf(lesson.overdue) !== -1)
    }
    return lessons;
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
    return <ListView lessons={this.getMappableLessons()}/>
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
        />
        {this.renderCurrentView()}
      <a href="#" className="waves-effect waves-teal btn add-btn"><i className="material-icons">add</i>New Lesson</a>
      </React.Fragment>
    )
  }
}

DetailLessonList.propTypes = {
  user: PropTypes.object.isRequired,
};

export default DetailLessonList;
