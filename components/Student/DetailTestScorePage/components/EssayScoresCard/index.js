import React from 'react';
import PropTypes from 'prop-types';

const EssayScoresCard = ({essayScores: { reading, analysis, writing }}) => (
  <div className="col s12 l4 card-width-316">
                    <div className="card-block">
                      <h2>Essay Scores <span className="separator">|</span> <span className= "quantity">2 to 8</span></h2>
                      <div className="card-main-full card">
                        <div className="card-content">
                          <div className="progress-section">
                            <div className="progress-block progress-block-lg">
                              <div className="progress-legend">
                                <div className="legend-block">
                                  <span className= "text">Reading</span>
                                </div>
                              </div>
                              <div className="progress progress-rounded-lg" style={{borderRadius: '13px'}}>
                                <div className="determinate" style={{width: '80%', backgroundColor: '#ce237a', borderRadius: '13px'}}>
                                  <span className= "progress-label">{reading}</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-block progress-block-lg" >
                              <div className="progress-legend">
                                <div className="legend-block">
                                  <span className= "text">Analysis</span>
                                </div>
                              </div>
                              <div className="progress progress-rounded-lg" style={{borderRadius: '13px'}}>
                                <div className="determinate" style={{width: '80%', backgroundColor: '#ce237a', borderRadius: '13px'}}>
                                  <span className= "progress-label">{analysis}</span>
                                </div>
                              </div>
                            </div>
                            <div className="progress-block progress-block-lg">
                              <div className="progress-legend">
                                <div className="legend-block">
                                  <span className= "text">Writing</span>
                                </div>
                              </div>
                              <div className="progress progress-rounded-lg" style={{borderRadius: '13px'}}>
                                <div className="determinate" style={{width: '80%', backgroundColor: '#ce237a', borderRadius: '13px'}}>
                                  <span className= "progress-label">{writing}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
);

EssayScoresCard.propTypes = {
  essayScores: PropTypes.object.isRequired,
};

export default EssayScoresCard;