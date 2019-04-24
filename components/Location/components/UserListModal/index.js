/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../../../Portal';
import ClickOffComponentWrapper from '../../../ClickOffComponentWrapper';

import UserRow from '../UserRow';

class UserListModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: null,
    };
  }

  onSelectUser = (selectedUser) => this.setState({ selectedUser });

  onSetUser = () => {
    const { selectedUser } = this.state;
    const { onSubmit, onClose } = this.props;
    onSubmit(selectedUser, 'owner', null);
    this.setState({ selectedUser: null }, onClose);
  }

  onCloseModal = () => {
    const { onClose } = this.props;
    this.setState({ selectedUser: null }, onClose);
  }

  mapUsers = () => this.props.userList.map((user, index) => (
    <UserRow
      user={user}
      key={index}
      index={index}
      onSelectUser={() => this.onSelectUser(user)}
      selectedUser={this.state.selectedUser}
    />
  ))

  render() {
    const { open } = this.props;
    return (
      <React.Fragment>
        <Portal selector="#modal">
          {open && (
            <div className="overlay">
              <ClickOffComponentWrapper onOuterClick={this.onCloseModal}>
                <div id="modal_Practice1" className="modal modal-custom modal-practice">
                  <div className="card-modal card-course card-main card">
                    <div className="card-panel green lighten-1 white-text">
                      <div className="card-panel-row row">
                        <div className="col" style={{ flex: '1 0 83.333333%' }}>
                          <h1 className="h1">Assign Owner</h1>
                        </div>
                        <div className="col" style={{ textAlign: 'right' }}>
                          <a href="#!" className="panel-link close modal-close"><i className="icon-close"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        {this.mapUsers()}
                      </div>
                      <div className="modal-footer">
                        <div className="row">
                          <div className="col s6">
                            <div className="meta-info">
                            </div>
                          </div>
                          <div className="col s6 right-align">
                            <a
                              href="#"
                              onClick={this.onCloseModal}
                              className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
                            >
                              Cancel
                            </a>
                            <a
                              href="#"
                              onClick={this.onSetUser}
                              className="btn"
                              style={{ color: 'white' }}
                            >
                              Save
                            </a>
                          </div>
                        </div>
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
          margin: 1.52rem 0 .912rem 0;
          margin-top: 0;
        }
        p {
          font-size: 16px;
          color: #343434;
        }
        p.passage {
          font-size: 14px;
        }
        a {
          color: #343434;
        }
        .overlay {
          position: fixed;
          background-color: rgba(0, 0, 0, 0.7);
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 999;
        }
        .modal {
          display: block;
          background-color: transparent;
          position: absolute;
          top: 10%;
          right: 10%;
          left: 10%;
        }
        .modal-custom {
          opacity: 1;
          visibility: visible;
        }
        .modal-footer {
          background-color: white;
        }
        .modal-full-size {
          z-index: 999;
          width: 100%;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
        }
      `}
          </style>
        </Portal>
      </React.Fragment>
    );
  }
}

UserListModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  userList: PropTypes.array.isRequired,
};

export default UserListModal;
