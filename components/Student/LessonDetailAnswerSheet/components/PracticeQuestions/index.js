import React from 'react';

class PracticeQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
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
    );
  }
}

export default PracticeQuestions;
