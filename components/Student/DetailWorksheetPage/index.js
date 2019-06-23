import React from 'react';
import PropTypes from 'prop-types';

import FullView from './components/FullView';
import ListView from './components/ListView';
import FilterSection from './components/FilterSection';

import sampleWorksheets from './utils/sampleWorksheets';
import { dueDate, assignDate, problems, completed, flags, score, timeEstimate } from '../../utils/sortFunctions';
import LessonWorksheetTestSection from '../LessonWorksheetTestSection';

class DetailWorksheetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: '',
      filterName: '',
      filterTopic: '',
      currentView: 'full',
      assignWorksheetDropdownOpen: false,
      worksheets: sampleWorksheets,
      detailModalOpen: false,
      activeWorksheet: null,
    };
  }

  onToggleAssignWorksheetDropdown = (event) => {
    event.preventDefault();
    this.setState(({ assignWorksheetDropdownOpen }) => ({ assignWorksheetDropdownOpen: !assignWorksheetDropdownOpen }))
  }

  onToggleDetailModalOpen = (worksheetIndex) => this.setState(({ detailModalOpen, worksheets }) => ({ detailModalOpen: !detailModalOpen, activeWorksheet: worksheets[worksheetIndex] }))

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

  checkForFilteredState = () => {
    const { filterName, filterTopic } = this.state;
    if (!filterName.length && !filterTopic.length) {
      this.setState({ worksheetsAreFiltered: false });
    }
  }

  // eslint-disable-next-line consistent-return
  renderWorksheetView = () => {
    const { currentView } = this.state;
    switch (currentView) {
      case 'list':
        return <ListView onToggleDetailModalOpen={this.onToggleDetailModalOpen} worksheets={this.getMappableWorksheets()} />
      case 'full':
        return <FullView onToggleDetailModalOpen={this.onToggleDetailModalOpen} worksheets={this.getMappableWorksheets()} />
      default:
        break;
    }
  }

  render() {
    const { currentView, assignWorksheetDropdownOpen, detailModalOpen, activeWorksheet } = this.state;
    const { user } = this.props;
    return (
      <React.Fragment>
        <Choose>
          <When condition={detailModalOpen}>
            <LessonWorksheetTestSection
              onClose={this.onToggleDetailModalOpen}
              worksheet={activeWorksheet}
              user={user}
            />
          </When>
          <Otherwise>
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
              {this.renderWorksheetView()}
            </div>
            <div className="add-btn-block">
              <a
                href="#"
                data-target='dropdown_assign_selected'
                onClick={this.onToggleAssignWorksheetDropdown}
                className="dropdown-trigger waves-effect waves-teal btn add-btn"
              >
                <i className="material-icons">add</i> Assign Worksheet
              </a>
              <ul
                id='dropdown_assign_selected'
                className='dropdown-content dropdown-small'
                style={{ display: assignWorksheetDropdownOpen ? 'block' : '0', opacity: assignWorksheetDropdownOpen ? '1' : '0' }}
              >
                <li><a href="#" onClick={() => this.onAssignWorksheet('fromSaved')}>From Saved</a></li>
                <li><a href="#" onClick={() => this.onAssignWorksheet('createNew')}>Create New</a></li>
              </ul>
            </div>
          </Otherwise>
        </Choose>
      </React.Fragment>
    );
  }
}

DetailWorksheetPage.propTypes = {
  user: PropTypes.object.isRequired,
}

export default DetailWorksheetPage;

