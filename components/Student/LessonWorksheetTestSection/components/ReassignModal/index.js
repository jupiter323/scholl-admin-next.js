import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Portal from '../../../../Portal';
import ClickOffComponentWrapper from '../../../../ClickOffComponentWrapper';

class ReassignModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignDate: '',
      assignTime: '',
      dueDate: '',
      dueTime: '',
    };
  }

  onResetModal = () => this.setState({ assignDate: '', assignTime: '', dueDate: '', dueTime: '' })

  onCloseModal = () => {
    const { onClose } = this.props;
    onClose();
    this.onResetModal();
  }

  reassignDate = () => {
    const { onReassignDate } = this.props;
    const { assignDate: unformattedAssignDate, assignTime: unformattedAssignTime, dueDate: unformattedDueDate, dueTime: unformattedDueTime } = this.state;
    const assignDate = moment(unformattedAssignDate).format('MM/DD/YY');
    const assignTime = moment(unformattedAssignTime).format('hh:mm');
    const dueDate = moment(unformattedDueDate).format('MM/DD/YY');
    const dueTime = moment(unformattedDueTime).format('hh:mm');
    onReassignDate({ assignDate, assignTime, dueDate, dueTime });
    this.onResetModal();
  }

  handleDatePickerChange = (field, value) => this.setState({ [field]: value })

  render() {
    const { open } = this.props;
    const { assignDate, assignTime, dueDate, dueTime } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={this.onCloseModal}>
              <div id="modal_reschedule" className="modal modal-custom modal-calendar">
                <div className="card-modal card">
                  <div className="card-panel card-panel-title" style={{ backgroundColor: '#25bbf7', color: '#fff' }}>
                    <div className="card-panel-row row">
                      <div className="col">
                        <h2>
                          <span className="heading-holder">
                            <span className="heading-block">Reschedule</span>
                          </span>
                        </h2>
                      </div>
                      <div className="col right-align">
                        <a href="#" className="panel-link close modal-close"><i className="icon-close-thin"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="card-content" style={{ height: '410px' }}>
                    <div className="card-body" style={{ height: '335px' }}>
                      <div className="modal-row row">
                        <div className="col s6">
                          <div className="datepicker-field input-field">
                            <i className="icon-calendar"></i>
                            <DatePicker
                              selected={assignDate}
                              withPortal
                              dateFormat="MM/dd/yy"
                              id="assignDate"
                              name="assignDate"
                              onChange={(event) => this.handleDatePickerChange('assignDate', event)}
                            />
                            <label className={assignDate ? 'label active' : 'label'} htmlFor="new_test_section_assign_date">Assign For</label>
                          </div>
                        </div>
                        <div className="col s6">
                          <div className="datepicker-field input-field">
                            <i className="icon-clock2"></i>
                            <DatePicker
                              selected={assignTime}
                              withPortal
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              dateFormat="h:mm aa"
                              timeCaption="Time"
                              id="assignTime"
                              name="assignTime"
                              onChange={(event) => this.handleDatePickerChange('assignTime', event)}
                            />
                            <label className={assignTime ? 'label active' : 'label'} htmlFor="assignTime">Time</label>
                          </div>
                        </div>
                      </div>
                      <div className="modal-row row">
                        <div className="col s6">
                          <div className="datepicker-field input-field">
                            <i className="icon-calendar"></i>
                            <DatePicker
                              selected={dueDate}
                              withPortal
                              dateFormat="MM/dd/yy"
                              id="dueDate"
                              name="dueDate"
                              onChange={(event) => this.handleDatePickerChange('dueDate', event)}
                            />
                            <label className={dueDate ? 'label active' : 'label'} htmlFor="dueDate">Due (optional)</label>
                          </div>
                        </div>
                        <div className="col s6">
                          <div className="datepicker-field input-field">
                            <i className="icon-clock2"></i>
                            <DatePicker
                              selected={dueTime}
                              withPortal
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              dateFormat="h:mm aa"
                              timeCaption="Time"
                              id="dueTime"
                              name="dueTime"
                              onChange={(event) => this.handleDatePickerChange('dueTime', event)}
                            />
                            <label className={dueTime ? 'label active' : 'label'} htmlFor="dueTime">Time</label>
                          </div>
                        </div>
                      </div>
                      <div className="modal-row row">
                        <p>&nbsp;</p>
                      </div>
                    </div>
                    <div className="modal-footer modal-footer-width">
                      <a href="#" className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
                      <a href="#" className="link-btn waves-effect waves-teal btn-flat">Save Changes</a>
                    </div>
                  </div>
                </div>
              </div>
            </ClickOffComponentWrapper>
          </div>
        )}
        <style jsx>
          {`
            .card-modal {
              margin: 0;
              border-radius: 6px;
            }
            .overlay {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 2003;
            }
            .modal-custom {
              opacity: 1;
              visibility: visible;
            }
            .modal-footer {
              background-color: white;
            }
            #modal_reschedule {
              top: 10%;
            }
            div.react-datepicker__portal {
              height: 100%!important;
              width: 100%!important;
            }
          `}
        </style>
      </Portal>
    );
  }
}

ReassignModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onReassignDate: PropTypes.func.isRequired,
}

export default ReassignModal;
