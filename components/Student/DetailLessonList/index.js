/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import FilterSection from './components/FilterSection';
import FullView from './components/FullView';

class DetailLessonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
      lessons: this.props.user.lessons,
      currentView: 'full',
      active: 'full',
    }
  };

  onChangeView = (view) => this.setState({currentView: view, active: view})

// wasn't working
  // onRemoveOption = (optionIndex) => {
  //   const lessons = update(this.state, {
  //       lessons: {
  //         $splice: [[optionIndex, 1]],
  //     },
  //   });
  //   this.setState({ lessons });
  // }

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

  
  arrayItemRemover = (array, value) => array.filter((lesson) => lesson !== value)

  renderCurrentView = () => {
    const {active, lessons} = this.state;
    if (active === 'full') {
      return <FullView lessons={lessons} onDeleteLesson={this.onDeleteLesson} onCloneLesson={this.onCloneLesson}/>
    }
  }


  render() {
    const { currentView } = this.state;
    return (
      <React.Fragment>
        <FilterSection
        currentView={currentView}
        onChangeView={this.onChangeView}
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
