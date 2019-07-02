import React from 'react';
import PropTypes from 'prop-types';
import statusColorMap from '../../../DetailWorksheetPage/utils/statusColorMap';
import Portal from '../../../../Portal';

const TableHeader = () => (
  <div className="list-table-header">
    <div className="list-table-row">
      <div className="list-table-cell icon-cell">
        <label>
          <input
            type="checkbox"
            id="selectAll"
            checked="false"
            onChange=""
          />
        </label>
      </div>
      <div className="list-table-cell icon-cell">&nbsp;</div>
      <div className="list-table-cell name-cell" style={{ marginRight: '55px' }}><b>Lesson</b></div>
      {/* <div className="list-table-cell drop-cell">&nbsp;</div> */}
      <div className="list-table-cell completed-cell"><b>Status</b></div>
      <div className="list-table-cell completed-cell" style={{ marginLeft: '30px' }}><b>Subject</b></div>
      <div className="list-table-cell page-cell"><b>Page</b></div>
      <div className="list-table-cell date-cell" style={{ marginLeft: '15px' }}><b>Time Est</b></div>
      <div className="list-table-cell dueDate-cell"><b>Problems</b></div>
      <div className="list-table-cell completed-cell"><b>Type</b></div>
      <div className="list-table-cell flags-cell"><b>&nbsp;</b></div>
      <div className="list-table-cell flags-cell"><b>Flags</b></div>
    </div>
  </div>
);

class AssignLessonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: this.props.lessons,
      assignedFilters: [],
      subjectFilters: [],
      problemTypeFilters: [],
      sort: "",
      nameFilter: "",
      unitFilter: "",
    }
  }

  mapLessons = () => {
    const { lessons } = this.state;
    return lessons.map((lesson, index) => {
      const { lessonName, score, scoreStatus, reviewedAlerts, subject, passage, timeEstimate, totalProblems, lessonType, alerts } = lesson
      return (
        <div className='card list-table-row' key={lesson.index}>
          <div className="list-table-cell icon-cell">
            <label htmlFor={index}>
              <input
                type="checkbox"
                id={index}
                checked="false"
                onChange=""
              />
            </label>
          </div>
          <div className="list-table-cell icon-cell">
            <span className="block-icon">
              <i className={this.renderLessonIcon(subject)}></i>
            </span>
          </div>
          <div className="list-table-cell type-cell">
            <div className="card-panel-text truncate">
              <div className="text-large truncate" id='lessonName'>{lessonName}</div>
            </div>
          </div>
          <div className="list-table-cell graph-cell" style={{ marginLeft: '50px' }}>
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
          <div className="list-table-cell type-cell" style={{ marginLeft: '10px' }}>{subject}</div>
          <div className="list-table-cell type-cell">p. {passage}</div>
          <div className="list-table-cell date-cell">{timeEstimate}</div>
          <div className="list-table-cell date-cell">{totalProblems}</div>

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
        </div>
      )
    })
  }

  render() {
    const { lessons, open} = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <div id="modal_assign_lessons" className=" modal modal-custom">
              
            <div className="result-row center-align">
              <b className="result"> - {lessons.length}</b>
            </div>
            <TableHeader />
            <div className="list-view-section" style={{ margin: '0 -160px' }}>
              <div className="list-table">
                <div className="list-table-header">
                  {this.mapLessons()}
                </div>
              </div>
              </div>
           
        </div>
        <a href="#" className="waves-effect waves-teal btn add-btn"><i className="material-icons">add</i>Assign Selected</a>
          </div>
        )}
         <style jsx>
          {`
            .overlay {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 999;
            }
            .card-modal {
              margin: 0;
              border-radius: 6px;
            }
            #modal_assing_lessons {
              border-radius: 6px;
            }
            .modal {
              display: block;
              background-color: white;
              position: absolute;
              top: 10%;
              right: 10%;
              left: 10%;
              box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
            }
            .modal-custom {
              opacity: 1;
              visibility: visible;
            }
            .modal-footer {
              background-color: white;
            }
          `}
        </style>
      </Portal>
          )
  }
}

  AssignLessonModal.propTypes = {
    lessons: PropTypes.array.isRequired,
  }
  export default AssignLessonModal