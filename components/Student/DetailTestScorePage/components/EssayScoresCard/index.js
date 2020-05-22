import React from 'react';
import PropTypes from 'prop-types';

class EssayScoresCard extends React.Component {
  constructor(props) {
    super(props);
  }

  mapProgressBar = () => {
    const {essayScores} = this.props;
    if (essayScores) {
      return Object.entries(essayScores).map(item =>
        <div className="progress-block progress-block-lg">
          <div className="progress-legend">
            <div className="legend-block">
              <span className="text">
                {item[0]}
              </span>
            </div>
          </div>
          <div className="progress progress-rounded-lg" style={{borderRadius: '13px'}}>
            <div
              className="determinate"
              style={{
                width: `${item[1] / 8 * 100}%`,
                backgroundColor: '#ce237a',
                borderRadius: '13px',
              }}
            >
              <span className="progress-label">
                {item[1]}
              </span>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="col s12 l4 card-width-316">
        <div className="card-block">
          <h2>
            Essay Scores <span className="separator">|</span>{' '}
            <span className="quantity">2 to 8</span>
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

EssayScoresCard.propTypes = {
  essayScores: PropTypes.object.isRequired,
};

export default EssayScoresCard;
