import React from 'react';
import LocationListPage from '../components/Location/ListPage';

// eslint-disable-next-line react/prefer-stateless-function
class LocationList extends React.Component {
  render() {
    return (
      <main id="main" role="main">
          <LocationListPage />
      </main>
    );
  }
}

export default LocationList;
