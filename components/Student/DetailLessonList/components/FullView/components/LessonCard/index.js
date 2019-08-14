import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import ClickOffComponentWrapper from '../../../../../../ClickOffComponentWrapper';
import statusColorMap, {chartColorMap} from '../../../../../DetailWorksheetPage/utils/statusColorMap';
import LessonDetailAnswerSheet from '../../../../../LessonDetailAnswerSheet';

const data = (current, target, status) => ({
  datasets: [{
    data: [current, target - current],
    backgroundColor: [
      chartColorMap[status],
      '#eaeaea',
    ],
  }],
})

const getLessonActivityStatus = (status) => {
  if (status === "Scheduled") {
    return 'card-main card-lesson-detail card-disabled card-assigned card';
  }
  return 'card-main card-lesson-detail card-assigned card';
}

class LessonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
      dropdownIsOpen: false,
      detailModalOpen: false,
    };
  }

  onOpenDetailModal = () => this.setState({detailModalOpen: true})
  onCloseDetailModal = () => this.setState({detailModalOpen: false});
  onSetDropdown = (dropdownIsOpen) => this.setState({ dropdownIsOpen: !dropdownIsOpen });

  onReschedule = (assignDate, assignTime, dueDate, dueTime) => {
    // eslint-disable-next-line no-console
    console.warn('Stubbed out date functionality', assignDate, assignTime, dueDate, dueTime);
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

  renderDropdownOptions = (status) => {
    const { lesson: {assignDate, assignTime, dueDate, dueTime}} = this.props;
    if (status === "Scheduled" || status === 'Assigned'){
      return (
        <React.Fragment>
        <li><a href="#">Reschedule</a></li>
        <li><a href="#!">Unassign</a></li>
        </React.Fragment>
      )
    }
      return (
        <React.Fragment>
        <li><a href="#" onClick={this.onReschedule(assignDate, assignTime, dueDate, dueTime)}>Reschedule</a></li>
        <li><a href="#!" >Mark all Flags Reviewed</a></li>
        <li><a href="#!" >Reset</a></li>
        <li><a href="#!">Unassign</a></li>
        </React.Fragment>
      )
  }

  renderProblemCount = (status, scoreStatus, score, problems, completedProblems) => {
    if (status === "Started") {
      return (
        <span className="chart-value chart-value-column" style={{ bottom: '8px', backgroundColor: chartColorMap[status]}}>
          <span className="chart-count" data-count-up data-start-val="0" data-end-val="4" data-duration="1"><span className="text-small" style={{fontSize: 'x-small'}}>{completedProblems}</span></span>
          <span className="text-small" style={{fontSize: 'xx-small'}}>out of</span> <span className="text-small" style={{fontSize: 'x-small'}}>{problems}</span>
        </span>
      )
    }
    return (
      <span className="chart-value" style={{ height: '50px', width: '50px', bottom: '6px', backgroundColor: chartColorMap[scoreStatus]}}><span data-count-up data-start-val="0" data-end-val="96" data-duration="1"></span>
      <If condition={score !== ""}>
        <span className="percentage">{Math.floor(`${score / problems * 100}`)}%</span>
        </If>
        </span>
    )
  }


  renderAlerts = (flags) => {
    if (flags.length) {
      return (
          <span className="badge-rounded-xs badge red darken-2 white-text"><b className="badge-text">{flags.length}</b> <i className="icon-flag"></i></span>
      )
    }
    return (
      <div className="right-col col s3">&nbsp;</div>
    )
  }

  render() {
    const { dropdownIsOpen } = this.state;
    const {  lesson, lesson: { subject, timeEstimate, status, scoreStatus, score, unit, lessonName, assigned, flags,
      type, problems, completedProblems = '', passage, dueDate,
       availableDate, completionDate, overdue } } = this.props;
    return (
      <React.Fragment>
      <LessonDetailAnswerSheet
        onCloseDetailModal={this.onCloseDetailModal}
        open={this.state.detailModalOpen}
        user={this.props.user}
        lesson={lesson}  />
              <div className="card-main-col col s12 m8 l7 xl5">
        <div className={getLessonActivityStatus(status)}>
          <div className="card-panel" style={{ backgroundColor: '#666', color: '#fff' }}>
            <div className="card-panel-row row">
              <div className="icon-col col s1">
                <i className={this.renderLessonIcon(subject)}></i>
              </div>
              <div className="col s9">
                <div className="card-panel-text center-align">
                  <div className="text-small">{unit}</div>
                  <div className="text-large"><a href="#" onClick={this.onOpenDetailModal}>{lessonName}</a></div>
                </div>
              </div>
              <div className="col s1 right-align">
                <div className="row icons-row">
                  {this.renderAlerts(flags)}
                  <div className="dropdown-block col">
                    <a
                      className='dropdown-trigger btn'
                      href='#'
                      data-target='dropdown01'
                      onClick={() => this.onSetDropdown(dropdownIsOpen)}
                    ><i className="material-icons dots-icon">more_vert</i></a>
                    <If condition={dropdownIsOpen}>
                      <ClickOffComponentWrapper onOuterClick={() => this.onSetDropdown(dropdownIsOpen)}>
                        <ul id='dropdown01' className='dropdown-content dropdown-wide' style={{ display: "block", opacity: '1', transform: 'scaleX(1) scaleY(1)' }}>
                          {this.renderDropdownOptions(status)}
                        </ul>
                      </ClickOffComponentWrapper>
                    </If>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="d-flex sameheight-all row mb-0">
              <div className="col s6">
                <div className="chart-container">
                  <div className="chart-holder" style={{width: '140px', height: '95px'}}>
                        <Doughnut
                          data={completionDate ? () => data(score, problems, scoreStatus) : () => data(completedProblems, problems, status)}
                          height={210}
                          options={{
                            circumference: 1.45 * Math.PI,
                            rotation: -3.85,
                            cutoutPercentage: 60,
                            tooltips: false,
                          }}
                          />
                          {this.renderProblemCount(status, scoreStatus, score, problems, completedProblems)}
                  </div>
                  <div className="chart-row">
                    <div className="chart-col chart-start">&nbsp;</div>
                    <div className="chart-col chart-end">
                      <span className="amount" style={{color: chartColorMap[status]}}>{problems}</span>
                    </div>
                  </div>
                  <div className="chart-description" style={{marginTop: '10px'}}>
                    <dl className="dl-horizontal">
                      <dt>Time Est:</dt>
                      <dd>{timeEstimate}</dd>
                    </dl>
                    <dl className="dl-horizontal">
                      <dt>Problems:</dt>
                      <dd>{problems}</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="col s6 right-align justify-end">
                <dl className="dl-horizontal" style={{marginTop: '20px', marginBottom: '-10px'}}>
                  <dt>Available:</dt>
                  <dd><time dateTime={availableDate}>{availableDate}</time></dd>
                </dl>
                <dl className={overdue ? 'dl-horizontal red-text text-darken-3' : 'dl-horizontal'} style={{marginTop: '13px', marginBottom: '-3px'}}>
                  <Choose>
                    <When condition={!assigned || status === "Scheduled"}>
                      <dt>No Due Date</dt>
                    </When>
                    <Otherwise>
                      <dt>Due:</dt>
                      <dd><time dateTime={dueDate}>{dueDate}</time></dd>
                    </Otherwise>
                  </Choose>
                </dl>
                <If condition={completionDate}>
                <dl className="dl-horizontal">
                  <dt>Completed:</dt>
                  <dd><time dateTime={completionDate}>{completionDate}</time></dd>
                </dl>
                </If>
              <div className="align-self-end">
                <Choose>
                  <When condition={scoreStatus !== ""}>
                    <span className={`badge badge-rounded-md ${statusColorMap[scoreStatus]} white-text`}>{scoreStatus}</span>
                  </When>
                  <Otherwise>
                  <span className={`badge badge-rounded-md ${statusColorMap[status]} white-text`}>{status}</span>
                  </Otherwise>
                </Choose>
              </div>
              </div>
            </div>
          </div>
            <div className="card-text">
              <dl className="dl-horizontal">
                  <dt>p.{passage}</dt>
                  <dd>({type})</dd>
                </dl>
          </div>
        </div>
      </div>
      </React.Fragment>

    );
  }
}

LessonCard.propTypes = {
  lesson: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,

};

export default LessonCard;
