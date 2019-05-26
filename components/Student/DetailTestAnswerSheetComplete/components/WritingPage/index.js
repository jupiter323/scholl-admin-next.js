import React from 'react';
import sampleAnswers from '../../utils/sampleWritingTestResults';
import AnswerRow from './components/AnswerRow';

class WritingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sampleAnswers,
    }
  };

  mapSampleAnswers = () =>
    sampleAnswers.map((question, index) =>
      <AnswerRow key={question.id} question={question} index={index} /> )

      render() {
    return(
      <div className="slide">
      <div className="row">
        <div className="col s12 l4">
          <ol className="answers-list">
              {this.mapSampleAnswers()}
          </ol>
        </div>
        <div className="col s12 l4">
          <ol className="answers-list">
              {this.mapSampleAnswers()}
          </ol>
        </div>
        <div className="col s12 l4">
          <ol className="answers-list">
              {this.mapSampleAnswers()}
          </ol>
        </div>
      </div>
      </div>
    )
  }
}

export default WritingPage;