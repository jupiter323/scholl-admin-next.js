import React from 'react';

class CrossTestScoresCard extends React.Component {
  constructor(props) {
    super(props);
  }

  mapProgressBar = () => {
    const { crossTestScores } = this.props;
    if (crossTestScores) {
      return Object.entries(crossTestScores).map(item =>
        (<div className="progress-block progress-block-md">
          <div className="progress-legend">
            <div className="legend-block">
              <span className="text">
                {item[0]}
              </span>
            </div>
          </div>
          <div className="progress progress-rounded-md">
            <div
              className="determinate"
              style={{ width: `${item[1] / 40 * 100}%`, backgroundColor: '#f5883f' }}
            >
              <span className="progress-label">
                {item[1]}
              </span>
            </div>
          </div>
        </div>),
      );
    }
  };
  render() {
    return (
      <div className="col s12 l6 card-width-546">
        <div className="card-block">
          <h2>
            Cross-Test Scores <span className="separator">|</span>{' '}
            <span className="quantity">10 to 40</span>
          </h2>
          <div className="card-main-full card">
            <div className="card-content">
              <div className="progress-section">
                {this.mapProgressBar()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CrossTestScoresCard;
