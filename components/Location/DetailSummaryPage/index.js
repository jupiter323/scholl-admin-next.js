import React from 'react';
import PropTypes from 'prop-types';

import AverageImprovement from './components/AverageImprovement';
import Pipeline from './components/Pipeline';
import StudentImprovement from './components/StudentImprovement';
import TargetScores from './components/TargetScores';
import AveragePerCourse from './components/AveragePerCourse';

// eslint-disable-next-line react/prefer-stateless-function
class LocationDetailSummaryPage extends React.Component {
  render() {
    const { location: { averageImprovement, pipeline, targetScores, studentImprovement, averagePerCourse } } = this.props;
    return (
      <div className="content-section">
        <div className="content-section-holder">
          <div className="container">
            <div className="cards-section">
              <div className="dashboard-section">
                <div className="dashboard-row js-sortable js-masonry row" data-masonry-options='{"columnWidth": 1, "itemSelector": ".grid-item", "gutter": 31}'>
                  <AverageImprovement
                    state={averageImprovement}
                  />
                  <Pipeline
                    state={pipeline}
                  />
                  <StudentImprovement
                    state={studentImprovement}
                  />
                  <TargetScores
                    state={targetScores}
                  />
                </div>
                <AveragePerCourse
                  state={averagePerCourse}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LocationDetailSummaryPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default LocationDetailSummaryPage;
