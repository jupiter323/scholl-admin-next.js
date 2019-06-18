import React from 'react';
import PropTypes from 'prop-types';

import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const getIndicatorStatus = (activeSection, active) => ({
  left: activeSection === 'subjectScores' ? '50%' : '0',
  right: activeSection === 'subjectScores' ? '0' : '50%',
  backgroundColor: active ? '#00bbf7' : '#b2b2b2',
})

// TODO: Implement final line chart data implementation later
class TestScores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: 'compositeScore',
    }
  }

  onSetOpenSection = (event, openSection) => {
    event.preventDefault();
    this.setState({ openSection })
  }

  render() {
    const { openSection } = this.state;
    const { state: { compositeScore, subjectScores }, active } = this.props;
    return (
      <div className="col s12 l7 card-width-747">
        <div className="card-main card card-chart">
          <div className="card-content">
            <h2>Test Scores</h2>
            <div className="tabs-container tabs-charts-container">
              <If condition={!active}>
                <div className="card-note-box" style={{ display: 'block' }}>
                  <span className="title">Nothing to see here yet.</span>
                  <span className="text-frame">Once this student has taken multiple tests, you can track the progress here. </span>
                </div>
              </If>
              <ul className="tabs" style={active ? {} : { filter: 'blur(3px)'}}>
                <li className="tab col s6 l6">
                  <a
                    href="#"
                    onClick={(event) => this.onSetOpenSection(event, 'compositeScore')}
                    className={openSection === 'compositeScore' ? 'active' : ''}
                  >
                    Composite Score
                  </a>
                </li>
                <li className="tab col s6 l6">
                  <a
                    href="#"
                    onClick={(event) => this.onSetOpenSection(event, 'subjectScores')}
                    className={openSection === 'subjectScores' ? 'active' : ''}
                  >
                    Subject Scores
                  </a>
                </li>
                <li className="indicator" style={getIndicatorStatus(openSection, active)}></li>
              </ul>
              <div id="scores_tab01" className={openSection === 'compositeScore' ? '' : 'tab-content'} style={active ? {} : { filter: 'blur(3px)'}}>
                <div className={active ? 'card-panel panel-scores light-blue accent-2 white-text' : 'card-panel panel-scores white-text'}>
                  <ul className="panel-list">
                    <li className="panel-block">
                      <strong className="text-small">Reading</strong>
                      <If condition={active}>
                        <strong className="text-large">+{compositeScore.reading}</strong>
                      </If>
                    </li>
                    <li className="panel-block">
                      <strong className="text-small">Writing</strong>
                      <If condition={active}>
                        <strong className="text-large">+{compositeScore.writing}</strong>
                      </If>
                    </li>
                    <li className="panel-block">
                      <strong className="text-small">Math</strong>
                      <If condition={active}>
                        <strong className="text-large">+{compositeScore.math}</strong>
                      </If>
                    </li>
                    <li className="panel-block">
                      <strong className="text-small">Composite</strong>
                      <If condition={active}>
                        <strong className="text-large">+{compositeScore.composite}</strong>
                      </If>
                    </li>
                  </ul>
                </div>
                <div className="chart-line-container js-scrollable-chart">
                  <Line data={data} />
                </div>
              </div>
              <div id="scores_tab02" className={openSection === 'subjectScores' ? '' : 'tab-content'} style={active ? {} : { filter: 'blur(3px)'}}>
                <div className={active ? 'card-panel panel-scores light-blue accent-2 white-text' : 'card-panel panel-scores white-text'}>
                  <ul className="panel-list">
                    <li className="panel-block">
                      <strong className="text-small">Reading</strong>
                      <If condition={active}>
                        <strong className="text-large">+{subjectScores.reading}</strong>
                      </If>
                    </li>
                    <li className="panel-block">
                      <strong className="text-small">Writing</strong>
                      <If condition={active}>
                        <strong className="text-large">+{subjectScores.writing}</strong>
                      </If>
                    </li>
                    <li className="panel-block">
                      <strong className="text-small">Math</strong>
                      <If condition={active}>
                        <strong className="text-large">+{subjectScores.math}</strong>
                      </If>
                    </li>
                    <li className="panel-block">
                      <strong className="text-small">Composite</strong>
                      <If condition={active}>
                        <strong className="text-large">+{subjectScores.composite}</strong>
                      </If>
                    </li>
                  </ul>
                </div>
                <div className="chart-line-container js-scrollable-chart">
                  <Line data={data} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
};

TestScores.propTypes = {
  state: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
};

export default TestScores;
