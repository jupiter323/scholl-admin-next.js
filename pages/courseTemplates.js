import React from 'react';
import update from 'immutability-helper';
import {StickyContainer, Sticky} from 'react-sticky';
import FilterSection from '../components/CourseTemplate/components/FilterSection';
import TemplateCard from '../components/CourseTemplate/components/TemplateCard';

import sampleTemplates from '../components/CourseTemplate/utils/sampleTemplate';
import { sessionSort, lessonSort, estimatedTotalCourseWorkSort } from '../components/CourseTemplate/utils/sortOptions';

class CourseTemplates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: sampleTemplates,
      dropdownIsOpen: false,
      dropdownIndex: null,
      editModalOpen: false,
      subjectFilters: [],
      sourceFilters: [],
      titleFilter: '',
      sort: '',
    };
  }

  onClearFilters = () => this.setState({ subjectFilters: [], sourceFilters: [], titleFilter: '', sort: '' })

  onSetSort = (sort) => this.setState({ sort })
  onSetFilteredState = (titleFilter) => this.setState({ templatesAreFiltered: true, titleFilter })
  onUnsetFilteredState = () => this.setState({ templatesAreFiltered: false, titleFilter: '' })

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  onToggleEditModal = () => this.setState(({ editModalOpen }) => ({ editModalOpen: !editModalOpen }))

  // eslint-disable-next-line consistent-return
  onSortTemplates = (templates) => {
    const { sort } = this.state;
    switch (sort) {
      case 'sessions':
        return templates.sort(sessionSort);
      case 'estimatedTotalCourseWork':
        return templates.sort(estimatedTotalCourseWorkSort);
      case 'lessons':
        return templates.sort(lessonSort);
      default:
        break;
    }
  }

  onFilterByTitle = () => {
    const { templates, titleFilter } = this.state;
    return templates.reduce((finalArr, currentTemplate) => {
      const { title } = currentTemplate;
      const templateString = title.replace(/\s/g, "").toLowerCase();
      if (templateString.indexOf(titleFilter) !== -1 && finalArr.indexOf(currentTemplate) === -1) {
        finalArr.push(currentTemplate);
      }
      return finalArr;
    }, []);
  }

  onFilterTemplates = () => {
    const { subjectFilters, sourceFilters, templates: allTemplates } = this.state;
    let templates = allTemplates
    if (subjectFilters.length && subjectFilters.indexOf('all') === -1) {
      templates = templates.filter(template => subjectFilters.indexOf(template.subject) !== -1);
    }
    if (sourceFilters.length) {
      templates = templates.filter(template => sourceFilters.indexOf(template.source) !== -1);
    }
    return templates;
  }

  getMappableTemplates = () => {
    const { subjectFilters, sourceFilters, titleFilter, sort, templates } = this.state;
    let mappableTemplates = templates;
    if (titleFilter.length) {
      mappableTemplates = this.onFilterByTitle();
    }
    if (subjectFilters.length || sourceFilters.length) {
      mappableTemplates = this.onFilterTemplates();
    }
    if (sort) {
      return this.onSortTemplates(mappableTemplates);
    }
    return mappableTemplates;
  }

  importTemplateFromFile = () => {
    console.warn('stubbed out import function');
  }

  handleFilterClick = (filterType, filter) => {
    const { subjectFilters: currentSubjectFilters, sourceFilters: currentSourceFilters } = this.state;
    let modifiedFilterCurrentState;
    let modifiedFilterName;
    let modifiedFilterUpdatedState;
    switch (filterType) {
      case 'subject':
        modifiedFilterCurrentState = currentSubjectFilters;
        modifiedFilterName = 'subjectFilters';
        break;
      case 'source':
        modifiedFilterCurrentState = currentSourceFilters;
        modifiedFilterName = 'sourceFilters';
        break;
      default:
        break;
    }
    // Decide whether we're adding or removing the selected filter
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

  mapTemplateCards = () => this.getMappableTemplates().map((template, index) => (
    <TemplateCard
      template={template}
      index={index}
      dropdownIndex={this.state.dropdownIndex}
      dropdownIsOpen={this.state.dropdownIsOpen}
      onCloseDropdown={this.onCloseDropdown}
      onSetDropdown={this.onSetDropdown}
      onToggleEditModal={this.onToggleEditModal}
    />
  ))

  render() {
    const { subjectFilters, sourceFilters } = this.state;
    return (
      <main id="main" role="main">
        <div className="main-holder grey lighten-5 switcher-section">
          <StickyContainer>
          <Sticky>
        {({ style }) => (
          <div className="title-row card-panel" style={{ ...style, zIndex: 1999 }}>
            <div className="mobile-header">
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
            <h2 className="h1 white-text">
              <span className="heading-holder">
                <i className="icon-module"></i>
                <span className="heading-block">Course Template Library</span>
              </span>
            </h2>
          </div>
        )}
          </Sticky>
          <FilterSection
            subjectFilters={subjectFilters}
            sourceFilters={sourceFilters}
            onSetSort={this.onSetSort}
            onClearFilters={this.onClearFilters}
            handleFilterClick={this.handleFilterClick}
            onSetFilteredState={this.onSetFilteredState}
            onUnsetFilteredState={this.onUnsetFilteredState}
          />
          <div className="content-section">
            <div className="container-middle">
              <div className="result-row center-align">
                <b className="result">- {this.getMappableTemplates().length} matches -</b>
              </div>
              <div className="d-flex-content row card-width-470">
                {this.mapTemplateCards()}
              </div>
            </div>
          </div>
        <div className="add-btn-block">
          <a href="#" onClick={this.importTemplateFromFile} className="waves-effect waves-teal btn add-btn"><i className="material-icons">add</i> Import Template from File</a>
          </div>
          </StickyContainer>
        </div>
      </main>
    );
  }
}

export default CourseTemplates;