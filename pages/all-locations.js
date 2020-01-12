import React from 'react';
import Router from 'next/router';
import LocationListPage from '../components/Location/ListPage';

import {
  loggedIn,
} from "../utils/AuthService";


// eslint-disable-next-line react/prefer-stateless-function
class LocationList extends React.Component {
  componentDidMount() {
    if(!loggedIn()){
      Router.push('/login')
    }
  }
  render() {
    return (
      <main id="main" role="main">
          <LocationListPage />
      </main>
    );
  }
}

export default LocationList;
