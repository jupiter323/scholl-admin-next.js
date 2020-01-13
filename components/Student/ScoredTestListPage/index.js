import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import moment from 'moment';

import ScoredTestCard from './components/ScoredTestCard';
import FilterSection from './components/FilterSection';

import { availableDateSort, dueDateSort, completionDateSort, flagsSort } from '../utils';

class ScoredTestListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: '',
      testVersionFilter: '',
      availableDateFilters: [],
      dueDateFilters: [],
      flagFilter: false,
      dropdownIndex: null,
      dropdownIsOpen: false,
      tests: this.props.user.scoredTests,
    };
  }

  onSetSort = (sort) => this.setState({ sort })
  onClearFilters = () => this.setState({ sort: '', testVersionFilter: '', flagFilter: false, availableDateFilters: [], dueDateFilters: [] })

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  onSetFilteredState = (value) => this.setState({ testVersionFilter: value })
  onUnsetFilteredState = () => this.setState({ testVersionFilter: '' })

  onEditTest = () => console.warn('Pending implementation edit test UI and functionality')
  onResetTest = () => console.warn('Pending implementation of reset UI and functionality')
  onDeleteTest = () => console.warn('Pending implementation of delete test UI and functionality')
  onDownloadReport = () => console.warn('Pending implementation of download report ui and functionality')

  // eslint-disable-next-line consistent-return
  onSortTests = (testSections) => {
    const { sort } = this.state;
    switch (sort) {
      case 'flags':
        return testSections.sort(flagsSort);
      case 'dueDate':
        return testSections.sort(dueDateSort);
      case 'availableDate':
        return testSections.sort(availableDateSort);
      case 'completionDate':
        return testSections.sort(completionDateSort);
      default:
        break;
    }
  }

  onFilterByTestVersion = () => {
    const { tests, testVersionFilter } = this.state;
    return tests.reduce((finalArr, currentTest) => {
      const { version } = currentTest;
      const testString = version.replace(/\s/g, "").toLowerCase();
      if (testString.indexOf(testVersionFilter) !== -1 && finalArr.indexOf(currentTest) === -1) {
        finalArr.push(currentTest);
      }
      return finalArr;
    }, []);
  }

  onFilterByDate = (incomingTests, dateType) => {
    const { dueDateFilters, availableDateFilters } = this.state;
    let dateFilters;
    let tests = incomingTests;

    const currentDate = moment().format('MM/DD/YY');
    const currentDateIndex = new Date().getDay();
    const endOfWeekIndex = 6 - currentDateIndex;
    const endOfWeekDate = moment().add(endOfWeekIndex, 'days').format('MM/DD/YY');
    if (dateType === 'dueDate') {
      dateFilters = dueDateFilters;
      if (dateFilters.indexOf('dueToday') !== -1) {
        tests = tests.filter(test => test.dueDate === currentDate);
      }
      if (dateFilters.indexOf('dueNextSession') !== -1) {
        console.warn('Pending decision on how next session date is calculated');
      }
      if (dateFilters.indexOf('overdue') !== -1) {
        tests = tests.filter(test => test.dueDate < currentDate);
      }
      if (dateFilters.indexOf('dueThisWeek') !== -1) {
        tests = tests.filter(test => test.dueDate >= currentDate && test.dueDate <= endOfWeekDate);
      }
    } else {
      dateFilters = availableDateFilters;
      if (dateFilters.indexOf('future') !== -1) {
        tests = tests.filter(test => test.availableDate > currentDate);
      }
      if (dateFilters.indexOf('available') !== -1) {
        tests = tests.filter(test => test.availableDate <= currentDate);
      }
      if (dateFilters.indexOf('complete') !== -1) {
        tests = tests.filter(test => test.completionDate.length);
      }
    }
    return tests;
  }

  onFilterTests = () => {
    const { dueDateFilters, availableDateFilters, flagFilter, tests: allTests } = this.state;
    let tests = allTests;
    if (dueDateFilters.length) {
      tests = this.onFilterByDate(tests, 'dueDate');
    }
    if (availableDateFilters.length) {
      tests = this.onFilterByDate(tests, 'availableDate');
    }
    if (flagFilter) {
      tests = tests.filter(testSection => testSection.flags.length);
    }
    return tests;
  }

  getMappableTests = () => {
    const { dueDateFilters, availableDateFilters, flagFilter, sort, testVersionFilter, tests } = this.state;
    let mappableTests = tests;
    if (testVersionFilter.length) {
      mappableTests = this.onFilterByTestVersion();
    }
    if (dueDateFilters.length || availableDateFilters.length || flagFilter) {
      mappableTests = this.onFilterTests();
    }
    if (sort) {
      return this.onSortTests(mappableTests);
    }
    return mappableTests;
  }

  // eslint-disable-next-line consistent-return
  handleFilterClick = (filterType, filter) => {
    const { availableDateFilters: currentAvailableDateFilters, dueDateFilters: currentDueDateFilters, flagFilter } = this.state;
    let modifiedFilterCurrentState;
    let modifiedFilterName;
    let modifiedFilterUpdatedState;
    switch (filterType) {
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
        $splice: [[filterIndex, 1]],
      });
    }
    this.setState({ [modifiedFilterName]: modifiedFilterUpdatedState });
  }

  mapScoredTests = () => this.getMappableTests().map((test, index) => (
    <ScoredTestCard
      test={test}
      index={index}
      key={test.id}
      onEditTest={this.onEditTest}
      onResetTest={this.onResetTest}
      onDeleteTest={this.onDeleteTest}
      onSetDropdown={this.onSetDropdown}
      onCloseDropdown={this.onCloseDropdown}
      onDownloadReport={this.onDownloadReport}
      dropdownIndex={this.state.dropdownIndex}
      dropdownIsOpen={this.state.dropdownIsOpen}
    />
  ))

  render() {
    return (
      <React.Fragment>
        <FilterSection
          sort={this.state.sort}
          onSetSort={this.onSetSort}
          flagFilter={this.state.flagFilter}
          onClearFilters={this.onClearFilters}
          handleFilterClick={this.handleFilterClick}
          dueDateFilters={this.state.dueDateFilters}
          availableDateFilters={this.state.availableDateFilters}
          onSetFilteredState={this.onSetFilteredState}
          onUnsetFilteredState={this.onUnsetFilteredState}
        />
        <div className="content-section">
          <div className="row d-flex-content card-width-366">
            {this.mapScoredTests()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ScoredTestListPage.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ScoredTestListPage;
