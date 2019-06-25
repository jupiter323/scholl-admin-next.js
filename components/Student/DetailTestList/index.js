import React from 'react';
import PropTypes from 'prop-types';
import TestCard from './components/TestCard';

import sampleTests from './utils/sampleTests';
import EditTestModal from './components/EditTestModal';

class DetailTestList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: sampleTests,
      dropdownIndex: null,
      dropdownIsOpen: false,
      editTestModalOpen: false,
      activeTest: null,
    };
  }

  onToggleEditTestModal = (activeTest = null) => this.setState(({ editTestModalOpen }) => ({ editTestModalOpen: !editTestModalOpen, activeTest }), this.onCloseDropdown)

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  onCreateTest = (event) => {
    event.preventDefault();
    console.warn('Pending implementation of create test UI and functionality');
  }

  onEnterAnswers = () => console.warn('Pending implementation of enter answers UI and functionality')
  onEditTest = () => console.warn('Pending implementation edit test UI and functionality')
  onDownloadReport = () => console.warn('Pending implementation of download report ui and functionality')
  onDeleteTest = () => this.setState({ editTestModalOpen: false }, () => console.warn('Pending implementation of delete test UI and functionality'))

  onSaveTestChanges = (testVersion, settings) => {
    this.onToggleEditTestModal();
    console.warn('Pending save test changes functionality', testVersion, settings);
  }

  mapCompletedTests = () => {
    const { tests } = this.state;
    return tests.filter(test => test.status === 'complete').map((test, index) => (
      <TestCard
        test={test}
        key={`completed-${test.id}`}
        index={index}
        onEditTest={() => this.onToggleEditTestModal(test)}
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
        key={`future-${test.id}`}
        onEditTest={() => this.onToggleEditTestModal(test)}
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
    const { editTestModalOpen, activeTest } = this.state;
    const { user } = this.props;
    return (
      <React.Fragment>
        <Choose>
          <When condition={editTestModalOpen}>
            <EditTestModal
              user={user}
              test={activeTest}
              onDeleteTest={this.onDeleteTest}
              onSaveTestChanges={this.onSaveTestChanges}
            />
          </When>
          <Otherwise>
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
          </Otherwise>
        </Choose>
      </React.Fragment>
    );
  }
}

DetailTestList.propTypes = {
  user: PropTypes.object.isRequired,
};

export default DetailTestList;
