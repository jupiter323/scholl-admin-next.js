import React from 'react';
import update from 'immutability-helper';

import FilterSection from './components/FilterSection';
import TestSectionCard from './components/TestSectionCard';

import { availableDateSort, dueDateSort, statusSort, flagsSort, problemSort, timeEstimateSort, subjectSort, percentageCompleteSort } from '../utils/sortOptions';

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

const testSectionSubjectMap = {
  'Reading': 'reading',
  'Writing': 'writing',
  'Math': 'math',
}

class TestSectionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: '',
      testVersionFilter: '',
      subjectFilters: [],
      flagFilter: false,
      availableDateFilters: [],
      dueDateFilters: [],
      dropdownIndex: null,
      dropdownIsOpen: false,
      testSections: sampleTestSections,
    };
  }

  onSetSort = (sort) => this.setState({ sort })

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  onSetFilteredState = (value) => this.setState({ testVersionFilter: value })
  onUnsetFilteredState = () => this.setState({ testVersionFilter: '' })

  // eslint-disable-next-line consistent-return
  onSortTestSections = (testSections) => {
    const { sort } = this.state;
    switch (sort) {
      case 'flags':
        return testSections.sort(flagsSort);
      case 'dueDate':
        return testSections.sort(dueDateSort);
      case 'availableDate':
        return testSections.sort(availableDateSort);
      case 'status':
        return testSections.sort(statusSort);
      case 'problems':
        return testSections.sort(problemSort);
      case 'timeEstimate':
        return testSections.sort(timeEstimateSort);
      case 'subject':
        return testSections.sort(subjectSort);
      case 'percentageComplete':
        return testSections.sort(percentageCompleteSort);
      default:
        break;
    }
  }

  onFilterByTestVersion = () => {
    const { testSections, testVersionFilter } = this.state;
    return testSections.reduce((finalArr, currentTestSection) => {
      const { version } = currentTestSection;
      const testSectionString = version.replace(/\s/g, "").toLowerCase();
      if (testSectionString.indexOf(testVersionFilter) !== -1 && finalArr.indexOf(currentTestSection) === -1) {
        finalArr.push(currentTestSection);
      }
      return finalArr;
    }, []);
  }

  onFilterTestSections = () => {
    // eslint-disable-next-line no-unused-vars
    const { subjectFilters, dueDateFilters, availableDateFilters, flagFilter, testSections: allTestSections } = this.state;
    let testSections = allTestSections;
    if (subjectFilters.length) {
      testSections = testSections.filter(testSection => subjectFilters.indexOf(testSectionSubjectMap[testSection.subject]) !== -1);
    }
    // if (dueDateFilters.length) {
    //   testSections = testSections.filter(testSection => dueDateFilters.indexOf(worksheetTypeMap[worksheet.type]) !== -1);
    // }
    // if (availableDateFilters.length) {
    //   testSections = testSections.filter(testSection => availableDateFilters.indexOf(worksheetSourceMap[worksheet.source]) !== -1);
    // }
    if (flagFilter) {
      testSections = testSections.filter(testSection => testSection.flags.length);
    }
    return testSections;
  }

  getMappableTestSections = () => {
    const { subjectFilters, dueDateFilters, availableDateFilters, flagFilter, sort, testVersionFilter, testSections } = this.state;
    let mappableTestSections = testSections;
    if (testVersionFilter.length) {
      mappableTestSections = this.onFilterByTestVersion();
    }
    if (subjectFilters.length || dueDateFilters.length || availableDateFilters.length || flagFilter) {
      mappableTestSections = this.onFilterTestSections();
    }
    if (sort) {
      return this.onSortTestSections(mappableTestSections);
    }
    return mappableTestSections;
  }

  // eslint-disable-next-line consistent-return
  handleFilterClick = (filterType, filter) => {
    const { availableDateFilters: currentAvailableDateFilters, dueDateFilters: currentDueDateFilters,
      subjectFilters: currentSubjectFilters, flagFilter } = this.state;
    let modifiedFilterCurrentState;
    let modifiedFilterName;
    let modifiedFilterUpdatedState;
    switch (filterType) {
      case 'subject':
        modifiedFilterCurrentState = currentSubjectFilters;
        modifiedFilterName = 'subjectFilters';
        break;
      case 'dueDate':
        modifiedFilterCurrentState = currentDueDateFilters;
        modifiedFilterName = 'dueDateFilters';
        break;
      case 'availableDate':
        modifiedFilterCurrentState = currentAvailableDateFilters;
        modifiedFilterName = 'availableDateFilters';
        break;
      case 'hasFlags':
        return this.setState({ flagFilter: !flagFilter });
      default:
        break;
    }
    if (modifiedFilterCurrentState.indexOf(filter) === -1) {
      modifiedFilterUpdatedState = update(modifiedFilterCurrentState, {
        $push: [filter],
      });
    } else {
      const filterIndex = modifiedFilterCurrentState.indexOf(filter);
      modifiedFilterUpdatedState = update(modifiedFilterCurrentState, {
        $splice: [[ filterIndex, 1 ]],
      });
    }
    this.setState({ [modifiedFilterName]: modifiedFilterUpdatedState });
  }

  mapTestSections = () => this.getMappableTestSections().map((testSection, index) => (
    <TestSectionCard
      index={index}
      key={testSection.id}
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
        <FilterSection
          sort={this.state.sort}
          onSetSort={this.onSetSort}
          flagFilter={this.state.flagFilter}
          handleFilterClick={this.handleFilterClick}
          subjectFilters={this.state.subjectFilters}
          dueDateFilters={this.state.dueDateFilters}
          availableDateFilters={this.state.availableDateFilters}
          onSetFilteredState={this.onSetFilteredState}
          onUnsetFilteredState={this.onUnsetFilteredState}
        />
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
