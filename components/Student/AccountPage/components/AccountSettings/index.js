import React from 'react';

const AccountSettings = () => (
  <div className="row mb-0 one-large-col d-flex-content">
    <div className="col s12">
      <div className="card-block">
        <h2>Account Settings</h2>
        <div className="card">
          <div className="card-content">
            <div className="course-context_two-col">
              <div className="column">
                <div className="checkbox-block">
                  <div className="checkbox-holder">
                    <label>
                      <input type="checkbox" className="filled-in" />
                      <span className="large-label">Allow Student Login Prior to Activation</span>
                    </label>
                    <span className="note">To enter initial practice test answers</span>
                  </div>
                  <p>{"By default, a student may not log in until you activate the student's account. If, prior to signing up for the course, this student needs to enter his or her own answers for an initial practice test, choose this option to allow the student access. When the student completes the test, we will not reveal the score or score report, which will retain your opportunity to setup a consultation with student/parent to review the results."}</p>
                </div>
                <div className="checkbox-block">
                  <div className="checkbox-holder">
                    <label>
                      <input type="checkbox" className="filled-in" />
                      <span className="large-label">Unstructured Course Mode</span>
                    </label>
                    <span className="note">Oﬀ by default</span>
                  </div>
                  <p>{"With this option selected, the student can access any lesson at any time, whether or not you've explicitly assigned it. If a student begins a lesson that you have not yet assigned, the lesson will appear on the student's planner for the day that the student begins the lesson, and no due date will be assigned."}</p>
                </div>
                <div className="checkbox-block">
                  <div className="row mb-0">
                    <div className="col s12 l8">
                      <div className="input-field focus-blue">
                        <select id="duration">
                          <option>Use organization default</option>
                          <option>Option</option>
                          <option>Option</option>
                        </select>
                        <label htmlFor="duration">Default Session Duration</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="checkbox-block">
                  <div className="checkbox-holder">
                    <label>
                      <input type="checkbox" className="filled-in" />
                      <span className="large-label">Require Students to Watch Video Solutions</span>
                    </label>
                    <span className="note">Not recommended</span>
                  </div>
                  <p>With this option is selected, the student must watch video solutions for each of the problems that he or she misses or skips before the lesson or quiz is marked complete.</p>
                </div>
                <div className="checkbox-block">
                  <div className="checkbox-holder">
                    <label>
                      <input type="checkbox" className="filled-in" />
                      <span className="large-label">Prevent Login</span>
                    </label>
                  </div>
                  <p>Check this box to temporarily prevent this student from logging in. If this account has not yet been activated, selecting this option is unnecessary because an unactivated student cannot login anyway.</p>
                </div>
                <div className="checkbox-block">
                  <div className="checkbox-holder">
                    <label>
                      <input type="checkbox" className="filled-in" />
                      <span className="large-label">Inactive</span>
                    </label>
                  </div>
                  <p>Select this option when you no longer want this student to appear on your list of current students. All student data is retained and, by default, included in instructor and global statistics. </p>
                </div>
                <div className="checkbox-block">
                  <div className="checkbox-holder">
                    <label>
                      <input type="checkbox" className="filled-in" />
                      <span className="large-label">Exclude from Statistics</span>
                    </label>
                  </div>
                  <p>Use this option to exclude this student’s data from all instructor and global statistics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AccountSettings;
