import React from 'react';
import PropTypes from 'prop-types';
import LessonCard from '../FullView/components/LessonCard';

class FullView extends React.Component {
  mapLessons = () => {
    const { lessons, onCloneLesson, onDeleteLesson } = this.props;
    return lessons.map((lesson, index) => (
    <LessonCard
      key={index}
      index={index}
      lesson={lesson}
      onCloneLesson={() => onCloneLesson(index)}
      onDeleteLesson={() => onDeleteLesson(index)}
    />
  )
  )}

  render(){
    return(
      <div className="content-section">
          <div className="row d-flex-content card-width-272">
            {this.mapLessons()}
          </div>
        </div>
    )
  }
}

FullView.propTypes = {
  lessons: PropTypes.object.isRequired,
  onCloneLesson: PropTypes.func.isRequired,
  onDeleteLesson: PropTypes.func.isRequired,
}
export default FullView;