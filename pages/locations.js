/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';

import LocationNavBar from '../components/Location/components/LocationNavBar';
import DetailAccountPage from '../components/Location/DetailAccountPage';
import DetailSummaryPage from '../components/Location/DetailSummaryPage';

import sampleLocation from '../components/Location/utils/sampleLocation';

// eslint-disable-next-line react/prefer-stateless-function
class Instructors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'summary',
    };
  }

  onSetActivePage = (active) => this.setState({ active })

  renderCurrentPage = () => {
    const { active } = this.state;
    if (active === 'summary') {
      return <DetailSummaryPage location={sampleLocation} />;
    }
    if (active === 'account') {
      return <DetailAccountPage location={sampleLocation} />;
    }
    return null;
  }

  render() {
    const { active } = this.state;
    return (
      <main id="main" role="main">
        <div className="main-holder grey lighten-5">
          <LocationNavBar active={active} onSetActivePage={this.onSetActivePage} />
          {this.renderCurrentPage()}
        </div>
      </main>
    );
  }
}

export default Instructors;
