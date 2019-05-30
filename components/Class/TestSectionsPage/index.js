import React from 'react';

import FilterSection from './components/FilterSection';
import TestSectionCard from './components/TestSectionCard';

const sampleTestSections = [
  {
    id: 1,
    subject: 'Math',
    version: 'SAT Practice #2',
    availableDate: '12/15/18',
    dueDate: '12/17/18',
    status: 'Exemplary',
    problems: 15,
    timeEstimate: '23',
    percentageComplete: '92',
    flags: [{}, {}, {}],
    disabled: false,
  },
  {
    id: 2,
    subject: 'Writing',
    version: 'SAT Practice #4',
    availableDate: '03/21/18',
    dueDate: '05/01/18',
    status: 'Developing',
    problems: 21,
    timeEstimate: '41',
    percentageComplete: '86',
    flags: [],
    disabled: false,
  },
  {
    id: 3,
    subject: 'Reading',
    version: 'SAT Practice #1',
    availableDate: '04/01/18',
    dueDate: '06/12/18',
    status: 'Assigned',
    problems: 42,
    timeEstimate: '57',
    percentageComplete: '0',
    flags: [],
    disabled: true,
  },
  {
    id: 4,
    subject: 'Writing',
    version: 'SAT Practice #6',
    availableDate: '07/11/18',
    dueDate: '07/13/18',
    status: 'Developing',
    problems: 17,
    timeEstimate: '21',
    percentageComplete: '72',
    flags: [{}],
    disabled: false,
  },
  {
    id: 5,
    subject: 'Math',
    version: 'SAT Practice #5',
    availableDate: '08/02/18',
    dueDate: '08/16/18',
    status: 'Exemplary',
    problems: 16,
    timeEstimate: '41',
    percentageComplete: '47',
    flags: [],
    disabled: false,
  },
];

class TestSectionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownIndex: null,
      dropdownIsOpen: false,
      testSections: sampleTestSections,
    };
  }

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  mapTestSections = () => this.state.testSections.map((testSection, index) => (
    <TestSectionCard
      key={testSection.id}
      index={index}
      testSection={testSection}
      onSetDropdown={this.onSetDropdown}
      onCloseDropdown={this.onCloseDropdown}
      dropdownIndex={this.state.dropdownIndex}
      dropdownIsOpen={this.state.dropdownIsOpen}
    />
  ))

  render() {
    const { testSections } = this.state;
    return (
      <React.Fragment>
        <FilterSection />
        <div className="content-section">
          <div className="result-row center-align">
            <b className="result"> - {testSections.length} results -</b>
          </div>
          <div className="row d-flex-content card-width-272">
            {this.mapTestSections()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TestSectionsPage;
