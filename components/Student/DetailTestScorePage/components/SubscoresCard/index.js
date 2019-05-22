import React from 'react';
import PropTypes from 'prop-types';

const SubScoresCard = ({ subScores: {commandOfEvidence, wordsInContext, expressionOfIdeas, standardEnglishConventions, heartOfAlgebra, problemSolvingAndDataAnalysis, passportToAdvancedMath } }) => (
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
                  <div className="progress progress-rounded-md" style={{borderRadius: '13px'}}>
                    <div className="determinate" style={{width: "10%", backgroundColor: "#f5883f", borderRadius: '13px'}}>
                      <span className="progress-label">{commandOfEvidence}</span>
                    </div>
                  </div>
                </div>
                <div className="progress-block progress-block-md">
                  <div className="progress-legend">
                    <div className="legend-block">
                      <span className="text">Words in Context</span>
                    </div>
                  </div>
                  <div className="progress progress-rounded-md" style={{borderRadius: '13px'}}>
                    <div className="determinate"style={{width: "70%", backgroundColor: "#f5883f", borderRadius: '13px'}}>
                        <span className="progress-label">{wordsInContext}</span>
                    </div>
                  </div>
                </div>
                <div className="progress-block progress-block-md">
                  <div className="progress-legend">
                    <div className="legend-block">
                      <span className="text">Expression of Ideas</span>
                    </div>
                  </div>
                  <div className="progress progress-rounded-md" style={{borderRadius: '13px'}}>
                    <div className="determinate" style={{width: "50%", backgroundColor: "#f5883f", borderRadius: '13px'}}>
                      <span className="progress-label">{expressionOfIdeas}</span>
                    </div>
                  </div>
                </div>
                <div className="progress-block progress-block-md">
                  <div className="progress-legend">
                    <div className="legend-block">
                      <span className="text">Standard English Conventions</span>
                    </div>
                  </div>
                  <div className="progress progress-rounded-md" style={{borderRadius: '13px'}}>
                    <div className="determinate" style={{width: "60%", backgroundColor: "#f5883f", borderRadius: '13px'}}>
                      <span className="progress-label">{standardEnglishConventions}</span>
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
                  <div className="progress progress-rounded-md" style={{borderRadius: '13px'}}>
                    <div className="determinate" style={{width: "50%", backgroundColor: "#f5883f", borderRadius: '13px'}}>
                      <span className="progress-label">{heartOfAlgebra}</span>
                    </div>
                  </div>
                </div>
                <div className="progress-block progress-block-md">
                  <div className="progress-legend">
                    <div className="legend-block">
                      <span className="text">Problem Solving and Data Analysis</span>
                    </div>
                  </div>
                  <div className="progress progress-rounded-md" style={{borderRadius: '13px'}}>
                    <div className="determinate" style={{width: "50%", backgroundColor: "#f5883f", borderRadius: '13px'}}>
                      <span className="progress-label">{problemSolvingAndDataAnalysis}</span>
                    </div>
                  </div>
                </div>
                <div className="progress-block progress-block-md">
                  <div className="progress-legend">
                    <div className="legend-block">
                      <span className="text">Passport to Advanced Math</span>
                    </div>
                  </div>
                  <div className="progress progress-rounded-md" style={{borderRadius: '13px'}}>
                    <div className="determinate" style={{width: "75%", backgroundColor: "#f5883f", borderRadius: '13px'}}>
                      <span className="progress-label">{passportToAdvancedMath}</span>
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

SubScoresCard.propTypes = {
  subScores: PropTypes.object.isRequired,
}

export default SubScoresCard;