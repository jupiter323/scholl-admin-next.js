import React from 'react';
import PropTypes from 'prop-types';
import statusColorMap from '../../../../DetailWorksheetPage/utils/statusColorMap';
import LessonDetailAnswerSheet from '../../../../LessonDetailAnswerSheet';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailModalOpen: false,
    };
  }

  onOpenDetailModal = () => this.setState({ detailModalOpen: true })
  onCloseDetailModal = () => this.setState({ detailModalOpen: false });


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

  renderDropdownOptions = (status) => {
    if (status === "Scheduled" || status === 'Assigned') {
      return (
        <React.Fragment>
          <li><a href="#">Reschedule</a></li>
          <li><a href="#!">Unassign</a></li>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <li><a href="#">Reschedule</a></li>
        <li><a href="#!" >Mark all Flags Reviewed</a></li>
        <li><a href="#!">Reset</a></li>
        <li><a href="#!">Unassign</a></li>
      </React.Fragment>
    );
  }


  render() {
    const { lessonName, score, scoreStatus, passage, reviewedAlerts, overdue, subject, status, completionDate, problems, type, availableDate, dueDate, flags } = this.props.lesson;
    const { dropdownIndex, lesson, dropdownIsOpen, index, user, handleDropdownClick } = this.props;
    return (
      <React.Fragment>
        <LessonDetailAnswerSheet
          onCloseDetailModal={this.onCloseDetailModal}
          open={this.state.detailModalOpen}
          user={user}
          lesson={lesson}
        />
        <div className="card list-table-row" key={index}>
          <div className="list-table-cell icon-cell">
            <span className="block-icon">
              <i className={this.renderLessonIcon(subject)}></i>
            </span>
          </div>
          <div className="list-table-cell type-cell">
            <div className="card-panel-text truncate">
              <div className="text-large truncate" id="lessonName"><a href="#" onClick={this.onOpenDetailModal}>{lessonName}</a></div>
            </div>
          </div>
          <div className="list-table-cell graph-cell" style={{ marginLeft: '50px' }}>
            {scoreStatus && (
              <span className={`chart-bar ${statusColorMap[scoreStatus]} white-text`}>{Math.floor(`${score / problems * 100}`)}%</span>
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
          <div className="list-table-cell type-cell" style={{ marginLeft: '10px' }}>{subject}</div>
          <div className="list-table-cell type-cell">p. {passage}</div>
          <div className="list-table-cell date-cell"><time dateTime="2019-01-27">{availableDate}</time></div>
          <div className="list-table-cell dueDate-cell" style={{ color: overdue ? "#db1b29" : "" }}><time dateTime="2019-01-27">{dueDate}</time></div>
          <div className="list-table-cell completed-cell">{completionDate}
            {/* {completed && (
            <React.Fragment>
              {completionDate}
            </React.Fragment>
          )} */}
          </div>
          <div className="list-table-cell name-cell">
            <div className="card-panel-text truncate">
              <div className="text-large truncate">{type}</div>
            </div>
          </div>
          <div className="list-table-cell graph-cell">
            {reviewedAlerts.length > 0 && (
              <span className="badge-rounded-xs badge grey darken-1 white-text"><b className="badge-text">{reviewedAlerts.length}</b> <i className="icon-flag"></i></span>
            )}
          </div>
          <div className="list-table-cell flags-cell">
            {flags.length > 0 && (
              <span className="badge-rounded-xs badge red darken-2 white-text"><b className="badge-text">{flags.length}</b> <i className="icon-flag"></i></span>
            )}
          </div>

          <div className="list-table-cell drop-cell">
            <div className="dropdown-block">
              <a
                href="#"
                data-target="dropdown01"
                className="dropdown-trigger btn"
                onClick={(event) => handleDropdownClick(event, index)}
              >
                <i className="material-icons dots-icon">more_vert</i>
              </a>
              <If condition={dropdownIsOpen && dropdownIndex === index}>
                <ul id="dropdown01" className="dropdown-content dropdown-wide" style={{ display: 'block', opacity: '1', transform: 'scaleX(1) scaleY(1)' }}>
                  {this.renderDropdownOptions(status)}
                </ul>
              </If>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ListItem.propTypes = {
  lesson: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  dropdownIndex: PropTypes.number.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  handleDropdownClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,

};

export default ListItem;
