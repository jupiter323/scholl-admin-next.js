import React from 'react';
import PropTypes from 'prop-types';
import statusColorMap from '../../../../DetailWorksheetPage/utils/statusColorMap';

class LessonListItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      checked: false,
    }
  }

  onToggleChecked = () => this.setState({checked: !this.state.checked}, )

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


  render(){
    const { checked } = this.state;
    const { selectAll, index, lesson: { lessonName, status, assigned, score, scoreStatus, reviewedAlerts, subject, unitNumber, passage, timeEstimate, totalProblems, lessonType, alerts}  } = this.props
    return(
      <div className='card list-table-row' key={index} style={{opacity: assigned ? .5 : 1}}>
      <div className="list-table-cell icon-cell">
      <label htmlFor={index}>
      <input
        type="checkbox"
        id={index}
        checked={!selectAll ? checked : selectAll}
        onChange={this.onToggleChecked}
        className="filled-in"
      />
   <span><b>&nbsp;</b></span>
   </label>
      </div>
      <div className="list-table-cell icon-cell">
        <span className="block-icon">
          <i className={this.renderLessonIcon(subject)}></i>
        </span>
      </div>
      <div className="list-table-cell name-cell" style={{width: '140px'}}>
        <div className="card-panel-text truncate">
          <div className="text-large truncate" id='lessonName'>{subject} Unit #{unitNumber} {lessonName}</div>
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
      <div className="list-table-cell date-cell"style={{paddingLeft: '50px'}}>{totalProblems}</div>

      <div className="list-table-cell name-cell">
        <div className="card-panel-text truncate">
          <div className="text-large truncate" style={{paddingLeft: '70px'}}>{lessonType}</div>
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
  }
}

LessonListItem.propTypes = {
  index: PropTypes.number.isRequired,
  lesson: PropTypes.array.isRequired,
  selectAll: PropTypes.bool.isRequired,
}

export default LessonListItem;