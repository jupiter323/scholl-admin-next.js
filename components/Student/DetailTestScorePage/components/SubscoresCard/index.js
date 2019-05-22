import React from 'react';

const SubscoresCard = () => (
  <div className="col s12 l6 card-width-546">
    <div className="card-block">
      <h2>Subscores <span className="separator">|</span> <span className="quantity">1 to 15</span></h2>
      <div className="card-main-full card">
        <div className="card-content">
          <div className="progress-section">
            <div className="row mb-0">
              <div className="col s12 m6">
                <div className="progress-block progress-block-md">
                  <div className="progress-legend">
                    <div className="legend-block">
                      <span className="text">Command of Evidence</span>
                    </div>
                  </div>
                  <div className="progress progress-rounded-md">
                    <div className="determinate" style={{width: "10%", backgroundColor: "#f5883f"}}>
                      <span className="progress-label">5</span>
                    </div>
                  </div>
                </div>
                <div className="progress-block progress-block-md">
                  <div className="progress-legend">
                    <div className="legend-block">
                      <span className="text">Words in Context</span>
                    </div>
                  </div>
                  <div className="progress progress-rounded-md">
                    <div className="determinate"style={{width: "70%", backgroundColor: "#f5883f"}}>
                      <span className="progress-label">12</span>
                    </div>
                  </div>
                </div>
                <div className="progress-block progress-block-md">
                  <div className="progress-legend">
                    <div className="legend-block">
                      <span className="text">Expression of Ideas</span>
                    </div>
                  </div>
                  <div className="progress progress-rounded-md">
                    <div className="determinate" style={{width: "50%", backgroundColor: "#f5883f"}}>
                      <span className="progress-label">12</span>
                    </div>
                  </div>
                </div>
                <div className="progress-block progress-block-md">
                  <div className="progress-legend">
                    <div className="legend-block">
                      <span className="text">Standard English Conventions</span>
                    </div>
                  </div>
                  <div className="progress progress-rounded-md">
                    <div className="determinate" style={{width: "60%", backgroundColor: "#f5883f"}}>
                      <span className="progress-label">14</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m6">
                <div className="progress-block progress-block-md">
                  <div className="progress-legend">
                    <div className="legend-block">
                      <span className="text">Heart of Algebra</span>
                    </div>
                  </div>
                  <div className="progress progress-rounded-md">
                    <div className="determinate" style={{width: "50%", backgroundColor: "#f5883f"}}>
                      <span className="progress-label">10</span>
                    </div>
                  </div>
                </div>
                <div className="progress-block progress-block-md">
                  <div className="progress-legend">
                    <div className="legend-block">
                      <span className="text">Problem Solving and Data Analysis</span>
                    </div>
                  </div>
                  <div className="progress progress-rounded-md">
                    <div className="determinate" style={{width: "50%", backgroundColor: "#f5883f"}}>
                      <span className="progress-label">10</span>
                    </div>
                  </div>
                </div>
                <div className="progress-block progress-block-md">
                  <div className="progress-legend">
                    <div className="legend-block">
                      <span className="text">Passport to Advanced Math</span>
                    </div>
                  </div>
                  <div className="progress progress-rounded-md">
                    <div className="determinate" style={{width: "75%", backgroundColor: "#f5883f"}}>
                      <span className="progress-label">13</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SubscoresCard;