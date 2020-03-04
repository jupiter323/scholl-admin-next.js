import React from 'react';
import PropTypes from 'prop-types';
import AnswerRow from '../WritingPage/components/AnswerRow';


class ReadingPage extends React.Component {

  mapMathNoCalcAnswers = () => {
    const { mathNoCalc: {sampleAnswers} } = this.props;
    return sampleAnswers.map(question => (
      <AnswerRow question={question} key={question.id} />
    ))
  }

  render() {
    return (
      <div className="slide" id = "readingAnswerSheetImg">
        <div className="row"  style={{columns: '3 auto', marginLeft: '10px', marginRight: '10px'}}>
          <ol className="answers-list">
            {this.mapMathNoCalcAnswers()}
          </ol>
        </div>
      </div>
    )
  }
}

ReadingPage.propTypes = {
  mathNoCalc: PropTypes.object.isRequired,
}
export default ReadingPage;
