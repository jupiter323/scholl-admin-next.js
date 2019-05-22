import React from 'react';
import PropTypes from 'prop-types';
// import TestScoreHeading from './components/TestScoreHeading';
import TestScoreNavBar from './components/TestScoreNavBar';
import TotalScoreCard from './components/TotalScoreCard';
import SectionScoreCard from './components/SectionScoreCard';
import TestScoreCard from './components/TestScoreCard';
import EssayScoresCard from './components/EssayScoresCard';
import CrossTestScoresCard from './components/CrossTestScoresCard';
import SubscoresCard from './components/SubscoresCard';


class DetailTestScorePage extends React.Component {
    render() {
        // eslint-disable-next-line react/prop-types
        const { user: { active, testScores } } = this.props;
        return (
          <main id="main" role="main">
            <div className="main-holder grey lighten-5">
              {/* <TestScoreHeading /> */}
              <TestScoreNavBar active={active} onSetActivePage={this.onSetActivePage} />
              <div className="content-section">
                <div className="content-section-holder">
                  <div className="container">
                    <div className="cards-section">
                      <div className="d-flex-content same-height justify-center row mb-0">
                        <TotalScoreCard />
                        <SectionScoreCard />
                      </div>
                      <div className="d-flex-content same-height justify-center row mb-0">
                        <TestScoreCard testScores={testScores}/>
                        <EssayScoresCard />
                      </div>
                      <div className="d-flex-content justify-center row mb-0">
                        <CrossTestScoresCard />
                        <SubscoresCard />
                      </div>

                  </div>
                </div>
              </div>
            </div>
            </div>
          </main>
        )
    }
};

DetailTestScorePage.PropTypes = {
   user: PropTypes.object.isRequired,
};

export default DetailTestScorePage;
