/* eslint-disable */
// used vars and indentifers not camelcase
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";
import ClickOffComponentWrapper from "../../../../../../ClickOffComponentWrapper";
// RENDERING UTILS
import {
  getProblemCompletionStatusColor,
  getLessonActivityStatus,
  renderLessonIcon,
  renderDropdownOptions,
  renderProblemCount,
  renderAlerts,
  statusColorMap,
  chartColorMap
} from "./utils";
import LessonDetailAnswerSheet from "../../../../../LessonDetailAnswerSheet";
import Checkbox from "./components/Checkbox";

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
      completed_at
    },
    onOpenModal,
    onCloseDropdown,
    handleRescheduleModalOpen
  } = props;
  const dueAt = dueDate || due_date
  const completedAt = completed_at || completionDate
  console.log('log: completedAt', completedAt)
  // STATE
  const [dropdownIsOpen, toggleDropdown] = useState(false);
  const [detailModalOpen, toggleModal] = useState(false);
  const [selected, toggleSelected] = useState(props.lesson.selected);

  const onOpenDetailModal = () => toggleModal(true);
  const onCloseDetailModal = () => toggleModal(false);
  const onSetDropdown = () => toggleDropdown(!dropdownIsOpen);

  const onReschedule = (assignDate, assignTime, dueAt, dueTime) => {
    // eslint-disable-next-line no-console
    console.warn("Stubbed out date functionality", assignDate, assignTime, dueAt, dueTime);
  };

  const onChecked = cardId => {
    props.onAddCheckedLesson(cardId);
    toggleSelected(true);
  };

  const onUnChecked = cardId => {
    props.onRemoveCheckedLesson(cardId);
    toggleSelected(false);
  };

  const handleAssignLesson = () => {
    onOpenModal();
    props.onAddCheckedLesson(lesson.id);
  };

  return (
    <React.Fragment>
      <LessonDetailAnswerSheet
        onCloseDetailModal={onCloseDetailModal}
        open={detailModalOpen}
        user={props.user}
        lesson={lesson}
      />
      <div className='card-main-col col s12 m8 l7 xl5'>
        {/* <div className={getLessonActivityStatus(status)}> */}
        <div className={getLessonActivityStatus("notassigned")}>
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
                      onClick={() => onSetDropdown(dropdownIsOpen)}
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
                          {renderDropdownOptions(status)}
                        </ul>
                      </ClickOffComponentWrapper>
                    </If>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='card-content'>
            <div className='d-flex sameheight-all row mb-0'>
              <div className='col s6'>
                <div className='chart-container'>
                  <div className='chart-holder' style={{ width: "140px", height: "95px" }}>
                    <Doughnut
                      data={
                        completedAt
                          ? () => data(score, problems, scoreStatus)
                          : completedProblems
                          ? () => data(completedProblems, problems, status)
                          : () => data(0, 1, "Assigned")
                      }
                      // height={210}
                      options={{
                        circumference: Math.PI,
                        rotation: Math.PI,
                        cutoutPercentage: 60,
                        tooltips: false
                      }}
                    />
                    {renderProblemCount("notassigned", scoreStatus, score, problems, completedProblems)}
                  </div>
                  <div className='chart-row'>
                    <div className='chart-col chart-start'>&nbsp;</div>
                    <div className='chart-col chart-end'>
                      <span className='amount' style={{ color: chartColorMap[status] }}>
                        {problems.length}
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
                <div className='date-container'>
                  <dl className='row'>
                    <Choose>
                      <When condition={true}>
                        <dt></dt>
                        <dd></dd>
                      </When>
                      <Otherwise>
                        <dt style={{ float: "right", clear: "both" }}>Available:</dt>
                        <dd>
                          <time dateTime={dueAt}>{dueAt}</time>
                        </dd>
                      </Otherwise>
                    </Choose>

                    <Choose>
                      <When condition={assigned || status === "SCHEDULED"}>
                        <dt>No Due Date</dt>
                      </When>
                      <Otherwise>
                        <dt style={{ float: "right", clear: "both" }}>Due:</dt>
                        <dd>
                          <time dateTime={dueAt}>{dueAt}</time>
                        </dd>
                      </Otherwise>
                    </Choose>
                    <Choose>
                      <When condition={false}>
                        <dt>No Due Date</dt>
                      </When>
                      <Otherwise>
                        <dt style={{ float: "right", clear: "both" }}>Complete:</dt>
                        <dd>
                          <time dateTime={dueAt}>{dueAt}</time>
                        </dd>
                      </Otherwise>
                    </Choose>
                  </dl>
                </div>

                <div className='align-self-end'>
                  <Choose>
                    <When condition={scoreStatus !== ""}>
                      <span
                        className={`badge badge-rounded-md ${statusColorMap[scoreStatus]} white-text`}
                      >
                        {scoreStatus}
                      </span>
                    </When>
                    <Otherwise>
                      <span
                        className={`badge badge-rounded-md ${statusColorMap[status]} white-text`}
                      >
                        {status}
                      </span>
                    </Otherwise>
                  </Choose>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col s2'>
              <Checkbox
                checked={selected}
                onChecked={onChecked}
                onUnChecked={onUnChecked}
                cardId={props.cardId}
                type='cardCheckBox'
              />
            </div>
            <div className='col s8'>
              <dl className='dl-horizontal'>
                <dt>p.</dt>
                <dd>
                  ({challenge_page} - {practice_page}) ({"Challenge"} + {"Practice"})
                </dd>
              </dl>
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
  onChecked: PropTypes.func.isRequired
};

export default LessonCard;
