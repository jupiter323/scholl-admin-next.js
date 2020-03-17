import React from "react";
import PropTypes from "prop-types";
import LessonCard from "../FullView/components/LessonCard";
import ClickOffComponentWrapper from "../../../../ClickOffComponentWrapper";

class FullView extends React.Component {
  mapLessons = () => {
    const { lessons, onCloneLesson, onDeleteLesson, user } = this.props;
    return lessons.map((lesson, index) => (
      <LessonCard
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        index={index}
        lesson={lesson}
        onCloneLesson={() => onCloneLesson(index)}
        onDeleteLesson={() => onDeleteLesson(index)}
        user={user}
      />
    ));
  };

  render() {
    const { lessons } = this.props;

    return (
      <div className='content-section'>
        <div className='result-row center-align'>
          <label style={{ float: "left" }}>
            <input type='checkbox' />
            <span>Check all</span>
          </label>

          <b className='result'> - {lessons.length} results -</b>

          <div className='row icons-row'>
            <div className='dropdown-block col'>
              <a
                className='dropdown-trigger btn'
                href='#'
                data-target='dropdown01'
                onClick={() => console.log('menu option')}
              >
                <i className='material-icons dots-icon'>more_vert</i>
              </a>
            </div>
          </div>
        </div>
        <div className='row d-flex-content  justify-content-center card-width-auto'>
          {this.mapLessons()}
        </div>
      </div>
    );
  }
}

FullView.propTypes = {
  lessons: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  onCloneLesson: PropTypes.func.isRequired,
  onDeleteLesson: PropTypes.func.isRequired
};
export default FullView;
