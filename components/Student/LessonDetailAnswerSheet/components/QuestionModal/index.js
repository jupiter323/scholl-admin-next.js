/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../../../../Portal';
import ClickOffComponentWrapper from '../../../../ClickOffComponentWrapper';

class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    }
  }

  render() {
    const { open, onCloseModal } = this.props;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={onCloseModal}>
              <div id="modal_video001" className="modal modal-answer">
                <div className="modal-header row mb-0">
                  <div className="col s10">
                    <span className="subtitle">Special Right Triagles</span>
                    <span className="title">Challenge Problem #1</span>
                  </div>
                  <div className="col s2 right-align">
                    <a href="#" className="close modal-close"><i className="icon-close-thin"></i></a>
                  </div>
                </div>
                <div className="modal-content">
                  <div className="d-flex row mb-0">
                    <div className="col s12 l6 order-lg-2">
                      <div className="card-panel">
                        <div className="video-frame">
                          <div className="embed-responsive embed-responsive-16by9">
                            <video id="video001" className="in-modal embed-responsive-item" data-current-time="0" poster="images/big_buck_bunny.jpg" preload="metadata" controls playsinline>
                            <source type="video/mp4" src="./media/video.mp4" />
                            </video>
                          </div>
                        </div>
                      </div>
                      <div className="card-panel">
                        <div className="panel-block">
                          <div className="d-flex align-items-center row mb-0">
                            <div className="col">
                              <span className="status-answer" style={{ color: '#c0272d' }}>
                                <i className="icon-flag"></i><b className="status-text">Flagged</b>
                              </span>
                            </div>
                            <div className="col">
                              <label>
                                <input type="checkbox" className="filled-in" />
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
                          <div className="text-content custom-form">
                            <div className="jcf-scrollable height-22">
                              <div className="text-holder">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore? re?  tincidunt ut laoreet.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet do?</p>
                                <p>Hi Student, <br /> I’m adding to your notes here. Maybe a suggestion or an answer to your question. <br />-Tutor</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 l6 order-lg-1">
                      <div className="card-panel">
                        <div className="text-content custom-form">
                          <div className="jcf-scrollable height-45">
                            <div className="text-holder">
                              <h4>Question 1-10 are based on the following passage.</h4>
                              <p><strong>Why do we use it?</strong> <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!</p>
                              <p><strong>Where does it come from?</strong><br /> Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-panel">
                        <strong className="h3 subtitle">{`As it used in line 14. "convention" most nearly means`}</strong>
                        <ul className="answer-full-list">
                          <li className="answer-block">
                            <div className="answer-box">
                              <b className="answer-circle">A.</b>
                              <span className="answer-text">ceremony</span>
                            </div>
                          </li>
                          <li className="answer-block">
                            <div className="answer-box" style={{ backgroundColor: '#db1d41' }}>
                              <b className="answer-circle">B.</b>
                              <span className="answer-text">ceremony</span>
                            </div>
                          </li>
                          <li className="answer-block">
                            <div className="answer-box" style={{ backgroundColor: '#32955e' }}>
                              <b className="answer-circle">C.</b>
                              <span className="answer-text">generalization</span>
                            </div>
                          </li>
                          <li className="answer-block">
                            <div className="answer-box">
                              <b className="answer-circle">D.</b>
                              <span className="answer-text">code</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ClickOffComponentWrapper>
          </div>
        )}
        <style jsx>
          {`
            .overlay {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 9999;
            }
            .modal-answer {
              opacity: 1;
              visibility: visible;
            }
            .card-modal {
              margin: 0;
              border-radius: 6px;
            }
            .modal-custom {
              opacity: 1;
              visibility: visible;
            }
            .modal-footer {
              background-color: white;
            }
          `}
        </style>
      </Portal>
    );
  }
}

QuestionModal.propTypes = {
  open: PropTypes.bool.isRequired,
  // question: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
}

export default QuestionModal;

