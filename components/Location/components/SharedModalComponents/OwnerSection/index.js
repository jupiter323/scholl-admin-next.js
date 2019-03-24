import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../../Modal';
import UserListModal from '../../UserListModal';
import SelectedUserRow from '../../SelectedUserRow';

const OwnerSection = ({ owner, userList, handleDetailsChange, userListModalOpen, changeModalOpen, onOpenChangeModal, onCloseChangeModal, onOpenUserListModal, onCloseUserListModal }) => (
  <React.Fragment>
    <Modal
      open={changeModalOpen}
      onClose={onCloseChangeModal}
      onConfirm={onOpenUserListModal}
      header="Are You Sure?"
      body="Do you want to change the owner for this location?"
    />
    <UserListModal
      open={userListModalOpen}
      onClose={onCloseUserListModal}
      userList={userList}
      onSubmit={handleDetailsChange}
    />
    <div className="card-block">
      <h3>Owner</h3>
      <Choose>
        <When condition={owner}>
          <SelectedUserRow
            user={owner}
            onOpenChangeModal={onOpenChangeModal}
          />
        </When>
        <Otherwise>
          <div className="add-box">
            <div className="add-box-holder">
              <a
                href="#"
                onClick={onOpenUserListModal}
                className="btn-floating waves-effect waves-light green lighten-1"
              >
                <i className="material-icons">add</i>
              </a>
            </div>
          </div>
        </Otherwise>
      </Choose>
    </div>
  </React.Fragment>
);

OwnerSection.propTypes = {
  owner: PropTypes.object,
  userList: PropTypes.array.isRequired,
  changeModalOpen: PropTypes.bool.isRequired,
  userListModalOpen: PropTypes.bool.isRequired,
  handleDetailsChange: PropTypes.func.isRequired,
  onOpenChangeModal: PropTypes.func.isRequired,
  onCloseChangeModal: PropTypes.func.isRequired,
  onOpenUserListModal: PropTypes.func.isRequired,
  onCloseUserListModal: PropTypes.func.isRequired,
};

export default OwnerSection;
