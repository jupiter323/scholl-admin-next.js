import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../../../../Portal';
import ClickOffComponentWrapper from '../../../../ClickOffComponentWrapper';

import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';

const testDateOptions = [
  {
    label: 'January SAT (01/15/2019)',
    value: '01/15/19',
  },
  {
    label: 'January SAT (01/02/2019)',
    value: '01/02/19',
  },
  {
    label: 'January SAT (01/21/2019)',
    value: '01/21/19',
  },
]

class AssignTargetTestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testDate: '',
    };
  }

  onSetTestDate = (testDate) => this.setState({ testDate })

  onCloseModal = () => this.setState({ testDate: '' }, this.props.onClose)

  assignTargetTest = () => {
    const { onAssignTargetTest } = this.props;
    const { testDate } = this.state;
    onAssignTargetTest(testDate);
    this.onCloseModal();
  }

  render() {
    const { open } = this.props;
    const { testDate } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={this.onCloseModal}>
              <div id="modal_assign_target_test" className="modal modal-custom modal-calendar" style={{ zIndex: '1003', top: '10%' }}>
                <div className="card-modal card">
                  <div className="card-panel card-panel-title" style={{ backgroundColor: '#ec3330', color: '#fff' }}>
                    <div className="card-panel-row row">
                      <div className="col">
                        <h2>
                          <span className="heading-holder">
                            <i className="icon-cup"></i>
                            <span className="heading-block"> Set Target Test Date</span>
                          </span>
                        </h2>
                      </div>
                      <div className="col right-align">
                        <a href="#!" className="panel-link close modal-close"><i className="icon-close-thin"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <div className="modal-row row">
                        <div className="col s12">
                          <div className="input-field" style={{ marginBottom: '0', marginTop: '0' }}>
                            <Dropdown
                              value={getValueFromState(testDate, testDateOptions)}
                              onChange={this.onSetTestDate}
                              options={testDateOptions}
                              label="Test Date"
                              stateKey="testDate"
                              dropdownKey="testDate"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="modal-row row">
                        <div className="col s12">
                          <span className="note">Note:</span>
                          <p>If the student plans to take the SAT multiple times, you may schedule multiple “Target Test Dates.” Test score and improvement metrics will be based on the student’s score on the ﬁnal target test date.</p>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer modal-footer-width">
                      <a href="#" onClick={this.onCloseModal} className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
                      <a href="#" onClick={this.assignTargetTest} className="link-btn waves-effect waves-teal btn-flat">Set Target Test Date</a>
                    </div>
                  </div>
                </div>
              </div>
            </ClickOffComponentWrapper>
          </div>
        )}
        <style jsx>
          {`
            .overlay {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 999;
            }
            .card-modal {
              margin: 0;
              border-radius: 6px;
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

AssignTargetTestModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAssignTargetTest: PropTypes.func.isRequired,
};

export default AssignTargetTestModal;
