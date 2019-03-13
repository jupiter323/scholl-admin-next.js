import React from 'react';
import PropTypes from 'prop-types';

const DeleteAccount = ({ activeButton, onDeleteAccount }) => (
  <div className="row mb-0 d-flex-content large sameheight">
    <div className="col s12 l5">
      <div className="card-block">
        <div className="card">
          <div className="card-content">
            <div className="account-block">
              <h3>Delete Account</h3>
              <p>{"This option will only be available until the student account is activated.  Once activated, if you need to delete a student's account, please contact your system administrator."}</p>
              <p>
                <button
                  className={`btn waves-effect waves-light bg-blue ${activeButton ? '' : 'disabled'}`}
                  type="submit"
                  name="action"
                  onClick={onDeleteAccount}
                >
                  Delete Account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

DeleteAccount.propTypes = {
  activeButton: PropTypes.bool.isRequired,
  onDeleteAccount: PropTypes.func.isRequired,
};

export default DeleteAccount;
