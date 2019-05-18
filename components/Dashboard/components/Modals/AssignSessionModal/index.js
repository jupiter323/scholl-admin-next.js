import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Portal from '../../../../Portal';
import ClickOffComponentWrapper from '../../../../ClickOffComponentWrapper';

class AssignSessionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      startTime: '',
      endTime: '',
      notes: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { modalDate } = this.props;
    if (prevState.date === '' && modalDate) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ date: new Date(modalDate) });
    }
  }

  onResetModal = () => this.setState({ date: '', startTime: '', endTime: '', notes: '' })

  onCloseModal = () => {
    const { onClose } = this.props;
    onClose();
    this.onResetModal();
  }

  saveNewSession = () => {
    const { onSaveNewSession } = this.props;
    const { date: unformattedDate, startTime: unformattedStartTime, endTime: unformattedEndTime, notes } = this.state;
    const date = moment(unformattedDate).format('MM/DD/YY');
    const startTime = moment(unformattedStartTime).format('hh:mm');
    const endTime = moment(unformattedEndTime).format('hh:mm');
    onSaveNewSession({ date, startTime, endTime, notes, title: 'Session' });
    this.onResetModal();
  }

  handleDetailsChange = ({ target }) => this.setState({ [target.name]: target.value })

  handleDatePickerChange = (field, value) => this.setState({ [field]: value })

  render() {
    const { open } = this.props;
    const { date, startTime, endTime, notes } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={this.onCloseModal}>
              <div id="modal_assign_session" className="modal modal-custom modal-calendar">
                <div className="card-modal card">
                  <div className="card-panel card-panel-title" style={{ backgroundColor: '#14b04b', color: '#fff' }}>
                    <div className="card-panel-row row">
                      <div className="col">
                        <h2>
                          <span className="heading-holder">
                            <i className="icon-clock2"></i>
                            <span className="heading-block"> New Session</span>
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
                          <div className="datepicker-field input-field">
                            <i className="icon-calendar"></i>
                            <DatePicker
                              selected={date}
                              className="full-width"
                              dateFormat="MM/dd/yy"
                              id="date"
                              name="date"
                              onChange={(event) => this.handleDatePickerChange('date', event)}
                            />
                            <label className={date ? 'label active' : 'label'} htmlFor="date">Date</label>
                          </div>
                        </div>
                      </div>
                      <div className="modal-row row">
                        <div className="col s6">
                          <div className="datepicker-field input-field">
                            <i className="icon-clock2"></i>
                            <DatePicker
                              selected={startTime}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              dateFormat="h:mm aa"
                              timeCaption="Time"
                              id="startTime"
                              name="startTime"
                              onChange={(event) => this.handleDatePickerChange('startTime', event)}
                            />
                            <label className={startTime ? 'label active' : 'label'} htmlFor="startTime">Start Time</label>
                          </div>
                        </div>
                        <div className="col s6">
                          <div className="datepicker-field input-field">
                            <i className="icon-clock2"></i>
                            <DatePicker
                              selected={endTime}
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              dateFormat="h:mm aa"
                              timeCaption="Time"
                              id="endTime"
                              name="endTime"
                              onChange={(event) => this.handleDatePickerChange('endTime', event)}
                            />
                            <label className={endTime ? 'label active' : 'label'} htmlFor="endTime">End Time</label>
                          </div>
                        </div>
                      </div>
                      <div className="modal-row row">
                        <div className="col s12">
                          <div className="input-field input-field-textarea">
                            <textarea
                              id="notes"
                              name="notes"
                              className="textarea-scroll"
                              cols="40" rows="7"
                              value={notes}
                              onChange={this.handleDetailsChange}
                            />
                            <label className={notes ? 'label active' : 'label'} htmlFor="notes">Session Notes:</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer modal-footer-width">
                      <a href="#" onClick={this.onCloseModal} className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
                      <a href="#" onClick={this.saveNewSession} className="link-btn waves-effect waves-teal btn-flat">Add Session</a>
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
          `}
        </style>
      </Portal>
    );
  }
}

AssignSessionModal.propTypes = {
  modalDate: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSaveNewSession: PropTypes.func.isRequired,
};

export default AssignSessionModal;
