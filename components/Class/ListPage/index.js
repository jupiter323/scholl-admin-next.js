import React from "react";
import { StickyContainer, Sticky } from "react-sticky";
import ClassCard from "./components/ClassCard";
import FilterSection from "./components/FilterSection";
import sampleClass from "../utils/sampleClass";

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      classesAreFiltered: false,
      filterName: '',
    }
  }

  onSetFilteredLocationState = (filterLocation) => this.setState({ classesAreFiltered: true, filterLocation })
  onUnsetFilteredLocationState = () => this.setState({ filterLocation: '' }, this.checkForFilteredState)

  checkForFilteredState = () => {
    const { filterName, filterLocation } = this.state;
    if (!filterName.length && !filterLocation.length) {
      this.setState({ classesAreFiltered: false });
    }
  }

  mapClassCards = () => {
    return sampleClass.map((item, index) => <ClassCard key={index} />);
  };

  render() {
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
            {/* card */}
            {this.mapClassCards()}
          </div>
        </div>
      </div>
    );
  }
}

export default ListPage;
