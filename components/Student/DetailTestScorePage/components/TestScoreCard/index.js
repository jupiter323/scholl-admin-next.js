import React from 'react';
import PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';

const readingData = (totalScore, totalPossible) => ({
  datasets: [
    {
      data: [totalPossible, totalPossible - totalScore],
      backgroundColor: ['#32A6AF', 'rgb(234, 234, 234)'],
    },
  ],
});
const writingData = (totalScore, totalPossible) => ({
  datasets: [
    {
      data: [totalPossible, totalPossible - totalScore],
      backgroundColor: ['#3b9f85', 'rgb(234, 234, 234)'],
    },
  ],
});
const mathData = (totalScore, totalPossible) => ({
  datasets: [
    {
      data: [totalPossible, totalPossible - totalScore],
      backgroundColor: ['#567EBF', 'rgb(234, 234, 234)'],
    },
  ],
});

class TestScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mathScores: null,
      readingScores: null,
      writingScores: null,
    };
  }

  componentDidMount = () => {
    const {subjectScores} = this.props;
    if (subjectScores) {
      subjectScores.map(subject => {
        switch (subject.name) {
          case 'Writing and Language':
            this.setState({
              writingScores: subject,
            });
            break;
          case 'Math':
            this.setState({
              mathScores: subject,
            });
            break;
          case 'Reading':
            this.setState({
              readingScores: subject,
            });
            break;
          default:
            return;
        }
      });
    }
  };

  render() {
    const {readingScores, mathScores, writingScores} = this.state;
    return (
      <div className="col s12 l8 card-width-772">
        <div className="card-block">
          <h2>
            Test Scores <span className="separator">|</span>{' '}
            <span className="quantity">10 to 40</span>
          </h2>
          <div className="card-main-full card">
            <div className="card-content">
              <div className="several-charts-row row mb-0">
                <div className="col s4 center-align">
                  {readingScores &&
                    <div className="chart-block chart-block-182">
                      <Doughnut
                        data={() => readingData(readingScores.current_score, 100)}
                        width={182}
                        height={182}
                        options={{
                          cutoutPercentage: 80,
                        }}
                      />
                      <div className="chart-text">
                        <span className="title">Reading</span>
                        <span className="value">
                          {readingScores.current_score}
                        </span>
                        <span className="description">
                          (+{readingScores.delta})
                        </span>
                      </div>
                    </div>}
                </div>
                <div className="col s4 center-align">
                  {writingScores &&
                    <div className="chart-block chart-block-182">
                      <Doughnut
                        data={() => writingData(writingScores.current_score, 100)}
                        width={182}
                        height={182}
                        options={{
                          cutoutPercentage: 80,
                        }}
                      />
                      <div className="chart-text">
                        <span className="title">Writing</span>
                        <span className="value">
                          {writingScores.current_score}
                        </span>
                        <span className="description">
                          (+{writingScores.delta})
                        </span>
                      </div>
                    </div>}
                </div>
                <div className="col s4 center-align">
                  {mathScores &&
                    <div className="chart-block chart-block-182">
                      <Doughnut
                        data={() => mathData(mathScores.current_score, 100)}
                        width={182}
                        height={182}
                        options={{
                          cutoutPercentage: 80,
                        }}
                      />
                      <div className="chart-text">
                        <span className="title">Math</span>
                        <span className="value">
                          {mathScores.current_score}
                        </span>
                        <span className="description">
                          (+{mathScores.delta})
                        </span>
                      </div>
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
TestScoreCard.propTypes = {
  subjectScores: PropTypes.object.isRequired,
};

export default TestScoreCard;