// <!-- Modal video 002 -->
//   <div id="modal_video002" class="modal modal-answer">
//     <div class="modal-header row mb-0">
//       <div class="col s10">
//         <span class="subtitle">Special Right Triagles</span>
//         <span class="title">Challenge Problem #1</span>
//       </div>
//       <div class="col s2 right-align">
//         <a href="#!" class="close modal-close"><i class="icon-close-thin"></i></a>
//       </div>
//     </div>
//     <div class="modal-content">
//       <div class="d-flex row mb-0">
//         <div class="col s12 l6 order-lg-2">
//           <div class="card-panel">
//             <div class="video-frame">
//               <div class="embed-responsive embed-responsive-16by9">
//                 <video id="video002" class="in-modal embed-responsive-item" data-current-time="0" poster="images/big_buck_bunny.jpg" preload="metadata" controls playsinline>
//                 <source type="video/mp4" src="./media/video.mp4" />
//                 </video>
//               </div>
//             </div>
//           </div>
//           <div class="card-panel">
//             <div class="panel-block">
//               <div class="d-flex align-items-center row mb-0">
//                 <div class="col">
//                   <span class="status-answer" style="color: #c0272d">
//                     <i class="icon-flag"></i><b class="status-text">Flagged</b>
//                   </span>
//                 </div>
//                 <div class="col">
//                   <label>
//                     <input type="checkbox" class="filled-in">
//                     <span><b>Reviewed with Student</b></span>
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div class="panel-block">
//               <ul class="informers-list">
//                 <li class="informer-block">
//                   <div class="informer-box" style="width: 10%; background-color: #e5e5e5;">
//                     <b class="informer-circle" style="background-color: #e5e5e5;">A</b>
//                   </div>
//                   <b class="informer-value">10%</b>
//                 </li>
//                 <li class="informer-block">
//                   <div class="informer-box" style="width: 16%; background-color: #db1d41;">
//                     <b class="informer-circle" style="background-color: #db1d41; color: #fff;">B</b>
//                   </div>
//                   <b class="informer-value">16%</b>
//                 </li>
//                 <li class="informer-block">
//                   <div class="informer-box" style="width: 37%; background-color: #d3efde;">
//                     <b class="informer-circle" style="background-color: #32955c; color: #fff;">C</b>
//                   </div>
//                   <b class="informer-value">37%</b>
//                 </li>
//                 <li class="informer-block">
//                   <div class="informer-box" style="width: 8%; background-color: #e5e5e5;">
//                     <b class="informer-circle" style="background-color: #e5e5e5;">D</b>
//                   </div>
//                   <b class="informer-value">8%</b>
//                 </li>
//                 <li class="informer-block">
//                   <div class="informer-box" style="width: 29%; background-color: #e5e5e5;">
//                     <b class="informer-circle" style="background-color: #e5e5e5;">E</b>
//                   </div>
//                   <b class="informer-value">29%</b>
//                 </li>
//               </ul>
//             </div>
//             <div class="panel-block">
//               <strong class="subtitle">Student’s Notes:</strong>
//               <div class="text-content custom-form">
//                 <div class="jcf-scrollable height-22">
//                   <div class="text-holder">
//                     <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore?  tincidunt ut laoreet dolore? re?  tincidunt ut laoreet.</p>
//                     <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet do?</p>
//                     <p>Hi Student, <br /> I’m adding to your notes here. Maybe a suggestion or an answer to your question. <br />-Tutor</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="col s12 l6 order-lg-1">
//           <div class="card-panel">
//             <div class="text-content custom-form">
//               <div class="jcf-scrollable height-45">
//                 <div class="text-holder">
//                   <h4>Question 1-10 are based on the following passage.</h4>
//                   <p><strong>Why do we use it?</strong> <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro id eius voluptatem explicabo harum eligendi modi minus velit, aliquam, repellat magni ab obcaecati. Maxime rerum beatae numquam aliquam vel soluta. Voluptatum architecto iusto totam error aliquid, et excepturi accusamus omnis, labore magni recusandae odit maxime. Velit laborum ab enim minima provident atque. Aperiam possimus quo maxime dolores voluptatem consequatur explicabo architecto corrupti, hic, laborum suscipit sequi voluptates dignissimos. Nostrum nesciunt possimus, eveniet dignissimos fugiat!</p>
//                   <p><strong>Where does it come from?</strong><br /> Inventore quod obcaecati labore aut molestiae illum sint harum, corrupti, neque incidunt sunt optio commodi, sequi aliquam vel mollitia aspernatur ad! Atque. Itaque earum suscipit voluptatem magni quaerat officia repudiandae.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="card-panel">
//             <strong class="h3 subtitle">As it used in line 14. "convention" most nearly means</strong>
//             <ul class="answer-full-list">
//               <li class="answer-block">
//                 <div class="answer-box">
//                   <b class="answer-circle">A.</b>
//                   <span class="answer-text">ceremony</span>
//                 </div>
//               </li>
//               <li class="answer-block">
//                 <div class="answer-box" style={{ backgroundColor: '#db1d41' }}>
//                   <b class="answer-circle">B.</b>
//                   <span class="answer-text">ceremony</span>
//                 </div>
//               </li>
//               <li class="answer-block">
//                 <div class="answer-box" style="background-color: #32955e;">
//                   <b class="answer-circle">C.</b>
//                   <span class="answer-text">generalization</span>
//                 </div>
//               </li>
//               <li class="answer-block">
//                 <div class="answer-box">
//                   <b class="answer-circle">D.</b>
//                   <span class="answer-text">code</span>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
