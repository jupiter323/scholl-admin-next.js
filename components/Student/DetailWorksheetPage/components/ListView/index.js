import React from 'react';
import PropTypes from 'prop-types';

const statusColorMap = {
  Assigned: 'grey darken-4',
  Accomplished: 'purple darken-3',
  Beginning: 'red darken-3',
  Exemplary: 'blue accent-4',
  Developing: 'purple',
}

const formatTimeEstimate = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  return (
    <React.Fragment>
      { hours !== 0 && (
        <React.Fragment>
          {hours} hrs
        </React.Fragment>
      )}
      { minutes !== 0 && (
        <React.Fragment>
          {minutes} min
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  mapWorksheetRows = () => {
    const { worksheets } = this.props;
    return worksheets.map(worksheet => (
      <div className={worksheet.disabled ? 'card card-disabled list-table-row' : 'card list-table-row'}>
        <div className="list-table-cell icon-cell">
          <span className="block-icon">
            <i className="icon-sheets-w"></i>
          </span>
        </div>
        <div className="list-table-cell name-cell">
          <div className="card-panel-text truncate">
            <div className="text-large truncate">{worksheet.worksheetName}</div>
          </div>
        </div>
        <div className="list-table-cell graph-cell">
          {worksheet.score && (
            <span className={`chart-bar ${statusColorMap[worksheet.status]} white-text`}>{worksheet.score}%</span>
          )}
        </div>
        <div className="list-table-cell description-cell">{worksheet.problems}</div>
        <div className="list-table-cell time-cell">{formatTimeEstimate(worksheet.timeEstimate)}</div>
        <div className="list-table-cell date-cell"><time dateTime="2019-01-27">{worksheet.assignDate}</time></div>
        <div className="list-table-cell date-cell"><time dateTime="2019-01-27">{worksheet.dueDate}</time></div>
        <div className="list-table-cell completed-cell">{worksheet.completed}</div>
        <div className="list-table-cell flags-cell">
          {worksheet.flags.length > 0 && (
            <span className="badge-rounded-xs badge red darken-2 white-text"><b className="badge-text">{worksheet.flags.length}</b> <i className="icon-flag"></i></span>
          )}
        </div>
        <div className="list-table-cell status-cell">
          <span className={`badge badge-rounded-md ${statusColorMap[worksheet.status]} white-text`}>{worksheet.status}</span>
        </div>
        <div className="list-table-cell drop-cell">
          <div className="dropdown-block">
            {/* <!-- Dropdown Trigger --> */}
            <a className='dropdown-trigger btn' href='#' data-target='dropdown01'><i className="material-icons dots-icon">more_vert</i></a>
            {/* <!-- Dropdown Structure --> */}
            <ul id='dropdown01' className='dropdown-content dropdown-wide'>
              <li>
                {/* <!-- Modal Trigger --> */}
                <a href="#modal_user_edit" className="modal-trigger link-block">View Details</a>
              </li>
              <li><a href="#!">Dismiss Flags</a></li>
              <li><a href="#!">Reset</a></li>
              <li><a href="#!" className="link-delete">Delete</a></li>
            </ul>
          </div>
        </div>
      </div>
    ))
  }

  render() {
    const { worksheets } = this.props;
    return (
      <React.Fragment>
        <div className="content-section">
          <div className="container-md">
            <div className="result-row center-align">
              <b className="result"> - {worksheets.length} results -</b>
            </div>
            <div className="list-view-section">
              <div className="list-table">
                <div className="list-table-header">
                  <div className="list-table-row">
                    <div className="list-table-cell icon-cell">&nbsp;</div>
                    <div className="list-table-cell name-cell"><b>Worksheet</b></div>
                    <div className="list-table-cell graph-cell"><b>Score</b></div>
                    <div className="list-table-cell description-cell"><b>Problems</b></div>
                    <div className="list-table-cell time-cell"><b>Time Est</b></div>
                    <div className="list-table-cell date-cell"><b>Assign</b></div>
                    <div className="list-table-cell date-cell"><b>Due</b></div>
                    <div className="list-table-cell completed-cell"><b>Completed</b></div>
                    <div className="list-table-cell flags-cell"><b>Flags</b></div>
                    <div className="list-table-cell status-cell"><b>Status</b></div>
                    <div className="list-table-cell drop-cell">&nbsp;</div>
                  </div>
                </div>
                <div className="list-table-body">
                  {this.mapWorksheetRows()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ListView.propTypes = {
  worksheets: PropTypes.array.isRequired,
}

export default ListView;
