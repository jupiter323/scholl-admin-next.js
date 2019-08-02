import React from 'react';
import PropTypes from 'prop-types';
import AnswerSheetNavBar from './components/AnswerSheetNavBar';
import ReadingPage from './components/ReadingPage';
import WritingPage from './components/WritingPage';
import MathNoCalcPage from './components/MathNoCalcPage';
import MathCalculatorPage from './components/MathCalculatorPage';
import EssayPage from './components/EssayPage';

class DetailTestAnswerSheetComplete extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      activeSlide: 'reading',
    };
  }

  onSetActiveSlide = (activeSlide) => this.setState({ activeSlide })

  renderCurrentSlide = () => {
    const { activeSlide } = this.state;
    const { testScoreDetails:  { reading, mathNoCalc, mathCalculator, writing: { sampleAnswers}}} = this.props;
    if (activeSlide === 'reading') {
      return <ReadingPage reading={reading} />;
    }
    if (activeSlide === 'writing') {
      return <WritingPage sampleAnswers={sampleAnswers}/>;
    }
    if (activeSlide === 'math (no calc)') {
      return <MathNoCalcPage mathNoCalc={mathNoCalc}/>;
    }
    if (activeSlide === 'math (calculator)') {
      return <MathCalculatorPage mathCalculator={mathCalculator}/>;
    }
    if (activeSlide === 'essay') {
      return <EssayPage />;
    }
    return null;
  }

  render() {
    const { activeSlide } = this.state;
    return(
      <div className="card-main-full card">
        <div className="slick-tabs-gallery">
          <AnswerSheetNavBar activeSlide={activeSlide} onSetActiveSlide={this.onSetActiveSlide} />
        </div>
        <div className="card-content">
          <div className="main-slick">
            {this.renderCurrentSlide()}
          </div>
        </div>
      </div>
    )
  }
}

DetailTestAnswerSheetComplete.propTypes = {
  testScoreDetails: PropTypes.object.isRequired,
};

export default DetailTestAnswerSheetComplete;

