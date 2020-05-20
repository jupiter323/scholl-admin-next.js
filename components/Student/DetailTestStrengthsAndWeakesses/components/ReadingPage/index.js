import React from 'react';
import PropTypes from 'prop-types';
import GroupBlock from './components/GroupBlock';

class ReadingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentScores: [],
    };
  }

  componentDidMount = () => {
    const {scores: {children}} = this.props;
    this.setState({
      parentScores: children,
    });
  };

  mapGroupBlcok = () => {
    console.log("OKK")
    const {parentScores} = this.state;

    return parentScores.map(group => {
      return <GroupBlock data={group} />;
    });
  };

  render() {
    const {scores} = this.props;
    console.log('ReadingScores:', scores);
    return (
      <div className="slide">
        <div className="container-sm">
          <div className="graphs-section graphs-students" id="readingAnalysisBarImg">
            {this.mapGroupBlcok()}
{/* 
            <div className="graphs-block">
              <div className="graph-row graph-row-title">
                <div className="graph-col text-column">
                  <h3 className="graph-title">
                    <span className="badge-rounded-sm light-green lighten-1 badge white-text">
                      100%
                    </span>
                    Question Type
                  </h3>
                </div>
                <div className="graph-col graph-container">
                  <div className="graph-linear-students">
                    <div className="graph-holder" style={{width: '100%'}}>
                      <div className="graph-admin">
                        <div className="part-red" style={{width: '15%'}} />
                      </div>
                      <div className="graph-summary">
                        <div className="graph-summary-holder" style={{width: '100%'}}>
                          <div className="block-red" style={{width: '4%', left: '35%'}} />
                          <div className="block-red" style={{width: '5%', left: '48%'}} />
                          <div className="block-red" style={{width: '2%', left: '55%'}} />
                          <div className="block-red" style={{width: '7%', left: '60%'}} />
                          <div className="block-red" style={{width: '10%', left: '70%'}} />
                          <div className="block-red" style={{width: '1%', left: '83%'}} />
                          <div className="block-red" style={{width: '1%', left: '85%'}} />
                        </div>
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
              <div className="graph-row-block">
                <div className="graph-row graph-row-subtitle">
                  <div className="graph-col text-column">
                    <strong className="graph-subtitle">
                      <span className="badge-rounded-sm light-green lighten-1 darken-1 badge white-text">
                        77%
                      </span>
                      Citing Textual Evidence
                    </strong>
                  </div>
                  <div className="graph-col graph-container">
                    <div className="graph-linear-students">
                      <div className="graph-holder" style={{width: '48%'}}>
                        <div className="graph-admin">
                          <div className="part-red" style={{width: '25%'}} />
                        </div>
                        <div className="graph-summary">
                          <div className="graph-summary-holder" style={{width: '100%'}} />
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
                    <strong className="graph-subtitle">
                      <span className="badge-rounded-sm red darken-5 badge white-text">35%</span>
                      Cite Text as Evidence
                    </strong>
                  </div>
                  <div className="graph-col graph-container">
                    <div className="graph-linear-students">
                      <div className="graph-holder" style={{width: '20%'}}>
                        <div className="graph-admin">
                          <div className="part-red" style={{width: '0%'}} />
                        </div>
                        <div className="graph-summary">
                          <div className="graph-summary-holder" style={{width: '100%'}} />
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
                    <strong className="graph-subtitle">
                      <span className="badge-rounded-sm light-green lighten-1 darken-2 badge white-text">
                        60%
                      </span>
                      Author’s Intention and Method
                    </strong>
                  </div>
                  <div className="graph-col graph-container">
                    <div className="graph-linear-students">
                      <div className="graph-holder" style={{width: '15%'}}>
                        <div className="graph-admin">
                          <div className="part-red" style={{width: '100%'}} />
                        </div>
                        <div className="graph-summary">
                          <div className="graph-summary-holder" style={{width: '100%'}}>
                            <div
                              className="block-red"
                              style={{
                                width: '100%',
                                left: '0%',
                              }}
                            />
                          </div>
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
                    <strong className="graph-subtitle">
                      <span className="badge-rounded-sm red darken-5 badge white-text">35%</span>
                      Support / Refute a Claim
                    </strong>
                  </div>
                  <div className="graph-col graph-container">
                    <div className="graph-linear-students">
                      <div className="graph-holder" style={{width: '25%'}}>
                        <div className="graph-admin">
                          <div className="part-red" style={{width: '15%'}} />
                        </div>
                        <div className="graph-summary">
                          <div className="graph-summary-holder" style={{width: '100%'}} />
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
                    <strong className="graph-subtitle">
                      <span className="badge-rounded-sm light-green lighten-1 darken-2 badge white-text">
                        60%
                      </span>
                      Reading Closely
                    </strong>
                  </div>
                  <div className="graph-col graph-container">
                    <div className="graph-linear-students">
                      <div className="graph-holder" style={{width: '90%'}}>
                        <div className="graph-admin">
                          <div className="part-red" style={{width: '25%'}} />
                        </div>
                        <div className="graph-summary">
                          <div className="graph-summary-holder" style={{width: '100%'}}>
                            <div className="block-red" style={{width: '4%', left: '35%'}} />
                            <div className="block-red" style={{width: '5%', left: '48%'}} />
                            <div className="block-red" style={{width: '2%', left: '55%'}} />
                            <div className="block-red" style={{width: '7%', left: '60%'}} />
                            <div
                              className="block-red"
                              style={{
                                width: '10%',
                                left: '70%',
                              }}
                            />
                            <div
                              className="block-red"
                              style={{
                                width: '1%',
                                left: '100%',
                              }}
                            />
                          </div>
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
                    <strong className="graph-subtitle">
                      <span className="badge-rounded-sm light-green lighten-1 badge white-text">
                        96%
                      </span>
                      Detail Question
                    </strong>
                  </div>
                  <div className="graph-col graph-container">
                    <div className="graph-linear-students">
                      <div className="graph-holder" style={{width: '55%'}}>
                        <div className="graph-admin">
                          <div className="part-red" style={{width: '55%'}} />
                        </div>
                        <div className="graph-summary">
                          <div className="graph-summary-holder" style={{width: '100%'}}>
                            <div className="block-red" style={{width: '4%', left: '35%'}} />
                            <div className="block-red" style={{width: '5%', left: '48%'}} />
                            <div className="block-red" style={{width: '2%', left: '55%'}} />
                            <div className="block-red" style={{width: '7%', left: '60%'}} />
                            <div
                              className="block-red"
                              style={{
                                width: '10%',
                                left: '70%',
                              }}
                            />
                            <div
                              className="block-red"
                              style={{
                                width: '1%',
                                left: '100%',
                              }}
                            />
                          </div>
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
                    <strong className="graph-subtitle">
                      <span className="badge-rounded-sm light-green lighten-1 darken-1 badge white-text">
                        80%
                      </span>
                      Support / Refute a Claim
                    </strong>
                  </div>
                  <div className="graph-col graph-container">
                    <div className="graph-linear-students">
                      <div className="graph-holder" style={{width: '45%'}}>
                        <div className="graph-admin">
                          <div className="part-red" style={{width: '15%'}} />
                        </div>
                        <div className="graph-summary">
                          <div className="graph-summary-holder" style={{width: '100%'}}>
                            <div className="block-red" style={{width: '4%', left: '35%'}} />
                            <div className="block-red" style={{width: '5%', left: '48%'}} />
                            <div className="block-red" style={{width: '2%', left: '55%'}} />
                            <div className="block-red" style={{width: '7%', left: '60%'}} />
                            <div
                              className="block-red"
                              style={{
                                width: '10%',
                                left: '70%',
                              }}
                            />
                            <div
                              className="block-red"
                              style={{
                                width: '1%',
                                left: '100%',
                              }}
                            />
                          </div>
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
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

ReadingPage.propTypes = {
  scores: PropTypes.object.isRequired,
};

export default ReadingPage;
