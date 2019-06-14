import React from 'react';
import PropTypes from 'prop-types';
import { getIndicatorStatus } from './utils';

// TODO: Figure out how the client wants this data visualized and what these bar graphs actually mean
class StrengthsAndWeaknesses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: 'reading',
    };
  }

  onSetOpenSection = (event, openSection) => {
    event.preventDefault();
    this.setState({ openSection })
  }

  render() {
    const { openSection } = this.state;
    // eslint-disable-next-line no-unused-vars
    const { state: { reading, writing, math }, active } = this.props;
    return (
      <div className="card-block">
      <h2 className="h1">Strengths &amp; Weaknesses</h2>
      <div className="card-main-full card">
        <div className="tabs-container">
        <Choose>
          <When condition={active}>
            <div className="card-panel light-blue accent-2 white-text">
              <ul className="tabs row">
                <li className="tab col s4 l4" style={{ margin: '0' }}>
                  <a
                    href="#"
                    className={openSection === 'reading' ? 'active' : ''}
                    onClick={(event) => this.onSetOpenSection(event, 'reading')}
                  >
                    Reading
                  </a>
                </li>
                <li className="tab col s4 l4" style={{ margin: '0' }}>
                  <a
                    href="#"
                    className={openSection === 'writing' ? 'active' : ''}
                    onClick={(event) => this.onSetOpenSection(event, 'writing')}
                  >
                    Writing
                  </a>
                </li>
                <li className="tab col s4 l4" style={{ margin: '0' }}>
                  <a
                    href="#"
                    className={openSection === 'math' ? 'active' : ''}
                    onClick={(event) => this.onSetOpenSection(event, 'math')}
                  >
                    Math
                  </a>
                </li>
                <li className="indicator" style={getIndicatorStatus(openSection)}></li>
              </ul>
            </div>
            <div className="card-content tabs-content">
                <div id="tabs_tab01" className={openSection === 'reading' ? '' : 'tab-content'}>
                  <div className="row mb-0">
                    <div className="col s12 l5 xl4 chart-column">
                      <div className="chart-block chart-block-large">
                        <div className="js-donut-chart js-donut-large" data-stroke-width="32" data-source='./inc/score-data-reading.json'></div>
                        <div className="chart-text">
                          <span className="title">Reading</span>
                          <span className="value">{reading.correctAnswers}</span>
                          <span className="description">out of <b>{reading.totalAnswers}</b></span>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 l7 xl8">
                      <ul className="collapsible expandable collapsible-explain">
                        <li>
                          <div className="collapsible-header"><b>Explain This Graph</b></div>
                          <div className="collapsible-body">
                            <div className="row mb-0">
                              <div className="col l6">
                                <ul className="legend-list">
                                  <li>
                                    <div className="legend-frame">
                                      <span className="box red darken-2"></span>
                                      <strong className="text h3">Focus Here!</strong>
                                    </div>
                                    <p>Most people with your score would get these correct, but you got them wrong. Work on these and you can pick up some easy points!</p>
                                  </li>
                                  <li>
                                    <div className="legend-frame">
                                      <span className="box red lighten-5"></span>
                                      <strong className="text h3">Tough Gains</strong>
                                    </div>
                                    <p>You missed these, but so did most others with a similar score. You’ll likely ﬁnd easier gains elsewhere.</p>
                                  </li>
                                </ul>
                              </div>
                              <div className="col l6">
                                <ul className="legend-list">
                                  <li>
                                    <div className="legend-frame">
                                      <span className="box light-green darken-2"></span>
                                      <strong className="text h3">Well Done!</strong>
                                    </div>
                                    <p>You’re overachiving in this category compared to other with your score. Keep up the good work!</p>
                                  </li>
                                  <li>
                                    <div className="legend-frame">
                                      <span className="box  light-green lighten-4"></span>
                                      <strong className="text h3">Piece o’ Cake</strong>
                                    </div>
                                    <p>You answered these correctly like others with a similar score.</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="graphs-section">
                    <div className="graphs-block">
                      <div className="graph-row graph-row-title">
                        <div className="graph-col text-column">
                          <h3 className="graph-title">Passage Type</h3>
                        </div>
                        <div className="graph-col graph-container">
                          <div className="graph-linear">
                            <div className="part-left">
                              <div className="part-green-light" style={{ width: '100%' }}>
                                <div className="part-red" style={{ width: '80%' }}></div>
                              </div>
                            </div>
                            <div className="part-right">
                              <div className="part-red-light" style={{ width: '80%'}}>
                                <div className="part-green" style={{ width: '0' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="graph-col graph-info">
                          <span className="text-large">12</span>
                          <span className="text-small">out of</span>
                          <span className="text-large">18</span>
                        </div>
                      </div>
                      <div className="graph-row">
                        <div className="graph-col text-column">
                          <strong className="graph-subtitle">Science</strong>
                        </div>
                        <div className="graph-col graph-container">
                          <div className="graph-linear">
                            <div className="part-left">
                              <div className="part-green-light" style={{ width: '85%' }}>
                                <div className="part-red" style={{ width: '0' }}></div>
                              </div>
                            </div>
                            <div className="part-right">
                              <div className="part-red-light" style={{ width: '100%' }}>
                                <div className="part-green" style={{ width: '70%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="graph-col graph-info">
                          <span className="text-large">12</span>
                          <span className="text-small">out of</span>
                          <span className="text-large">18</span>
                        </div>
                      </div>
                      <div className="graph-row">
                        <div className="graph-col text-column">
                          <strong className="graph-subtitle">Informational Graphic Passage</strong>
                        </div>
                        <div className="graph-col graph-container">
                          <div className="graph-linear">
                            <div className="part-left">
                              <div className="part-green-light" style={{ width: '75%' }}>
                                <div className="part-red" style={{ width: '70%' }}></div>
                              </div>
                            </div>
                            <div className="part-right">
                              <div className="part-red-light" style={{ width: '70%' }}>
                                <div className="part-green" style={{ width: '0' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="graph-col graph-info">
                          <span className="text-large">12</span>
                          <span className="text-small">out of</span>
                          <span className="text-large">18</span>
                        </div>
                      </div>
                      <div className="graph-row">
                        <div className="graph-col text-column">
                          <strong className="graph-subtitle">History/Social Science</strong>
                        </div>
                        <div className="graph-col graph-container">
                          <div className="graph-linear">
                            <div className="part-left">
                              <div className="part-green-light" style={{ width: '85%' }}>
                                <div className="part-red" style={{ width: '5%' }}></div>
                              </div>
                            </div>
                            <div className="part-right">
                              <div className="part-red-light" style={{ width: '15%' }}>
                                <div className="part-green" style={{ width: '0' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="graph-col graph-info">
                          <span className="text-large">12</span>
                          <span className="text-small">out of</span>
                          <span className="text-large">18</span>
                        </div>
                      </div>
                      <div className="graph-row">
                        <div className="graph-col text-column">
                          <strong className="graph-subtitle">US &amp; World Literature</strong>
                        </div>
                        <div className="graph-col graph-container">
                          <div className="graph-linear">
                            <div className="part-left">
                              <div className="part-green-light" style={{ width: '45%' }}>
                                <div className="part-red" style={{ width: '85%' }}></div>
                              </div>
                            </div>
                            <div className="part-right">
                              <div className="part-red-light" style={{ width: '0' }}>
                                <div className="part-green" style={{ width: '0' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="graph-col graph-info">
                          <span className="text-large">12</span>
                          <span className="text-small">out of</span>
                          <span className="text-large">18</span>
                        </div>
                      </div>
                      <div className="graph-row">
                        <div className="graph-col text-column">
                          <strong className="graph-subtitle">Paired Passages</strong>
                        </div>
                        <div className="graph-col graph-container">
                          <div className="graph-linear">
                            <div className="part-left">
                              <div className="part-green-light" style={{ width: '35%' }}>
                                <div className="part-red" style={{ width: '0' }}></div>
                              </div>
                            </div>
                            <div className="part-right">
                              <div className="part-red-light" style={{ width: '60%' }}>
                                <div className="part-green" style={{ width: '10%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="graph-col graph-info">
                          <span className="text-large">12</span>
                          <span className="text-small">out of</span>
                          <span className="text-large">18</span>
                        </div>
                      </div>
                    </div>
                    <div className="graphs-block">
                      <div className="graph-row graph-row-title">
                        <div className="graph-col text-column">
                          <h3 className="graph-title">Question Type</h3>
                        </div>
                        <div className="graph-col graph-container">
                          <div className="graph-linear">
                            <div className="part-left">
                              <div className="part-green-light" style={{ width: '85%' }}>
                                <div className="part-red" style={{ width: '12%' }}></div>
                              </div>
                            </div>
                            <div className="part-right">
                              <div className="part-red-light" style={{ width: '95%' }}>
                                <div className="part-green" style={{ width: '0' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="graph-col graph-info">
                          <span className="text-large">12</span>
                          <span className="text-small">out of</span>
                          <span className="text-large">18</span>
                        </div>
                      </div>
                      {/* <!-- block with inners rows --> */}
                      <div className="graph-row-block">
                        <div className="graph-row graph-row-subtitle">
                          <div className="graph-col text-column">
                            <strong className="graph-subtitle">Citing Textual Evidence</strong>
                          </div>
                          <div className="graph-col graph-container">
                            <div className="graph-linear">
                              <div className="part-left">
                                <div className="part-green-light" style={{ width: '55%' }}>
                                  <div className="part-red" style={{ width: '0' }}></div>
                                </div>
                              </div>
                              <div className="part-right">
                                <div className="part-red-light" style={{ width: '70%' }}>
                                  <div className="part-green" style={{ width: '12%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="graph-col graph-info">
                            <span className="text-large">12</span>
                            <span className="text-small">out of</span>
                            <span className="text-large">18</span>
                          </div>
                        </div>
                        <div className="graph-row graph-row-inner">
                          <div className="graph-col text-column">
                            <strong className="graph-subtitle">Cite Text as Evidence</strong>
                          </div>
                          <div className="graph-col graph-container">
                            <div className="graph-linear">
                              <div className="part-left">
                                <div className="part-green-light" style={{ width: '20%' }}>
                                  <div className="part-red" style={{ width: '85%' }}></div>
                                </div>
                              </div>
                              <div className="part-right">
                                <div className="part-red-light" style={{ width: '70%' }}>
                                  <div className="part-green" style={{ width: '0' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="graph-col graph-info">
                            <span className="text-large">12</span>
                            <span className="text-small">out of</span>
                            <span className="text-large">18</span>
                          </div>
                        </div>
                        <div className="graph-row graph-row-inner">
                          <div className="graph-col text-column">
                            <strong className="graph-subtitle">Author’s Intention and Method</strong>
                          </div>
                          <div className="graph-col graph-container">
                            <div className="graph-linear">
                              <div className="part-left">
                                <div className="part-green-light" style={{ width: '55%' }}>
                                  <div className="part-red" style={{ width: '7%' }}></div>
                                </div>
                              </div>
                              <div className="part-right">
                                <div className="part-red-light" style={{ width: '15%' }}>
                                  <div className="part-green" style={{ width: '0' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="graph-col graph-info">
                            <span className="text-large">12</span>
                            <span className="text-small">out of</span>
                            <span className="text-large">18</span>
                          </div>
                        </div>
                        <div className="graph-row graph-row-inner">
                          <div className="graph-col text-column">
                            <strong className="graph-subtitle">Support / Refute a Claim</strong>
                          </div>
                          <div className="graph-col graph-container">
                            <div className="graph-linear">
                              <div className="part-left">
                                <div className="part-green-light" style={{ width: '47%' }}>
                                  <div className="part-red" style={{ width: '12%' }}></div>
                                </div>
                              </div>
                              <div className="part-right">
                                <div className="part-red-light" style={{ width: '0' }}>
                                  <div className="part-green" style={{ width: '0' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="graph-col graph-info">
                            <span className="text-large">12</span>
                            <span className="text-small">out of</span>
                            <span className="text-large">18</span>
                          </div>
                        </div>
                      </div>
                      <div className="graph-row-block">
                        <div className="graph-row graph-row-subtitle">
                          <div className="graph-col text-column">
                            <strong className="graph-subtitle">Reading Closely</strong>
                          </div>
                          <div className="graph-col graph-container">
                            <div className="graph-linear">
                              <div className="part-left">
                                <div className="part-green-light" style={{ width: '12%' }}>
                                  <div className="part-red" style={{ width: '0' }}></div>
                                </div>
                              </div>
                              <div className="part-right">
                                <div className="part-red-light" style={{ width: '55%' }}>
                                  <div className="part-green" style={{ width: '10%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="graph-col graph-info">
                            <span className="text-large">12</span>
                            <span className="text-small">out of</span>
                            <span className="text-large">18</span>
                          </div>
                        </div>
                        <div className="graph-row graph-row-inner">
                          <div className="graph-col text-column">
                            <strong className="graph-subtitle">Detail Question</strong>
                          </div>
                          <div className="graph-col graph-container">
                            <div className="graph-linear">
                              <div className="part-left">
                                <div className="part-green-light" style={{ width: '100%' }}>
                                  <div className="part-red" style={{ width: '8%' }}></div>
                                </div>
                              </div>
                              <div className="part-right">
                                <div className="part-red-light" style={{ width: '95%' }}>
                                  <div className="part-green" style={{ width: '0' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="graph-col graph-info">
                            <span className="text-large">12</span>
                            <span className="text-small">out of</span>
                            <span className="text-large">18</span>
                          </div>
                        </div>
                        <div className="graph-row graph-row-inner">
                          <div className="graph-col text-column">
                            <strong className="graph-subtitle">Support / Refute a Claim</strong>
                          </div>
                          <div className="graph-col graph-container">
                            <div className="graph-linear">
                              <div className="part-left">
                                <div className="part-green-light" style={{ width: '75%' }}>
                                  <div className="part-red" style={{ width: '0' }}></div>
                                </div>
                              </div>
                              <div className="part-right">
                                <div className="part-red-light" style={{ width: '100%' }}>
                                  <div className="part-green" style={{ width: '70%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="graph-col graph-info">
                            <span className="text-large">12</span>
                            <span className="text-small">out of</span>
                            <span className="text-large">18</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tabs_tab02" className={openSection === 'writing' ? '' : 'tab-content'}>
                  <h3>Tab 02 content</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quasi inventore expedita maxime, vero magnam architecto eius laudantium corrupti! Ut fuga sit corrupti, vitae cum temporibus sed dolore labore! Fugit.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolorem nihil minus, quasi, dicta cupiditate aut magni ea veniam natus provident eveniet tempore iure minima placeat distinctio ducimus quo cum.</p>
                </div>
                <div id="tabs_tab03" className={openSection === 'math' ? '' : 'tab-content'}>
                  <h3>Tab 03 content</h3>
                  <p>Expedita quibusdam sed, temporibus quasi dolorem iure non inventore quaerat sit mollitia dolores minima illo perspiciatis omnis delectus, recusandae quos, incidunt ratione.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, enim? Itaque reprehenderit, id eos quasi optio est. Soluta alias, minima consequuntur obcaecati odio maiores, molestiae, vel ipsum modi delectus enim!</p>
                </div>
              </div>
          </When>
          <Otherwise>
            <div className="card-panel white-text" style={{ backgroundColor: '#b2b2b2' }}>
              <h2>Areas for Improvement</h2>
            </div>
            <div className="card-content">
              <div className="card-note-box">
                <span className="title">Nothing to see here yet.</span>
                <span className="text-frame">As the this student takes practice tests and completes course work, we’ll track the student’s strengths and weaknesess. Check back here once the course begins.</span>
              </div>
            </div>
          </Otherwise>
        </Choose>
        </div>
      </div>
    </div>
    )
  }
}

StrengthsAndWeaknesses.propTypes = {
  state: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
}

export default StrengthsAndWeaknesses;
