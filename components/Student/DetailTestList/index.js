import React from 'react';
import TestCard from './components/TestCard';

import sampleTests from './utils/sampleTests';

class DetailTestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: sampleTests,
      dropdownIndex: null,
      dropdownIsOpen: false,
    };
  }

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  mapCompletedTests = () => {
    const { tests } = this.state;
    return tests.filter(test => test.status === 'complete').map((test, index) => (
      <TestCard
        test={test}
        key={test.id}
        index={index}
        onSetDropdown={this.onSetDropdown}
        onCloseDropdown={this.onCloseDropdown}
        dropdownIndex={this.state.dropdownIndex}
        dropdownIsOpen={this.state.dropdownIsOpen}
      />
    ))
  }

  mapFutureTests = () => {
    const { tests } = this.state;
    return tests.filter(test => test.status !== 'complete').map((test, index) => (
      <TestCard
        futureTest
        test={test}
        key={test.id}
        index={tests.filter(filterTest => filterTest.status === 'complete').length + index}
        onSetDropdown={this.onSetDropdown}
        onCloseDropdown={this.onCloseDropdown}
        dropdownIndex={this.state.dropdownIndex}
        dropdownIsOpen={this.state.dropdownIsOpen}
      />
    ))
  }

  render() {
    return (
      <div className="content-section">
        <div className="section-holder">
          <div className="content-container">
            <h2>Completed Tests</h2>
            <div className="row d-flex-content card-width-366">
              {this.mapCompletedTests()}
            </div>
          </div>
          <div className="content-container">
            <h2>Future Tests</h2>
            <div className="row d-flex-content card-width-366">
              {this.mapFutureTests()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailTestList;
