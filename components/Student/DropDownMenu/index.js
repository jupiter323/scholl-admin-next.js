import React from "react";
import { compose, bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from 'moment';
import ClickOffComponentWrapper from "../../ClickOffComponentWrapper";
import { renderDropdownOptions } from "../DetailLessonList/components/FullView/components/LessonCard/utils/";
import RescheduleModal from "../DetailLessonList/components/RescheduleModal";

import {
  setIsVisibleTopBar,
  setActiveLesson,
  setOpenActivePage,
  rescheduleStudentLessons,
  unAssignLessonToStudent,
  resetStudentLessons,
} from "../index/actions";

class DropDownMenu extends React.Component {
  state = {
    openRescheduleModal: false,
  }

  leaveDetailView = () => {
    const {
      onSetIsVisibleTopbar,
      onSetActiveLesson,
      onSetOpenActivePage,
      onCloseDetailModal,
    } = this.props;
    onSetIsVisibleTopbar(true);
    onSetActiveLesson({});
    onSetOpenActivePage(false);
    onCloseDetailModal();
  }

  onToggleRescheduleModal = () => this.setState({ openRescheduleModal: !this.state.openRescheduleModal })

  handleAssignLesson = () => {
    const {
      onOpenModal,
      onAddCheckedLesson,
      lesson,
      onSetIsVisibleTopbar,
      onSetActiveLesson,
      onSetOpenActivePage,
      onCloseDetailModal,
    } = this.props;
    onOpenModal();
    onAddCheckedLesson(lesson.id);
    this.leaveDetailView();
  };

  handleRescheduleModalOpen = () => {
    const { onCloseDropdown } = this.props;
    onCloseDropdown();
    this.onToggleRescheduleModal();
  };

  onSaveScheduleChanges = (modalState) => {
    const { onRescheduleStudentLessons, lesson } = this.props;
    const payload = {
      student_lesson_ids: [lesson.id],
      assignment_date: moment(modalState.assignTime).format('YYYY-MM-DD'),
      due_date: !modalState.isTimed ? moment(modalState.dueDate).format('YYYY-MM-DD') : null,
    };
    if (Object.keys(payload).length > 0 && typeof payload === 'object') {
      onRescheduleStudentLessons(payload);
      this.onToggleRescheduleModal();
    }
  };

  handleUnassignLesson = lessonIds => {
    const { onUnAssignLessonToStudent, onCloseDropdown } = this.props;
    if (lessonIds && typeof lessonIds === 'object' && lessonIds.length > 0) {
      onUnAssignLessonToStudent(lessonIds);
      onCloseDropdown();
      this.leaveDetailView();
    }
  };

  render() {
    const { lesson } = this.props;
    return (
      <>
        <RescheduleModal
          open={this.state.openRescheduleModal}
          lesson={lesson}
          onClose={this.handleRescheduleModalOpen}
          onSave={this.onSaveScheduleChanges}
        />
        <If condition={this.props.dropdownIsOpen}>
          <ClickOffComponentWrapper onOuterClick={() => this.props.onSetDropdown()}>
            <ul
              id="dropdown01"
              className="dropdown-content dropdown-wide"
              style={{
                display: "block",
                opacity: "1",
                transform: "scaleX(1) scaleY(1)",
              }}
            >
              {renderDropdownOptions(lesson.status, this.handleAssignLesson, this.handleRescheduleModalOpen, this.handleUnassignLesson, null, [
                lesson.id,
              ])}
            </ul>
          </ClickOffComponentWrapper>
        </If>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetIsVisibleTopbar: bindActionCreators(setIsVisibleTopBar, dispatch),
  onSetActiveLesson: bindActionCreators(setActiveLesson, dispatch),
  onSetOpenActivePage: bindActionCreators(setOpenActivePage, dispatch),
  onRescheduleStudentLessons: bindActionCreators(rescheduleStudentLessons, dispatch),
  onUnAssignLessonToStudent: bindActionCreators(unAssignLessonToStudent, dispatch),
  onResetStudentLessons: bindActionCreators(resetStudentLessons, dispatch),
});

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(DropDownMenu);
