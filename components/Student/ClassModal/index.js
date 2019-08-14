import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Portal from '../../Portal';
import ClickOffComponentWrapper from '../../ClickOffComponentWrapper';
import ClassToggleCard from './components/ClassToggleCard';

import sampleClasses from '../../utils/sampleClasses';

class ClassModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      classes: sampleClasses,
      selectedClasses: [],
    };
  }

  onCloseModal = () => this.setState({ selectedClasses: [] }, this.props.onClose)

  onToggleClassSelect = (course) => {
    const { selectedClasses } = this.state;
    if (selectedClasses.indexOf(course) === -1) {
      this.setState({ selectedClasses: [...selectedClasses, course] });
    } else {
      const updatedClasses = update(selectedClasses, {
        $splice: [[selectedClasses.indexOf(course), 1]],
      });
      this.setState({ selectedClasses: updatedClasses });
    }
  }

  onSaveClassChanges = () => {
    const { selectedClasses } = this.state;
    const { handleClassChange } = this.props;
    handleClassChange(selectedClasses, 'course', 'classes');
    this.onCloseModal();
  }

  render() {
    const { open } = this.props;
    const { classes } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={this.onCloseModal}>
              <div id="modal_Location1" className="modal modal-custom modal-location">
                <div className="card-modal card">
                  <div className="owner-box card-panel card-panel-title" style={{ backgroundColor: '#00456b', color: '#fff' }}>
                    <div className="card-panel-row row">
                      <div className="col">
                        <h3>Select Class(es)</h3>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <span className="hint">Click to select or deselect.</span>
                      <div className="box-scrollable">
                        <div className="height-40 jcf-scrollable">
                          <div className="card-location-holder" style={{ height: '100%', overflowY: 'scroll' }}>
                            <ul className="checkbox-list">
                              {classes.map(course => (
                                <ClassToggleCard
                                  key={course.className}
                                  course={course}
                                  onToggleClassSelect={this.onToggleClassSelect}
                                />
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a
                        href="#"
                        onClick={this.onCloseModal}
                        className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
                      >
                        Cancel
                      </a>
                      <a
                        href="#"
                        className="btn"
                        onClick={this.onSaveClassChanges}
                      >
                        Add
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ClickOffComponentWrapper>
          </div>
        )}
        <style jsx>
          {`
              h4 {
                font-size: 2.28rem;
                line-height: 110%;
                margin: 1.52rem 0 .912rem 0;
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
                box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
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

ClassModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleClassChange: PropTypes.func.isRequired,
};

export default ClassModal;
