import React from 'react';
import PropTypes from 'prop-types';
import { getTutorInitials as getOwnerInitials } from '../../../utils/getUserInitials';

import UserRowWrapper from './styles';

const UserRow = ({ user, onSelectUser, selectedUser }) => (
  <UserRowWrapper
    onClick={onSelectUser}
    className="owner-box card-panel"
    selected={selectedUser && selectedUser.id === user.id}
  >
    <div className="card-panel-row row">
      <div className="col s10">
        <div className="user-block">
          <div className="user-circle">
            <span className="initials">{getOwnerInitials(user)}</span>
            {/* <img src="images/img-owner01.jpg" alt="description" /> */}
          </div>
          <div className="user-text" style={{ color: '#fff' }}>
            <h4 className="h3">{user.lastName}, {user.firstName}</h4>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </div>
        </div>
      </div>
      <div className="col s2 right-align">
        <span className="block-icon">
          <i className="icon-owner"></i>
          <span className="text-icon">Owner</span>
        </span>
      </div>
    </div>
  </UserRowWrapper>
);

UserRow.propTypes = {
  user: PropTypes.object.isRequired,
  selectedUser: PropTypes.object,
  onSelectUser: PropTypes.func.isRequired,
};

export default UserRow;
