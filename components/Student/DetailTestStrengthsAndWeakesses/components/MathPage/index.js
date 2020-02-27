import React from 'react';
import PropTypes from 'prop-types';
import AnswerRow from '../WritingPage/components/AnswerRow';


class MathPage extends React.Component {

  mapMathAnswers = () => {
    const { mathData: {sampleAnswers} } = this.props;
    return sampleAnswers.map(question => (
      <AnswerRow question={question} key={question.id} />
    ))
  }

  render() {
    return (
      <div className="slide">
        <div className="row"  style={{columns: '3 auto', marginLeft: '10px', marginRight: '10px'}}>
          <ol className="answers-list">
            {this.mapMathAnswers()}
          </ol>
        </div>
      </div>
    )
  }
}

MathPage.propTypes = {
  mathData: PropTypes.object.isRequired,
}
export default MathPage;
