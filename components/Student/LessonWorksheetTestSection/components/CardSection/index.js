import React from 'react';
import PropTypes from 'prop-types';

import { Doughnut } from 'react-chartjs-2';
import { data, statusColorMap, chartColorMap, formatTimeEstimate } from '../../utils/index';

const CardSection = ({ completionLevel, problems, completedProblems, status, flags, totalVideoMinutesWatched, totalVideoMinutesAllMissedProblems }) => {
  const percentageComplete = Number((completedProblems / problems) * 100).toFixed(0);
  const videoWatchedPercentage = Number((totalVideoMinutesWatched / totalVideoMinutesAllMissedProblems) * 100).toFixed(0);
  return (
    <div className="cards-section">
      <div className="d-flex same-height justify-center row mb-0">
        <div className="col s12 l5 col-435">
          <div className="card-block">
            <h2>Performance</h2>
            <div className="card-student-detail card-main-full card">
              <div className="card-content">
                <div className="d-flex sameheight-all row mb-0">
                  <div className="col s6">
                    <div className="chart-container chart-container-195">
                      <div className="chart-holder">
                        <Doughnut
                          data={() => data(percentageComplete, status)}
                          options={{
                            circumference: 1 * Math.PI,
                            rotation: 1 * Math.PI,
                            cutoutPercentage: 60,
                            tooltips: false,
                          }}
                        />
                        <span className="chart-value" style={{ backgroundColor: chartColorMap[status] }}><span data-count-up data-start-val="0" data-end-val="75" data-duration="1"></span><span className="percentage">{completionLevel === 'Complete' ? percentageComplete : ''}{completionLevel !== 'Started' ? '%' : ''}</span></span>
                      </div>
                      <div className="chart-row">
                        <div className="chart-col chart-start">&nbsp;</div>
                        <div className="chart-col chart-end">
                          <span className="amount" style={{ color: chartColorMap[status] }}>{problems}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col s6">
                    <div className="card-description">
                      <dl className="dl-horizontal">
                        <dt className="text-large">Status:</dt>
                        <dd className="text-large">{completionLevel}</dd>
                      </dl>
                      <b className="text-small">{completedProblems} out of {problems} {completionLevel === 'Started' ? 'completed' : 'correct'}</b>
                    </div>
                    <div className="card-description">
                      <Choose>
                        <When condition={completionLevel === 'Completed' || completionLevel === 'Instructor Editing'}>
                          <dl className="dl-horizontal">
                            <dt className="text-large">Score:</dt>
                            <dd className="text-large">{percentageComplete}%</dd>
                          </dl>
                          <b className="text-small">{completedProblems} out of {problems} correct</b>
                        </When>
                        <Otherwise>
                          <span className="text-large gray-text">Score: Incomplete</span>
                        </Otherwise>
                      </Choose>
                    </div>
                    <div className="align-self-end">
                      <span className={`badge badge-rounded-lg ${statusColorMap[status]} white-text`}>{status}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 l3 col-320">
          <div className="card-block">
            <h2>Video</h2>
            <div className="card-student-detail card-main-full card">
              <div className="card-content">
                <div className="d-flex sameheight-all row mb-0 align-center">
                  <div className="col s6" style={{ marginBottom: '12px' }}>
                    <div className="chart-container chart-container-195">
                      <div className="chart-holder" style={{ width: '130px' }}>
                        <span style={{ position: 'absolute', top: '30px', left: '42px' }}>
                          <span style={{ fontSize: '23px', fontWeight: '700', color: '#02baf7' }}>{formatTimeEstimate(totalVideoMinutesWatched)}</span> <br />
                          <span style={{ fontSize: '16px', color: '#bbbbbb' }}>out of</span> <br />
                          <span style={{ fontSize: '23px', fontWeight: '700', color: '#838383' }}>{formatTimeEstimate(totalVideoMinutesAllMissedProblems)}</span>
                        </span>
                        <Doughnut
                          data={() => data(videoWatchedPercentage, status, '#02baf7')}
                          height={300}
                          width={300}
                          options={{
                            circumference: 2 * Math.PI,
                            rotation: 1 * Math.PI,
                            cutoutPercentage: 70,
                            tooltips: false,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col s6">
                    <div className="video-description">
                      <strong className="blue-text">total minutes of video watched</strong>
                    </div>
                    <div className="video-description">
                      <strong className="grey-text">total minutes of video for all missed problems</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 l3 col-320">
          <div className="card-block">
            <h2>Flagged for Review</h2>
            <div className="card-student-detail card-main-full card">
              <div className="card-content">
                <div className="d-flex sameheight-all row mb-0">
                  <div className="col s12">
                    <div className="badges-container">
                      <div className="badge-block red-text">
                        <span className="badge-rounded-md badge red darken-2 white-text">
                          <b className="badge-text">{flags.filter(flag => flag.status === 'toReview').length}</b> <i className="icon-flag"></i>
                        </span>
                        <span className="badge-block-text">To Review</span>
                      </div>
                      <div className="badge-block">
                        <span className="badge-rounded-md badge grey darken-2 white-text">
                          <b className="badge-text">{flags.filter(flag => flag.status === 'reviewed').length}</b> <i className="icon-flag"></i>
                        </span>
                        <span className="badge-block-text">Reviewed</span>
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
}

CardSection.propTypes = {
  flags: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  problems: PropTypes.number.isRequired,
  completionLevel: PropTypes.string.isRequired,
  completedProblems: PropTypes.number.isRequired,
  totalVideoMinutesWatched: PropTypes.string.isRequired,
  totalVideoMinutesAllMissedProblems: PropTypes.string.isRequired,
};

export default CardSection;
