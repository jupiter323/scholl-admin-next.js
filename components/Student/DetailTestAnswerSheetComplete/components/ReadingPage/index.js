import React from 'react';
import PropTypes from 'prop-types';

const ReadingPage = () => (
  <div className="slide">
    <div className="container-sm">
      <div className="row mb-0">
        <div className="col s12 l5 xl4 chart-column">
          <div className="chart-block chart-block-large">
            <div className="js-donut-chart js-donut-large" data-stroke-width="32" data-source='./inc/score-data-reading.json'></div>
            <div className="chart-text">
              <span classNam="title">Reading</span>
              <span classNam="value">39</span>
              <span classNam="description">out of <b>52</b></span>
            </div>
          </div>
        </div>
        <div className="col s12 l7 xl8">
          <ul classNam="collapsible expandable collapsible-explain">
            <li>
              <div className="collapsible-header"><b>Explain This Graph</b></div>
              <div className="collapsible-body">
                <div className="row mb-0">
                  <div className="col l6">
                    <ul classNam="legend-list">
                      <li>
                        <div className="legend-frame">
                          <span classNam="box red darken-2"></span>
                          <strong classNam="text h3">Focus Here!</strong>
                        </div>
                        <p>Most people with your score would get these correct, but you got them wrong. Work on these and you can pick up some easy points!</p>
                      </li>
                      <li>
                        <div className="legend-frame">
                          <span classNam="box red lighten-5"></span>
                          <strong classNam="text h3">Tough Gains</strong>
                        </div>
                        <p>You missed these, but so did most others with a similar score. You’ll likely ﬁnd easier gains elsewhere.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col l6">
                    <ul classNam="legend-list">
                      <li>
                        <div className="legend-frame">
                          <span classNam="box light-green darken-2"></span>
                          <strong classNam="text h3">Well Done!</strong>
                        </div>
                        <p>You’re overachiving in this category compared to other with your score. Keep up the good work!</p>
                      </li>
                      <li>
                        <div className="legend-frame">
                          <span classNam="box  light-green lighten-4"></span>
                          <strong classNam="text h3">Piece o’ Cake</strong>
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
              <h3 classNam="graph-title">Passage Type</h3>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear">
                <div className="part-left">
                  <div className="part-green-light" style={{width: "100%"}}>
                    <div className="part-red" style={{width: "80%"}}></div>
                  </div>
                </div>
                <div className="part-right">
                  <div className="part-red-light" style={{width: "80%"}}>
                    <div className="part-green"style={{width: "0%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span classNam="text-large">12</span>
              <span classNam="text-small">out of</span>
              <span classNam="text-large">18</span>
            </div>
          </div>
          <div className="graph-row">
            <div className="graph-col text-column">
              <strong classNam="graph-subtitle">Science</strong>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear">
                <div className="part-left">
                  <div className="part-green-light" style={{width: "85%"}}>
                    <div className="part-red" style={{width: "0%"}}></div>
                  </div>
                </div>
                <div className="part-right">
                  <div className="part-red-light" style={{width: "100%"}}>
                    <div className="part-green"style={{width: "70%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span classNam="text-large">12</span>
              <span classNam="text-small">out of</span>
              <span classNam="text-large">18</span>
            </div>
          </div>
          <div className="graph-row">
            <div className="graph-col text-column">
              <strong classNam="graph-subtitle">Informational Graphic Passage</strong>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear">
                <div className="part-left">
                  <div className="part-green-light" style={{width: "75%"}}>
                    <div className="part-red" style={{width: "70%"}}></div>
                  </div>
                </div>
                <div className="part-right">
                  <div className="part-red-light" style={{width: "70%"}}>
                    <div className="part-green" style={{width: "0%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span classNam="text-large">12</span>
              <span classNam="text-small">out of</span>
              <span classNam="text-large">18</span>
            </div>
          </div>
          <div className="graph-row">
            <div className="graph-col text-column">
              <strong classNam="graph-subtitle">History/Social Science</strong>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear">
                <div className="part-left">
                  <div className="part-green-light" style={{width: "85%"}}>
                    <div className="part-red" style={{width: "5%"}}></div>
                  </div>
                </div>
                <div className="part-right">
                  <div className="part-red-light" style={{width: "15%"}}>
                    <div className="part-green" style={{width: "0%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span classNam="text-large">12</span>
              <span classNam="text-small">out of</span>
              <span classNam="text-large">18</span>
            </div>
          </div>
          <div className="graph-row">
            <div className="graph-col text-column">
              <strong classNam="graph-subtitle">US &amp; World Literature</strong>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear">
                <div className="part-left">
                  <div className="part-green-light" style={{width: "45%"}}>
                    <div className="part-red" style={{width: "85%"}}></div>
                  </div>
                </div>
                <div className="part-right">
                  <div className="part-red-light" style={{width: "0%"}}>
                    <div className="part-green" style={{width: "0%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span classNam="text-large">12</span>
              <span classNam="text-small">out of</span>
              <span classNam="text-large">18</span>
            </div>
          </div>
          <div className="graph-row">
            <div className="graph-col text-column">
              <strong classNam="graph-subtitle">Paired Passages</strong>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear">
                <div className="part-left">
                  <div className="part-green-light" style={{width: "35%"}}>
                    <div className="part-red" style={{width: "0%"}}></div>
                  </div>
                </div>
                <div className="part-right">
                  <div className="part-red-light" style={{width: "60%"}}>
                    <div className="part-green" style={{width: "10%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span classNam="text-large">12</span>
              <span classNam="text-small">out of</span>
              <span classNam="text-large">18</span>
            </div>
          </div>
        </div>
        <div className="graphs-block">
          <div className="graph-row graph-row-title">
            <div className="graph-col text-column">
              <h3 classNam="graph-title">Question Type</h3>
            </div>
            <div className="graph-col graph-container">
              <div className="graph-linear">
                <div className="part-left">
                  <div className="part-green-light" style={{width: "85%"}}>
                    <div className="part-red" style={{width: "12%"}}></div>
                  </div>
                </div>
                <div className="part-right">
                  <div className="part-red-light" style={{width: "95%"}}>
                    <div className="part-green" style={{width: "0%"}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-col graph-info">
              <span classNam="text-large">12</span>
              <span classNam="text-small">out of</span>
              <span classNam="text-large">18</span>
            </div>
          </div>
{/* block with inners rows */}
          <div className="graph-row-block">
            <div className="graph-row graph-row-subtitle">
              <div className="graph-col text-column">
                <strong classNam="graph-subtitle">Citing Textual Evidence</strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear">
                  <div className="part-left">
                    <div className="part-green-light" style={{width: "55%"}}>
                      <div className="part-red" style={{width: "0%"}}></div>
                    </div>
                  </div>
                  <div className="part-right">
                    <div className="part-red-light" style={{width: "70%"}}>
                      <div className="part-green" style={{width: "12%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span classNam="text-large">12</span>
                <span classNam="text-small">out of</span>
                <span classNam="text-large">18</span>
              </div>
            </div>
            <div className="graph-row graph-row-inner">
              <div className="graph-col text-column">
                <strong classNam="graph-subtitle">Cite Text as Evidence</strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear">
                  <div className="part-left">
                    <div className="part-green-light" style={{width: "20%"}}>
                      <div className="part-red" style={{width: "85%"}}></div>
                    </div>
                  </div>
                  <div className="part-right">
                    <div className="part-red-light" style={{width: "70%"}}>
                      <div className="part-green" style={{width: "0%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span classNam="text-large">12</span>
                <span classNam="text-small">out of</span>
                <span classNam="text-large">18</span>
              </div>
            </div>
            <div className="graph-row graph-row-inner">
              <div className="graph-col text-column">
                <strong classNam="graph-subtitle">Author’s Intention and Method</strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear">
                  <div className="part-left">
                    <div className="part-green-light" style={{width: "55%"}}>
                      <div className="part-red" style={{width: "7%"}}></div>
                    </div>
                  </div>
                  <div className="part-right">
                    <div className="part-red-light" style={{width: "15%"}}>
                      <div className="part-green" style={{width: "0%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span classNam="text-large">12</span>
                <span classNam="text-small">out of</span>
                <span classNam="text-large">18</span>
              </div>
            </div>
            <div className="graph-row graph-row-inner">
              <div className="graph-col text-column">
                <strong classNam="graph-subtitle">Support / Refute a Claim</strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear">
                  <div className="part-left">
                    <div className="part-green-light" style={{width: "47%"}}>
                      <div className="part-red" style={{width: "12%"}}></div>
                    </div>
                  </div>
                  <div className="part-right">
                    <div className="part-red-light" style={{width: "0%"}}>
                      <div className="part-green" style={{width: "0%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span classNam="text-large">12</span>
                <span classNam="text-small">out of</span>
                <span classNam="text-large">18</span>
              </div>
            </div>
          </div>
          <div className="graph-row-block">
            <div className="graph-row graph-row-subtitle">
              <div className="graph-col text-column">
                <strong classNam="graph-subtitle">Reading Closely</strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear">
                  <div className="part-left">
                    <div className="part-green-light" style={{width: "12%"}}>
                      <div className="part-red" style={{width: "0%"}}></div>
                    </div>
                  </div>
                  <div className="part-right">
                    <div className="part-red-light" style={{width: "55%"}}>
                      <div className="part-green" style={{width: "10%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span classNam="text-large">12</span>
                <span classNam="text-small">out of</span>
                <span classNam="text-large">18</span>
              </div>
            </div>
            <div className="graph-row graph-row-inner">
              <div className="graph-col text-column">
                <strong classNam="graph-subtitle">Detail Question</strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear">
                  <div className="part-left">
                    <div className="part-green-light" style={{width: "100%"}}>
                      <div className="part-red" style={{width: "8%"}}></div>
                    </div>
                  </div>
                  <div className="part-right">
                    <div className="part-red-light" style={{width: "95%"}}>
                      <div className="part-green" style={{width: "0%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span classNam="text-large">12</span>
                <span classNam="text-small">out of</span>
                <span classNam="text-large">18</span>
              </div>
            </div>
            <div className="graph-row graph-row-inner">
              <div className="graph-col text-column">
                <strong classNam="graph-subtitle">Support / Refute a Claim</strong>
              </div>
              <div className="graph-col graph-container">
                <div className="graph-linear">
                  <div className="part-left">
                    <div className="part-green-light" style={{width: "75%"}}>
                      <div className="part-red" style={{width: "0%"}}></div>
                    </div>
                  </div>
                  <div className="part-right">
                    <div className="part-red-light" style={{width: "100%"}}>
                      <div className="part-green" style={{width: "70%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-col graph-info">
                <span classNam="text-large">12</span>
                <span classNam="text-small">out of</span>
                <span classNam="text-large">18</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ReadingPage.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ReadingPage;
