import React from 'react';
import PropTypes from 'prop-types';
import TotalScoreCard from '../DetailTestScorePage/components/TotalScoreCard';
import SectionScoreCard from '../DetailTestScorePage/components/SectionScoreCard';
import TestScoreCard from '../DetailTestScorePage/components/TestScoreCard';
import EssayScoresCard from '../DetailTestScorePage/components/EssayScoresCard';
import CrossTestScoresCard from '../DetailTestScorePage/components/CrossTestScoresCard';
import SubscoresCard from '../DetailTestScorePage/components/SubscoresCard';
import TestScoreNavBar from '../DetailTestScorePage/components/TestScoreNavBar';
// import CourseProgress from './components/CourseProgress';
// import OverdueWork from './components/OverdueWork';
// import SummaryCards from './components/SummaryCards';
// import TestScores from './components/TestScores';
// import StrengthsAndWeaknesses from './components/StrengthsAndWeaknesses';
// eslint-disable-next-line react/prefer-stateless-function
class DetailSummaryPage extends React.Component {
  render() {
    const { user: { active } } = this.props;
    return (
      <div className="content-section">
        <div className="container">
          <TestScoreNavBar active={active} onSetActivePage={this.onSetActivePage} />

          <div className="cards-section">
          <div className="d-flex-content same-height justify-center row mb-0">
              <TotalScoreCard />
              <SectionScoreCard />
            </div>
            <div className="d-flex-content same-height justify-center row mb-0">
              <TestScoreCard />
              <EssayScoresCard />
            </div>
            <div className="d-flex-content justify-center row mb-0">
              <CrossTestScoresCard />
              <SubscoresCard />
            </div>


            {/* <div className="row d-flex justify-content-center mb-0">
              <CourseProgress active={active} state={courseProgress} />
              <OverdueWork active={active} state={overdueWork} />
            </div>
            <div className="row d-flex justify-content-center mb-0">
              <SummaryCards active={active} state={summary} />
              <TestScores active={active} state={testScores} />
            </div>
          </div>
          <StrengthsAndWeaknesses active={active} state={strengthsAndWeaknesses} /> */}
        </div>
        </div>
      </div>
    );
  }
}

DetailSummaryPage.propTypes = {
  user: PropTypes.object.isRequired,
};

export default DetailSummaryPage;
