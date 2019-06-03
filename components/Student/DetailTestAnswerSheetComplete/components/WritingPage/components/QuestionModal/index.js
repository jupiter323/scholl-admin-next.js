import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../../../../../../Portal';
import ClickOffComponentWrapper from '../../../../../../ClickOffComponentWrapper';

class QuestionModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isChecked: false,
    }
  }

  onToggleChecked = () => this.setState({isChecked: !this.state.isChecked})

  render(){
    const { open, onCloseQuestionModal, question } = this.props;
    const { isChecked } = this.state;
  return (
    <Portal selector='#modal'>
    {open && (<div className="overlay">
      <ClickOffComponentWrapper onOuterClick={onCloseQuestionModal}>
        <div id="modal_video001" className="modal modal-answer-single">
        <div className="modal-header row mb-0">
            <div className="col s10">
              <span className="subtitle">Reading</span>
              <span className="title">Problem {question.id}</span>
            </div>
            <div className="col s2 right-align">
              <a href="#!" className="close modal-close" onClick={onCloseQuestionModal}><i className="icon-close-thin"></i></a>
            </div>
            </div>
          <div className="modal-content">
            <div className="card-panel">
              <div className="panel-block">
              <div className="d-flex align-items-center row mb-0">
                  <div className="col">
                    <span className="status-answer" style={{ color: '#c0272d' }}>
                    <i className="icon-flag"></i><b className="status-text">Flagged</b>
                    </span>
                    </div>
                  <div className="col">
                  <label htmlFor="reviewedCheckbox">
                      <input
                      id="reviewedCheckbox"
                      type="checkbox"
                      defaultChecked={isChecked}
                      name="isChecked"
                      onChange={this.onToggleChecked}
                      className="filled-in" />
                      <span><b>Reviewed with Student</b></span>
                    </label>
                    </div>
                </div>
              </div>
              <div className="panel-block">
              <ul className="informers-list">
                  <li className="informer-block">
                    <div className="informer-box" style={{ width: '10%', backgroundColor: '#e5e5e5' }}>
                      <b className="informer-circle" style={{ backgroundColor: '#e5e5e5' }}>A</b>
                    </div>
                    <b className="informer-value">10%</b>
                  </li>
                  <li className="informer-block">
                    <div className="informer-box" style={{ width: '16%', backgroundColor: '#db1d41' }}>
                      <b className="informer-circle" style={{ backgroundColor: '#db1d41', color: '#fff' }}>B</b>
                      </div>
                      <b className="informer-value">16%</b>
                      </li>
                  <li className="informer-block">
                  <div className="informer-box" style={{ width: '37%', backgroundColor: '#d3efde' }}>
                  <b className="informer-circle" style={{ backgroundColor: '#32955c', color: '#fff' }}>C</b>
                  </div>
                  <b className="informer-value">37%</b>
                  </li>
                  <li className="informer-block">
                  <div className="informer-box" style={{ width: '8%', backgroundColor: '#e5e5e5' }}>
                  <b className="informer-circle" style={{ backgroundColor: '#e5e5e5' }}>D</b>
                    </div>
                    <b className="informer-value">8%</b>
                    </li>
                  <li className="informer-block">
                  <div className="informer-box" style={{ width: '29%', backgroundColor: '#e5e5e5' }}>
                      <b className="informer-circle" style={{ backgroundColor: '#e5e5e5' }}>E</b>
                    </div>
                    <b className="informer-value">29%</b>
                  </li>
                </ul>
                </div>
                <div className="panel-block">
                <strong className="subtitle">Student’s Notes:</strong>
                <div className="text-content custom-form" style={{borderTop: '1px solid gray'}}>
                  <div className="jcf-scrollable height-22" style={{boxShadow: 'none'}}>
                  <div className="text-holder" style={{height: '100%', overflowY: 'scroll'}}>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore? re?  tincidunt ut laoreet.</p>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet do?</p>
                      <p>Hi Student, </p>
                      <p>I’m adding to your notes here.Maybe a suggestion or an answer to your question.</p>
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
    </div>)}
    <style jsx>
      {`
            .overlay {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 999;
            }
            #modal_video001 {
              z-index: 1003;
              opacity: 1;
              transform: scaleX(1) scaleY(1);
            }
            .modal {
              display: block;
              background-color: white;
              position: fixed;
              top: 10%;
              left: 10%;
              box-shadow: none;
            }
            .modal-answer-single {
              opacity: 1;
              visibility: visible;
              display: block !important;
              top: 0 !important;
              left: auto;
              right: 0;
              height: 100vh;
              max-weight: none;
              margin: 0 0 0 auto;
              border-radius: 0;
              width: 100%;
              transform-origin: 100% 0;
            }
            .modal-footer {
              background-color: white;
            }
            .modal-header {
              background: #ec693d linear-gradient(to right, #ec693d 0%, #649aab 61%, #30add6 87%, #18b5e9 100%);
              color: #fff;
              padding: 7px 10px 5px;
              min-height: 50px;
              display: flex;
            }
          `}
    </style>
  </Portal>);
  }
}

QuestionModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onCloseQuestionModal: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
};

export default QuestionModal;