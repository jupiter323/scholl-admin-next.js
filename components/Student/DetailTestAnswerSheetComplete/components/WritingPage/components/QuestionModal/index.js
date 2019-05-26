import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../../../../../../Portal';
import ClickOffComponentWrapper from '../../../../../../ClickOffComponentWrapper';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }
  // handle checkbox

  onCloseModal = () => this.props.onCloseQuestionModal;
  render() {
    const { open } = this.props;
    return (
      <Portal selector='#modal'>
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={this.onCloseModal}>
              <div id="modal_video001" className="modal modal-answer-single">
                <div className="modal-header row mb-0">
                  <div className="col s10">
                    <span className="subtitle">Reading</span>
                    <span className="title">Problem 12</span>
                  </div>
                  <div className="col s2 right-align">
                    <a href="#!" className="close modal-close" onClick={this.onCloseModal}><i className="icon-close-thin"></i></a>
                  </div>
                </div>
                <div className="modal-content">
                  <div className="card-panel">
                    <div className="panel-block">
                      <div className="d-flex align-items-center row mb-0">
                        <div className="col">
                          <span className="status-answer" style={{color: '#c0272d'}}>
                            <i className="icon-flag"></i><b className="status-text">Flagged</b>
                          </span>
                        </div>
                        <div className="col">
                          <label htmlFor="filled-in">
                            <input type="checkbox" className="filled-in"/>
                              <span><b>Reviewed with Student</b></span>

                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="panel-block">
                      <ul className="informers-list">
                        <li className="informer-block">
                          <div className="informer-box" style={{width: '10%', backgroundColor: '#e5e5e5'}}>
                            <b className="informer-circle" style={{backgroundColor: '#e5e5e5'}}>A</b>
                          </div>
                          <b className="informer-value">10%</b>
                        </li>
                        <li className="informer-block">
                          <div className="informer-box" style={{width: '16%', backgroundColor: '#db1d41'}}>
                            <b className="informer-circle" style={{backgroundColor: '#db1d41', color: '#fff'}}>B</b>
                          </div>
                          <b className="informer-value">16%</b>
                        </li>
                        <li className="informer-block">
                          <div className="informer-box" style={{width: '37%', backgroundColor: '#d3efde'}}>
                            <b className="informer-circle" style={{backgroundColor: '#32955c', color: '#fff'}}>C</b>
                          </div>
                          <b className="informer-value">37%</b>
                        </li>
                        <li className="informer-block">
                          <div className="informer-box" style={{width: '8%', backgroundColor: '#e5e5e5'}}>
                            <b className="informer-circle" style={{backgroundColor: '#e5e5e5'}}>D</b>
                          </div>
                          <b className="informer-value">8%</b>
                        </li>
                        <li className="informer-block">
                          <div className="informer-box" style={{width: '29%', backgroundColor: '#e5e5e5'}}>
                            <b className="informer-circle" style={{backgroundColor: '#e5e5e5'}}>E</b>
                          </div>
                          <b className="informer-value">29%</b>
                        </li>
                      </ul>
                    </div>
                    <div className="panel-block">
                      <strong className="subtitle">Student’s Notes:</strong>
                      <div className="text-content custom-form">
                        <div className="jcf-scrollable height-22">
                          <div className="text-holder">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore? re?  tincidunt ut laoreet.</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet do?</p>
                            <p>Hi Student, </p>
                          <p>I’m adding to your notes here. Maybe a suggestion or an answer to your question. </p>
                            <p>-Tutor
                            </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ClickOffComponentWrapper>
            </div>
      )}
        </Portal>
    )
  }



}

QuestionModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onCloseQuestionModal: PropTypes.func.isRequired,
};

export default QuestionModal;