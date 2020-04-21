import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import LessonCard from "./components/LessonCard";
import Checkbox from "./components/LessonCard/components/Checkbox";
import RescheduleModal from "../RescheduleModal";
// eslint-disable-next-line
import ClickOffComponentWrapper from "../../../../ClickOffComponentWrapper";
import { rescheduleStudentLessons } from '../../../index/actions';
import moment from 'moment';
import { makeSelectCheckedLessons } from '../../../index/selectors';

const FullView = props => {
  const [openRescheduleModal, toggleRescheduleModal] = useState(false);
  const [activeLesson, setActiveLesson] = useState([]);
  const {
    lessons = [],
    onCloneLesson,
    onDeleteLesson,
    user,
    onCheckLesson,
    onAddCheckedLesson,
    onRemoveCheckedLesson,
    onCheckAll,
    selectAll,
    dropdownIsOpen,
    onOpenModal,
    onOpenDropdown,
    onCloseDropdown,
    renderDropdownOptions,
  } = props;

  const mapLessons = () => lessons.map((lesson, index) => (
    <LessonCard
      // eslint-disable-next-line react/no-array-index-key
      key={lesson.id}
      cardId={lesson.lesson_id ? lesson.lesson_id : lesson.id}
      uniqueId={lesson.id}
      index={index}
      lesson={lesson}
      onCloneLesson={() => onCloneLesson(index)}
      onDeleteLesson={() => onDeleteLesson(index)}
      user={user}
      onChecked={onCheckLesson}
      selected={lesson.selected}
      onAddCheckedLesson={onAddCheckedLesson}
      onRemoveCheckedLesson={onRemoveCheckedLesson}
      handleRescheduleModalOpen={handleRescheduleModalOpen}
      onOpenModal={onOpenModal}
      onCloseDropdown={onCloseDropdown}
    />
  ));
  const handleRescheduleModalOpen = activeLesson => {
    onCloseDropdown();
    toggleRescheduleModal(!openRescheduleModal);
    setActiveLesson(activeLesson);
  };

  const onSaveScheduleChanges = (modalState) => {
    const { dispathRescheduleStudentLessons } = props;
    const payload = activeLesson.map(id => ({
      student_lesson_id: id,
      assignment_date: moment(modalState.assignTime).format('YYYY-MM-DD'),
      due_date: !modalState.isTimed ? moment(modalState.dueDate).format('YYYY-MM-DD') : null,
    }));
    console.log('log: payload', payload);
    dispathRescheduleStudentLessons(payload);
    toggleRescheduleModal(!openRescheduleModal);
  };

  return (
    <div className="content-section">
      <div className="d-flex justify-content-between">
        <div>
          <Checkbox
            label="Check all"
            checkBoxId="checkall"
            onChecked={onCheckAll}
            type="pageCheckBox"
            checked={selectAll}
          />
        </div>
        <div>
          <b> - {lessons && lessons.length} results -</b>
        </div>

        <div className="dropdown-block col">
          <a
            className="dropdown-trigger btn"
            href="#"
            data-target="dropdown01"
            // eslint-disable-next-line
            onClick={(e) => {
              e.preventDefault();
              onOpenDropdown();
            }}
          >
            <i className="material-icons dots-icon">more_vert</i>
          </a>
          <div className="row d-flex-content card-width-272">
            <RescheduleModal
              open={openRescheduleModal}
              lesson={activeLesson}
              onClose={handleRescheduleModalOpen}
              onSave={onSaveScheduleChanges}
            />
          </div>

          <If condition={dropdownIsOpen}>
            <ClickOffComponentWrapper onOuterClick={() => onCloseDropdown()}>
              <ul
                id="dropdown01"
                className="dropdown-content dropdown-wide"
                style={{
                  display: "block",
                  opacity: "1",
                  transform: "scaleX(1) scaleY(1)",
                }}
              >
                {renderDropdownOptions(status, null, handleRescheduleModalOpen, props.checkedCardIds)}
              </ul>
            </ClickOffComponentWrapper>
          </If>
        </div>
      </div>
      <div className="row d-flex-content  justify-content-center card-width-auto">
        {mapLessons()}
      </div>
    </div>
  );
};

FullView.propTypes = {
  lessons: PropTypes.array.ifsRequired,
  user: PropTypes.object.isRequired,
  onCloneLesson: PropTypes.func.isRequired,
  onDeleteLesson: PropTypes.func.isRequired,
  onCheckLesson: PropTypes.func.isRequired,
  onCheckAll: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispathRescheduleStudentLessons: bindActionCreators(rescheduleStudentLessons, dispatch),
});

const mapStateToProps = createStructuredSelector({
  checkedLessons: makeSelectCheckedLessons(),
});

export default connect(mapStateToProps, mapDispatchToProps)(FullView);
