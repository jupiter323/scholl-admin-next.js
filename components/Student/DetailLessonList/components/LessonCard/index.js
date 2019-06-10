import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import ClickOffComponentWrapper from '../../../../ClickOffComponentWrapper';

const data = (current, target) => ({
  datasets: [{
    data: [current, target-current ],
    backgroundColor: [
      getProblemCompletionStatusColor(current, target),
      '#eaeaea',
    ],
  }],
})

const getProblemCompletionStatusColor = (solvedProblems, totalProblems) => {
  if (solvedProblems / totalProblems <= .25) {
    return   '#ed1c25';
  } else if (solvedProblems / totalProblems <= .5) {
    return  '#a005a5' ;
  }
  return '#0200fd';
}

// assigned ? 'card-main card-lesson-detail card-assigned card' : 'card-main card-lesson-detail card'}

const getLessonActivityStatus = (assigned, dueDate) => {
  if (assigned && dueDate) {
    return 'card-main card-lesson-detail card-assigned card';
  }
  if (!assigned && !dueDate) {
    return 'card-main card-lesson-detail card-not-assigned card';
  }
  return 'card-main card-lesson-detail card';
}

class LessonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
      dropdownIsOpen: false,
    };
  }

  onSetDropdown = (dropdownIsOpen) => this.setState({dropdownIsOpen: !dropdownIsOpen});

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

  renderProblemCount = (assigned, totalProblems, solvedProblems) => {
    if (assigned) {
      return (
        <span className="chart-value chart-value-column" style={{bottom: '8px', backgroundColor: getProblemCompletionStatusColor(solvedProblems, totalProblems)}}>
          <span className="chart-count" data-count-up data-start-val="0" data-end-val="4" data-duration="1"><span className="text-large">{solvedProblems}</span></span>
          <span className="text-small">out of</span> <span className="text-large">{totalProblems}</span>
        </span>
      )
    }
    return (
      <span className="chart-value chart-value-column" style={{ bottom: '8px', backgroundColor: '#666' }}>
        <span data-count-up data-start-val="0" data-end-val="0" data-duration="1">
          <span className="text-large">{totalProblems}</span>
          <span className="text-small">problems</span>
        </span>
      </span>
    )
  }

  renderProblemCompletionStatus = (dueTime, completed, completionDate, completionTime, completedLate, availableDate, dueDate, overdue, assigned) => {
    if (completed) {
      return (
        <React.Fragment>
          <p>Completed <time dateTime="2018-11-18T20:43">{completionDate} at {completionTime}</time>
            {completedLate && (<span className="status status-late"> (late)</span>)}
          </p>
        </React.Fragment>
      )
    }
    if (availableDate) {
      return (
        <React.Fragment>
          <p>Available <time dateTime="2018-12-13">{availableDate}</time></p>
          <p><time dateTime="2018-12-17">(due {dueDate})</time></p>
        </React.Fragment>
      )
    }
    if (overdue) {
      return (
        <React.Fragment>
          <strong className="text-large" style={{ color: '#c1272d' }}>Overdue</strong>
        </React.Fragment>
      )
    }
    if (!availableDate && dueDate) {
      return (
        <React.Fragment>
          <p>Due <time dateTime="2018-12-15">{dueDate}</time></p>
        </React.Fragment>
      )
    }
    if (!assigned && !dueDate) {
      return (
        <React.Fragment>
          <p>Not Assigned</p>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <strong className="text-large" style={{ color: '#006837' }}>Due Today at {dueTime}</strong>
      </React.Fragment>
    )
  }

  renderAlerts = (alerts) => {
    if (alerts.length) {
      return (
        <div className="right-col col s3">
          <span className="badge-rounded badge red darken-2 white-text"><b className="badge-text">{alerts.length}</b> <i className="icon-flag"></i></span>
        </div>
      )
    }
    return (
      <div className="right-col col s3">&nbsp;</div>
    )
  }

  render() {
    const { dropdownIsOpen } = this.state;
    const { onDeleteLesson, onCloneLesson, lesson: { subject, unitNumber, lessonName, assigned, alerts,
      lessonType, totalProblems, solvedProblems = '', passage, dueDate, dueTime,
      completed, availableDate, completionDate, completionTime, completedLate, overdue } } = this.props;
    return (
      <div className="card-main-col col s12 m8 l7 xl5">
       <div className={getLessonActivityStatus(assigned, dueDate)}>
         <div className="card-panel" style={{ backgroundColor: '#666', color: '#fff' }}>
           <div className="card-panel-row row">
             <div className="icon-col col s1">
               <i className={this.renderLessonIcon(subject)}></i>
             </div>
             <div className="col s9">
               <div className="card-panel-text center-align">
                 <div className="text-small">{subject} Unit {unitNumber}</div>
                 <div className="text-large">{lessonName}</div>
               </div>
             </div>
             <div className="col s1 right-align">
               <div className="row icons-row">
                 <div className="dropdown-block col">
                   <a
                   className='dropdown-trigger btn'
                   href='#'
                   data-target='dropdown01'
                   onClick={() => this.onSetDropdown(dropdownIsOpen)}
                   ><i className="material-icons dots-icon">more_vert</i></a>
                   <If condition={dropdownIsOpen}>
                     <ClickOffComponentWrapper onOuterClick={() => this.onSetDropdown(dropdownIsOpen)}>
                     <ul id='dropdown01' className='dropdown-content dropdown-wide' style={{display: "block", opacity: '1', transform: 'scaleX(1) scaleY(1)'}}>
                      <li>
                        <a href="#" className="modal-trigger link-block">Edit</a>
                      </li>
                      <li><a href="#!" onClick={onCloneLesson}>Clone</a></li>
                      <li><a href="#!">Show Owner</a></li>
                      <li><a href="#!" onClick={onDeleteLesson}>Delete</a></li>
                    </ul>
                     </ClickOffComponentWrapper>
                </If>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="card-content">
           <div className="card-top-row row mb-0">
             <div className="left-col col s3">
               <span className="meta-num">p.{passage}</span>
             </div>
             <div className="center-col col s6 center-align">
               <span className="meta-name">({lessonType})</span>
             </div>
             {this.renderAlerts(alerts)}
           </div>
           <div className="chart-container chart-container-xlarge">
             <div className="chart-holder">
               <Doughnut
               data={() => data(solvedProblems, totalProblems)}
               height={210}
               options={{
                 circumference: 1.45 * Math.PI,
                 rotation: -3.85,
                 cutoutPercentage: 60,
                 tooltips: false,
               }}
               />
               {this.renderProblemCount(assigned, totalProblems, solvedProblems)}
             </div>
           </div>
           <div className="card-footer-row center-align">
             <div className="card-footer-holder">
               {this.renderProblemCompletionStatus(dueTime, completed, completionDate, completionTime, completedLate, availableDate, dueDate, overdue, assigned)}
             </div>
           </div>
         </div>
       </div>
      </div>
    );
  }
}

LessonCard.propTypes = {
  lesson: PropTypes.object.isRequired,
  onDeleteLesson: PropTypes.func.isRequired,
  onCloneLesson: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default LessonCard;
