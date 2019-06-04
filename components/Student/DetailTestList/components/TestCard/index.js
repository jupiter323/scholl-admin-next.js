import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

// import { data, subjectMap, testSectionCardColorMap, graphColorMap } from '../../../utils/testSectionCardUtils';

export const data = (percentage) => ({
  datasets: [{
    data: [percentage, 100 - percentage],
    backgroundColor: [
      '#00bbf7',
      '#eaeaea',
    ],
  }],
});

class TestCard extends React.Component {
  handleDropdownClick = (event) => {
    const { onSetDropdown, onCloseDropdown, dropdownIsOpen, index } = this.props;
    event.preventDefault();
    if (dropdownIsOpen) {
      return onCloseDropdown();
    }
    return onSetDropdown(index);
  }

  mapTestSubjects = () => {
    const { test, futureTest } = this.props;
    const { subjects } = test;
    return subjects.map(subject => (
      <div className="chart-block chart-block-test" key={subject.subject}>
        <span className="value-max">{subject.targetScore}</span>
        <div className="js-donut-chart" data-stroke-width="15" data-source='./inc/score-data-test-reading.json'></div>
        <div className="chart-text">
          <Choose>
            <When condition={subject.subject === 'Reading & Writing' && !futureTest}>
              <span className="title">Reading <br /> &amp; Writing</span>
            </When>
            <Otherwise>
              <span className="title">{subject.subject}</span>
            </Otherwise>
          </Choose>
          <span className="value">{subject.currentScore}</span>
          <span className="description">+{subject.totalGain}</span>
        </div>
      </div>
    ));
  }

  render() {
    const { test, futureTest = false, dropdownIndex, index, dropdownIsOpen } = this.props;
    const { title, version = '', testDate, weekNumber, initialScore, targetScore, currentScore } = test;
    return (
      <div className="col s12 m8 l7 xl5">
        <div className="card-main-col">
          <div className={futureTest ? 'card-test card-main card-disabled card' : 'card-test card-main card'}>
            <div className="card-content">
              <div className="card-panel-row row">
                <div className="col">&nbsp;</div>
                <div className="col">
                  <div className="row icons-row">
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
                          <li><a href="#">Enter Answers</a></li>
                          <li><a href="#">Edit</a></li>
                          <li><a href="#" className="disabled">Download Report</a></li>
                          <li><a href="#" className="red-text text-darken-3">Delete</a></li>
                        </ul>
                      </If>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-test-row row d-flex mb-0">
                <div className="col s7">
                  <div className="card-title-block">
                    <h4 className="h2">{title}</h4>
                    <time className="date">{testDate} (week {weekNumber})</time>
                    <If condition={!futureTest}>
                      <p>Version {version}</p>
                    </If>
                  </div>
                  <div className="chart-container chart-container-test">
                    <div className="chart-holder">
                      <span className="svg-curved-bar">
                        <Doughnut
                          data={() => (data(initialScore ? Number(initialScore / targetScore) * 100 : 0 ))}
                          options={{
                            circumference: 1 * Math.PI,
                            rotation: 1 * Math.PI,
                            cutoutPercentage: 60,
                            tooltips: false,
                          }}
                        />
                        <span className="js-diff-holder"><span className="js-diff"><span className="txt">119</span></span></span>
                      </span>
                      <span className="chart-value" style={{ backgroundColor: '#00bbf7' }}><span data-count-up data-start-val="1100" data-end-val="1210" data-duration="1">{currentScore}</span></span>
                    </div>
                    <div className="chart-row">
                      <div className="chart-col chart-start">
                        <span className="amount">{initialScore}</span> <br />
                        <span className="amount-text">initial</span>
                      </div>
                      <div className="chart-col chart-end">
                        <span className="amount">{targetScore}</span> <br />
                        <span className="amount-text">target</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s5 right-align">
                  {this.mapTestSubjects()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TestCard.propTypes = {
  index: PropTypes.number,
  futureTest: PropTypes.bool,
  dropdownIndex: PropTypes.number,
  test: PropTypes.object.isRequired,
  onSetDropdown: PropTypes.func.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  onCloseDropdown: PropTypes.func.isRequired,
};

export default TestCard;