import React from 'react';
import Owner from './components/Owner';
import LocationContactInfo from './components/LocationContactInfo';
import LocationEmailSettings from './components/LocationEmailSettings';

class DetailAccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    // TODO: Update navbar info with actual sample location data
    return (
      <div className="content-section">
        <div className="content-section-holder">
          <form action="#" className="custom-form">
            <fieldset>
              <div className="row mb-0 d-flex-content large">
                <div className="col s12 l5">
                  <Owner />
                  <LocationEmailSettings />
                </div>
                <LocationContactInfo />
              </div>
              <div className="btn-holder align-right-sm">
                <a href="#" className="btn">Save</a>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default DetailAccountPage;
