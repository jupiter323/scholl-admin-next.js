import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import FilterSection from './components/FilterSection';
import FullView from './components/FullView';
import ListView from './components/ListView';

import sampleWorksheets from '../utils/sampleWorksheets';
import { dueDate, assignDate, problems, completed, flags, score, timeEstimate } from '../utils/sortFunctions';
import { worksheetTypeMap, worksheetSourceMap, worksheetDifficultyMap, worksheetSubjectMap } from '../utils/worksheetFilterMap';

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: '',
      subjectFilters: [],
      difficultyFilters: [],
      typeFilters: [],
      sourceFilters: [],
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

  onClearFilters = () => this.setState({ subjectFilters: [], difficultyFilters: [], typeFilters: [], sourceFilters: [], workbookFilters: [], topicFilter: '' })

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

  onFilterWorksheets = () => {
    const { subjectFilters, difficultyFilters, typeFilters, sourceFilters, worksheets: allWorksheets } = this.state;
    let worksheets = allWorksheets;
    if (subjectFilters.length) {
      worksheets = worksheets.filter(worksheet => subjectFilters.indexOf(worksheetSubjectMap[worksheet.subject]) !== -1);
    }
    if (typeFilters.length && typeFilters.indexOf('mixedType') === -1) {
      worksheets = worksheets.filter(worksheet => typeFilters.indexOf(worksheetTypeMap[worksheet.problemType]) !== -1);
    }
    if (sourceFilters.length) {
      worksheets = worksheets.filter(worksheet => sourceFilters.indexOf(worksheetSourceMap[worksheet.worksheetSource]) !== -1);
    }
    if (difficultyFilters.length && difficultyFilters.indexOf('mixedDifficulty') === -1) {
      worksheets = worksheets.filter(worksheet => difficultyFilters.indexOf(worksheetDifficultyMap[worksheet.difficulty]) !== -1);
    }
    return worksheets;
  }

  getMappableWorksheets = () => {
    const { filterName, filterTopic, worksheets: allWorksheets, sort, subjectFilters, difficultyFilters, typeFilters, sourceFilters } = this.state;
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
    if (subjectFilters.length || difficultyFilters.length || typeFilters.length || sourceFilters.length) {
      worksheets = this.onFilterWorksheets();
    }
    if (sort) {
      return this.onSortWorksheets(worksheets);
    }
    return worksheets;
  }

  // eslint-disable-next-line consistent-return
  handleFilterClick = (filterType, filter) => {
    const { subjectFilters: currentSubjectFilters, difficultyFilters: currentDifficultyFilters,
      typeFilters: currentTypeFilters, sourceFilters: currentSourceFilters } = this.state;
    let modifiedFilterCurrentState;
    let modifiedFilterName;
    let modifiedFilterUpdatedState;
    switch (filterType) {
      case 'subject':
        modifiedFilterCurrentState = currentSubjectFilters;
        modifiedFilterName = 'subjectFilters';
        break;
      case 'difficulty':
        modifiedFilterCurrentState = currentDifficultyFilters;
        modifiedFilterName = 'difficultyFilters';
        break;
      case 'type':
        modifiedFilterCurrentState = currentTypeFilters;
        modifiedFilterName = 'typeFilters';
        break;
      case 'source':
        modifiedFilterCurrentState = currentSourceFilters;
        modifiedFilterName = 'sourceFilters';
        break;
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

  // eslint-disable-next-line consistent-return
  renderWorksheetView = () => {
    const { currentView } = this.state;
    const { onSetActiveWorksheet } = this.props;
    switch (currentView) {
      case 'list':
        return <ListView onSetActiveWorksheet={onSetActiveWorksheet} worksheets={this.getMappableWorksheets()} />
      case 'full':
        return <FullView onSetActiveWorksheet={onSetActiveWorksheet} worksheets={this.getMappableWorksheets()} />
      default:
        break;
    }
  }

  render() {
    const { currentView, subjectFilters, difficultyFilters, typeFilters, sourceFilters } = this.state;
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
          typeFilters={typeFilters}
          sourceFilters={sourceFilters}
          subjectFilters={subjectFilters}
          difficultyFilters={difficultyFilters}
          onSetSort={this.onSetSort}
          onChangeView={this.onChangeView}
          onClearFilters={this.onClearFilters}
          handleFilterClick={this.handleFilterClick}
          onSetFilteredState={this.onSetFilteredState}
          onUnsetFilteredState={this.onUnsetFilteredState}
          onSetFilteredTopicState={this.onSetFilteredTopicState}
          onUnsetFilteredTopicState={this.onUnsetFilteredTopicState}
        />
        {this.renderWorksheetView()}
        <div className="add-btn-block">
          <a href="#" className="dropdown-trigger waves-effect waves-teal btn add-btn" data-target='dropdown_assign_selected'><i className="material-icons">add</i> Custom Worksheet</a>
          <ul id='dropdown_assign_selected' className='dropdown-content dropdown-small'>
            <li><a href="#">From Saved</a></li>
            <li><a href="#">Create New</a></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

ListPage.propTypes = {
  onSetActiveWorksheet: PropTypes.func.isRequired,
}

export default ListPage;
