import React from 'react';
import PropTypes from 'prop-types';
import AnswerRow from '../WritingPage/components/AnswerRow';


class MathNoCalcPage extends React.Component {

  mapMathNoCalcAnswers = () => {
    const { mathNoCalc: {sampleAnswers} } = this.props;
    return sampleAnswers.map(question => (
      <AnswerRow question={question} />
    ))
  }

  render() {

    return (
      <div className="slide">
        <div className="row">
          <div className="col s12 l4">
            <ol className="answers-list">
              {this.mapMathNoCalcAnswers()}
            </ol>
          </div>
          <div className="col s12 l4">
            <ol className="answers-list">
              {this.mapMathNoCalcAnswers()}
            </ol>
          </div>
          <div className="col s12 l4">
            <ol className="answers-list">
              {this.mapMathNoCalcAnswers()}
            </ol>
          </div>
        </div>
      </div>

    )
  }
}

MathNoCalcPage.propTypes = {
  mathNoCalc: PropTypes.object.isRequired,
}
export default MathNoCalcPage;