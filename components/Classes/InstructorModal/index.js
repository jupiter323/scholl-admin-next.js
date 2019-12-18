import React from "react";
import PropTypes from "prop-types";
import update from 'immutability-helper';
import Portal from "../../Portal";
import InstructorToggleCard from './components/InstructorToggleCard';

import ClickOffComponentWrapper from "../../ClickOffComponentWrapper";
import sampleInstructors from '../../utils/sampleInstructors';


class InstructorModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        instructors:sampleInstructors,
        selectedInstructors:[],
    }
  }


  onCloseModal = () => this.setState({ selectedInstructors: [] }, this.props.onClose)

  onToggleInstructorSelect = (instuctor) => {
    const { selectedInstructors } = this.state;
    if (selectedInstructors.indexOf(instuctor) === -1) {
      this.setState({ selectedInstructors: [...selectedInstructors, instuctor] });
    } else {
      const updatedInstructors = update(selectedInstructors, {
        $splice: [[selectedInstructors.indexOf(instuctor), 1]],
      });
      this.setState({ selectedInstructors: updatedInstructors });
    }
  }

  onSaveInstructorChanges = () => {
    const { selectedInstructors } = this.state;
    const { handleInstructorsChange } = this.props;
    handleInstructorsChange(selectedInstructors);
    this.onCloseModal();
  }


  mapInstructorToggleCard = () => {
      const { instructors } = this.state;
    return instructors.map((instructor,index)=>(
        <InstructorToggleCard
            key = { index }
            index = {index}
            instructor = {instructor}
            onToggleInstructorSelect={this.onToggleInstructorSelect}
        />
    ))
  }
  render() {
    const { open } = this.props;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick = {this.onCloseModal}>
            <div
              id="modal_Instructor1"
              className="modal modal-custom modal-location"
            >
              <form action="#" className="custom-form">
                <fieldset>
                  <div className="card-modal card-main card">
                    <div
                      className="owner-box card-panel card-panel-title"
                      style={{ backgroundColor: "#00456b", color: "#fff" }}
                    >
                      <div className="card-panel-row row">
                        <div className="col">
                          <h3>Select Instructor(s)</h3>
                        </div>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <span className="hint">
                          Click to select or deselect.
                        </span>
                        <div className="row-holder">
                          <div className="search-field input-field">
                            <input
                              type="search"
                              id="insturtor_search_modal"
                              className="input-control  validate"
                              placeholder="Smith"
                            />
                            <button type="submit" className="search-button">
                              <i className="icon-search" />
                            </button>
                            <label
                              className="label"
                              htmlFor="insturtor_search_modal"
                            >
                              Search
                            </label>
                          </div>
                          <div className="input-field">
                            <select id="location_search_modal">
                              <option>Any</option>
                              <option>option</option>
                              <option>option</option>
                            </select>
                            <label
                              className="label"
                              htmlFor="location_search_modal"
                            >
                              Location
                            </label>
                          </div>
                        </div>
                        <div className="box-scrollable">
                          <div className="height-40 jcf-scrollable">
                            <div className="card-location-holder" style ={{height:"300px",overflowY:"scroll"}}>
                              <ul className="checkbox-list">
                               {this.mapInstructorToggleCard()}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <a
                          href="#!"
                          className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
                        >
                          Cancel
                        </a>
                        <a href="#" className="btn" onClick={this.onSaveInstructorChanges}>
                          Add
                        </a>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            </ClickOffComponentWrapper>
          </div>
        )}
        <style jsx>
          {`
            h4 {
              font-size: 2.28rem;
              line-height: 110%;
              margin: 1.52rem 0 0.912rem 0;
              margin-top: 0;
            }
            .overlay {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 1999;
            }
            .card-modal {
              margin: 0;
              border-radius: 6px;
            }
            #modal_Location1 {
              border-radius: 6px;
            }
            .modal {
              display: block;
              background-color: white;
              position: absolute;
              top: 10%;
              right: 10%;
              left: 10%;
              box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                0 9px 46px 8px rgba(0, 0, 0, 0.12),
                0 11px 15px -7px rgba(0, 0, 0, 0.2);
            }
            .modal-custom {
              opacity: 1;
              visibility: visible;
            }
            .modal-footer {
              background-color: white;
            }
          `}
        </style>
      </Portal>
    );
  }
}

InstructorModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose:PropTypes.func.isRequired,
  handleInstructorsChange:PropTypes.func.isRequired,
};

export default InstructorModal;
