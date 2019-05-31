import React from 'react';
// import PropTypes from 'prop-types';
import Portal from '../../Portal';

class LessonDetailAnswerSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
      <Portal selector="#modal">
        <div className="wrapper modal" style={{ zIndex: '1003', display: 'block', position: 'absolute', top: '0' }}>
          <div className="header-row card-panel light-blue lighten-1 white-text">
            <div className="card-panel-row row">
              <div className="icon-col col s1">
                <i className="icon-books"></i>
              </div>
              <div className="col s9">
                <div className="card-panel-text center-align">
                  <div className="text-small">Reading Unit #2</div>
                  <div className="text-large">Read Something</div>
                </div>
              </div>
              <div className="col s1 right-align">
                <div className="row icons-row">&nbsp;</div>
              </div>
            </div>
            <div className="header-row-block card-panel-row row">
              <div className="col s3">
                <span className="meta-num">p.128</span>
              </div>
              <div className="col s9 right-align">
                <div><span className="name">Arnold Studently</span></div>
                <div><time className="date" dateTime="2018-11-18T20:43" style={{ color: '#006837' }}>Completed 11/18/18 at 8:43 PM (late)</time></div>
              </div>
            </div>
          </div>
          <div className="nav-header nav-header-special white">
            <div className="nav-additional">
              <ul className="menu-additional">
                <li className="col s3"><a href="#">Summary</a></li>
                <li className="col s3"><a className="active" href="#answer">Answer Sheet</a></li>
              </ul>
            </div>
          </div>
          <div className="content-section">
            <div className="container-sm">
              <div className="main-row row">
                <div className="col s12 l6">
                  <div className="card-block">
                    <h2>Challenge</h2>
                    <div className="card-answer card">
                      <div className="card-content">
                        <ol className="answers-list">
                          <li className="answers-list-holder">
                            <div className="answer-row row mb-0">
                              <div className="col col-120">
                                <ul className="answer-list">
                                  <li>
                                    <span className="badge-circle badge-circle-bordered">A</span>
                                  </li>
                                  <li>
                                    <span className="badge-circle badge-circle-bordered" style={{ color: '#32955c', borderColor: '#32955c', backgroundColor: '#fff' }}>B</span>
                                  </li>
                                  <li>
                                    <span className="badge-circle badge-circle-bordered">C</span>
                                  </li>
                                  <li>
                                    <span className="badge-circle badge-circle-bordered">D</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col col-30">
                                <span className="status-info">E</span>
                              </div>
                              <div className="col col-43">
                                <span className="play-progress" data-video-id="video001">
                                  <span className="play"></span>
                                  <svg viewBox="0 0 50 50" width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="circle-static" cx="25.8" cy="24.3" r="22.8" style={{ strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                                    <circle className="circle-progress" cx="25.8" cy="24.3" r="22.8" style={{ strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                                  </svg>
                                </span>
                              </div>
                              <div className="col col-auto">
                                <span className="status-answer invisible" style={{ color: '#c0272d' }}>
                                  <i className="icon-flag"></i><b className="status-text">Review</b>
                                </span>
                              </div>
                              <div className="dropdown-block col col-35">
                                {/* <!-- Modal Trigger --> */}
                                <a className='modal-trigger' href="#modal_video001"><i className="material-icons dots-icon">more_vert</i></a>
                              </div>
                            </div>
                          </li>
                          <li className="answers-list-holder">
                            <div className="answer-row row mb-0">
                              <div className="col col-120">
                                <ul className="answer-list">
                                  <li>
                                    <span className="badge-circle badge-circle-bordered">A</span>
                                  </li>
                                  <li>
                                    <span className="badge-circle badge-circle-bordered" style={{ color: '#3eb777', borderColor: '#32955c' }}>B</span>
                                  </li>
                                  <li>
                                    <span className="badge-circle badge-circle-bordered">C</span>
                                  </li>
                                  <li>
                                    <span className="badge-circle badge-circle-bordered">D</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col col-30">
                                <span className="status-info">M</span>
                              </div>
                              <div className="col col-43">
                                <span className="play-progress" data-video-id="video002">
                                  <span className="play"></span>
                                  <svg viewBox="0 0 50 50" width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="circle-static" cx="25.8" cy="24.3" r="22.8" style={{ strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                                    <circle className="circle-progress" cx="25.8" cy="24.3" r="22.8" style={{ strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                                  </svg>
                                </span>
                              </div>
                              <div className="col col-auto">
                                <span className="status-answer invisible" style={{ color: '#c0272d' }}>
                                  <i className="icon-flag"></i><b className="status-text">Review</b>
                                </span>
                              </div>
                              <div className="dropdown-block col col-35">
                                {/* <!-- Modal Trigger --> */}
                                <a className='modal-trigger' href="#modal_video002"><i className="material-icons dots-icon">more_vert</i></a>
                              </div>
                            </div>
                          </li>
                          <li className="answers-list-holder">
                            <div className="answer-row row mb-0">
                              <div className="col col-120">
                                <ul className="answer-list">
                                  <li>
                                    <span className="badge badge-rounded badge-rounded-bordered" style={{ color: '#3eb777', borderColor: '#32955c' }}>1492</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col col-30">
                                <span className="status-info">M</span>
                              </div>
                              <div className="col col-43">
                                <span className="play-progress" data-video-id="video003">
                                  <span className="play"></span>
                                  <svg viewBox="0 0 50 50" width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="circle-static" cx="25.8" cy="24.3" r="22.8" style={{ strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                                    <circle className="circle-progress" cx="25.8" cy="24.3" r="22.8" style={{ strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                                  </svg>
                                </span>
                              </div>
                              <div className="col col-auto">
                                <span className="status-answer invisible" style={{ color: '#c0272d' }}>
                                  <i className="icon-flag"></i><b className="status-text">Review</b>
                                </span>
                              </div>
                              <div className="dropdown-block col col-35">
                                {/* <!-- Modal Trigger --> */}
                                <a className='modal-trigger' href="#modal_video003" data-target='dropdown003'><i className="material-icons dots-icon">more_vert</i></a>
                              </div>
                            </div>
                          </li>
                          <li className="answers-list-holder">
                            <div className="answer-row row mb-0">
                              <div className="col col-120">
                                <ul className="answer-list">
                                  <li>
                                    <span className="badge badge-rounded badge-rounded-bordered" style={{ color: '#3eb777', borderColor: '#32955c' }}>5.71</span>
                                  </li>
                                  <li>
                                    <span className="badge badge-rounded badge-rounded-bordered" style={{ color: '#32955c', borderColor: '#32955c', backgroundColor: '#fff' }}>1.25</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col col-30">
                                <span className="status-info">E</span>
                              </div>
                              <div className="col col-43">
                                <span className="play-progress" data-video-id="video004">
                                  <span className="play"></span>
                                  <svg viewBox="0 0 50 50" width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="circle-static" cx="25.8" cy="24.3" r="22.8" style={{ strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                                    <circle className="circle-progress" cx="25.8" cy="24.3" r="22.8" style={{ strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                                  </svg>
                                </span>
                              </div>
                              <div className="col col-auto">
                                <span className="status-answer invisible" style={{ color: '#c0272d' }}>
                                  <i className="icon-flag"></i><b className="status-text">Review</b>
                                </span>
                              </div>
                              <div className="dropdown-block col col-35">
                                {/* <!-- Modal Trigger --> */}
                                <a className='modal-trigger' href="#modal_video004" data-target='dropdown004'><i className="material-icons dots-icon">more_vert</i></a>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 l6">
                  <div className="card-block">
                    <h2>Practice</h2>
                    <div className="card">
                      <div className="card-content">
                        <ol className="answers-list">
                          <li className="answers-list-holder">
                            <div className="answer-row row mb-0">
                              <div className="col col-120">
                                <ul className="answer-list">
                                  <li>
                                    <span className="badge-circle badge-circle-bordered">A</span>
                                  </li>
                                  <li>
                                    <span className="badge-circle badge-circle-bordered" style={{ color: '#32955c', borderColor: '#32955c', backgroundColor: '#fff' }}>B</span>
                                  </li>
                                  <li>
                                    <span className="badge-circle badge-circle-bordered">C</span>
                                  </li>
                                  <li>
                                    <span className="badge-circle badge-circle-bordered">D</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col col-30">
                                <span className="status-info">E</span>
                              </div>
                              <div className="col col-43">
                                <span className="play-progress" data-video-id="video101">
                                  <span className="play"></span>
                                  <svg viewBox="0 0 50 50" width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="circle-static" cx="25.8" cy="24.3" r="22.8" style={{ strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                                    <circle className="circle-progress" cx="25.8" cy="24.3" r="22.8" style={{ strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                                  </svg>
                                </span>
                              </div>
                              <div className="col col-auto">
                                <span className="status-answer status-disabled invisible" style={{ color: '#c0272d' }}>
                                  <i className="icon-flag"></i><b className="status-text">Review</b>
                                </span>
                              </div>
                              <div className="dropdown-block col col-35">
                                {/* <!-- Modal Trigger --> */}
                                <a className='modal-trigger' href="#modal_video101" data-target='dropdown101'><i className="material-icons dots-icon">more_vert</i></a>
                              </div>
                            </div>
                          </li>
                          <li className="answers-list-holder">
                            <div className="answer-row row mb-0">
                              <div className="col col-120">
                                <ul className="answer-list">
                                  <li>
                                    <span className="badge-circle badge-circle-bordered">A</span>
                                  </li>
                                  <li>
                                    <span className="badge-circle badge-circle-bordered" style={{ color: '#3eb777', borderColor: '#32955c' }}>B</span>
                                  </li>
                                  <li>
                                    <span className="badge-circle badge-circle-bordered">C</span>
                                  </li>
                                  <li>
                                    <span className="badge-circle badge-circle-bordered">D</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col col-30">
                                <span className="status-info">M</span>
                              </div>
                              <div className="col col-43">
                                <span className="play-progress" data-video-id="video102">
                                  <span className="play"></span>
                                  <svg viewBox="0 0 50 50" width="50" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="circle-static" cx="25.8" cy="24.3" r="22.8" style={{ strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                                    <circle className="circle-progress" cx="25.8" cy="24.3" r="22.8" style={{ strokeWidth: '3', fill: 'rgba(0,0,0,0)' }}/>
                                  </svg>
                                </span>
                              </div>
                              <div className="col col-auto">
                                <span className="status-answer invisible" style={{ color: '#c0272d' }}>
                                  <i className="icon-flag"></i><b className="status-text">Review</b>
                                </span>
                              </div>
                              <div className="dropdown-block col col-35">
                                {/* <!-- Modal Trigger --> */}
                                <a className='modal-trigger' href="#modal_video102" data-target='dropdown102'><i className="material-icons dots-icon">more_vert</i></a>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}

export default LessonDetailAnswerSheet;
