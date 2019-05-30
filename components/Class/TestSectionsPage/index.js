import React from 'react';
import update from 'immutability-helper';
import moment from 'moment';

import FilterSection from './components/FilterSection';
import TestSectionCard from './components/TestSectionCard';

import { availableDateSort, dueDateSort, statusSort, flagsSort, problemSort, timeEstimateSort, subjectSort, percentageCompleteSort } from '../utils/sortOptions';
import { testSectionSubjectMap } from '../utils/testSectionCardUtils';
import sampleTestSections from '../utils/sampleTestSections';

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

  onClearFilters = () => this.setState({ sort: '', testVersionFilter: '', subjectFilters: [], flagFilter: false, availableDateFilters: [], dueDateFilters: [] })

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

  onFilterByDate = (incomingSections, dateType) => {
    const { dueDateFilters, availableDateFilters } = this.state;
    let dateFilters;
    let testSections = incomingSections;

    const currentDate = moment().format('MM/DD/YY');
    const currentDateIndex = new Date().getDay();
    const endOfWeekIndex = 6 - currentDateIndex;
    const endOfWeekDate = moment().add(endOfWeekIndex, 'days').format('MM/DD/YY')
    if (dateType === 'dueDate') {
      dateFilters = dueDateFilters;
      if (dateFilters.indexOf('dueToday') !== -1) {
        testSections = testSections.filter(testSection => testSection.dueDate === currentDate);
      }
      if (dateFilters.indexOf('dueNextSession') !== -1) {
        console.warn('Pending decision on how next session date is calculated');
      }
      if (dateFilters.indexOf('overdue') !== -1) {
        testSections = testSections.filter(testSection => testSection.dueDate < currentDate);
      }
      if (dateFilters.indexOf('dueThisWeek') !== -1) {
        testSections = testSections.filter(testSection => testSection.dueDate >= currentDate && testSection.dueDate <= endOfWeekDate);
      }
    } else {
      dateFilters = availableDateFilters;
      if (dateFilters.indexOf('future') !== -1) {
        testSections = testSections.filter(testSection => testSection.availableDate > currentDate);
      }
      if (dateFilters.indexOf('available') !== -1) {
        testSections = testSections.filter(testSection => testSection.availableDate <= currentDate);
      }
      if (dateFilters.indexOf('complete') !== -1) {
        testSections = testSections.filter(testSection => testSection.percentageComplete === '100');
      }
    }
    return testSections;
  }

  onFilterTestSections = () => {
    const { subjectFilters, dueDateFilters, availableDateFilters, flagFilter, testSections: allTestSections } = this.state;
    let testSections = allTestSections;
    if (subjectFilters.length) {
      testSections = testSections.filter(testSection => subjectFilters.indexOf(testSectionSubjectMap[testSection.subject]) !== -1);
    }
    if (dueDateFilters.length) {
      testSections = this.onFilterByDate(testSections, 'dueDate');
    }
    if (availableDateFilters.length) {
      testSections = this.onFilterByDate(testSections, 'availableDate');
    }
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
          onClearFilters={this.onClearFilters}
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
