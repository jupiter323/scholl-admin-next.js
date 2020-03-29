import React from "react";
import PropTypes from "prop-types";
import LessonCard from "../FullView/components/LessonCard";
// eslint-disable-next-line
import ClickOffComponentWrapper from "../../../../ClickOffComponentWrapper";
import Checkbox from "./components/LessonCard/components/Checkbox";

const FullView = props => {
  const {
    lessons,
    onCloneLesson,
    onDeleteLesson,
    user,
    onCheckLesson,
    onAddCheckedLesson,
    onRemoveCheckedLesson
  } = props;

  const mapLessons = () => {
    return lessons.map((lesson, index) => (
      <LessonCard
        // eslint-disable-next-line react/no-array-index-key
        key={lesson.id}
        cardId={lesson.id}
        index={index}
        lesson={lesson}
        onCloneLesson={() => onCloneLesson(index)}
        onDeleteLesson={() => onDeleteLesson(index)}
        user={user}
        onChecked={onCheckLesson}
        selected={lesson.selected}
        onAddCheckedLesson={onAddCheckedLesson}
        onRemoveCheckedLesson={onRemoveCheckedLesson}
      />
    ));
  };

  return (
    <div className='content-section'>
      <div className='d-flex justify-content-between'>
        <div>
          <Checkbox
            label='Check all'
            checkBoxId='checkall'
            onChecked={props.onCheckAll}
            type='pageCheckBox'
            checked={props.selectAll}
          />
        </div>
        <div>
          <b> - {lessons.length} results -</b>
        </div>

        <div className='dropdown-block col'>
          <a
            className='dropdown-trigger btn'
            href='#'
            data-target='dropdown01'
            // eslint-disable-next-line
            onClick={() => console.log("menu option")}
          >
            <i className='material-icons dots-icon'>more_vert</i>
          </a>
        </div>
      </div>
      <div className='row d-flex-content  justify-content-center card-width-auto'>
        {mapLessons()}
      </div>
    </div>
  );
};

FullView.propTypes = {
  lessons: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  onCloneLesson: PropTypes.func.isRequired,
  onDeleteLesson: PropTypes.func.isRequired,
  onCheckLesson: PropTypes.func.isRequired,
  onCheckAll: PropTypes.func.isRequired
};
export default FullView;
