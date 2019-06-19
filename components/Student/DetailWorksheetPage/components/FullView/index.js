import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

import formatTimeEstimate from '../../utils/formatTimeEstimate';
import statusColorMap, { chartColorMap } from '../../utils/statusColorMap';

const data = (percentage, status) => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: [
      chartColorMap[status],
      '#eaeaea',
    ],
  }],
});

class FullView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null,
    }
  }

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  handleDropdownClick = (event, index) => {
    const { dropdownIsOpen } = this.state;
    event.preventDefault();
    if (dropdownIsOpen) {
      return this.onCloseDropdown();
    }
    return this.onSetDropdown(index);
  }

  mapWorksheetCards = () => {
    const { worksheets, onToggleDetailModalOpen } = this.props;
    const { dropdownIndex, dropdownIsOpen } = this.state;
    return worksheets.map((worksheet, index) => {
      const { disabled, worksheetName, worksheetSource, subject, problemType, difficulty, score, status, problems, timeEstimate, availableDate, dueDate, classifications, flags, late } = worksheet;
      return (
        <div className="card-main-col col s12 m8 l7 xl5" key={worksheet.id}>
          <div className={disabled ? 'card-main work-card card-disabled card' : 'card-main work-card card'}>
            <div className="card-panel panel-border">
              <div className="card-panel-row row">
                <div className="icon-col col s2">
                  <span className="block-icon">
                    <i className="icon-sheets-w"></i>
                  </span>
                </div>
                <div className="col s8">
                  <div className="card-panel-text">
                    <div className="text-small truncate">Worksheet ({subject})</div>
                    <div className="text-large truncate">{worksheetName}</div>
                  </div>
                </div>
                <div className="position-top right-align">
                  <div className="icons-row">
                    {flags.length > 0 && (
                      <span className="badge-rounded-xs badge red darken-2 white-text">
                        <b className="badge-text">{flags.length}</b> <i className="icon-flag"></i>
                      </span>
                    )}
                    <div className="dropdown-block col">
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
                            <a
                              href="#"
                              className="modal-trigger link-block"
                              onClick={onToggleDetailModalOpen}
                            >
                              View Details
                            </a>
                          </li>
                          <li><a href="#!">Dismiss Flags</a></li>
                          <li><a href="#!">Reset</a></li>
                          <li><a href="#!" className="link-delete">Delete</a></li>
                        </ul>
                      </If>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-top-block">
                <div className="d-flex row mb-0">
                  <div className="left-col col s7">
                    <dl className="dl-horizontal">
                      <dt>Problem Type:</dt>
                      <dd>{problemType}</dd>
                    </dl>
                  </div>
                  <div className="right-col col s5 right-align">
                    <dl className="dl-horizontal">
                      <dt>Diﬃculty:</dt>
                      <dd>{difficulty}</dd>
                    </dl>
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
                        data={() => data(score, status)}
                        options={{
                          circumference: 1 * Math.PI,
                          rotation: 1 * Math.PI,
                          cutoutPercentage: 60,
                          tooltips: false,
                        }}
                      />
                      <span className="chart-value" style={{ backgroundColor: chartColorMap[status] }}><span data-count-up data-start-val="0" data-end-val="96" data-duration="1"></span><span className="percentage">{score && `${score}%`}</span></span>
                    </div>
                    <div className="chart-row">
                      <div className="chart-col chart-start">&nbsp;</div>
                      <div className="chart-col chart-end">
                        <span className="amount" style={{ color: chartColorMap[status] }}>{problems}</span>
                      </div>
                    </div>
                    <div className="chart-description">
                      <dl className="dl-horizontal">
                        <dt>Time Est:</dt>
                        <dd>{formatTimeEstimate(timeEstimate)}</dd>
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
                      <dd><time dateTime={availableDate}>{availableDate}</time></dd>
                    </dl>
                    <dl className={late ? 'dl-horizontal red-text text-darken-3' : 'dl-horizontal'}>
                      <Choose>
                        <When condition={disabled}>
                          <dt>No Due Date</dt>
                        </When>
                        <Otherwise>
                          <dt>Due:</dt>
                          <dd><time dateTime={dueDate}>{dueDate}</time></dd>
                        </Otherwise>
                      </Choose>
                    </dl>
                  </div>
                  <div className="align-self-end">
                    <span className={`badge badge-rounded-md ${statusColorMap[status]} white-text`}>{status}</span>
                  </div>
                </div>
              </div>
              <div className="card-text">
                <dl className="dl-horizontal">
                  <dt>Worksheet Source:</dt>
                  <dd>{worksheetSource}</dd>
                </dl>
              </div>
              <div className="card-inner-row">
                <div className="row-holder">
                  <ul className="classification-list">
                    {classifications.map(classification => (
                      <li className="class-box" key={classification}>
                        {classification}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    const { worksheets } = this.props;
    return (
      <div className="content-section">
          <div className="result-row center-align">
            <b className="result"> - {worksheets.length} results -</b>
          </div>
          <div className="row d-flex-content card-width-272">
            {this.mapWorksheetCards()}
          </div>
        </div>
    )
  }
}

FullView.propTypes = {
  worksheets: PropTypes.array.isRequired,
  onToggleDetailModalOpen: PropTypes.func.isRequired,
};

export default FullView;
