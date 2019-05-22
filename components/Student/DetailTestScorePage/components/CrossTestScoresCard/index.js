import React from 'react';

const CrossTestScoresCard = () => (
  <div className="col s12 l6 card-width-546">
    <div className="card-block">
      <h2>Cross-Test Scores <span className="separator">|</span> <span className="quantity">10 to 40</span></h2>
      <div className="card-main-full card">
        <div className="card-content">
          <div className="progress-section">
            <div className="progress-block progress-block-md">
              <div className="progress-legend">
                <div className="legend-block">
                  <span className="text">Analysis of History/Social Studies</span>
                </div>
              </div>
              <div className="progress progress-rounded-md" style={{borderRadius: '13px'}}>
                <div className="determinate" style={{width: "55%", backgroundColor: "#f5883f", borderRadius: '13px'}}>
                  <span className="progress-label">24</span>
                </div>
              </div>
            </div>
            <div className="progress-block progress-block-md">
              <div className="progress-legend">
                <div className="legend-block">
                  <span className="text">Analysis of History/Social Studies</span>
                </div>
              </div>
              <div className="progress progress-rounded-md" style={{borderRadius: '13px'}}>
                <div className="determinate" style={{width: "50%", backgroundColor: "#f5883f", borderRadius: '13px'}}>
                  <span className="progress-label">17</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CrossTestScoresCard;