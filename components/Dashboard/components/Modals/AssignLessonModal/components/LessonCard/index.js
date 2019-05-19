import React from 'react';
import PropTypes from 'prop-types';

class LessonCard extends React.Component {
  handleDropdownClick = (event) => {
    const { onSetDropdown, onCloseDropdown, dropdownIsOpen, index } = this.props;
    event.preventDefault();
    if (dropdownIsOpen) {
      return onCloseDropdown();
    }
    return onSetDropdown(index);
  }

  editLesson = () => console.warn('Pending implementation of edit modal/functionality')
  cloneLesson = () => console.warn('Pending implementation of clone lesson functionality')
  showOwner = () => console.warn('Pending implementation of show owner functionality')
  deleteLesson = () => console.warn('Pending implementation of delete lesson functionality')

  render() {
    const { lesson, selectedLessons, handleLessonClick, index, dropdownIndex, dropdownIsOpen } = this.props;
    const { unit, title, subject, timeEstimate, problems, pageNumber, type } = lesson;
    return (
      <div className="card-main-col col s12 m8 l7 xl5">
        <div className="card-checkbox">
          <input
            type="checkbox"
            checked={selectedLessons.indexOf(lesson) !== -1}
            onChange={() => handleLessonClick(lesson)}
          />
          <div className="checkbox-card card-main card-lesson-detail card-assigned card">
            <div className="card-panel" style={{ backgroundColor: '#666', color: '#fff' }}>
              <div className="card-panel-row row">
                <div className="icon-col col s2">
                  <span className="block-icon">
                    <i className="icon-books-l"></i>
                    <span className="text-icon">Lesson</span>
                  </span>
                </div>
                <div className="col s9">
                  <div className="card-panel-text">
                    <div className="text-small">{unit}</div>
                    <div className="text-large">{title}</div>
                    <div className="text-small">Subject: {subject}</div>
                  </div>
                </div>
                <div className="align-top col s1 right-align">
                  <div className="row icons-row">
                    <div className="dropdown-block col">
                      <a
                        href='#'
                        className='dropdown-trigger btn'
                        data-target='dropdown_lesson_01'
                        onClick={this.handleDropdownClick}
                      >
                        <i className="material-icons dots-icon">more_vert</i>
                      </a>
                      <If condition={dropdownIsOpen && dropdownIndex === index}>
                        <ul
                          id='dropdown_lesson_01'
                          className='dropdown-content dropdown-wide'
                          style={{ display: 'block', transformOrigin: '0px 0px 0px', opacity: '1', transform: 'scaleX(1) scaleY(1)' }}
                        >
                          <li><a href="#" onClick={this.editLesson} className="modal-trigger link-block">Edit</a></li>
                          <li><a href="#" onClick={this.cloneLesson}>Clone</a></li>
                          <li><a href="#" onClick={this.showOwner}>Show Owner</a></li>
                          <li><a href="#" onClick={this.deleteLesson}>Delete</a></li>
                        </ul>
                      </If>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="chart-container">
                <div className="chart-holder">
                  <span className="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 0}' data-duration="1">
                    {/* <!-- do not change path attribute "d" !!! --> */}
                    <svg  width="110px" height="110px" viewBox=" 0 0 110 110">
                      <path fill="none" style={{ strokeWidth: '22', stroke: '#d6d6d6' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
                      <path data-dinamic fill="none" style={{ strokeWidth: '22', stroke: '#62b771' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
                    </svg>
                  </span>
                  <span className="chart-value" style={{ backgroundColor: '#4d4d4d' }}></span>
                </div>
                <div className="chart-description">
                  <dl className="dl-horizontal">
                    <dt>Time Est:</dt>
                    <dd>{timeEstimate} min</dd>
                  </dl>
                  <dl className="dl-horizontal">
                    <dt>Problems:</dt>
                    <dd>{problems}</dd>
                  </dl>
                </div>
              </div>
              <div className="card-footer-row center-align">
                <div className="card-footer-holder">
                  <p>p.{pageNumber}  ({type})</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

LessonCard.propTypes = {
  index: PropTypes.number,
  dropdownIndex: PropTypes.number,
  lesson: PropTypes.object.isRequired,
  onSetDropdown: PropTypes.func.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  onCloseDropdown: PropTypes.func.isRequired,
  selectedLessons: PropTypes.array.isRequired,
  handleLessonClick: PropTypes.func.isRequired,
}

export default LessonCard;
