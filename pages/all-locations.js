import React from 'react';
import LocationListPage from '../components/Location/ListPage';

// eslint-disable-next-line react/prefer-stateless-function
class LocationList extends React.Component {
  render() {
    return (
      <main id="main" role="main">
        <div className="main-holder grey lighten-5">
          <LocationListPage />
        </div>
      </main>
    );
  }
}

export default LocationList;
