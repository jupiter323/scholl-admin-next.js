import React from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import PracticeQuestions from './components/PracticeQuestions';
import ChallengeQuestions from './components/ChallengeQuestions';
import DrillQuestions from './components/DrillQuestions';
import moment from "moment";
import { makeSelectUnitFilterOptions, makeSelectErrorMessages } from "../index/selectors";
import { fetchLessonProblems, submitLessonProblems, fetchLessonDetails, resetErrorMessage } from '../index/actions';
import DropDownMenu from '../DropDownMenu';
import RadialBar from '../../common/RadialBar';

import { ConvertSecondsToMinutesSeconds } from '../../utils/ConvertSecondsToMinutesSeconds';

const data = (value, total) => ({
  datasets: [
    {
      data: [value, total - value],
      backgroundColor: [getValuesByScore(value, total, 'color'), '#eaeaea'],
    },
  ],
});
const getValuesByScore = (value, max, target) => {
  let activeIndex = 0;
  if (max === 0) {
    activeIndex = 4;
  } else {
    const score = value / max * 100;
    if (score >= 90) {
      activeIndex = 0;
    } else if (score < 90 && score > 75) {
      activeIndex = 1;
    } else if (score > 60 && score < 76) {
      activeIndex = 2;
    } else if (score >= 40 && score <= 60) {
      activeIndex = 3;
    } else if (score < 40) {
      activeIndex = 4;
    }
  }
  const colorList = [
    { label: 'Great', color: '#74b287' },
    { label: 'Above Average', color: '#a9c466' },
    { label: 'Average', color: '#d8c539' },
    { label: 'Below Average', color: '#e89258' },
    { label: 'Poor', color: '#f27c7c' },
  ];
  if (target === 'color') {
    return colorList[activeIndex].color;
  }
  return colorList[activeIndex].label;
};

class LessonDetailAnswerSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentType: "",
      hasChallenge: false,
      hasPractice: false,
      hasDrill: false,
      dropdownIsOpen: false,
      loadingScores: false,
      completeSectionMsg: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { lesson, errorMessages: { completeSectionMsg } } = props;
    if (lesson.status === "COMPLETED") {
      return { loadingScores: false };
    }
    if (completeSectionMsg && completeSectionMsg !== state.completeSectionMsg) {
      return { completeSectionMsg };
    }
  }

  componentDidMount = async () => {
    const {
      lesson,
      user: { id: student_id },
      onFetchLessonProblems,
      onFetchLessonDetails,
    } = this.props;
    const lesson_id = this.props.lesson.id;
    if (lesson.sections) {
      // lesson module type
      this.setState({
        currentType: "Module",
      });
      const { sections } = this.props.lesson;
      sections.map(async (section) => {
        const section_id = section.id;
        const currentSectionName = section.name;
        if (currentSectionName === "challenge") {
          this.setState({
            hasChallenge: true,
          });
          onFetchLessonProblems({ student_id, lesson_id, section_id });
        } else {
          this.setState({
            hasPractice: true,
          });
          onFetchLessonProblems({ student_id, lesson_id, section_id });
        }
      });
    }
    if (lesson.drillProblems && lesson.drillProblems.length !== 0) {
      onFetchLessonDetails({ student_id, lesson_id });
      this.setState({
        currentType: "Drill",
        hasDrill: true,
      });
      // @TODO commented out some flag logic until I can finish reworking answering lessons-Mark
      // if (this.props.lessonIdsToUnFlag.includes(lesson.id)) {
      //   lesson.problems.map(problem => {
      //     if (problem.flag_status === 'FLAGGED') {
      //       problem.flag_status = 'REVIEWED';
      //       return problem;
      //     }
      //     return problem;
      //   });
      // }
    }
  };

  componentWillUnmount = () => {
    this.props.onCloseDetailModal();
    this.props.onResetErrorMessage("completeSectionMsg");
  };

  getProblemsAmount = () => {
    const { lesson } = this.props;
    if (this.state.currentType === "Module") {
      return lesson.challengeProblems.length + lesson.practiceProblems.length;
    }
    if (this.state.currentType === "Drill") {
      return lesson.drillProblems.length;
    }
  };

  getReviewedAndFlaggedProblemAmount = (type) => {
    const { lesson } = this.props;
    let amount = 0;
    if (lesson.drillProblems && lesson.drillProblems.length !== 0) {
      lesson.drillProblems.map((section) => {
        if (section.flag_status === type) {
          amount += 1;
        }
      });
    }
    if (this.props.lesson.sections && this.props.lesson.sections.length !== 0) {
      const { challengeProblems, practiceProblems } = lesson;
      challengeProblems.length !== 0 &&
        challengeProblems.map((section) => {
          if (section.flag_status === type) {
            amount += 1;
          }
        });
      practiceProblems.length !== 0 &&
        practiceProblems.map((section) => {
          if (section.flag_status === type) {
            amount += 1;
          }
        });
    }
    return amount;
  };

  getTypeLabel = () => {
    let typeLabel = "";
    if (this.state.hasChallenge && this.state.hasPractice) {
      typeLabel = "Challenge + Practice";
    } else {
      if (this.state.hasChallenge) {
        typeLabel = "Challenge";
      }
      if (this.state.hasPractice) {
        typeLabel = "Practice";
      }
    }

    if (this.state.hasDrill) {
      typeLabel = "Drill";
    }

    return typeLabel;
  };

  getUnitNameById = () => {
    const { units } = this.props;
    if (units && units.length !== 0) {
      const unitIds = units.map((unit) => unit.value);
      const currentIndex = unitIds.findIndex(this.getUnitIndexMatchedUnitId);
      const currentUnit = units[currentIndex];
      return currentUnit.label;
    }
    return "Undefind UnitName";
  };

  getUnitIndexMatchedUnitId = (unitId) => unitId === this.props.lesson.unit_id;

  onSetDropdown = () => this.setState({ dropdownIsOpen: !this.state.dropdownIsOpen });

  handleAssignLesson = () => {
    const { onOpenModal, onAddCheckedLesson, lesson } = this.props;
    onOpenModal();
    onAddCheckedLesson(lesson.id);
  };

  getCurrentProblemList = () => {
    // @TODO Replace this function because problems are from props not state-Mark
    // const { currentType, drillProblems, practiceProblems, challengeProblems } = this.state;
    // if (currentType === 'Drill') return [{ problems: drillProblems, type: "drillProblems" }];
    // if (currentType === 'Module') return [{ problems: challengeProblems, type: "challengeProblems" }, { problems: practiceProblems, type: "practiceProblems" }];
  };

  getTotalVideoDuration = () => {
    const { lesson } = this.props;
    let totalDuration = 0;
    if (lesson.drillProblems && lesson.drillProblems.length !== 0) {
      // Drill
      lesson.drillProblems.map((section) => {
        if (section.problem && section.problem.video && section.problem.video.duration) {
          totalDuration += section.problem.video.duration;
        }
      });
    }
    if (this.props.lesson.sections && this.props.lesson.sections.length !== 0) {
      // Module
      const { challengeProblems, practiceProblems } = lesson;
      challengeProblems.length !== 0 &&
        challengeProblems.map((section) => {
          if (section.problem && section.problem.video && section.problem.video.duration) {
            totalDuration += section.problem.video.duration;
          }
        });
      practiceProblems.length !== 0 &&
        practiceProblems.map((section) => {
          if (section.problem && section.problem.video && section.problem.video.duration) {
            totalDuration += section.problem.video.duration;
          }
        });
    }
    return totalDuration;
  };

  submitLessonButton = (lessonType) => {
    const {
      lesson,
      lesson: { status, id },
      onSubmitLessonProblems,
      user: { id: student_id },
    } = this.props;
    let displayBtn = false;
    let postBody = {};
    if (lessonType === 'drill') {
      if (status !== 'COMPLETED') displayBtn = true;
      postBody = {
        student_lesson_id: id,
        status: 'COMPLETED',
      };
    } else if (lessonType === "practice" || lessonType === "challenge") {
      const { sections } = lesson;
      if (lessonType === 'challenge' && sections[0].status !== "COMPLETED") displayBtn = true;
      if (lessonType === 'practice' && sections[0].status === "COMPLETED" && sections[1].status !== "COMPLETED") displayBtn = true;
      postBody = {
        student_lesson_id: id,
        sections,
      };
    }
    return displayBtn && (
      <div className="row">
        <div className="btn-holder left-align">
          <p className="red-text">{this.state.completeSectionMsg}</p>
          <a
            href="#"
            className="btn btn-xlarge waves-effect waves-light bg-blue"
            onClick={() => {
              if (lessonType === 'drill' || lessonType === 'practice') {
                this.setState({ loadingScores: true });
              }
              onSubmitLessonProblems(lessonType, postBody, student_id);
            }}
          >
            I'm Done
          </a>
        </div>
      </div>
    );
  };

  loadingSpinner = () =>
    (<div className="overlay-spinning">
      <h1>Fetching Scores...</h1>
      <div className="spinning" />
    </div>);

  render() {
    const {
      onCloseDetailModal,
      user,
      lesson: {
        name,
        starting_page,
        ending_page,
        completed_at,
        assignTime,
        assignment_date,
        due_date,
        dueTime,
        drillProblems,
        challengeProblems,
        practiceProblems,
      },
    } = this.props;
    const {
      studentInformation: { firstName, lastName },
    } = user;
    if (this.state.loadingScores) return this.loadingSpinner();
    return (
      <React.Fragment>
        <div className="wrapper">
          <div
            className="card-modal card-main card switcher-section grey lighten-5 modal"
            style={{
              zIndex: "1004",
              display: "block",
              position: "absolute",
              top: "0",
              minHeight: "100%",
              minWidth: "100%",
            }}
          >
            <div className="header-box card-panel light-blue lighten-1 white-text">
              <div className="header-flex-row row mb-0" style={{ width: "100%" }}>
                <div className="col s12 m7 xl8">
                  <div className="header-holder">
                    <div className="header-col">
                      <div className="icon-col">
                        <i className="icon-books" />
                        <span className="text-icon">Lesson</span>
                      </div>
                    </div>
                    <div className="header-col">
                      <div className="card-panel-text">
                        <div className="text-small">{this.getUnitNameById()}</div>
                        <h1 className="text-large">{name}</h1>
                        <div className="text-small">
                          p.{starting_page}
                          {ending_page > starting_page ? `-${ending_page}` : ""}(Reading)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s9 m4 xl3 position-mobile-left">
                  <div className="card-panel-text">
                    <h2 className="text-large">
                      {firstName} {lastName}
                    </h2>
                    {assignment_date && (
                      <dl className="text-small dl-horizontal">
                        <dt>Assigned:</dt>
                        <dd>
                          <time dateTime="2019-01-06T08:00">{`${moment(assignment_date).format(
                            "MM/DD/YY",
                          )} at ${moment(assignTime).format("hh:mm")}`}</time>
                        </dd>
                      </dl>
                    )}
                    {due_date && (
                      <dl className="text-small dl-horizontal">
                        <dt>Due:</dt>
                        <dd>
                          <time dateTime="2019-01-06T16:00">{`${moment(due_date).format(
                            "MM/DD/YY",
                          )} at ${moment(dueTime).format("hh:mm")}`}</time>
                        </dd>
                      </dl>
                    )}
                    {completed_at && (
                      <dl className="text-small dl-horizontal">
                        <dt>Completed:</dt>
                        <dd>
                          <time dateTime="2019-09-01T06:59">{`${moment(completed_at).format(
                            "MM/DD/YY",
                          )} at ${moment(completed_at).format("hh:mm")}`}</time>
                        </dd>
                      </dl>
                    )}
                  </div>
                </div>
                <div className="col s2 m1 right-align position-mobile-right">
                  <div className="dropdown-block">
                    <a
                      className="dropdown-trigger btn"
                      href="#"
                      data-target="dropdown_top"
                      onClick={(e) => {
                        e.preventDefault();
                        this.onSetDropdown();
                      }}
                    >
                      <i className="material-icons dots-icon">more_vert</i>
                    </a>
                    <DropDownMenu
                      onOpenModal={this.props.onOpenModal}
                      onAddCheckedLesson={this.props.onAddCheckedLesson}
                      lesson={this.props.lesson}
                      dropdownIsOpen={this.state.dropdownIsOpen}
                      onSetDropdown={this.onSetDropdown}
                      onCloseDetailModal={this.props.onCloseDetailModal}
                      onCloseDropdown={this.props.onCloseDropdown}
                      resetLessonSelections={this.props.resetLessonSelections}
                      handleMarkAllFlagsReviewed={this.props.handleMarkAllFlagsReviewed}
                      problems={this.getCurrentProblemList()}
                      handleExcuseLessonLateness={this.props.handleExcuseLessonLateness}
                    />
                  </div>
                  <div className="close-block">
                    <a href="#" className="modal-close close" onClick={onCloseDetailModal}>
                      <i className="icon-close-thin" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="header-row-block card-panel-row row">
                <div className="col s12 right-align">
                  <h2 className="text-large">DownloadPDF</h2>
                </div>
              </div>
            </div>
            <div className="content-section">
              <div className="row">
                <div className="container-sm">
                  {this.props.lesson.status === "COMPLETED" && (
                    <div className="col s12 m6">
                      <div className="main-row row">
                        <div className="col s12">
                          <div className="card-block" style={{ margin: "0 auto" }}>
                            <h3>Performance</h3>
                            <div className="card-answer card">
                              <div className="card-content">
                                <div className="row">
                                  <div className="col s6">
                                    <div className="chart-container" style={{ width: 140 }}>
                                      <div className="chart-holder" style={{ width: 140 }}>
                                        <Doughnut
                                          data={() =>
                                            data(
                                              this.props.lesson.scoring.correct_count,
                                              this.props.lesson.scoring.question_count,
                                            )
                                          }
                                          height={140}
                                          width={140}
                                          options={{
                                            circumference: 1.45 * Math.PI,
                                            rotation: -3.85,
                                            cutoutPercentage: 55,
                                            tooltips: false,
                                          }}
                                        />
                                        <span
                                          className="chart-value"
                                          style={{
                                            backgroundColor: getValuesByScore(
                                              this.props.lesson.scoring.correct_count,
                                              this.props.lesson.scoring.question_count,
                                              "color",
                                            ),
                                            marginBottom: "-40px",
                                            width: "50px",
                                            height: "50px",
                                          }}
                                        >
                                          {Math.floor(
                                            this.props.lesson.scoring.percentage_correct
                                              ? this.props.lesson.scoring.percentage_correct
                                              : 0,
                                          )}
                                          %
                                        </span>
                                      </div>
                                      <div
                                        style={{
                                          color: getValuesByScore(
                                            this.props.lesson.scoring.correct_count,
                                            this.props.lesson.scoring.question_count,
                                            "color",
                                          ),
                                          margin: "45px 45px 0 45px",
                                        }}
                                      >
                                        {this.props.lesson.scoring.correct_count} of{" "}
                                        {this.props.lesson.scoring.question_count}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col s6">
                                    <div
                                      className="chart-description"
                                      style={{ marginTop: "10px" }}
                                    >
                                      <dl className="dl-horizontal" style={{ fontSize: 16 }}>
                                        <dt>Time Est:</dt>
                                        <dd>
                                          {this.props.lesson.time_estimate
                                            ? this.props.lesson.time_estimate
                                            : 0}
                                          min
                                        </dd>
                                      </dl>
                                      <dl className="dl-horizontal" style={{ fontSize: 16 }}>
                                        <dt>Problems:</dt>
                                        <dd>{this.getProblemsAmount()}</dd>
                                      </dl>
                                      <dl
                                        className="dl-horizontal"
                                        style={{
                                          fontSize: 16,
                                          margin: 30,
                                          padding: 10,
                                          backgroundColor: getValuesByScore(
                                            this.props.lesson.scoring.correct_count,
                                            this.props.lesson.scoring.question_count,
                                            "color",
                                          ),
                                          color: "white",
                                        }}
                                      >
                                        {getValuesByScore(
                                          this.props.lesson.scoring.correct_count,
                                          this.props.lesson.scoring.question_count,
                                          "label",
                                        )}
                                      </dl>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row" style={{ margin: 0 }}>
                        <div className="card-block" style={{ margin: "0 auto" }}>
                          <h3>Video</h3>
                          <div className="card-answer card">
                            <div className="card-content">
                              <div className="row-bordered d-flex row">
                                <div className="col s6">
                                  <div className="chart-block chart-block-test">
                                    <RadialBar
                                      svgWidth={150}
                                      svgHeight={150}
                                      strokeWidth={10}
                                      maxValue={this.getTotalVideoDuration()}
                                      currentValue={Number(this.props.lesson.video_watched_total)}
                                      strokeColor="#00BBF7"
                                    />
                                    <div className="chart-text">
                                      <span
                                        className="value"
                                        style={{ fontSize: "32px", color: "rgb(0, 187, 247)" }}
                                      >
                                        {ConvertSecondsToMinutesSeconds(
                                          this.props.lesson.video_watched_total,
                                        )}
                                      </span>
                                      <span className="title" style={{ fontSize: "14px" }}>
                                        out of
                                      </span>
                                      <span className="description" style={{ fontSize: "32px" }}>
                                        {ConvertSecondsToMinutesSeconds(
                                          this.getTotalVideoDuration(),
                                        )}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col s6 ">
                                  <div className="chart-description" style={{ marginTop: "30px" }}>
                                    <dl
                                      className="dl-horizontal"
                                      style={{ fontSize: 16, color: "#00BBF7" }}
                                    >
                                      <dt>total minutes of video watched</dt>
                                    </dl>
                                    <dl
                                      className="dl-horizontal"
                                      style={{ fontSize: 16, marginTop: "10px" }}
                                    >
                                      <dt>total minutes of video for all missed problems</dt>
                                    </dl>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main-row row">
                        <div className="col s12">
                          <div className="card-block" style={{ margin: "0 auto" }}>
                            <h3>Flagged For Review</h3>
                            <div className="card-answer card">
                              <div className="card-content">
                                <div className="row-bordered d-flex row">
                                  <div className="col s6 badge-block-column red-text">
                                    <span className="badge-rounded-xlg badge red darken-2 white-text">
                                      <b className="badge-text">
                                        {this.props.lesson.problem_flag_count}
                                      </b>{" "}
                                      <i className="icon-flag" />
                                    </span>
                                    <span style={{ marginLeft: 10, fontSize: 16 }}>To Review</span>
                                  </div>
                                  <div className="col s6 badge-block-column">
                                    <span className="badge-rounded-xlg badge grey darken-2 white-text">
                                      <b className="badge-text">
                                        {this.getReviewedAndFlaggedProblemAmount("REVIEWED")}
                                      </b>{" "}
                                      <i className="icon-flag" />
                                    </span>
                                    <span style={{ marginLeft: 10, fontSize: 16 }}>Reviewed</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <Choose>
                    <When condition={this.props.lesson.status === "COMPLETED"}>
                      <div className="col s12 m6">
                        <div className="row" style={{ margin: 0 }}>
                          <div className="card-block" style={{ margin: "0 auto" }}>
                            {challengeProblems.length !== 0 && (
                              <div className="main-row row">
                                <ChallengeQuestions
                                  questions={challengeProblems}
                                  problemType={"challengeProblems"}
                                  submitLessonButton={this.submitLessonButton}
                                />
                              </div>
                            )}
                            {practiceProblems.length !== 0 && (
                              <div className="main-row row">
                                <PracticeQuestions
                                  questions={practiceProblems}
                                  problemType={"practiceProblems"}
                                  submitLessonButton={this.submitLessonButton}
                                />
                              </div>
                            )}
                            {drillProblems.length !== 0 && (
                              <div className="main-row row">
                                <DrillQuestions
                                  questions={drillProblems}
                                  problemType={"drillProblems"}
                                  submitLessonButton={this.submitLessonButton}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </When>
                    <Otherwise>
                      <div className="col s12 m6 card-block" style={{ margin: "0 auto" }}>
                        {challengeProblems.length !== 0 && (
                          <div className="main-row row">
                            <ChallengeQuestions
                              questions={challengeProblems}
                              problemType={"challengeProblems"}
                              submitLessonButton={this.submitLessonButton}
                            />
                          </div>
                        )}
                      </div>
                      <div className="col s12 m6 card-block" style={{ margin: "0 auto" }}>
                        {practiceProblems.length !== 0 && (
                          <div className="main-row row">
                            <PracticeQuestions
                              questions={practiceProblems}
                              problemType={"practiceProblems"}
                              submitLessonButton={this.submitLessonButton}
                            />
                          </div>
                        )}
                      </div>
                      {drillProblems.length !== 0 && (
                        <div className="main-row row">
                          <DrillQuestions
                            questions={drillProblems}
                            problemType={"drillProblems"}
                            submitLessonButton={this.submitLessonButton}
                          />
                        </div>
                      )}
                    </Otherwise>
                  </Choose>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

LessonDetailAnswerSheet.propTypes = {
  open: PropTypes.bool.isRequired,
  lesson: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onCloseDetailModal: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  units: makeSelectUnitFilterOptions(),
  errorMessages: makeSelectErrorMessages(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFetchLessonProblems: postBody => dispatch(fetchLessonProblems(postBody)),
    onSubmitLessonProblems: (lessonType, postBody, student_id) => dispatch(submitLessonProblems(lessonType, postBody, student_id)),
    onFetchLessonDetails: (postBody) => dispatch(fetchLessonDetails(postBody)),
    onResetErrorMessage: (errName) => dispatch(resetErrorMessage(errName)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(LessonDetailAnswerSheet);
