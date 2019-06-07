import React from 'react';
import PropTypes from 'prop-types';
import AnswerRow from '../WritingPage/components/AnswerRow';


class MathCalculatorPage extends React.Component {

  mapMathCalculatorAnswers = () => {
    const { mathCalculator: {sampleAnswers} } = this.props;
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
              {this.mapMathCalculatorAnswers()}
            </ol>
          </div>
          <div className="col s12 l4">
            <ol className="answers-list">
              {this.mapMathCalculatorAnswers()}
            </ol>
          </div>
          <div className="col s12 l4">
            <ol className="answers-list">
              {this.mapMathCalculatorAnswers()}
            </ol>
          </div>
        </div>
      </div>

    )
  }
}

MathCalculatorPage.propTypes = {
  mathCalculator: PropTypes.object.isRequired,
}
export default MathCalculatorPage;