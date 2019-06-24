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

  onCreateTest = (event) => {
    event.preventDefault();
    console.warn('Pending implementation of create test UI and functionality');
  }

  onEnterAnswers = () => console.warn('Pending implementation of enter answers UI and functionality')
  onEditTest = () => console.warn('Pending implementation edit test UI and functionality')
  onDownloadReport = () => console.warn('Pending implementation of download report ui and functionality')
  onDeleteTest = () => console.warn('Pending implementation of delete test UI and functionality')

  mapCompletedTests = () => {
    const { tests } = this.state;
    return tests.filter(test => test.status === 'complete').map((test, index) => (
      <TestCard
        test={test}
        key={test.id}
        index={index}
        onEditTest={this.onEditTest}
        onDeleteTest={this.onDeleteTest}
        onSetDropdown={this.onSetDropdown}
        onEnterAnswers={this.onEnterAnswers}
        onCloseDropdown={this.onCloseDropdown}
        onDownloadReport={this.onDownloadReport}
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
        onEditTest={this.onEditTest}
        onDeleteTest={this.onDeleteTest}
        onSetDropdown={this.onSetDropdown}
        onEnterAnswers={this.onEnterAnswers}
        onCloseDropdown={this.onCloseDropdown}
        onDownloadReport={this.onDownloadReport}
        dropdownIndex={this.state.dropdownIndex}
        dropdownIsOpen={this.state.dropdownIsOpen}
        index={tests.filter(filterTest => filterTest.status === 'complete').length + index}
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
        <a href="#" onClick={this.onCreateTest} className="waves-effect waves-teal btn add-btn"><i className="material-icons">add</i>New Test</a>
      </div>
    );
  }
}

export default DetailTestList;
