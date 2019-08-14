/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StickyContainer } from 'react-sticky';
import LocationNavBar from '../components/Location/components/LocationNavBar';
import DetailAccountPage from '../components/Location/DetailAccountPage';
import DetailSummaryPage from '../components/Location/DetailSummaryPage';
import sampleLocation from '../components/Location/utils/sampleLocation'
;
// eslint-disable-next-line react/prefer-stateless-function
class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'summary',
    };
  }

  onSetActivePage = (active) => this.setState({ active })

  renderCurrentPage = () => {
    const {location } = this.props;
    const { active } = this.state;
    if (active === 'summary') {
      return <DetailSummaryPage location={this.props.location ? location : sampleLocation} />;
    }
    if (active === 'account') {
      return <DetailAccountPage location={this.props.location ? location : sampleLocation} />;
    }
    return null;
  }

  render() {
    const { active } = this.state;
    const { location, onRedirectToLocationsPage } = this.props;
    return (
      <Choose>
        <When condition={!location}>
        <main id="main" role="main">
        <div className="main-holder grey lighten-5">
          <StickyContainer>
          <LocationNavBar active={active} onSetActivePage={this.onSetActivePage} onRedirectToLocationsPage={onRedirectToLocationsPage} location={this.props.location ? location : sampleLocation}/>
          {this.renderCurrentPage()}
          </StickyContainer>
        </div>
        </main>
        </When>
        <Otherwise>
        <div className="main-holder grey lighten-5">
          <StickyContainer>
            <LocationNavBar active={active} onSetActivePage={this.onSetActivePage} onRedirectToLocationsPage={onRedirectToLocationsPage} location={this.props.location ? location : sampleLocation}/>
          {this.renderCurrentPage()}
          </StickyContainer>
        </div>
        </Otherwise>
      </Choose>
    );
  }
}

Locations.propTypes = {
  location: PropTypes.object.isRequired,
  onRedirectToLocationsPage: PropTypes.func.isRequired,
}
export default Locations;
