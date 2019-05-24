import React from 'react';
import PropTypes from 'prop-types';
import AnswerSheetNavBar from './components/AnswerSheetNavBar';
import ReadingPage from './components/ReadingPage';

class DetailTestAnswerSheetComplete extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      active: 'reading',
    };
  }

  onSetActiveSlide = (active) => this.setState({ active })

  renderCurrentSlide = () => {
    const { active } = this.state;
    const { user: { testScoreDetails: { reading } } } = this.props;
    if (active === 'reading') {
      return <ReadingPage reading={reading} />;
    }
    // if (active === 'writing') {
    //   return <WritingPage />;
    // }
    // if (active === 'math (no calc') {
    //   return <MathNoCalcPage />;
    // }
    // if (active === 'math (calculator') {
    //   return <MatchCalculatorPage />;
    // }
    // if (active === 'essay) {
    //   return <EssayPage />;
    // }
    return null;
  }

  render() {
    const { active } = this.state;
    return(
      <div className="content-section">
        <div className="content-section-holder">
          <div className="card-main-full card">
            <div className="slick-tabs-gallery">
              <AnswerSheetNavBar active={active} onSetActiveSlide={this.onSetActiveSlide} />
            </div>
            <div className="card-content">
              <div className="main-slick">
                {this.renderCurrentSlide()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

DetailTestAnswerSheetComplete.propTypes = {
  user: PropTypes.object.isRequired,
};

export default DetailTestAnswerSheetComplete;

