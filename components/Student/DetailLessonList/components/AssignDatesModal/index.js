import React, { useState } from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import moment from "moment";

import update from "immutability-helper";
import Portal from "../../../../Portal";
import ClickOffComponentWrapper from "../../../../ClickOffComponentWrapper";
import Dropdown from "../../../../FormComponents/Dropdown";
import getValueFromState from "../../../../utils/getValueFromState";
import timeOptions from "../../utils/timeOptions";

const DatePicker = dynamic(() => import("../../../../FormComponents/DatePicker"), {
  ssr: false
});

const AssignDatesModal = props => {
  const [assignDate, setAssignDate] = useState(moment()._d);
  const [assignTime, setAssignTime] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [openDueDate, onOpenDueDate] = useState(false);

  const onAssignDates = () => {
    // assgin dates here
    console.log({
      assignDate: moment(assignDate).format("DD/MM/YYYY"),
      assignTime,
      dueDate: moment(dueDate).format("DD/MM/YYYY"),
      dueTime,
      formatedeventDate: assignDate
    });
    console.log({Date: moment()})
    closeModal();
  };

  const closeModal = () => {
    // setAssignDate("");
    setAssignTime("");
    setDueDate("");
    setDueTime("");
    props.onCloseDatesModal();
  };

  const hanldeDueDate = () => {
    
    setDueDate("");
    setDueTime("");

    onOpenDueDate(!openDueDate)

  }

  // handleChange = (event, name) => {
  //   const value = event.target ? event.target.value : event;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  const { open } = props;

  return (
    <Portal selector='#modal'>
      {open && (
        <div className='outer-overlay'>
          <ClickOffComponentWrapper onOuterClick={closeModal}>
            <div id='datesModal' className='modal modal-custom modal-assignDates'>
              <div className='card-modal card' style={{ overflow: "auto" }}>
                <div
                  className='owner-box card-panel card-panel-title'
                  style={{ backgroundColor: "rgb(24,181,233)", color: "#fff" }}
                >
                  <div className='card-panel-row row'>
                    <div className=' icon-col'>
                      <i className='icon-calendar'></i>
                    </div>
                    <div className='col'>
                      <h4 style={{ padding: "8px 0px 0px 20px" }}>Select Dates</h4>
                    </div>
                  </div>
                </div>
                <div className='card-content'>
                  <div className='card-body' style={{ height: "300px", padding: "10px 37px" }}>
                    <div className='row justify-center' style={{ marginTop: "18px" }}>
                      <div className='col s6'>
                        <label htmlFor='assignDate'>Assignment Date</label>
                        <div className='datepicker-field input-field'>
                          <i
                            className='icon-calendar-dark'
                            style={{ marginRight: "20px", zIndex: "1001" }}
                          ></i>
                          <DatePicker
                            id='assignDate'
                            selected={assignDate}
                            onChange={event =>
                              setAssignDate(event.target ? event.target.value : event)
                            }
                            name='assignDate'
                          />
                        </div>
                      </div>
                      <div className='col s6'>
                        <div
                          className='input-field focus-blue'
                          style={{ marginTop: "-15px", zIndex: "1001" }}
                        >
                          <Dropdown
                            value={getValueFromState(assignTime, timeOptions)}
                            onChange={event =>
                              setAssignTime(event.target ? event.target.value : event)
                            }
                            label='Time'
                            options={timeOptions}
                            stateKey='assignmentDate'
                            dropdownKey='assignmentDate'
                            name='assignTime'
                            id='assignTime'
                          />
                        </div>
                      </div>
                    </div>

                    {openDueDate && (
                      <div className='row'>
                        <div className='col s6'>
                          <label htmlFor='dueDate' style={{ marginTop: "50px" }}>
                            Due Date (optional)
                          </label>
                          <div className='datepicker-field input-field'>
                            <i
                              className='icon-calendar-dark'
                              style={{ marginRight: "20px", zIndex: "1001" }}
                            ></i>
                            <DatePicker
                              id='dueDate'
                              selected={dueDate}
                              onChange={event =>
                                setDueDate(event.target ? event.target.value : event)
                              }
                              name='dueDate'
                            />
                          </div>
                        </div>
                        <div className='col s6'>
                          <div className='input-field focus-blue' style={{ marginTop: "35px" }}>
                            <Dropdown
                              value={getValueFromState(dueTime, timeOptions)}
                              onChange={event =>
                                setDueTime(event.target ? event.target.value : event)
                              }
                              label='Time'
                              options={timeOptions}
                              stateKey='dueTime'
                              dropdownKey='dueTime'
                              name='dueTime'
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className='row'>
                      <div className='col s6'>
                        <a className='btn' onClick={hanldeDueDate}>{openDueDate ? "Remove Due Date" : "Add Due Dute"}</a>
                      </div>
                    </div>
                  </div>
                  <div className='modal-footer'>
                    <a
                      href='#'
                      onClick={closeModal}
                      className='modal-close waves-effect waves-teal btn-flat pink-text text-darken-1'
                    >
                      Cancel
                    </a>
                    <a href='#' className='btn' onClick={onAssignDates}>
                      Assign Dates
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
            margin: 1.52rem 0 0.912rem 0;
            margin-top: 0;
          }
          .outer-overlay {
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
          #assign-dates {
            border-radius: 6px;
          }
          .modal {
            display: block;
            background-color: white;
            position: absolute;
            width: 30%;
            top: 10%;
            right: 10%;
            left: 10%;
            box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12),
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
};

AssignDatesModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onCloseDatesModal: PropTypes.func.isRequired,
  onHandleDates: PropTypes.func.isRequired
};

export default AssignDatesModal;
