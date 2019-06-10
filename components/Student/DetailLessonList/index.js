/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import LessonCard from './components/LessonCard';
import FilterSection from './components/FilterSection';

class DetailLessonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
      lessons: this.props.user.lessons,
    }
  };

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

  mapLessons = () => {
    const { lessons, dropdownisOpen } = this.state;
    return lessons.map((lesson, index) => (
    <LessonCard
      key={index}
      index={index}
      lesson={lesson}
      onCloneLesson={() => this.onCloneLesson(index)}
      onDeleteLesson={() => this.onDeleteLesson(index)}
    />
  )
    )}

  arrayItemRemover = (array, value) => array.filter((lesson) => lesson !== value)

  render() {
    return (
      <React.Fragment>
        <FilterSection />
        <div className="content-section">
          <div className="row d-flex-content card-width-272">
            {this.mapLessons()}
          </div>
        </div>
      <a href="#" className="waves-effect waves-teal btn add-btn"><i className="material-icons">add</i>New Lesson</a>
      </React.Fragment>
    )
  }
}

DetailLessonList.propTypes = {
  user: PropTypes.object.isRequired,
};

export default DetailLessonList;
