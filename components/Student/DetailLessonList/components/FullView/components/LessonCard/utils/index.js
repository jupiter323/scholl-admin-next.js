// RENDERING OPTIONS
export const getProblemCompletionStatusColor = (solvedProblems, totalProblems) => {
  if (solvedProblems / totalProblems <= .25) {
    return { backgroundColor: '#ed1c25' };
  } else if (solvedProblems / totalProblems <= .5) {
    return { backgroundColor: '#a005a5' };
  }
  return { backgroundColor: '#0200fd' };
}

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
}

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

  export const renderDropdownOptions = status => {
    if (status === "Scheduled" || status === "Assigned") {
      return (
        <React.Fragment>
          <li>
            <a href='#'>Reschedule</a>
          </li>
          <li>
            <a href='#!'>Unassign</a>
          </li>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <li>
          <a href='#' onClick={handleAssignLesson}>
            Assign
          </a>
        </li>
        <li>
          {/* <a href="#" onClick={this.onReschedule(assignDate, assignTime, dueDate, dueTime)}> */}
          <a href='#' onClick={handleRescheduleModalOpen}>
            Reschedule
          </a>
        </li>
        <li>
          <a href='#!'>Excuse/Unexcuse Lateness</a>
        </li>
        <li>
          <a href='#!'>Reset</a>
        </li>
        <li>
          <a href='#!'>Mark Flags Reviewed</a>
        </li>
        <li>
          <a href='#!'>Unassign</a>
        </li>
      </React.Fragment>
    );
  };

  export const renderProblemCount = (status, scoreStatus, score, problems, completedProblems) => {
    if (status === "Started") {
      return (
        <span
          className='chart-value chart-value-column'
          style={{ bottom: "8px", backgroundColor: chartColorMap[status] }}
        >
          <span
            className='chart-count'
            data-count-up
            data-start-val='0'
            data-end-val='4'
            data-duration='1'
          >
            <span className='text-small' style={{ fontSize: "x-small" }}>
              {completedProblems}
            </span>
          </span>
          <span className='text-small' style={{ fontSize: "xx-small" }}>
            out of
          </span>{" "}
          <span className='text-small' style={{ fontSize: "x-small" }}>
            {problems}
          </span>
        </span>
      );
    }
    if(status === "notassigned") {
      return
    }
    return (
      <span
        className='chart-value'
        style={{
          height: "50px",
          width: "50px",
          bottom: "6px",
          backgroundColor: chartColorMap[scoreStatus]
        }}
      >
        <span data-count-up data-start-val='0' data-end-val='96' data-duration='1'></span>
        <If condition={score !== ""}>
          {/* <span className='percentage'>{Math.floor(`${(score / problems) * 100}`)}%</span> */}
          <span className='percentage'>{0}%</span>
        </If>
      </span>
    );
  };

  export const renderAlerts = flags => {
    // if (flags.length) {

    if (flags.length) {
      return (
        <span className='badge-rounded-xs badge red darken-2 white-text'>
          <b className='badge-text'>{flags.length}</b> <i className='icon-flag'></i>
        </span>
      );
    }
    return <div className='right-col col s3'>&nbsp;</div>;
  };

// COLOR MAPS
export const statusColorMap = {
  Assigned: 'grey darken-4',
  Overdue: 'grey darken-4',
  Started: 'grey darken-4',
  Scheduled: 'grey',
  Accomplished: 'purple darken-3',
  Beginning: 'red darken-3',
  Exemplary: 'blue accent-4',
  Developing: 'purple',
};

export const chartColorMap = {
  Assigned: '#333',
  Started: "#333",
  Overdue: '#333',
  Scheduled: "#b2b2b2",
  Accomplished: '#7327cc',
  Beginning: '#ed1c24',
  Exemplary: 'rgb(0, 100, 244)',
  Developing: '#c10078',
};
 

