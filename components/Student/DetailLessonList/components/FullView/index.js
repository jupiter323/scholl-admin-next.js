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
    onRemoveCheckedLesson,
    onCheckAll,
    selectAll,
    dropdownIsOpen,onOpenDropdown,onCloseDropdown, renderDropdownOptions
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
            onChecked={onCheckAll}
            type='pageCheckBox'
            checked={selectAll}
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
            onClick={() => onOpenDropdown()}
          >
            <i className='material-icons dots-icon'>more_vert</i>
          </a>
          <If condition={dropdownIsOpen}>
            <ClickOffComponentWrapper onOuterClick={() => onCloseDropdown()}>
              <ul
                id='dropdown01'
                className='dropdown-content dropdown-wide'
                style={{
                  display: "block",
                  opacity: "1",
                  transform: "scaleX(1) scaleY(1)"
                }}
              >
                {renderDropdownOptions(status)}
              </ul>
            </ClickOffComponentWrapper>
          </If>
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
