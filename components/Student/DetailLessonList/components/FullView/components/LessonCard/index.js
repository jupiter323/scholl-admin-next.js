/* eslint-disable */
// used vars and indentifers not camelcase
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";
import ClickOffComponentWrapper from "../../../../../../ClickOffComponentWrapper";
import moment from 'moment'
// RENDERING UTILS
import {
  getProblemCompletionStatusColor,
  getLessonActivityStatus,
  renderLessonIcon,
  renderDropdownOptions,
  renderProblemCount,
  renderAlerts,
  statusColorMap,
  chartColorMap,
  gradeColorMap,
} from "./utils";
import Checkbox from "./components/Checkbox";
import { setIsVisibleTopBar, setActiveLesson, setOpenActivePage } from "../../../../../index/actions";
const data = (current, target, status) => ({
  datasets: [
    {
      data: [current, target - current],
      backgroundColor: [chartColorMap[status], "#eaeaea"]
    }
  ]
});

const LessonCard = props => {
  // PROPS
  const {
    lesson,
    lesson: {
      id,
      name,
      drill_page: drillPage,
      practice_page: practicePage,
      starting_page: startingPage,
      status,
      time_estimate: timeEstimate,
      subject_id: subjectId,
      // subjects: { name: subjectName },
      unit_id: unitId,
      // units: { name: unitName },
      lesson_problems: lessonProblems,
      scoreStatus,
      score,
      assigned,
      problems = [],
      completedProblems = "",
      passage,
      dueDate,
      completionDate,
      challenge_page,
      practice_page,
      lesson_problems,
      due_date,
      completed_at,
      assignment_date,
      scoring = ""
    },
    onOpenModal,
    onCloseDropdown,
    handleRescheduleModalOpen,
    handleResetLesson
  } = props;
  const dueAt = due_date || dueDate
  const completedAt = completed_at || completionDate
  // STATE
  const [dropdownIsOpen, toggleDropdown] = useState(false);

  const onOpenDetailModal = async () => {
    const { onSetIsVisibleTopbar, onSetActiveLesson, onSetOpenActivePage, lesson } = props;
    if (lesson.sections && lesson.sections.length !== 0 || lesson.problems && lesson.problems.length !== 0) {
      onSetIsVisibleTopbar(false);
      onSetActiveLesson(lesson);
      onSetOpenActivePage("AnswerSheet")
    }
  }
  const onSetDropdown = () => toggleDropdown(!dropdownIsOpen);

  const onReschedule = (assignDate, assignTime, dueAt, dueTime) => {
    // eslint-disable-next-line no-console
    console.warn("Stubbed out date functionality", assignDate, assignTime, dueAt, dueTime);
  };

  const onChecked = cardId => {
    props.onAddCheckedLesson(cardId, props.uniqueId);
  };

  const onUnChecked = cardId => {
    props.onRemoveCheckedLesson(cardId, props.uniqueId);
  };

  const handleAssignLesson = () => {
    onOpenModal();
    props.onAddCheckedLesson(props.cardId);
  };

  return (
    <React.Fragment>
      <div className='card-main-col col s12 m8 l7 xl5'>
        <div className={getLessonActivityStatus(props.lesson.lesson_id ? "assigned" : "notassigned")}>
          <div className='card-panel'>
            <div className='card-panel-row row'>
              <div className='icon-col col s2'>
                <i className={renderLessonIcon(props.lesson.subjects ? props.lesson.subjects.name : "")}></i>
              </div>
              <div className='col s9'>
                <div className='card-panel-text center-left'>
                  <div className='text-small'>{props.lesson.units ? props.lesson.units.name : ''}</div>
                  <div className='text-large'>
                    <a href='#' onClick={onOpenDetailModal}>
                      {lesson.name}
                    </a>
                  </div>
                  <div className='text-small'>Subject: {props.subjects ? props.lesson.subjects.name : ''}</div>
                </div>
              </div>
              <div className='col s1 right-align'>
                <div className='row icons-row'>
                  <div className='dropdown-block col'>
                    <a
                      className='dropdown-trigger btn'
                      href='#'
                      data-target='dropdown01'
                      onClick={(e) => {
                        e.preventDefault();
                        onSetDropdown(dropdownIsOpen)
                      }}
                    >
                      <i className='material-icons dots-icon'>more_vert</i>
                    </a>
                    <If condition={dropdownIsOpen}>
                      <ClickOffComponentWrapper onOuterClick={() => onSetDropdown(dropdownIsOpen)}>
                        <ul
                          id='dropdown01'
                          className='dropdown-content dropdown-wide'
                          style={{
                            display: "block",
                            opacity: "1",
                            transform: "scaleX(1) scaleY(1)"
                          }}
                        >
                          {renderDropdownOptions(status, handleAssignLesson, handleRescheduleModalOpen, props.handleUnassignLesson, handleResetLesson, [lesson.id])}
                        </ul>
                      </ClickOffComponentWrapper>
                    </If>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card-content' onClick={onOpenDetailModal}>
            <div className='d-flex sameheight-all row mb-0'>
              <div className='col s6'>
                <div className='chart-container'>
                  <div className='chart-holder' style={{ width: "140px", height: "95px" }}>
                    <Doughnut
                      data={
                        completedAt && scoring
                          ? () => data(scoring.correct_count, scoring.question_count, scoring.grade ? scoring.grade : 'POOR')
                          : completedProblems
                            ? () => data(completedProblems, problems, status)
                            : () => data(0, 1, "ASSIGNED")
                      }
                      options={{
                        circumference: Math.PI,
                        rotation: Math.PI,
                        cutoutPercentage: 60,
                        tooltips: false
                      }}
                    />
                    {renderProblemCount(status, scoring.grade ? scoring.grade : "POOR", scoring.percentage_correct, problems.length, 0)}
                  </div>
                  <div className='chart-row'>
                    <div className='chart-col chart-start'></div>
                    <div className='chart-col chart-end'>
                      <span className='amount' style={{ color: chartColorMap[status] }}>
                        <Choose>
                          <When condition={status === 'COMPLETED'}>
                            0 of {scoring.question_count}
                          </When>
                          <When condition={status === "STARTED"}>
                            0 of {problems.length}
                          </When>
                        </Choose>
                      </span>
                    </div>
                  </div>
                  <div className='chart-description' style={{ marginTop: "10px" }}>
                    <dl className='dl-horizontal'>
                      <dt>Time Est:</dt>
                      <dd>{timeEstimate ? `${timeEstimate} mins` : "None"}</dd>
                    </dl>
                    <dl className='dl-horizontal'>
                      <dt>Problems:</dt>
                      <dd>{lessonProblems && lessonProblems.length}</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className='col s6 d-flex align-items-center left-align'>
                <div className='dates'>
                  <dl className='row'>
                    {assignment_date && (
                      <dt /*style={{ float: "right", clear: "both" }}*/>Available:    <time dateTime={assignment_date}>{moment(assignment_date).format('MM/DD/YYYY')}</time></dt>
                    )}

                    {dueAt && assignment_date ? (
                      <dt /*style={{ float: "right", clear: "both" }}*/>Due: <time dateTime={dueAt}>{moment(dueAt).format('MM/DD/YYYY')}</time></dt>
                    ) : assignment_date ? (<dt>No Due Date</dt>) : ""}

                    {completedAt ? (
                      <dt /*style={{ float: "right", clear: "both" }}*/>Completed: <time dateTime={completedAt}>{moment(completedAt).format('MM/DD/YYYY')}</time></dt>
                    ) : ""}
                  </dl>
                </div>

                <div className='align-self-end'>
                  <Choose>
                    <When condition={props.lesson.lesson_id}>
                      {status === 'COMPLETED' ? (
                        <span
                          style={{
                            backgroundColor: `${props.scoring ? gradeColorMap[props.scoring.grade] : gradeColorMap['POOR']}`,
                          }}
                          className={`badge badge-rounded-md ${statusColorMap[scoreStatus]} white-text`}
                        >
                          {scoring.grade ? scoring.grade : 'POOR'}
                        </span>
                      ) : (
                          <span

                            style={status === 'OVERDUE' ? {
                              backgroundColor: `#fff`,
                              borderColor: 'red',
                              color: 'red'
                            } : { backgroundColor: `#212121`, color: 'white' }}
                            className={`badge badge-rounded-md ${statusColorMap[status]} `}
                          >
                            {status}
                          </span>
                        )}
                    </When>
                  </Choose>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

LessonCard.propTypes = {
  lesson: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChecked: PropTypes.func.isRequired,
  onSetIsVisibleTopbar: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  onSetIsVisibleTopbar: bindActionCreators(setIsVisibleTopBar, dispatch),
  onSetActiveLesson: bindActionCreators(setActiveLesson, dispatch),
  onSetOpenActivePage: bindActionCreators(setOpenActivePage, dispatch)
});
export default connect(null, mapDispatchToProps)(LessonCard);
