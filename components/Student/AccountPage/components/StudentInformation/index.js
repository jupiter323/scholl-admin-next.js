import React from 'react';

const StudentInformation = () => (
  <div className="card-block">
    <h2>Student Information</h2>
    <div className="card">
      <div className="card-content">
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input type="text" id="first_name" value="Arnold" />
            <label className="label" htmlFor="first_name">First Name</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12 focus-blue">
            <input type="text" id="last_name" value="Studently" />
            <label className="label" htmlFor="last_name">Last Name</label>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s6 l5 focus-blue">
            <select id="state_edit">
              <option>Male</option>
              <option>Female</option>
            </select>
            <label className="label" htmlFor="state_edit">Gender</label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StudentInformation;
