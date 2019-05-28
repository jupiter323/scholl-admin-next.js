import React from 'react';
import PropTypes from 'prop-types';
import AnswerRow from './components/AnswerRow';

class WritingPage extends React.Component {
// need to change to unique key
   mapSampleAnswers = () => {
     const { sampleAnswers } = this.props;
     return sampleAnswers.map((question, index) => (
       <AnswerRow sampleAnswers={sampleAnswers} key={question.id} question={question} index={index} />
     ))
   }
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

WritingPage.propTypes = {
  sampleAnswers: PropTypes.array.isRequired,
};

export default WritingPage;