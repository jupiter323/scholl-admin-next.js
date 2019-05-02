import React from 'react';

import ListView from './components/ListView';
import FilterSection from './components/FilterSection';

import sampleWorksheets from './utils/sampleWorksheets';
import { dueDate, assignDate, problems, completed, flags, score, timeEstimate } from '../../utils/sortFunctions';

class DetailWorksheetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'list',
      sort: '',
      filterName: '',
      filterTopic: '',
      worksheets: sampleWorksheets,
    };
  }

  onSetSort = (sort) => this.setState({ sort })
  onChangeView = (view) => this.setState({ currentView: view });

  onSetFilteredState = (filterName) => this.setState({ worksheetsAreFiltered: true, filterName })
  onUnsetFilteredState = () => this.setState({ worksheetsAreFiltered: false, filterName: '' })

  onSetFilteredTopicState = (filterTopic) => this.setState({ worksheetsAreFiltered: true, filterTopic })
  onUnsetFilteredTopicState = () => this.setState({ filterTopic: '' }, this.checkForFilteredState)

  onFilterByName = () => {
    const { worksheets, filterName } = this.state;
    return worksheets.reduce((finalArr, currentWorksheet) => {
      const { accountInfo: { lastName, firstName } } = currentWorksheet;
      const worksheetString = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;
      if (worksheetString.indexOf(filterName) !== -1 && finalArr.indexOf(currentWorksheet) === -1) {
        finalArr.push(currentWorksheet);
      }
      return finalArr;
    }, []);
  }

  onFilterByTopic = (preFilteredWorksheets = []) => {
    const { worksheets: allWorksheets, filterTopic } = this.state;
    let worksheets;
    if (preFilteredWorksheets.length) {
      worksheets = preFilteredWorksheets;
    } else {
      worksheets = allWorksheets;
    }
    return worksheets.reduce((finalArr, currentWorksheet) => {
      const { topic } = currentWorksheet;
      if (topic === filterTopic && finalArr.indexOf(currentWorksheet) === -1) {
        finalArr.push(currentWorksheet);
      }
      return finalArr;
    }, []);
  }

  // eslint-disable-next-line consistent-return
  onSortWorksheets = (worksheets) => {
    const { sort } = this.state;
    switch (sort) {
      case 'dueDate':
        return worksheets.sort(dueDate);
      case 'assignDate':
        return worksheets.sort(assignDate);
      case 'problems':
        return worksheets.sort(problems);
      case 'completed':
        return worksheets.sort(completed);
      case 'flags':
        return worksheets.sort(flags);
      case 'score':
        return worksheets.sort(score);
      case 'timeEstimate':
        return worksheets.sort(timeEstimate);
      default:
        break;
    }
  }

  getMappableWorksheets = () => {
    const { filterName, filterTopic, worksheets: allWorksheets, sort } = this.state;
    let worksheets;
    if (filterName.length && !filterTopic.length) {
      worksheets = this.onFilterByName();
    } else if (!filterName.length && filterTopic.length) {
      worksheets = this.onFilterByTopic();
    } else if (filterName.length && filterTopic.length) {
      const filteredByName = this.onFilterByName();
      worksheets = this.onFilterByTopic(filteredByName);
    } else {
      worksheets = allWorksheets;
    }
    if (sort) {
      return this.onSortWorksheets(worksheets);
    }
    return worksheets;
  }

  checkForFilteredState = () => {
    const { filterName, filterTopic } = this.state;
    if (!filterName.length && !filterTopic.length) {
      this.setState({ worksheetsAreFiltered: false });
    }
  }

  render() {
    const { currentView } = this.state;
    return (
      <React.Fragment>
        <div className="main-holder grey lighten-5 switcher-section">
          <FilterSection
            currentView={currentView}
            onChangeView={this.onChangeView}
            onSetSort={this.onSetSort}
            onSetFilteredState={this.onSetFilteredState}
            onUnsetFilteredState={this.onUnsetFilteredState}
            onSetFilteredTopicState={this.onSetFilteredTopicState}
            onUnsetFilteredTopicState={this.onUnsetFilteredTopicState}
          />
          <ListView
            worksheets={this.getMappableWorksheets()}
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

