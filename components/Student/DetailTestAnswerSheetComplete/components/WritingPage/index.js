import React from 'react';
import PropTypes from 'prop-types';
import AnswerRow from './components/AnswerRow';

class WritingPage extends React.Component {

   mapSampleAnswers = ({sampleAnswers}) =>
   sampleAnswers.map((question, index) =>
   <AnswerRow sampleAnswers={sampleAnswers} key={question.id} question={question} index={index} />)
  render() {
    const { sampleAnswers } = this.props;
    return(
      <div className="slide">
      <div className="row">
        <div className="col s12 l4">
          <ol className="answers-list">
              {this.mapSampleAnswers({sampleAnswers})}
          </ol>
        </div>
        <div className="col s12 l4">
          <ol className="answers-list">
              {this.mapSampleAnswers({sampleAnswers})}
          </ol>
        </div>
        <div className="col s12 l4">
          <ol className="answers-list">
              {this.mapSampleAnswers({sampleAnswers})}
          </ol>
        </div>
      </div>
      </div>
    )
  }
}

WritingPage.propTypes = {
  sampleAnswers: PropTypes.object.isRequired,
};

export default WritingPage;