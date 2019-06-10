import React from 'react';
import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';
import sampleEssayScores from '../../utils/sampleEssayScores';


class EssayPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      readingScore: "",
      analysisScore: "",
      writingScore: "",
    }
  }

  onSetReadingScore = (readingScore) => this.setState({readingScore});
  onSetAnalysisScore= (analysisScore) => this.setState({analysisScore});
  onSetWritingScore = (writingScore) => this.setState({writingScore});
  render(){
    const { readingScore, writingScore, analysisScore } = this.state;
    return(
      <div className="slide">
      <div className="tabs-section tabs-content-lg-visible">
        <ul className="tabs tabs-flex">
          <li className="tab col s3"><a className="active" href="#reading"><b>Reading</b></a></li>
          <li className="tab col s3"><a href="#analysis"><b>Analysis</b></a></li>
          <li className="tab col s3"><a href="#writing"><b>Writing</b></a></li>
        </ul>
        <div className="tabs-content">
          <div className="row">
            <div className="col s12 l4">
              <div id="reading" className="tab-content">
                <div className="card-panel">
                  <h1 className="h2"><span className="hide-on-large-only">Score:</span><span className="visible-lg-inline">Reading |</span> <span className="quality">2 to 8</span></h1>
                  <div className="input-row row">
                    <div className="input-field col s8 m6 l5">
                      < Dropdown
                        value={getValueFromState(readingScore, sampleEssayScores)}
                        onChange={this.onSetReadingScore}
                        options={sampleEssayScores}
                        label="Score"
                        stateKey="state"
                        dropdownKey="state"
                        id="readingScore"
                        />
                    </div>
                  </div>
                  <div className="text-content custom-form" style={{borderTop: '1px solid gray'}} >
                    <div className="jcf-scrollable height-570 box scrollable" style={{boxShadow: 'none'}}>
                      <div className="text-container" style={{ height: '100%', overflowY: 'scroll'}}>
                        <div className="text-frame">
                          <h2>Score: 8 - Advanced</h2>
                          <p>The response demonstrates thorough comprehension of the source text.</p>
                          <p>The response shows an understanding of the text&#39;s central idea(s) and of most important details and how they interrelate, demonstrating a comprehensive understanding of the text.</p>
                          <p>The response is free of errors of fact or interpretation with regard to the text.</p>
                          <p>The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.</p>
                        </div>
                        <div className="text-frame">
                          <h2>Score: 6 - Proﬁcient</h2>
                          <p>The response demonstrates thorough comprehension of the source text.</p>
                          <p>The response shows an understanding of the text&#39;s central idea(s) and of most important details.</p>
                          <p>The response is free of errors of fact or interpretation with regard to the text.</p>
                          <p>The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.</p>
                        </div>
                        <div className="text-frame">
                          <h2>Score: 4 - Partial</h2>
                          <p>The response demonstrates thorough comprehension of the source text.</p>
                          <p>The response shows an understanding of the text&#39;s central idea(s) and of most important details.</p>
                          <p>The response is free of errors of fact or interpretation with regard to the text.</p>
                          <p>The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.</p>
                        </div>
                        <div className="text-frame">
                          <h2>Score: 2 - Inadequate</h2>
                          <p>The response demonstrates thorough comprehension of the source text.</p>
                          <p>The response fails to show an understanding of the text&#39;s central idea(s) and may include only details without reference to central idea(s). </p>
                          <p>The response may contain numerous errors of fact and/or interpretation with regard to the text. </p>
                          <p>The response makes little or no use of textual evidence (quotations, paraphrases, or both), demonstrating little or no understanding of the source text.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 l4">
              <div id="analysis" className="tab-content">
                <div className="card-panel">
                  <h1 className="h2"><span className="hide-on-large-only">Score:</span><span className="visible-lg-inline">Analysis |</span> <span className="quality">2 to 8</span></h1>
                  <div className="input-row row">
                    <div className="input-field col s8 m6 l5">
                    < Dropdown
                        value={getValueFromState(analysisScore, sampleEssayScores)}
                        onChange={this.onSetAnalysisScore}
                        options={sampleEssayScores}
                        label="Score"
                        stateKey="state"
                        dropdownKey="state"
                        id="analysisScore"
                        />
                    </div>
                  </div>
                  <div className="text-content custom-form" style={{borderTop: '1px solid gray'}} >
                    <div className="jcf-scrollable height-570 box scrollable" style={{boxShadow: 'none'}}>
                      <div className="text-container" style={{ height: '100%', overflowY: 'scroll'}}>
                        <div className="text-frame">
                          <h2>Score: 8 - Advanced</h2>
                          <p>The response demonstrates thorough comprehension of the source text.</p>
                          <p>The response shows an understanding of the text&#39;s central idea(s) and of most important details and how they interrelate, demonstrating a comprehensive understanding of the text.</p>
                          <p>The response is free of errors of fact or interpretation with regard to the text.</p>
                          <p>The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.</p>
                        </div>
                        <div className="text-frame">
                          <h2>Score: 6 - Proﬁcient</h2>
                          <p>The response demonstrates thorough comprehension of the source text.</p>
                          <p>The response shows an understanding of the text&#39;s central idea(s) and of most important details.</p>
                          <p>The response is free of errors of fact or interpretation with regard to the text.</p>
                          <p>The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.</p>
                        </div>
                        <div className="text-frame">
                          <h2>Score: 4 - Partial</h2>
                          <p>The response demonstrates thorough comprehension of the source text.</p>
                          <p>The response shows an understanding of the text&#39;s central idea(s) and of most important details.</p>
                          <p>The response is free of errors of fact or interpretation with regard to the text.</p>
                          <p>The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.</p>
                        </div>
                        <div className="text-frame">
                          <h2>Score: 2 - Inadequate</h2>
                          <p>The response demonstrates thorough comprehension of the source text.</p>
                          <p>The response fails to show an understanding of the text&#39;s central idea(s) and may include only details without reference to central idea(s). </p>
                          <p>The response may contain numerous errors of fact and/or interpretation with regard to the text. </p>
                          <p>The response makes little or no use of textual evidence (quotations, paraphrases, or both), demonstrating little or no understanding of the source text.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 l4">
              <div id="writing" className="tab-content">
                <div className="card-panel">
                  <h1 className="h2"><span className="hide-on-large-only">Score:</span><span className="visible-lg-inline">Writing |</span> <span className="quality">2 to 8</span></h1>
                  <div className="input-row row">
                    <div className="input-field col s8 m6 l5">
                      < Dropdown
                        value={getValueFromState(writingScore, sampleEssayScores)}
                        onChange={this.onSetWritingScore}
                        options={sampleEssayScores}
                        label="Score"
                        stateKey="state"
                        dropdownKey="state"
                        id="readingScore"
                        />
                    </div>
                  </div>
                  <div className="text-content custom-form" style={{borderTop: '1px solid gray'}} >
                    <div className="jcf-scrollable height-570 box scrollable" style={{boxShadow: 'none'}}>
                      <div className="text-container" style={{ height: '100%', overflowY: 'scroll'}}>
                        <div className="text-frame">
                          <h2>Score: 8 - Advanced</h2>
                          <p>The response demonstrates thorough comprehension of the source text.</p>
                          <p>The response shows an understanding of the text&#39;s central idea(s) and of most important details and how they interrelate, demonstrating a comprehensive understanding of the text.</p>
                          <p>The response is free of errors of fact or interpretation with regard to the text.</p>
                          <p>The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.</p>
                        </div>
                        <div className="text-frame">
                          <h2>Score: 6 - Proﬁcient</h2>
                          <p>The response demonstrates thorough comprehension of the source text.</p>
                          <p>The response shows an understanding of the text&#39;s central idea(s) and of most important details.</p>
                          <p>The response is free of errors of fact or interpretation with regard to the text.</p>
                          <p>The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.</p>
                        </div>
                        <div className="text-frame">
                          <h2>Score: 4 - Partial</h2>
                          <p>The response demonstrates thorough comprehension of the source text.</p>
                          <p>The response shows an understanding of the text&#39;s central idea(s) and of most important details.</p>
                          <p>The response is free of errors of fact or interpretation with regard to the text.</p>
                          <p>The response makes skillful use of textual evidence (quotations, paraphrases, or both), demonstrating a complete understanding of the source text.</p>
                        </div>
                        <div className="text-frame">
                          <h2>Score: 2 - Inadequate</h2>
                          <p>The response demonstrates thorough comprehension of the source text.</p>
                          <p>The response fails to show an understanding of the text&#39;s central idea(s) and may include only details without reference to central idea(s). </p>
                          <p>The response may contain numerous errors of fact and/or interpretation with regard to the text. </p>
                          <p>The response makes little or no use of textual evidence (quotations, paraphrases, or both), demonstrating little or no understanding of the source text.</p>
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
    </div>
    )
  }
}

export default EssayPage;