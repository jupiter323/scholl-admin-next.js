import React from 'react';
import PropTypes from 'prop-types';

class WorksheetCard extends React.Component {
  handleDropdownClick = (event) => {
    const { onSetDropdown, onCloseDropdown, dropdownIsOpen, index } = this.props;
    event.preventDefault();
    if (dropdownIsOpen) {
      return onCloseDropdown();
    }
    return onSetDropdown(index);
  }

  editWorksheet = () => console.warn('Pending implementation of edit modal/functionality')
  cloneWorksheet = () => console.warn('Pending implementation of clone worksheet functionality')
  showOwner = () => console.warn('Pending implementation of show owner functionality')
  deleteWorksheet = () => console.warn('Pending implementation of delete worksheet functionality')

  render() {
    const { worksheet, selectedWorksheets, handleWorksheetClick, index, dropdownIndex, dropdownIsOpen } = this.props;
    const { title, subject, problems, type, difficulty, timeEstimate, source, classifications } = worksheet;
    return (
      <div className="card-main-col col s12 m8 l7 xl5">
        <div className="card-checkbox">
          <input
            type="checkbox"
            checked={selectedWorksheets.indexOf(worksheet) !== -1}
            onChange={() => handleWorksheetClick(worksheet)}
          />
          <div className="checkbox-card card-main card-lesson-detail card-assigned card">
            <div className="card-panel" style={{ backgroundColor: '#666', color: '#fff' }}>
              <div className="card-panel-row row">
                <div className="icon-col col s2">
                  <span className="block-icon">
                    <i className="icon-sheets-w"></i>
                  </span>
                </div>
                <div className="col s9">
                  <div className="card-panel-text">
                    <div className="text-small">Worksheet ({subject})</div>
                    <div className="text-large">{title}</div>
                  </div>
                </div>
                <div className="align-top col s1 right-align">
                  <div className="row icons-row">
                    <div className="dropdown-block col">
                      <a
                        href='#'
                        className='dropdown-trigger btn'
                        data-target='dropdown_worksheet_01'
                        onClick={this.handleDropdownClick}
                      >
                        <i className="material-icons dots-icon">more_vert</i>
                      </a>
                      <If condition={dropdownIsOpen && dropdownIndex === index}>
                        <ul
                          id='dropdown_worksheet_01'
                          className='dropdown-content dropdown-wide'
                          style={{ display: 'block', transformOrigin: '0px 0px 0px', opacity: '1', transform: 'scaleX(1) scaleY(1)' }}
                        >
                          <li><a href="#" onClick={this.editWorksheet} className="modal-trigger link-block">Edit</a></li>
                          <li><a href="#" onClick={this.cloneWorksheet}>Clone</a></li>
                          <li><a href="#" onClick={this.showOwner}>Show Owner</a></li>
                          <li><a href="#" onClick={this.deleteWorksheet}>Delete</a></li>
                        </ul>
                      </If>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-top-block">
                <div className="d-flex row mb-0">
                  <div className="left-col col s6">
                    <dl className="dl-horizontal">
                      <dt>Problem Type:</dt>
                      <dd>{type}</dd>
                    </dl>
                  </div>
                  <div className="right-col col s6 right-align">
                    <dl className="dl-horizontal">
                      <dt>Diﬃculty:</dt>
                      <dd>{difficulty}</dd>
                    </dl>
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
                      <path fill="none" style={{ strokeWidth: '22', stroke: '#eaeaea' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
                      <path data-dinamic fill="none" style={{ strokeWidth: '22', stroke: '#31837a' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
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
              <div className="card-text">
                <dl className="dl-horizontal">
                  <dt>Worksheet Source:</dt>
                  <dd>{source}</dd>
                </dl>
              </div>
              <div className="card-inner-row">
                <div className="row-holder">
                  <ul className="classification-list">
                    <Choose>
                      <When condition={classifications.length}>
                        {classifications.map(classification => (
                          <li key={classification} className="class-box">{classification}</li>
                        ))}
                      </When>
                      <Otherwise>
                        <li className="empty-box">no classiﬁcation</li>
                      </Otherwise>
                    </Choose>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WorksheetCard.propTypes = {
  index: PropTypes.number,
  dropdownIndex: PropTypes.number,
  worksheet: PropTypes.object.isRequired,
  onSetDropdown: PropTypes.func.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  onCloseDropdown: PropTypes.func.isRequired,
  selectedWorksheets: PropTypes.array.isRequired,
  handleWorksheetClick: PropTypes.func.isRequired,
}

export default WorksheetCard;
