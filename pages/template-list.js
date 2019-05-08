import React from 'react';

import FilterSection from '../components/CourseTemplate/components/FilterSection';
import TemplateCard from '../components/CourseTemplate/components/TemplateCard';
import sampleTemplates from '../components/CourseTemplate/utils/sampleTemplate';

class TemplateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      templates: sampleTemplates,
      dropdownIsOpen: false,
      dropdownIndex: null,
      editModalOpen: false,
    };
  }

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  onToggleEditModal = () => this.setState(({ editModalOpen }) => ({ editModalOpen: !editModalOpen }))

  importTemplateFromFile = () => {
    console.warn('stubbed out import function');
  }

  mapTemplateCards = () => this.state.templates.map((template, index) => (
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
    const { templates } = this.state;
    return (
      <body className="instructor-page">
      <div className="wrapper">
        <aside id="slide-out" className="sidenav">
          <div className="sidenav-holder">
            <h1 className="white-text"><img src="images/instructor-logo.png" alt="" /></h1>
            <ul>
              <li><a href="#"><i className="icon-speed"></i> Dashboard</a></li>
              <li><a href="#"><i className="icon-student"></i> Students</a></li>
              <li><a href="#"><i className="icon-instructors"></i> Instructors</a></li>
              <li><a href="#"><i className="icon-members"></i> Classes</a></li>
              <li><a href="#"><i className="icon-location"></i> Locations</a></li>
              <li><a href="#"><i className="icon-sheets-w"></i> Worksheets</a></li>
              <li className="active"><a href="#"><i className="icon-module"></i> Course Templates</a></li>
              <li><a href="#"><i className="icon-help"></i> Help</a></li>
            </ul>
            <a href="#" className="log-block white-text">
              <div className="text">
                <div className="block">Log Out</div>
                <div className="block">Joe Smith</div>
              </div>
              <div className="img-block"><img src="images/img-user.jpg" className="circle" alt="" /></div>
            </a>
          </div>
        </aside>
        <main id="main" role="main">
          <div className="main-holder grey lighten-5 switcher-section">
            <div className="title-row card-panel">
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
            <FilterSection />
            <div className="content-section">
              <div className="container-middle">
                <div className="result-row center-align">
                  <b className="result">- {templates.length} matches -</b>
                </div>
                <div className="d-flex-content row card-width-470">
                  {this.mapTemplateCards()}
                </div>
              </div>
            </div>
          </div>
          <div className="add-btn-block">
            <a href="#" onClick={this.importTemplateFromFile} className="waves-effect waves-teal btn add-btn"><i className="material-icons">add</i> Import Template from File</a>
          </div>
        </main>
      </div>
    </body>
    );
  }
}

export default TemplateList;