import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

import { data, subjectMap, testSectionCardColorMap, graphColorMap } from '../../../utils/testSectionCardUtils';

class TestSectionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    }
  }

  viewTestSectionDetails = () => console.warn('Pending implementation of view test section details functionality')
  dismissFlags = () => console.warn('Pending implementation of dismiss flags functionality')
  resetTestSection = () => console.warn('Pending implementation of reset test section functionality')
  deleteTestSection = () => console.warn('Pending implementation of delete test section functionality')

  handleDropdownClick = (event) => {
    const { onSetDropdown, onCloseDropdown, dropdownIsOpen, index } = this.props;
    event.preventDefault();
    if (dropdownIsOpen) {
      return onCloseDropdown();
    }
    return onSetDropdown(index);
  }

  renderFlags = () => {
    const { testSection: { flags } } = this.props;
    if (flags.length) {
      return (
        <span className="badge-rounded-xs badge red darken-2 white-text"><b className="badge-text">{flags.length}</b> <i className="icon-flag"></i></span>
      )
    }
    return null;
  }

  render() {
    const { testSection, dropdownIsOpen, dropdownIndex, index } = this.props;
    const { subject, version, availableDate, dueDate, problems, disabled, status, percentageComplete } = testSection;
    return (
      <div className="card-main-col col s12 m8 l7 xl5">
        <div className={disabled ? 'card-main test-card card-disabled card' : 'card-main test-card card'}>
          <div className="card-panel panel-border">
            <div className="card-panel-row row">
              <div className="icon-col col s2">
                <span className="block-icon">
                  <i className="icon-assign-section"></i>
                  <span className="text-icon">Assigned <br />Test Section</span>
                </span>
              </div>
              <div className="col s8">
                <div className="card-panel-text">
                  <div className="text-large truncate">{subjectMap[subject]} Section</div>
                  <div className="text-small truncate">Version: {version}</div>
                </div>
              </div>
              <div className="position-top right-align">
                <div className="icons-row">
                  {this.renderFlags()}
                  <div className="dropdown-block col">
                    <a
                      href='#'
                      data-target='dropdown01'
                      className='dropdown-trigger btn'
                      onClick={this.handleDropdownClick}
                    >
                      <i className="material-icons dots-icon">more_vert</i>
                    </a>
                    <If condition={dropdownIsOpen && dropdownIndex === index}>
                      <ul
                        id='dropdown01'
                        className='dropdown-content dropdown-wide'
                        style={{ display: 'block', transformOrigin: '0px 0px 0px', opacity: '1', transform: 'scaleX(1) scaleY(1)' }}
                      >
                        <li><a href="#" onClick={this.viewTestSectionDetails} className="modal-trigger link-block">View Details</a></li>
                        <li><a href="#" onClick={this.dismissFlags}>Dismiss Flags</a></li>
                        <li><a href="#" onClick={this.resetTestSection}>Reset</a></li>
                        <li><a href="#" onClick={this.deleteTestSection} className="link-delete">Delete</a></li>
                      </ul>
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
                  <div className="chart-holder">
                    <Doughnut
                      data={() => data(percentageComplete, status)}
                      options={{
                        circumference: 1 * Math.PI,
                        rotation: 1 * Math.PI,
                        cutoutPercentage: 60,
                        tooltips: false,
                      }}
                    />
                    <span className="chart-value" style={{ backgroundColor: graphColorMap[status] }}><span data-count-up data-start-val="0" data-end-val="96" data-duration="1"></span><span className="percentage">{percentageComplete}%</span></span>
                  </div>
                  <div className="chart-row">
                    <div className="chart-col chart-start">&nbsp;</div>
                    <div className="chart-col chart-end">
                      <span className="amount" style={{ color: graphColorMap[status] }}>{problems}</span>
                    </div>
                  </div>
                  <div className="chart-description">
                    <dl className="dl-horizontal">
                      <dt>Time Est:</dt>
                      <dd>20 min</dd>
                    </dl>
                    <dl className="dl-horizontal">
                      <dt>Problems:</dt>
                      <dd>{problems}</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="col s6 right-align justify-end">
                <div className="chart-description">
                  <dl className="dl-horizontal">
                    <dt>Available:</dt>
                    <dd><time dateTime="2018-12-15">{availableDate}</time></dd>
                  </dl>
                  <dl className="dl-horizontal">
                    <dt>Due:</dt>
                    <dd><time dateTime="2018-12-15">{dueDate}</time></dd>
                  </dl>
                </div>
                <div className="align-self-end">
                  <span className={testSectionCardColorMap[status]}>{status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TestSectionCard.propTypes = {
  dropdownIndex: PropTypes.number,
  index: PropTypes.number.isRequired,
  onSetDropdown: PropTypes.func.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  onCloseDropdown: PropTypes.func.isRequired,
  testSection: PropTypes.object.isRequired,
}

export default TestSectionCard;
