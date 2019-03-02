import React from 'react';

const Actions = () => (
  <div className="card-block">
    <h2>Actions</h2>
    <div className="row mb-0 d-flex-content large sameheight">
      <div className="col s12 l5">
        {/* <!-- form-panel --> */}
        <div className="card">
          <div className="card-content">
            <div className="account-block">
              <h3>Welcome Email</h3>
              <p>Use this feature to send (or resend) a welcome email to the student. The welcome email contains login instruction and a temporary password that the student can use to login for the ﬁrst time. Keep in mind that sending this email will automatically set a new, randomly generated password which may be confusing to the student if he or she has already received a welcome email or has already set a permanent password.</p>
              <p>
                <button className="btn waves-effect waves-light bg-blue" type="submit" name="action">(Re)send Welcome Email</button>
              </p>
              <label>
                <input type="checkbox" className="filled-in" checked />
                <span className="large-label">cc me at:  this_is_me@gmail.com</span>
              </label>
            </div>
            <div className="account-block">
              <h3>Password Reset Email</h3>
              <p>{"The student will receive an email with a new temporary password. Keep in mind, the student's current password will no longer be valid.."}</p>
              <p>
                <button className="btn waves-effect waves-light bg-blue" type="submit" name="action">Send Password Reset Email</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col s12 l5">
        {/* <!-- form-panel --> */}
        <div className="card">
          <div className="card-content">
            <div className="account-block">
              <h3>Reset Password</h3>
              <p>{"The student will receive an email with a new temporary password. Keep in mind, the student's current password will no longer be valid."}</p>
              <div className="row mb-0">
                <div className="input-field col s12 focus-blue">
                  <input type="password" id="password" value="****************" />
                  <label className="label" htmlFor="password">Password</label>
                  <span className="note">6 to 20 characters</span>
                </div>
              </div>
              <div className="row mb-0">
                <div className="input-field col s12 focus-blue">
                  <input type="password" id="password-confirm" value="****************" />
                  <label className="label" htmlFor="password-confirm">Conﬁrm Password</label>
                </div>
              </div>
              <p>
                <label>
                  <input type="checkbox" className="filled-in" checked />
                  <span className="large-label">Require user to change</span>
                </label>
              </p>
              <p>
                <button className="btn waves-effect waves-light bg-blue" type="submit" name="action">Set Password</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Actions;
