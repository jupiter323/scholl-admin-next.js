import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import PracticeQuestions from './components/PracticeQuestions';
import ChallengeQuestions from './components/ChallengeQuestions';
import moment from "moment";
import { fetchStudentLessonSectionApi } from "../index/api";

const data = (value, total) => ({
  datasets: [{
    data: [value, total - value],
    backgroundColor: [
      getValuesByScore(value, total, 'color'),
      "#eaeaea",
    ],
  }],
});
const getValuesByScore = (value, max, target) => {
  let activeIndex = 0;
  if (max === 0) {
    activeIndex = 4;
  } else {
    const score = (value / max) * 100;
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
    { label: "Great", color: "#74b287" },
    { label: "Above Average", color: "#a9c466" },
    { label: "Average", color: "d8c539" },
    { label: "Below Average", color: "#e89258" },
    { label: "Poor", color: "#f27c7c" },
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
      challengeProblems: [],
      practiceProlems: [],
      drillProblems: [],
      currentType: "",
      hasChallenge: false,
      hasPractice: false,
      hasDrill: false,
    };
  }


  componentDidMount = async () => {
    const { lesson, user: { id: student_id } } = this.props;
    if (lesson.sections) { // lesson module type
      this.setState({
        currentType: "Module",
      });
      const lesson_id = this.props.lesson.id;
      const { sections } = this.props.lesson;
      sections.map(async section => {
        const section_id = section.id;
        const currentSectionName = section.name;
        if (currentSectionName === "challenge") {
          this.setState({
            hasChallenge: true,
          });
          const challengeProblems = await fetchStudentLessonSectionApi(student_id, lesson_id, section_id);
          this.setState({
            challengeProblems: challengeProblems.lesson_problems,
          });
        } else {
          this.setState({
            hasPractice: true,
          });
          const practiceProlems = await fetchStudentLessonSectionApi(student_id, lesson_id, section_id);
          this.setState({
            practiceProlems: practiceProlems.lesson_problems,
          });
        }
      });
    }
    if (lesson.problems && lesson.problems.length !== 0) {
      this.setState({
        currentType: "Drill",
        hasDrill: true,
      });
      const drillProblems = await fetchStudentLessonSectionApi(student_id, lesson_id, section_id);
      this.setState({
        drillProblems,
      });
    }
  }

  getProblemsAmount = () => {
    if (this.state.currentType === "Module") {
      return this.state.challengeProblems.length + this.state.practiceProlems.length;
    }
    if (this.state.currentType === "Drill") {
      return this.state.drillProblems.length;
    }
  }

  getReviewedAndFlaggedProblemAmount = (type) => {
    const amount = 0;
    if (this.props.lesson.problems && this.props.lesson.problems.length !== 0) {
      problems.map(section => {
        if (section.flag_status === type) {
          amount += 1;
        }
      });
    }
    if (this.props.lesson.sections && this.props.lesson.sections.length !== 0) {
      const { challengeProblems, practiceProlems } = this.state;
      challengeProblems.map(section => {
        if (section.flag_status === type) {
          amount += 1;
        }
      });
      practiceProlems.map(section => {
        if (section.flag_status === type) {
          amount += 1;
        }
      });
    }
    return amount;
  }

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
  }

  render() {
    const { challengeProblems, practiceProlems, drillProblems } = this.state;
    const { open, onCloseDetailModal, user,
      lesson: { name, starting_page, ending_page, unit, passage, completed_at, assignTime, assignment_date, due_date, dueTime, type, scoring: { question_count, correct_count } } } = this.props;
    const { studentInformation: { firstName, lastName } } = user;
    return (
      <React.Fragment>
        {open && (
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
              <div className="header-row card-panel light-blue lighten-1 white-text">

                <div className="card-panel-row row">
                  <div className="icon-col col s1">
                    <i className="icon-books"></i>
                  </div>
                  <div className="col s9">
                    <p className="text-small" style={{ marginBottom: 0, fontSize: 18 }}>Unit2</p>
                    <p className="text-large" style={{ marginBottom: 0, fontSize: 24 }}>{name}</p>
                    <p style={{ fontSize: '16px' }}>{`p.${starting_page === ending_page ? starting_page : `${starting_page}-${ending_page}`} (${this.getTypeLabel()})`} </p>

                  </div>
                  <div className="col s2" style={{ marginTop: '-47px' }}>
                    <div className="card-panel-text center-align">
                      <div><span className="name" style={{ fontSize: '17px' }}>{firstName} {lastName}</span>  <div className="position-top right-align" style={{ float: 'right' }}>
                        <div className="icons-row">
                          <div className="dropdown-block col">
                            <i className="material-icons dots-icon">more_vert</i>
                          </div>
                          <a
                            href="#"
                            className="icon-close"
                            onClick={onCloseDetailModal}
                            style={{ color: 'white' }}
                          ></a>
                        </div>
                      </div></div>
                      <Choose>
                        <When condition={completed_at}>
                          <div><time className="date" dateTime="" style={{ color: 'white', fontWeight: 'unset', marginTop: '-50px', fontSize: '17px' }}>
                            {`Completed ${moment(completed_at).format("MM/DD/YY")} at ${moment(completed_at).format('hh:mm')}`}
                          </time></div>
                        </When>
                        <Otherwise>
                          <div><time className="date" dateTime="" style={{ color: 'white', fontWeight: 'unset', marginTop: '-50px', fontSize: '17px' }}>
                            {`Assigned ${assignment_date} at ${assignTime}`}
                          </time></div>
                          <div><time className="date" dateTime="" style={{ color: 'white', fontWeight: 'unset', marginTop: '-28px', fontSize: '17px' }}>
                            {due_date && (`Due ${due_date} at ${dueTime}`)}
                          </time></div>
                        </Otherwise>
                      </Choose>
                    </div>
                  </div>
                </div>

              </div>
              <div className="content-section">
                <div className="row">
                  <div className="container-sm">
                    <div className="col s12 m6">
                      <div className="main-row row">
                        <div className="col s12">
                          <div className="card-block" style={{ margin: '0 auto' }}>
                            <h3>Performance</h3>
                            <div className="card-answer card">
                              <div className="card-content">
                                <div className="row">
                                  <div className="col s6">
                                    <div className="chart-container" style={{ width: 140 }}>
                                      <div className="chart-holder" style={{ width: 140 }}>
                                        <Doughnut
                                          data={() => data(correct_count, question_count)}
                                          height={140}
                                          width={140}
                                          options={{
                                            circumference: 1.45 * Math.PI,
                                            rotation: -3.85,
                                            cutoutPercentage: 55,
                                            tooltips: false,
                                          }}
                                        />
                                        <span className="chart-value" style={{ backgroundColor: getValuesByScore(correct_count, question_count, 'color'), marginBottom: '-40px', width: '50px', height: '50px' }}>{Math.floor(correct_count / question_count * 100)}%</span>
                                      </div>
                                      <div style={{ color: getValuesByScore(correct_count, question_count, 'color'), margin: '45px 45px 0 45px' }}>{correct_count} of {question_count}</div>
                                    </div>
                                  </div>
                                  <div className="col s6">
                                    <div className="chart-description" style={{ marginTop: "10px" }}>
                                      <dl className="dl-horizontal" style={{ fontSize: 16 }}>
                                        <dt>Time Est:</dt>
                                        <dd>{this.props.lesson.time_estimate ? this.props.lesson.time_estimate : 0}min</dd>
                                      </dl>
                                      <dl className="dl-horizontal" style={{ fontSize: 16 }}>
                                        <dt>Problems:</dt>
                                        <dd>{this.getProblemsAmount()}</dd>
                                      </dl>
                                      <dl className="dl-horizontal" style={{ fontSize: 16, margin: 30, padding: 10, backgroundColor: getValuesByScore(correct_count, question_count, 'color'), color: 'white' }}>{getValuesByScore(correct_count, question_count, 'label')}</dl>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main-row row">
                        <div className="col s12">
                          <div className="card-block" style={{ margin: '0 auto' }}>
                            <h3>Flagged For Review</h3>
                            <div className="card-answer card">
                              <div className="card-content">
                                <div className="row-bordered d-flex row">
                                  <div className="col s6 badge-block-column red-text">
                                    <span className="badge-rounded-xlg badge red darken-2 white-text"><b className="badge-text">{this.getReviewedAndFlaggedProblemAmount('REVIEWED')}</b> <i className="icon-flag"></i></span>
                                    <span style={{ marginLeft: 10, fontSize: 16 }}>To Review</span>
                                  </div>
                                  <div className="col s6 badge-block-column">
                                    <span className="badge-rounded-xlg badge grey darken-2 white-text"><b className="badge-text">{this.getReviewedAndFlaggedProblemAmount('FLAGGED')}</b> <i className="icon-flag"></i></span>
                                    <span style={{ marginLeft: 10, fontSize: 16 }}>Reviewed</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 m6">
                      <div className="row" style={{ margin: 0 }}>
                        <div className="card-block" style={{ margin: '0 auto' }}>
                          {challengeProblems.length !== 0 && <div className="main-row row">
                            <ChallengeQuestions
                              questions={challengeProblems}
                            />
                          </div>}
                          {practiceProlems.length !== 0 && <div className="main-row row">
                            <PracticeQuestions
                              questions={practiceProlems}
                            />
                          </div>}
                          {drillProblems.length !== 0 && <div className="main-row row">
                            <ChallengeQuestions
                              questions={drillProblems}
                            />
                          </div>}
                        </div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        }
  Î </React.Fragment>
    );
  }
}

LessonDetailAnswerSheet.propTypes = {
  open: PropTypes.bool.isRequired,
  lesson: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onCloseDetailModal: PropTypes.func.isRequired,
};

export default LessonDetailAnswerSheet;
