import React from 'react';
import PropTypes from 'prop-types';
import statusColorMap from '../../../DetailWorksheetPage/utils/statusColorMap';
import Portal from '../../../../Portal';
import LessonListItem from './components/LessonListItem';

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
      checked: false,
      checkedLessons: [],
    }
  }

  onToggleChecked = () => this.setState({checked: !this.state.checked})
  
  mapLessonListItem = () => {
    const { lessons } = this.state;
    return lessons.map((lesson, index) =>
    <LessonListItem
      lesson={lesson}
      index={index}
      selectAll={this.state.checked}
      addCheckedLessons={this.addCheckedLessons}/>
    )
  }

  // addCheckedLessons = (lesson) => {
  //   this.setState(prevState => {
  //     prevState.checkedLessons.push(lesson);
  //     return { checkedLessons: prevState.checkedLessons}
  //   })
  // }

   
  renderTableHeader = () => (
    <div className="list-table-row">
<div className="list-table-cell icon-cell">
<label htmlFor="selectAll">
          <input
            type="checkbox"
            id="selectAll"
            defaultChecked={this.state.checked}
            onChange={this.onToggleChecked}
            className="filled-in"
          />
       <span><b>&nbsp;</b></span>
       </label>
      </div>   
       <div className="list-table-cell name-cell"  value="lessonName">
      <a
      href="#"
      // onClick={() => this.setSortType("lessonName")}
      >
        <b>Lesson</b>
        </a>
        </div>
    <div className="list-table-cell completed-cell"><a
      href="#"
      // onClick={() => this.setSortType("status")}
      >
        <b>Status</b>
        </a>
        </div>
    <div className="list-table-call completed-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    <div className="list-table-cell completed-cell" style={{marginLeft: '5px'}}><a
      href="#"
      // onClick={() => this.setSortType("subject")}
      >
        <b>Subject</b>
        </a>
        </div>
    <div className="list-table-cell completed-cell" >
    <a
      href="#"
      // onClick={() => this.setSortType("passage")}
      ><b>Page</b>
      </a></div>
    <div className="list-table-cell date-cell"><a
      href="#"
      // onClick={() => this.setSortType("availableDate")}
      >
        <b>Time Est</b>
        </a>
        </div>
    <div className="list-table-cell type-cell" style={{marginLeft: '13px', paddingLeft: '-1px'}}><a
      href="#"
      // onClick={() => this.setSortType("dueDate")}
      >
        <b>Problems</b>
        </a>
        </div>
    
    <div className="list-table-cell completed-cell"><a
      href="#"
      // onClick={() => this.setSortType("lessonType")}
      >
        <b>Type</b>
        </a>
        </div>
    <div className="list-table-cell flags-cell"><b>&nbsp;</b></div>
    <div className="list-table-cell flags-cell"><b>&nbsp;</b></div>

    <div className="list-table-cell flags-cell"><a
      href="#"
      // onClick={() => this.setSortType("alerts")}
      >
        <b>Flags</b>
        </a>
        </div>
  </div>
  )
  

  render() {
    const { lessons} = this.state;
    const {open} = this.props;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <div id="assign-lesson-modal" className="modal modal-custom">
            <div className="title-row card-panel" id="assign-lessons-header">
            <div className="mobile-header">
            </div>
            <h2 className="h1 white-text">
              <span className="heading-holder">
                <i className="icon-books"></i>
                <span className="heading-block">Assign Lessons</span>
              </span>
            </h2>
          </div>
              <div className="content-section">
                <div className="container-md">
            <div className="result-row center-align">
              <b className="result"> - {lessons.length} Lessons</b>
            </div>
         
            <div className="list-view-section" style={{ margin: '0 -160px' }}>
              <div className="list-table">
                <div className="list-table-header">
                  {this.renderTableHeader()}
                </div>
                <div className="list-table-body">

                  {this.mapLessonListItem()}
                </div>
              </div>
              </div>
              </div>
              </div>
        </div>
        <a href="#" className="waves-effect waves-teal btn add-btn modal-trigger"><i className="material-icons">add</i>Assign Selected</a>
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
            #assign-lesson-modal {
              border-radius: 6px;
              
            }
            .modal {
              display: block;
              background-color: white;
              position: absolute;
              top: 20%;
              right: 0%;
              left: 13%;
              box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
            }
            .modal-footer {
              background-color: white;
            }
            .modal-custom {
              opacity: 1;
              visibility: visible;
              max-width: 1280px !important;
            }
            #assign-lessons-header {
              background: rgb(24,181,233) !important
              background: linear-gradient(90deg, rgba(24,181,233,1) 0%, rgba(8,107,140,1) 100%) !important;
            }
          `}
        </style>
      </Portal>
          )
  }
}

  AssignLessonModal.propTypes = {
    lessons: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
  }
  export default AssignLessonModal