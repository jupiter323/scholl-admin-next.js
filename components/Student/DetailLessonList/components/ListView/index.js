import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

// import TableHeader from './components/TableHeader';
// import TableHeader from './components/tableHeader';
import statusColorMap, { chartColorMap } from '../../../DetailWorksheetPage/utils/statusColorMap';

const TableHeader = () => (
  <div className="list-table-header">
    <div className="list-table-row">
      <div className="list-table-cell icon-cell">&nbsp;</div>
      <div className="list-table-cell name-cell" style={{marginRight: '55px'}}><b>Lesson</b></div>
      {/* <div className="list-table-cell drop-cell">&nbsp;</div> */}
      <div className="list-table-cell completed-cell"><b>Status</b></div>
      <div className="list-table-cell completed-cell" style={{marginLeft: '30px'}}><b>Subject</b></div>
      <div className="list-table-cell page-cell"><b>Page</b></div>
      <div className="list-table-cell date-cell" style={{marginLeft: '15px'}}><b>Date</b></div>
      <div className="list-table-cell dueDate-cell"><b>Due</b></div>
      <div className="list-table-cell completed-cell"><b>Completed</b></div>
      <div className="list-table-cell completed-cell"><b>Type</b></div>
      <div className="list-table-cell flags-cell"><b>&nbsp;</b></div>
      <div className="list-table-cell flags-cell"><b>Flags</b></div>
      <div className="list-table-cell drop-cell">&nbsp;</div>
    </div>
  </div>
);

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null,
      }
  }


  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  setSortType = (name) => {
    console.log('clicked', name)
    const { onSetSort, sort } = this.props;
    if (sort !== `${name}Ascending` && sort !== `${name}Descending`){
      onSetSort(`${name}Ascending`)
    }
    if (sort === `${name}Descending` ) {
      onSetSort(`${name}Ascending`)
    }
    else {
      onSetSort(`${name}Descending`)
    } 

    // () => onSetSort(`${name}Ascending`)
  }
  


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
      const { lessonName, score, scoreStatus, passage, reviewedAlerts, solvedProblems, subject, status, completionDate, totalProblems, timeEstimate, lessonType, availableDate, dueDate, completed, alerts } = lesson;
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
              <span className={`chart-bar ${statusColorMap[scoreStatus]} white-text`}>{Math.floor(`${score / totalProblems * 100}`)}%</span>
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
          <div className="list-table-cell dueDate-cell" style={{color: lesson.overdue ? "#db1b29" : ""}}><time dateTime="2019-01-27">{dueDate}</time></div>
          <div className="list-table-cell completed-cell">{completionDate}
            {/* {completed && (
              <React.Fragment>
                {completionDate}
              </React.Fragment>
            )} */}
            </div>
          <div className="list-table-cell name-cell">
            <div className="card-panel-text truncate">
              <div className="text-large truncate">{lessonType}</div>
            </div>
          </div>
          <div className="list-table-cell graph-cell">
            {reviewedAlerts.length > 0 && (
              <span className="badge-rounded-xs badge grey darken-1 white-text"><b className="badge-text">{reviewedAlerts.length}</b> <i className="icon-flag"></i></span>
            )}
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
              {/* <b className="result"> - {lessons.length} results -</b> */}
            </div>
            <div className="list-view-section" style={{margin: '0 -160px'}}>
              <div className="list-table">
              <div className="list-table-header">
                <div className="list-table-row">
                  <div className="list-table-cell icon-cell">&nbsp;</div>
                  <div className="list-table-cell name-cell" style={{marginRight: '55px'}} value="lessonName">
                    <a
                    href="#"
                    onClick={() => this.setSortType("lessonName")}
                    >
                      <b>Lesson</b>
                      </a>
                      </div>
                  {/* <div className="list-table-cell drop-cell">&nbsp;</div> */}
                  <div className="list-table-cell completed-cell"><a
                    href="#"
                    onClick={() => this.setSortType("status")}
                    >
                      <b>Status</b>
                      </a>
                      </div>
                  <div className="list-table-cell completed-cell" style={{marginLeft: '5px'}}><a
                    href="#"
                    onClick={() => this.setSortType("subject")}
                    >
                      <b>Subject</b>
                      </a>
                      </div>
                  <div className="list-table-cell page-cell" style={{paddingRight: '82px  '}}>
                  <a
                    href="#"
                    onClick={() => this.setSortType("passage")}
                    ><b>Page</b>
                    </a></div>
                  <div className="list-table-cell date-cell" style={{marginLeft: '-53px'}}><a
                    href="#"
                    onClick={() => this.setSortType("availableDate")}
                    >
                      <b>Date</b>
                      </a>
                      </div>
                  <div className="list-table-cell dueDate-cell" style={{marginLeft: '13px', paddingLeft: '-1px'}}><a
                    href="#"
                    onClick={() => this.setSortType("dueDate")}
                    >
                      <b>Due Date</b>
                      </a>
                      </div>
                  <div className="list-table-cell completed-cell"><a
                    href="#"
                    onClick={() => this.setSortType("completionDate")}
                    >
                      <b>Complete</b>
                      </a>
                      </div>
                  <div className="list-table-cell completed-cell"><a
                    href="#"
                    onClick={() => this.setSortType("lessonType")}
                    >
                      <b>Type</b>
                      </a>
                      </div>
                  <div className="list-table-cell flags-cell"><b>&nbsp;</b></div>
                  <div className="list-table-cell flags-cell"><a
                    href="#"
                    onClick={() => this.setSortType("alerts")}
                    >
                      <b>Flags</b>
                      </a>
                      </div>
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
        <style jsx>
          {`
           #nameCell {
             width: 140px;
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
  onSetSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
}

export default ListView;