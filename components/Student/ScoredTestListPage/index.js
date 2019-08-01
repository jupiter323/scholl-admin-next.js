import React from 'react';
// import PropTypes from 'prop-types';

import ScoredTestCard from './components/ScoredTestCard';

const sampleTests = [
  {
    id: 1,
    status: 'complete',
    testType: 'real',
    title: 'May 2019',
    testDate: '05/12/2019',
    dueDate: '',
    completionDate: '',
    completionTime: '',
    disabled: false,
    available: true,
    weekNumber: '',
    version: '',
    initialScore: '1050',
    targetScore: '1500',
    currentScore: '1245',
    totalGain: '132',
    flags: ['', '', ''],
    subjects: [
      {
        subject: 'Reading',
        targetScore: '400',
        currentScore: '376',
        totalGain: '73',
      },
      {
        subject: 'Writing',
        targetScore: '400',
        currentScore: '310',
        totalGain: '73',
      },
      {
        subject: 'Math',
        targetScore: '800',
        currentScore: '681',
        totalGain: '101',
      },
    ],
  },
  {
    id: 2,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '05/05/2019',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [
      {
        subject: 'Reading',
        targetScore: '400',
        currentScore: '332',
        totalGain: '81',
      },
      {
        subject: 'Writing',
        targetScore: '400',
        currentScore: '291',
        totalGain: '65',
      },
      {
        subject: 'Math',
        targetScore: '800',
        currentScore: '702',
        totalGain: '98',
      },
    ],
  },
  {
    id: 3,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '05/05/2019',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: true,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [
      {
        subject: 'Reading',
        targetScore: '400',
        currentScore: '332',
        totalGain: '81',
      },
      {
        subject: 'Writing',
        targetScore: '400',
        currentScore: '291',
        totalGain: '65',
      },
      {
        subject: 'Math',
        targetScore: '800',
        currentScore: '702',
        totalGain: '98',
      },
    ],
  },
  {
    id: 4,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '05/05/2019',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: false,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '1221',
    totalGain: '98',
    flags: [],
    subjects: [
      {
        subject: 'Reading',
        targetScore: '400',
        currentScore: '332',
        totalGain: '81',
      },
      {
        subject: 'Writing',
        targetScore: '400',
        currentScore: '291',
        totalGain: '65',
      },
      {
        subject: 'Math',
        targetScore: '800',
        currentScore: '702',
        totalGain: '98',
      },
    ],
  },
  {
    id: 5,
    status: 'complete',
    testType: 'simulated',
    title: '1st Simulated SAT',
    testDate: '',
    availableDate: '04/01/19',
    dueDate: '05/05/2019',
    completionDate: '05/07/19',
    completionTime: '4:21 PM',
    disabled: false,
    available: true,
    weekNumber: '3',
    version: '2345',
    initialScore: '1100',
    targetScore: '1320',
    currentScore: '',
    totalGain: '',
    flags: [],
    subjects: [
      {
        subject: 'Reading',
        targetScore: '400',
        currentScore: '332',
        totalGain: '81',
      },
      {
        subject: 'Writing',
        targetScore: '400',
        currentScore: '291',
        totalGain: '65',
      },
      {
        subject: 'Math',
        targetScore: '800',
        currentScore: '',
        totalGain: '',
      },
    ],
  },
];

class ScoredTestListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoredTests: sampleTests,
      dropdownIndex: null,
      dropdownIsOpen: false,
    };
  }

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  onEditTest = () => console.warn('Pending implementation edit test UI and functionality')
  onResetTest = () => console.warn('Pending implementation of reset UI and functionality')
  onDeleteTest = () => console.warn('Pending implementation of delete test UI and functionality')
  onDownloadReport = () => console.warn('Pending implementation of download report ui and functionality')

  mapScoredTests = () => this.state.scoredTests.map((test, index) => (
    <ScoredTestCard
      test={test}
      index={index}
      key={test.id}
      onEditTest={this.onEditTest}
      onResetTest={this.onResetTest}
      onDeleteTest={this.onDeleteTest}
      onDownloadReport={this.onDownloadReport}
      dropdownIndex={this.state.dropdownIndex}
      dropdownIsOpen={this.state.dropdownIsOpen}
    />
  ))

  render() {
    return (
      <React.Fragment>
        <div className="filter-form-holder">
          <ul className="collapsible expandable">
            <li>
              <div className="collapsible-body">
                <div className="filter-form_checkbox-list-holder justify-center">
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="future" />
                      <label htmlFor="future">Future</label>
                    </li>
                    <li>
                      <input type="checkbox" id="available" />
                      <label htmlFor="available">Available</label>
                    </li>
                    <li>
                      <input type="checkbox" id="complete" />
                      <label htmlFor="complete">Complete</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="due_today" />
                      <label htmlFor="due_today">Due Today</label>
                    </li>
                    <li>
                      <input type="checkbox" id="due_next_session" />
                      <label htmlFor="due_next_session">Due By Next Session</label>
                    </li>
                    <li>
                      <input type="checkbox" id="due_week" />
                      <label htmlFor="due_week">Due this Week</label>
                    </li>
                    <li>
                      <input type="checkbox" id="overdue" />
                      <label htmlFor="overdue">Overdue</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="has_review_flags" />
                      <label htmlFor="has_review_flags">Has Review Flags</label>
                    </li>
                  </ul>
                </div>
                <div className="d-flex row mb-0 justify-center">
                  <div className="col s12 m3">
                    <div className="search-field input-field">
                      <input type="search" id="test_version_search" className="input-control  validate" />
                      <button type="submit" className="search-button"><i className="icon-search"></i></button>
                      <label className="label" htmlFor="test_version_search">Test Version</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-0 d-flex align-items-center">
                <div className="col s12 l4">
                  <div className="row mb-0">
                    <div className="col s12 xl7">
                      <div className="input-field">
                        <select id="sort_tests">
                          <option>Date</option>
                          <option>Page</option>
                        </select>
                        <label className="label" htmlFor="sort_tests">Sort By</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 l4 hide-on-med-and-down show-on-large">&nbsp;</div>
                <div className="col s12 l4">
                  <div className="option-filters">
                    <div className="option-item clear"><a href="#">Clear Filters</a></div>
                    <div className="option-item">
                      <span className="collapsible-header"><span className="hide-text">Hide</span> <span className="open-text">Open</span> Filters</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="content-section">
          <div className="row d-flex-content card-width-366">
            {this.mapScoredTests()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ScoredTestListPage;
