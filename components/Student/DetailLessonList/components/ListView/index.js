import React from 'react';
import PropTypes from 'prop-types';

// import TableHeader from './components/TableHeader';
import TableHeader from './components/tableHeader';

import formatTimeEstimate from '../../../DetailWorksheetPage/utils/formatTimeEstimate';
import statusColorMap, { chartColorMap } from '../../../DetailWorksheetPage/utils/statusColorMap';
const widthStyle = {
  width: '160px !important',
}
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
    const { lessons } = this.props;
    const { dropdownIndex, dropdownIsOpen } = this.state;
    return lessons.map((lesson, index) => {
      const { lessonName, score, scoreStatus, passage, solvedProblems, subject, status, completionDate, totalProblems, timeEstimate, lessonType, availableDate, dueDate, completed, alerts } = lesson;
      return (
        <div className='card list-table-row' key={lesson.index}>
          <div className="list-table-cell icon-cell">
            <span className="block-icon">
              <i className={this.renderLessonIcon(subject)}></i>
            </span>
          </div>
          <div className="list-table-cell type-cell">
            <div className="card-panel-text truncate">
              <div className="text-large truncate"  id='lessonName'>{lessonName}</div>
            </div>
          </div>
           <div className="list-table-cell graph-cell" style={{marginLeft: '50px'}}>
            {scoreStatus && (
              <span className={`chart-bar ${statusColorMap[scoreStatus]} white-text`}>{score}%</span>
            )}
            </div>
            <div className="list-table-cell status-cell" >
          <Choose>
            <When condition={scoreStatus !== ""}>
            <span className={`badge badge-rounded-md ${statusColorMap[scoreStatus]} white-text`}>{scoreStatus}</span>
            </When>
            <Otherwise>
            <span className={`badge badge-rounded-md ${statusColorMap[status]} white-text`}>{status}</span>
            </Otherwise>
          </Choose>
          </div>
          <div className="list-table-cell type-cell" style={{marginLeft: '10px'}}>{subject}</div>
          <div className="list-table-cell type-cell">p. {passage}</div>
          <div className="list-table-cell date-cell"><time dateTime="2019-01-27">{availableDate}</time></div>
          <div className="list-table-cell dueDate-cell"><time dateTime="2019-01-27">{dueDate}</time></div>
          <div className="list-table-cell completed-cell">{completionDate}
            {/* {completed && (
              <React.Fragment>
                {completionDate}
              </React.Fragment>
            )} */}
            </div>
          <div className="list-table-cell type-cell">
            <div className="card-panel-text truncate">
              <div className="text-large truncate">{lessonType}</div>
            </div>
          </div>
          <div className="list-table-cell flags-cell">
            {alerts.length > 0 && (
              <span className="badge-rounded-xs badge red darken-2 white-text"><b className="badge-text">{alerts.length}</b> <i className="icon-flag"></i></span>
            )}
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

  // eslint-disable-next-line consistent-return
  renderLessonIcon = (subject) => {
    switch (subject) {
      case 'Reading':
        return 'icon-books';
      case 'Writing':
        return 'icon-hands';
      case 'Math':
        return 'icon-calculator';
      default:
        break;
    }
  }

  render() {
    const { lessons } = this.props;
    return (
      <React.Fragment>
        <div className="content-section">
          <div className="container-md">
            <div className="result-row center-align">
              <b className="result"> - {lessons.length} results -</b>
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
        <style jsx>
          {`
           .list-view-section {
             margin: 0 -70px
           }
           .list-table .list-table-cell.type-cell {
             max-width: 12%
           }`}
           </style>
      </React.Fragment>
      
    );
  }
}

ListView.propTypes = {
  lessons: PropTypes.array.isRequired,
}

export default ListView;