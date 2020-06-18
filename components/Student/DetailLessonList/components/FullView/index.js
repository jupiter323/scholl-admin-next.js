import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import BeatLoader from "react-spinners/BeatLoader";
import LessonCard from "./components/LessonCard";
import Checkbox from "./components/LessonCard/components/Checkbox";
// eslint-disable-next-line
import ClickOffComponentWrapper from "../../../../ClickOffComponentWrapper";
import { rescheduleStudentLessons, unAssignLessonToStudent, resetStudentLessons, getLessonList } from '../../../index/actions';
import moment from 'moment';
import { makeSelectCheckedLessons, makeSelectPagination } from '../../../index/selectors';
import RescheduleModal from "../RescheduleModal";
import Modal from '../../../../Modal/index';


const FullView = props => {
  const [openRescheduleModal, toggleRescheduleModal] = useState(false);
  const [activeLesson, setActiveLesson] = useState([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [confirmationFunc, setConfirmationFunc] = useState("");
  const [lessonIdsToEdit, setLessonIdsToEdit] = useState([]);
  const [rescheduleModalState, setRescheduleModalState] = useState({});
  const [hasMore, setHasMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    lessons = [],
    onCloneLesson,
    onDeleteLesson,
    user,
    onAddCheckedLesson,
    onRemoveCheckedLesson,
    onCheckAll,
    selectAll,
    dropdownIsOpen,
    onOpenModal,
    onOpenDropdown,
    onCloseDropdown,
    renderDropdownOptions,
    checkedCardIds,
    resetLessonSelections,
    handleMarkAllFlagsReviewed,
    pagination,
    onGetLessonList,
  } = props;

  useEffect(() => {
    if (pagination.lessonPages && pagination.lessonCurrentPage) {
      setCurrentPage(pagination.lessonCurrentPage);
      if (pagination.lessonCurrentPage >= pagination.lessonPages) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    }
  }, [pagination.lessonPages, pagination.lessonCurrentPage]);

  const mapLessons = () => lessons.map((lesson, index) => (
    <LessonCard
      // eslint-disable-next-line react/no-array-index-key
      key={lesson.id}
      lessonId={lesson.lesson_id ? lesson.lesson_id : lesson.id}
      uniqueId={lesson.id}
      index={index}
      lesson={lesson}
      onCloneLesson={() => onCloneLesson(index)}
      onDeleteLesson={() => onDeleteLesson(index)}
      user={user}
      selected={lesson.selected}
      onAddCheckedLesson={onAddCheckedLesson}
      onRemoveCheckedLesson={onRemoveCheckedLesson}
      handleRescheduleModalOpen={handleRescheduleModalOpen}
      onOpenModal={onOpenModal}
      onCloseDropdown={onCloseDropdown}
      onAddAssignLessonIds={props.onAddAssignLessonIds}
      handleResetLesson={handleResetLesson}
      handleUnassignLesson={handleUnassignLesson}
      handleMarkAllFlagsReviewed={handleMarkAllFlagsReviewed}
      handleExcuseLessonLateness={props.handleExcuseLessonLateness}
    />
  ));
  const handleRescheduleModalOpen = activeLesson => {
    onCloseDropdown();
    toggleRescheduleModal(!openRescheduleModal);
    setActiveLesson(activeLesson);
  };

  const handleAssignLesson = () => {
    onOpenModal();
  };

  const onSaveScheduleChanges = (modalState) => {
    if (checkForDifferentStatus(activeLesson)) {
      setIsConfirmModalOpen(true);
      setLessonIdsToEdit(activeLesson);
      setRescheduleModalState(modalState);
      return setConfirmationFunc('reschedule');
    }
    onSubmitScheduleChanges(modalState, activeLesson);
  };

  const onSubmitScheduleChanges = (modalState, activeLesson) => {
    const { dispathRescheduleStudentLessons } = props;
    const payload = {
      student_lesson_ids: activeLesson,
      assignment_date: moment(modalState.assignDate).format('YYYY-MM-DD'),
      due_date: !modalState.isTimed ? moment(modalState.dueDate).format('YYYY-MM-DD') : null,
    };
    if (Object.keys(payload).length > 0 && typeof payload === 'object') {
      dispathRescheduleStudentLessons(payload);
      toggleRescheduleModal(!openRescheduleModal);
      resetLessonSelections();
    }
  };

  const handleUnassignLesson = lessonIds => {
    if (checkForDifferentStatus(lessonIds)) {
      setIsConfirmModalOpen(true);
      setLessonIdsToEdit(lessonIds);
      return setConfirmationFunc('unassign');
    }
    onSubmitUnassignLesson(lessonIds);
  };

  const onSubmitUnassignLesson = (lessonIds) => {
    const { dispathUnAssignLessonToStudent } = props;
    if (lessonIds && typeof lessonIds === 'object' && lessonIds.length > 0) {
      dispathUnAssignLessonToStudent(lessonIds);
      onCloseDropdown();
      resetLessonSelections();
    }
  };

  const handleResetLesson = lessonIds => {
    if (checkForDifferentStatus(lessonIds)) {
      setIsConfirmModalOpen(true);
      setLessonIdsToEdit(lessonIds);
      return setConfirmationFunc('reset');
    }
    onSubmitResetLesson(lessonIds);
  };

  const onSubmitResetLesson = (lessonIds) => {
    const { dispathResetStudentLessons } = props;
    if (lessonIds && typeof lessonIds === 'object' && lessonIds.length > 0) {
      dispathResetStudentLessons(lessonIds);
      onCloseDropdown();
      resetLessonSelections();
    }
  };

  const onHandleExcuseLesson = (lessonIds) => {
    if (checkForDifferentStatus(lessonIds)) {
      setIsConfirmModalOpen(true);
      setLessonIdsToEdit(lessonIds);
      return setConfirmationFunc('excuse/unexcuse');
    }
    onSubmitExcuseLesson(lessonIds);
  };

  const onSubmitExcuseLesson = (lessonIds) => {
    const { handleExcuseLessonLateness } = props;
    handleExcuseLessonLateness(lessonIds);
    onCloseDropdown();
  };

  const checkForDifferentStatus = (lessonIds) => {
    const relevantLessons = lessons.filter(lesson => lessonIds.includes(lesson.id));
    const statusList = [];
    relevantLessons.map(lesson => !statusList.includes(lesson.status) && statusList.push(lesson.status));
    if (statusList.length > 1) {
      return true;
    }
    return false;
  };

  const startMarkFlagsReviewed = (lessonIds) => {
    if (checkForDifferentStatus(lessonIds)) {
      setIsConfirmModalOpen(true);
      setLessonIdsToEdit(lessonIds);
      return setConfirmationFunc('review flagged');
    }
    onSubmitMarkFlagsReviewed(lessonIds);
  };

  const onSubmitMarkFlagsReviewed = (lessonIds) => {
    handleMarkAllFlagsReviewed(lessonIds);
    onCloseDropdown();
  };

  const onConfirmModalFunction = () => {
    switch (confirmationFunc) {
      case 'reschedule':
        onSubmitScheduleChanges(rescheduleModalState, lessonIdsToEdit);
        break;
      case 'unassign':
        onSubmitUnassignLesson(lessonIdsToEdit);
        break;
      case 'reset':
        onSubmitResetLesson(lessonIdsToEdit);
        break;
      case 'excuse/unexcuse':
        onSubmitExcuseLesson(lessonIdsToEdit);
        break;
      case 'review flagged':
        onSubmitMarkFlagsReviewed(lessonIdsToEdit);
        break;
      default:
        break;
    }
    setIsConfirmModalOpen(false);
    toggleRescheduleModal(false);
  };

  const handleLoadMoreLessons = (nextPage) => {
    const filters = { page: nextPage };
    onGetLessonList(filters);
  };

  return (
    <div className="content-section">
      <Modal
        open={isConfirmModalOpen}
        onConfirm={() => onConfirmModalFunction()}
        onClose={() => setIsConfirmModalOpen(false)}
        header={`Are you sure you want to ${confirmationFunc} lesson(s)?`}
        body={"Some of the lessons are you are trying to edit have a different completion status. Edit lesson(s) anyways?"}
      />
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
                {renderDropdownOptions(
                  status,
                  handleAssignLesson,
                  handleRescheduleModalOpen,
                  onHandleExcuseLesson,
                  handleResetLesson,
                  startMarkFlagsReviewed,
                  handleUnassignLesson,
                  checkedCardIds)}
              </ul>
            </ClickOffComponentWrapper>
          </If>
        </div>
      </div>
      <InfiniteScroll
        dataLength={lessons.length}
        next={() => handleLoadMoreLessons(currentPage + 1)}
        hasMore={hasMore}
        loader={<div style={{ alignSelf: 'center' }}>
          <BeatLoader color={"#D0021B"} size={10} />
        </div>}
        className="row d-flex-content justify-content-center card-width-auto"
        style={{ width: "100%" }}
        scrollThreshold={0.7}
      >
        {mapLessons()}
      </InfiniteScroll>
    </div>
  );
};

FullView.propTypes = {
  lessons: PropTypes.array.ifsRequired,
  user: PropTypes.object.isRequired,
  onCloneLesson: PropTypes.func.isRequired,
  onDeleteLesson: PropTypes.func.isRequired,
  onCheckAll: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispathRescheduleStudentLessons: bindActionCreators(rescheduleStudentLessons, dispatch),
  dispathUnAssignLessonToStudent: bindActionCreators(unAssignLessonToStudent, dispatch),
  dispathResetStudentLessons: bindActionCreators(resetStudentLessons, dispatch),
  onGetLessonList: bindActionCreators(getLessonList, dispatch),
});

const mapStateToProps = createStructuredSelector({
  checkedLessons: makeSelectCheckedLessons(),
  pagination: makeSelectPagination(),
});

export default connect(mapStateToProps, mapDispatchToProps)(FullView);
