import React from "react";
import PropTypes from "prop-types";
import ClassCard from "./components/ClassCard";
import FilterSection from "./components/FilterSection";

import ClassModal from "../ClassModal";



class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classesAreFiltered: false,
      filterName: "",
      dropdownIndex: null,
      dropdownIsOpen: false,
      classModalOpen: false,
      
    };
  }

  onSetFilteredLocationState = filterLocation => this.setState({ classesAreFiltered: true, filterLocation });

  onUnsetFilteredLocationState = () => this.setState({ filterLocation: "" }, this.checkForFilteredState);

  onSetDropdown = dropdownIndex => this.setState({ dropdownIsOpen: true, dropdownIndex });

  onCloseDropdown = () => this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  onCloneClass = index => {
    const { onCloneClass } = this.props;
    this.onCloseDropdown();
    onCloneClass(index);
  };

  onDeleteClass = index => {
    const { onDeleteClass } = this.props;
    this.onCloseDropdown();
    onDeleteClass(index);
  };

  checkForFilteredState = () => {
    const { filterName, filterLocation } = this.state;
    if (!filterName.length && !filterLocation.length) {
      this.setState({ classesAreFiltered: false });
    }
  };

  onOpenClassModal = event => {
    event.preventDefault();
    this.setState({ classModalOpen: true });
  };

  

  onCloseClassModal = () => this.setState({ classModalOpen: false });

  mapClassCards = () => {
    return this.props.classes.map((item, index) => (
      <ClassCard
        key={index}
        index={index}
        classroom={item}
        onSetDropdown={this.onSetDropdown}
        onCloseDropdown={this.onCloseDropdown}
        onCloneClass={() => this.onCloneClass(index)}
        onDeleteClass={() => this.onDeleteClass(index)}
        dropdownIsOpen={this.state.dropdownIsOpen}
        dropdownIndex={this.state.dropdownIndex}
        onHandleClassCard={() => this.props.onHandleClassCard(index)}
      />
    ));
  };

  render() {
    const { classModalOpen} = this.state;
    const { onSaveNewClass } = this.props;
    return (
      <div>
        <div className="title-row card-panel">
          <div className="mobile-header">
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
          </div>
          <nav className="breadcrumb-holder">
            <div className="nav-wrapper ">
              <a href="#!" className="breadcrumb">
                &lt; Classes
              </a>
            </div>
          </nav>
          <h2 className="h1 white-text">
            <span className="heading-holder">
              <i className="icon-members" />
              <span className="heading-block">Classes</span>
            </span>
          </h2>
        </div>
        <FilterSection
          onSetFilteredLocationState={this.onSetFilteredLocationState}
          onUnsetFilteredLocationState={this.onUnsetFilteredLocationState}
        />
        <div className="content-section">
          <div className="container-md">
            <div className="result-row center-align">
              <b className="result">- 23 matches -</b>
            </div>
          </div>
          <div className="row d-flex-content card-width-366">
            {this.mapClassCards()}
          </div>
        </div>
        <div className="add-btn-block">
          <a
            href="#modal_add_new_class"
            className="modal-trigger waves-effect waves-teal btn add-btn"
            onClick={() => this.onOpenClassModal(event)}
          >
            <i className="material-icons">add</i> New Class
          </a>
        </div>
        <ClassModal 
          open={classModalOpen}
          onClose={this.onCloseClassModal}
          onSave = {onSaveNewClass}
        />
        
      </div>
    );
  }
}

ListPage.propTypes = {
  classes: PropTypes.array.isRequired,
  onHandleClassCard: PropTypes.func.isRequired,
  onCloneClass: PropTypes.func.isRequired,
  onDeleteClass: PropTypes.func.isRequired,
  onSaveNewClass: PropTypes.func.isRequired,
};

export default ListPage;
