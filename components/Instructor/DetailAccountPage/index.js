import React from 'react';
// import PropTpes from 'prop-types';
import UserInfo from './components/UserInfo';
import ContactInfo from './components/ContactInfo';
import UserLocation from './components/UserLocation';

// eslint-disable-next-line react/prefer-stateless-function
class DetailAccountPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="content-section">
          <div className="content-section-holder">
            <div className="row mb-0 d-flex-content large">
              <div className="col s12 l5">
                <UserInfo />
                <ContactInfo />
              </div>
              <UserLocation />
            </div>
            <div className="btn-holder align-right-sm">
              <a href="#" className="btn">Save</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

DetailAccountPage.propTypes = {

};

export default DetailAccountPage;
