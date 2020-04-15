// RENDERING OPTIONS
export const getProblemCompletionStatusColor = (solvedProblems, totalProblems) => {
  if (solvedProblems / totalProblems <= 0.25) {
    return { backgroundColor: '#ed1c25' };
  } else if (solvedProblems / totalProblems <= 0.5) {
    return { backgroundColor: '#a005a5' };
  }
  return { backgroundColor: '#0200fd' };
};

export const getLessonActivityStatus = (assigned, dueDate) => {
  // if ("assigned && dueDate") {
  if (assigned === "assigned") {
    return 'card-main card-lesson-detail card-assigned card';
  }
  // if (!assigned && !dueDate) {
  if (assigned === "notassigned") {
    return 'card-main card-lesson-detail card-not-assigned card';
  }
  return 'card-main card-lesson-detail card';
};

// eslint-disable-next-line consistent-return
export const renderLessonIcon = subject => {
  switch (subject) {
    case "Reading":
      return "icon-books";
    case "Writing and Language":
      return "icon-hands";
    case "Math":
      return "icon-calculator";
    default:
      break;
  }
};

export const renderDropdownOptions = (status, handleAssignLesson, handleRescheduleModalOpen) => {
  if (status === "SCHEDULED" || status === "ASSIGNED") {
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
        <a href="#" onClick={handleAssignLesson}>
            Assign
        </a>
      </li>
      <li>
        {/* <a href="#" onClick={this.onReschedule(assignDate, assignTime, dueDate, dueTime)}> */}
        <a href="#" onClick={handleRescheduleModalOpen}>
            Reschedule
        </a>
      </li>
      <li>
        <a href="#!">Excuse/Unexcuse Lateness</a>
      </li>
      <li>
        <a href="#!">Reset</a>
      </li>
      <li>
        <a href="#!">Mark Flags Reviewed</a>
      </li>
      <li>
        <a href="#!">Unassign</a>
      </li>
    </React.Fragment>
  );
};

export const renderProblemCount = (status, scoreStatus, score, problems, completedProblems) => {
  if (status === "STARTED") {
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
  if (status === "ASSIGNED") {
    return (
      <span
        className="chart-value chart-value-column"
        style={{ bottom: "8px", border: `2px solid ${chartColorMap[status]}`, backgroundColor: 'white' }}
      ></span>
    );
  }
  if (status === "OVERDUE") {
    return (
      <span
        className="chart-value chart-value-column"
        style={{ bottom: "8px", border: `2px solid red`, backgroundColor: 'white' }}
      ></span>
    );
  }
  if (typeof status === "number") return;
  // const percentage = Math.floor(score / problems) * 100;
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
        <span className="percentage">{score || 0}%</span>
        {/* <span className='percentage'>{0}%</span> */}
      </If>
    </span>
  );
};

export const renderAlerts = flags => {
  // if (flags.length) {

  if (flags.length) {
    return (
      <span className="badge-rounded-xs badge red darken-2 white-text">
        <b className="badge-text">{flags.length}</b> <i className="icon-flag"></i>
      </span>
    );
  }
  return <div className="right-col col s3">&nbsp;</div>;
};

// COLOR MAPS
export const statusColorMap = {
  ASSIGNED: 'grey darken-4',
  OVERDUE: 'grey darken-4',
  STARTED: 'grey darken-4',
  SCHEDULED: 'grey',
  ACCOMPLISHED: 'purple darken-3',
  BEGINNING: 'red darken-3',
  EXEMPLARY: 'blue accent-4',
  DEVELOPING: 'purple',
};

export const chartColorMap = {
  ASSIGNED: '#333',
  STARTED: "#333",
  OVERDUE: '#fff',
  SCHEDULED: "#b2b2b2",
  ACCOMPLISHED: '#7327cc',
  BEGINNING: '#ed1c24',
  EXEMPLARY: 'rgb(0, 100, 244)',
  DEVELOPING: '#c10078',
  GREAT: '#74b287',
  ABOVE_AVERAGE: 'a9c466',
  AVERAGE: 'd8c539',
  BELOW_AVERAGE: 'e89258',
  POOR: '#f27c7c',
};

export const gradeColorMap = {
  GREAT: '#74b287',
  ABOVE_AVERAGE: 'a9c466',
  AVERAGE: 'd8c539',
  BELOW_AVERAGE: 'e89258',
  POOR: '#f27c7c',
};

