import React from 'react';

const CourseContext = () => (
  <div className="row mb-0 one-large-col d-flex-content">
    <div className="col s12">
      <div className="card-block">
        <h2>Course Context</h2>
        <div className="card">
          <div className="card-content">
            <div className="course-context_two-col">
              <div className="column">
                <div className="row mb-0">
                  <div className="col s12">
                    <div className="input-field focus-blue">
                      <select id="first_date">
                        <option>First Assignment Date (default)</option>
                        <option>Option</option>
                        <option>Option</option>
                      </select>
                      <label htmlFor="first_date">Course Start Date</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s4">
                    <div className="datepicker-field input-field">
                      <i className="icon-calendar-dark"></i>
                      <input type="text" className="datepicker" value="10/01/2018" />
                    </div>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col s12">
                    <div className="input-field focus-blue">
                      <select id="last_date">
                        <option>Target Test Date (default)</option>
                        <option>Option</option>
                        <option>Option</option>
                      </select>
                      <label htmlFor="last_date">Course End Date</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s4">
                    <div className="datepicker-field input-field">
                      <i className="icon-calendar-dark"></i>
                      <input type="text" className="datepicker" value="01/26/2019" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="row">
                  <div className="col s12 m6 l8">
                    <div className="input-field focus-blue">
                      <select id="date">
                        <option>October 6, 2018</option>
                        <option>Option</option>
                        <option>Option</option>
                      </select>
                      <label htmlFor="date">Target Test Date*</label>
                      <span className="note">*Optional</span>
                    </div>
                  </div>
                  <div className="col s12 m6 l4">
                    <div className="input-field focus-blue">
                      <input type="text" id="score" />
                      <label className="label" htmlFor="score">Target Score*</label>
                      <span className="note">*Optional</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <div className="input-field focus-blue">
                      <input type="text" id="school" />
                      <label className="label" htmlFor="school">Hight School*</label>
                      <span className="note">*Optional</span>
                    </div>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col s12">
                    <div className="input-field focus-blue">
                      <input type="text" id="year" />
                      <label className="label" htmlFor="year">Graduation Year*</label>
                      <span className="note">*Optional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CourseContext;
