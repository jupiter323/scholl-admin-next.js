import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

export const data = (percentage) => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: [
      '#00bbf7',
      '#eaeaea',
    ],
  }],
});

const getCardClass = (disabled, available) => {
  if (disabled) {
    return 'card-test card-disabled card-main card';
  }
  if (!available) {
    return 'card-test card-nonavailable card-main card';
  }
  return 'card-test card-main card';
}

class ScoredTestCard extends React.Component {
  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  onCreateTest = (event) => {
    event.preventDefault();
    console.warn('Pending implementation of create test UI and functionality');
  }

  handleDropdownClick = (event) => {
    const { onSetDropdown, onCloseDropdown, dropdownIsOpen, index } = this.props;
    event.preventDefault();
    if (dropdownIsOpen) {
      return onCloseDropdown();
    }
    return onSetDropdown(index);
  }


  render() {
    const { test, dropdownIndex, index, dropdownIsOpen, onEditTest, onDownloadReport, onResetTest, onDeleteTest } = this.props;
    const { flags = [], disabled, available, testType, testDate, title, version, availableDate, dueDate, completionDate, initialScore, targetScore, currentScore, totalGain, subjects } = test;
    return (
      <div className="col s12 m8 l7 xl5">
        <div className="card-main-col">
          <div className={getCardClass(disabled, available)}>
            <div className="card-content">
              <div className="card-title-row row">
                <div className="col s9">
                  <div className="card-title-block">
                    <h4 className="h2">
                      <b>{testType === 'real' ? 'Real SAT' : title}</b>
                      <If condition={testType === 'real'}>
                        - {title}
                      </If>
                    </h4>
                    <time dateTime="2018-03-05" className="title-meta">
                      <Choose>
                        <When condition={testType === 'real'}>
                          {testDate}
                        </When>
                        <Otherwise>
                          Version {version}
                        </Otherwise>
                      </Choose>
                    </time>
                  </div>
                </div>
                <div className="col s3">
                  <div className="row icons-row">
                    <If condition={flags.length}>
                      <span
                        className="badge-rounded-xs badge red darken-2 white-text"
                      >
                        <b className="badge-text">{flags.length}</b>
                        <i className="icon-flag"></i>
                      </span>
                    </If>

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
                          className='dropdown-content'
                          style={{ display: 'block', transformOrigin: '0px 0px 0px', opacity: '1', transform: 'scaleX(1) scaleY(1)' }}
                        >
                          <li><a href="#" onClick={onEditTest}>View/Edit</a></li>
                          <li><a href="#" onClick={onDownloadReport}>Download Score Report</a></li>
                          <li><a href="#" className="red-text text-darken-3" onClick={onResetTest}>Reset</a></li>
                          <li><a href="#" className="red-text text-darken-3" onClick={onDeleteTest}>Delete</a></li>
                        </ul>
                      </If>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-test-row row d-flex mb-0">
                <div className="col s6">
                  <div className="card-description">
                    <If condition={testType !== 'real'}>
                      <dl className="dl-horizontal">
                        <dt>Available:</dt>
                        <dd><time dateTime="2018-12-15">{availableDate}</time></dd>
                      </dl>
                      <dl className="dl-horizontal">
                        <dt>Due:</dt>
                        <dd><time dateTime="2018-12-15">{dueDate}</time></dd>
                      </dl>
                      <If condition={completionDate.length}>
                        <dl className="dl-horizontal">
                          <dt>Complete:</dt>
                          <dd><time dateTime="2018-12-15">{completionDate}</time></dd>
                        </dl>
                      </If>
                    </If>
                  </div>
                  <div className={currentScore ? 'chart-container chart-container-160' : 'chart-container chart-container-160 chart-value-zero start-anim' }>
                    <div className="chart-holder">
                      <span className="svg-curved-bar" data-values='{"from": 1100, "to": 1460, "current": 1210}' data-duration="1">
                        <Doughnut
                          data={() => (data(initialScore && (!disabled && available) && currentScore ? Number(initialScore / targetScore) * 100 : 0 ))}
                          options={{
                            circumference: 1 * Math.PI,
                            rotation: 1 * Math.PI,
                            cutoutPercentage: 60,
                            tooltips: false,
                          }}
                        />
                        <span className="js-diff-holder">
                          <span className="js-diff">
                            <span className="txt" style={{ opacity: '1', bottom: '65px', color: 'black', fontWeight: '600', fontSize: '12px' }}>+{totalGain}</span>
                          </span>
                        </span>

                      </span>
                      <span className="chart-value" style={{ backgroundColor: '#00bbf7' }}><span data-count-up data-start-val="1100" data-end-val="1210" data-duration="1">{currentScore}</span></span>
                    </div>
                    <div className="chart-row">
                      <div className="chart-col chart-start">
                        <span className="amount">{initialScore}</span><br />
                        <span className="amount-text">initial</span>
                      </div>
                      <div className="chart-col chart-end">
                        <span className="amount">{targetScore}</span><br />
                        <span className="amount-text">target</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s6 right-align">
                  <div className="charts-row row mb-0">
                    <div className="col s6">
                      <div className="chart-block chart-block-test-sm">
                        <span className="value-max">{subjects[0].targetScore}</span>
                        <div className="js-donut-chart" data-stroke-width="11" data-source='./inc/score-data-test-reading.json'></div>
                        <div className="chart-text">
                          <span className="title">Reading</span>
                          <span className="value">{subjects[0].currentScore}</span>
                          <span className="description">+{subjects[0].totalGain}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col s6">
                      <div className="chart-block chart-block-test-sm">
                        <span className="value-max">{subjects[1].targetScore}</span>
                        <div className="js-donut-chart" data-stroke-width="11" data-source='./inc/score-data-test-writing.json'></div>
                        <div className="chart-text">
                          <span className="title">Writing</span>
                          <span className="value">{subjects[1].currentScore}</span>
                          <span className="description">+{subjects[1].totalGain}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={!subjects[2].currentScore ? 'chart-block chart-block-test' : 'chart-block chart-block-test chart-block-zero'}>
                    <span className="value-max">{subjects[2].currentScore}</span>
                    <div className="js-donut-chart" data-stroke-width="15" data-source='./inc/score-data-test-math.json'></div>
                    <div className="chart-text">
                      <span className="title">Math</span>
                      <span className="value">{subjects[2].currentScore}</span>
                      <If condition={subjects[2].totalGain}>
                        <span className="description">+{subjects[2].totalGain}</span>
                      </If>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ScoredTestCard.propTypes = {
  index: PropTypes.number,
  dropdownIndex: PropTypes.number,
  test: PropTypes.object.isRequired,
  onEditTest: PropTypes.func.isRequired,
  onResetTest: PropTypes.func.isRequired,
  onDeleteTest: PropTypes.func.isRequired,
  onSetDropdown: PropTypes.func.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  onCloseDropdown: PropTypes.func.isRequired,
  onDownloadReport: PropTypes.func.isRequired,
}

export default ScoredTestCard;
