import React from 'react';
import FilterSection from './components/FilterSection';
import FullView from './components/FullView';
import ListView from './components/ListView';

import sampleWorksheets from '../utils/sampleWorksheets';
import { dueDate, assignDate, problems, completed, flags, score, timeEstimate } from '../utils/sortFunctions';

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: '',
      filterName: '',
      filterTopic: '',
      currentView: 'full',
      worksheets: sampleWorksheets,
    };
  }

  onSetSort = (sort) => this.setState({ sort })
  onChangeView = (view) => this.setState({ currentView: view });

  onSetFilteredState = (filterName) => this.setState({ worksheetsAreFiltered: true, filterName })
  onUnsetFilteredState = () => this.setState({ worksheetsAreFiltered: false, filterName: '' })

  onSetFilteredTopicState = (filterTopic) => this.setState({ worksheetsAreFiltered: true, filterTopic })
  onUnsetFilteredTopicState = () => this.setState({ filterTopic: '' }, this.checkForFilteredState)

  onAssignWorksheet = (assignType) => {
    console.warn('Stubbed out assign worksheet click', assignType);
  }

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

  // eslint-disable-next-line consistent-return
  renderWorksheetView = () => {
    const { currentView } = this.state;
    switch (currentView) {
      case 'list':
        return <ListView onToggleDetailModalOpen={this.onToggleDetailModalOpen} worksheets={this.getMappableWorksheets()} />
      case 'full':
        return <FullView  worksheets={this.getMappableWorksheets()} />
      default:
        break;
    }
  }

  render() {
    const { currentView } = this.state;
    return (
      <React.Fragment>
        <div className="title-row card-panel">
          <div className="mobile-header">
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          </div>
          <h2 className="h1 white-text">
            <span className="heading-holder">
              <i className="icon-sheets-w"></i>
              <span className="heading-block">Custom Worksheet Library</span>
            </span>
          </h2>
        </div>
        <FilterSection
          currentView={currentView}
          onChangeView={this.onChangeView}
          onSetSort={this.onSetSort}
          onSetFilteredState={this.onSetFilteredState}
          onUnsetFilteredState={this.onUnsetFilteredState}
          onSetFilteredTopicState={this.onSetFilteredTopicState}
          onUnsetFilteredTopicState={this.onUnsetFilteredTopicState}
        />
        {this.renderWorksheetView()}
      </React.Fragment>
    );
  }
}

export default ListPage;
