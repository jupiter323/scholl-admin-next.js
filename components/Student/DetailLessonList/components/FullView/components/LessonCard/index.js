/* eslint-disable */
// used vars and indentifers not camelcase
import React from "react";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";
import ClickOffComponentWrapper from "../../../../../../ClickOffComponentWrapper";
import statusColorMap, {
  chartColorMap,
} from "../../../../../DetailWorksheetPage/utils/statusColorMap";
import LessonDetailAnswerSheet from "../../../../../LessonDetailAnswerSheet";
import Checkbox from "./components/Checkbox";

const data = (current, target, status) => ({
  datasets: [
    {
      data: [current, target - current],
      backgroundColor: [chartColorMap[status], "#eaeaea"],
    },
  ],
});

const getLessonActivityStatus = status => {
  if (status === "Scheduled") {
    return "card-main card-lesson-detail card-disabled card-assigned card";
  }
  return "card-main card-lesson-detail card-assigned card";
};

class LessonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
      dropdownIsOpen: false,
      detailModalOpen: false,
      selected: props.lesson.selected,
    };
  }

  onOpenDetailModal = () => this.setState({ detailModalOpen: true });
  onCloseDetailModal = () => this.setState({ detailModalOpen: false });
  onSetDropdown = dropdownIsOpen => this.setState({ dropdownIsOpen: !dropdownIsOpen });
  // onChecked = () => this.setState({selected: !this.state.selected})


  onReschedule = (assignDate, assignTime, dueDate, dueTime) => {
    // eslint-disable-next-line no-console
    console.warn("Stubbed out date functionality", assignDate, assignTime, dueDate, dueTime);
  };

  // eslint-disable-next-line consistent-return
  renderLessonIcon = subject => {
    switch (subject) {
      case "Reading":
        return "icon-books";
      case "Writing":
        return "icon-hands";
      case "Math":
        return "icon-calculator";
      default:
        break;
    }
  };

  renderDropdownOptions = status => {
    const {
      lesson: { assignDate, assignTime, dueDate, dueTime },
    } = this.props;
    if (status === "Scheduled" || status === "Assigned") {
      return (
        <React.Fragment>
          <li>
            <a href="#">Reschedule</a>
          </li>
          <li>
            <a href="#!">Unassign</a>
          </li>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <li>
          <a href="#" onClick={this.onReschedule(assignDate, assignTime, dueDate, dueTime)}>
            Reschedule
          </a>
        </li>
        <li>
          <a href="#!">Mark all Flags Reviewed</a>
        </li>
        <li>
          <a href="#!">Reset</a>
        </li>
        <li>
          <a href="#!">Unassign</a>
        </li>
      </React.Fragment>
    );
  };

  renderProblemCount = (status, scoreStatus, score, problems, completedProblems) => {
    if (status === "Started") {
      return (
        <span
          className="chart-value chart-value-column"
          style={{ bottom: "8px", backgroundColor: chartColorMap[status] }}
        >
          <span
            className="chart-count"
            data-count-up
            data-start-val="0"
            data-end-val="4"
            data-duration="1"
          >
            <span className="text-small" style={{ fontSize: "x-small" }}>
              {completedProblems}
            </span>
          </span>
          <span className="text-small" style={{ fontSize: "xx-small" }}>
            out of
          </span>{" "}
          <span className="text-small" style={{ fontSize: "x-small" }}>
            {problems}
          </span>
        </span>
      );
    }
    return (
      <span
        className="chart-value"
        style={{
          height: "50px",
          width: "50px",
          bottom: "6px",
          backgroundColor: chartColorMap[scoreStatus],
        }}
      >
        <span data-count-up data-start-val="0" data-end-val="96" data-duration="1"></span>
        <If condition={score !== ""}>
          <span className="percentage">{Math.floor(`${(score / problems) * 100}`)}%</span>
        </If>
      </span>
    );
  };

  renderAlerts = flags => {
    // if (flags.length) {

    if (true) {
      return (
        <span className="badge-rounded-xs badge red darken-2 white-text">
          <b className="badge-text">{0}</b> <i className="icon-flag"></i>
        </span>
      );
    }
    return <div className="right-col col s3">&nbsp;</div>;
  };

  render() {
    const { dropdownIsOpen } = this.state;
    const {
      lesson,
      lesson: {
        subjects,
        timeEstimate,
        status,
        scoreStatus,
        score,
        units,
        lessonName,
        assigned,
        flags,
        type,
        problems,
        completedProblems = "",
        passage,
        dueDate,
        availableDate,
        completionDate,
        overdue,
        starting_page,
        ending_page,
        challenge_page,
        practice_page,
        lesson_problems,
        time_estimate,
        selected,
      },
    } = this.props;
    return (
      <React.Fragment>
        <LessonDetailAnswerSheet
          onCloseDetailModal={this.onCloseDetailModal}
          open={this.state.detailModalOpen}
          user={this.props.user}
          lesson={lesson}
        />
        <div className="card-main-col col s12 m8 l7 xl5">
          <div className={getLessonActivityStatus(status)}>
            <div className="card-panel" style={{ backgroundColor: "#666", color: "#fff" }}>
              <div className="card-panel-row row">
                <div className="icon-col col s1">
                  <i className={this.renderLessonIcon(subjects.name)}></i>
                </div>
                <div className="col s10">
                  <div className="card-panel-text center-left">
                    <div className="text-small">{units.name}</div>
                    <div className="text-large">
                      <a href="#" onClick={this.onOpenDetailModal}>
                        {lesson.name}
                      </a>
                    </div>
                    <div className="text-small">Subject: {subjects.name}</div>
                  </div>
                </div>
                <div className="col s1 right-align">
                  <div className="row icons-row">
                    <div className="dropdown-block col">
                      <a
                        className="dropdown-trigger btn"
                        href="#"
                        data-target="dropdown01"
                        onClick={() => this.onSetDropdown(dropdownIsOpen)}
                      >
                        <i className="material-icons dots-icon">more_vert</i>
                      </a>
                      <If condition={dropdownIsOpen}>
                        <ClickOffComponentWrapper
                          onOuterClick={() => this.onSetDropdown(dropdownIsOpen)}
                        >
                          <ul
                            id="dropdown01"
                            className="dropdown-content dropdown-wide"
                            style={{
                              display: "block",
                              opacity: "1",
                              transform: "scaleX(1) scaleY(1)",
                            }}
                          >
                            {this.renderDropdownOptions(status)}
                          </ul>
                        </ClickOffComponentWrapper>
                      </If>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="d-flex sameheight-all row mb-0">
                <div className="col s6">
                  <div className="chart-container">
                    <div className="chart-holder" style={{ width: "140px", height: "95px" }}>
                      <Doughnut
                        data={
                          completionDate
                            ? () => data(score, problems, scoreStatus)
                            : () => data(completedProblems, problems, status)
                        }
                        height={210}
                        options={{
                          circumference: 1.45 * Math.PI,
                          rotation: -3.85,
                          cutoutPercentage: 60,
                          tooltips: false,
                        }}
                      />
                      {this.renderProblemCount(
                        status,
                        scoreStatus,
                        score,
                        problems,
                        completedProblems,
                      )}
                    </div>
                    <div className="chart-row">
                      <div className="chart-col chart-start">&nbsp;</div>
                      <div className="chart-col chart-end">
                        <span className="amount" style={{ color: chartColorMap[status] }}>
                          {problems}
                        </span>
                      </div>
                    </div>
                    <div className="chart-description" style={{ marginTop: "10px" }}>
                      <dl className="dl-horizontal">
                        <dt>Time Est:</dt>
                        <dd>{time_estimate ? timeEstimate : "None"}</dd>
                      </dl>
                      <dl className="dl-horizontal">
                        <dt>Problems:</dt>
                        <dd>{lesson_problems.length}</dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="col s6 d-flex align-items-center">
                  <dl className="row">
                    <Choose>
                      <When condition={false}>
                        <dt></dt>
                        <dd></dd>
                      </When>
                      <Otherwise>
                        <dt style={{ float: "right", clear: "both" }}>Available:</dt>
                        <dd>
                          <time dateTime={dueDate}>{dueDate}</time>
                        </dd>
                      </Otherwise>
                    </Choose>

                    <Choose>
                      <When condition={assigned || status === "Scheduled"}>
                        <dt>No Due Date</dt>
                      </When>
                      <Otherwise>
                        <dt style={{ float: "right", clear: "both" }}>Due:</dt>
                        <dd>
                          <time dateTime={dueDate}>{dueDate}</time>
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
                          <time dateTime={dueDate}>{dueDate}</time>
                        </dd>
                      </Otherwise>
                    </Choose>
                  </dl>
                  <div className="align-self-end">
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
            <div className="card-text">
              <div>
                <Checkbox checked={selected} onChecked={this.props.onChecked} index={this.props.index} type="cardCheckBox" />
              </div>
              <dl className="dl-horizontal">
                <dt>p.{passage}</dt>
                <dd>
                  ({challenge_page} - {practice_page}) (Challenge + Practice)
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

LessonCard.propTypes = {
  lesson: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default LessonCard;
