/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import FilterSection from './components/FilterSection';
import FullView from './components/FullView';
import { passage, statusAscending, availableDate, dueDate, alerts} from '../../utils/sortFunctions';

class DetailLessonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
      lessons: this.props.user.lessons,
      currentView: 'full',
      active: 'full',
      activeFilters: [],
      sort: "",
      nameFilter: "",
      unitFilter: "",
    }
  };

  onClearFilters = () => this.setState({ activeFilters: [] })
  onSetSort = (sort) => this.setState({sort})
  onSetFilteredState = (lesson) => this.setState({nameFilter: lesson })
  onUnsetFilteredState = (filter) => this.setState({[filter]: "" })
  onChangeView = (view) => this.setState({currentView: view, active: view})

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

  onHandleFilterClick = (filter) => {
    const { activeFilters: currentActiveFilters } = this.state;
    let activeFilters;
    if (currentActiveFilters.indexOf(filter) === -1) {
      activeFilters = update(currentActiveFilters, {
        $push: [filter],
      });
    } else {
      const filterIndex = currentActiveFilters.indexOf(filter);
      activeFilters = update(currentActiveFilters, {
        $splice: [[ filterIndex, 1 ]],
      });
    }
    this.setState({ activeFilters });
  }

  getMappableLessons = () => {
    const { sort, lessons} = this.state;
    let mappableLessons = lessons;
    if (sort) {
      return this.onSortLessons(mappableLessons)
    }
    return mappableLessons
  }
  
  arrayItemRemover = (array, value) => array.filter((lesson) => lesson !== value)

  renderCurrentView = () => {
    const {active } = this.state;
    if (active === 'full') {
      return <FullView lessons={this.getMappableLessons()} onDeleteLesson={this.onDeleteLesson} onCloneLesson={this.onCloneLesson}/>
    }
  }


  render() {
    const { currentView, activeFilters } = this.state;
    return (
      <React.Fragment>
        <FilterSection
        currentView={currentView}
        onChangeView={this.onChangeView}
        onHandleFilterClick={this.onHandleFilterClick}
        activeFilters={activeFilters}
        onClearFilters={this.onClearFilters}
        onSetFilteredState={this.onSetFilteredState}
        onUnsetFilteredState={this.onUnsetFilteredState}
        onSetSort={this.onSetSort}
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
