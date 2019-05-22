import React from 'react';
import PropTypes from 'prop-types';

import TableHeader from './components/TableHeader';

import formatTimeEstimate from '../../utils/formatTimeEstimate';
import statusColorMap from '../../utils/statusColorMap';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null,
    };
  }

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  handleDropdownClick = (event, index) => {
    const { dropdownIsOpen } = this.state;
    event.preventDefault();
    if (dropdownIsOpen) {
      return this.onCloseDropdown();
    }
    return this.onSetDropdown(index);
  }

  mapWorksheetRows = () => {
    const { worksheets } = this.props;
    const { dropdownIndex, dropdownIsOpen } = this.state;
    return worksheets.map((worksheet, index) => {
      const { disabled, worksheetName, score, status, problems, timeEstimate, assignDate, dueDate, completed, flags } = worksheet;
      return (
        <div className={disabled ? 'card card-disabled list-table-row' : 'card list-table-row'} key={worksheet.id}>
          <div className="list-table-cell icon-cell">
            <span className="block-icon">
              <i className="icon-sheets-w"></i>
            </span>
          </div>
          <div className="list-table-cell name-cell">
            <div className="card-panel-text truncate">
              <div className="text-large truncate">{worksheetName}</div>
            </div>
          </div>
          <div className="list-table-cell graph-cell">
            {score && (
              <span className={`chart-bar ${statusColorMap[status]} white-text`}>{score}%</span>
            )}
          </div>
          <div className="list-table-cell description-cell">{problems}</div>
          <div className="list-table-cell time-cell">{formatTimeEstimate(timeEstimate)}</div>
          <div className="list-table-cell date-cell"><time dateTime="2019-01-27">{assignDate}</time></div>
          <div className="list-table-cell date-cell"><time dateTime="2019-01-27">{dueDate}</time></div>
          <div className="list-table-cell completed-cell">
            {completed && (
              <React.Fragment>
                {completed} of {problems}
              </React.Fragment>
            )}
          </div>
          <div className="list-table-cell flags-cell">
            {flags.length > 0 && (
              <span className="badge-rounded-xs badge red darken-2 white-text"><b className="badge-text">{flags.length}</b> <i className="icon-flag"></i></span>
            )}
          </div>
          <div className="list-table-cell status-cell">
            <span className={`badge badge-rounded-md ${statusColorMap[status]} white-text`}>{status}</span>
          </div>
          <div className="list-table-cell drop-cell">
            <div className="dropdown-block">
              <a
                href='#'
                data-target='dropdown01'
                className='dropdown-trigger btn'
                onClick={(event) => this.handleDropdownClick(event, index)}
              >
                <i className="material-icons dots-icon">more_vert</i>
              </a>
              <If condition={dropdownIsOpen && dropdownIndex === index}>
                <ul id='dropdown01' className='dropdown-content dropdown-wide' style={{ display: 'block', opacity: '1', transform: 'scaleX(1) scaleY(1)' }}>
                  <li>
                    <a href="#modal_user_edit" className="modal-trigger link-block">View Details</a>
                  </li>
                  <li><a href="#!">Dismiss Flags</a></li>
                  <li><a href="#!">Reset</a></li>
                  <li><a href="#!" className="link-delete">Delete</a></li>
                </ul>
              </If>
            </div>
          </div>
        </div>
      )
    })
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
                <TableHeader />
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
