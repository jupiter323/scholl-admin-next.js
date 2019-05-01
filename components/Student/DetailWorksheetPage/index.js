import React from 'react';
// import PropTypes from 'prop-types';
import sampleWorksheets from './utils/sampleWorksheets';

import ListView from './components/ListView';
import FilterSection from './components/FilterSection';

class DetailWorksheetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'list',
    };
  }

  onChangeView = (view) => this.setState({ currentView: view });

  render() {
    const { currentView } = this.state;
    return (
      <React.Fragment>
        <div className="main-holder grey lighten-5 switcher-section">
          <FilterSection
            currentView={currentView}
            onChangeView={this.onChangeView}
          />
          <ListView
            worksheets={sampleWorksheets}
          />
        </div>
        <div className="add-btn-block">
          <a href="#" className="dropdown-trigger waves-effect waves-teal btn add-btn" data-target='dropdown_assign_selected'><i className="material-icons">add</i> Assign Worksheet</a>
          <ul id='dropdown_assign_selected' className='dropdown-content dropdown-small'>
            <li><a href="#">From Saved</a></li>
            <li><a href="#">Create New</a></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailWorksheetPage;

