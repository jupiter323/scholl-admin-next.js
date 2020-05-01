import React from 'react';
import Portal from '../../Portal';
import ClickOffComponentWrapper from '../../ClickOffComponentWrapper';

class UpdatePasswordModal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onCloseModal, open } = this.props;
        return (
            <Portal selector="#modal">
                {open && (
                    <div className="overlay">
                        <ClickOffComponentWrapper onOuterClick={(e) => onCloseModal(false, e)}>
                            <div
                                id="modal_add_new_class"
                                className="modal modal-custom modal-460"
                            >
                                <div className="forgot_account">
                                    <div className="discrption">
                                        <h5>Please update your password</h5>
                                        <p>For security purposes, you need to set a new password for this account. Please select a password between 6 and 24 characters and enter it below.</p>
                                    </div>
                                    <div className="formsec">
                                        <ul className="clearfix">
                                            <li><input type="text" placeholder="Current Password" /></li>
                                            <li><input type="text" placeholder="New Password" /></li>
                                            <li><input type="text" placeholder="Confirm New Password" /></li>
                                            <li><button className="btn waves-effect read">Update Password</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ClickOffComponentWrapper></div>)} <style jsx>
                    {`
            .overlay {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 1999;
            }
            .card-modal {
              margin: 0;
              border-radius: 6px;
            }
            #modal_Location1 {
              border-radius: 6px;
            }
            .modal {
              display: block;
              background-color: white;
              position: absolute;
              top: 10%;
              right: 10%;
              left: 10%;
              box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                0 9px 46px 8px rgba(0, 0, 0, 0.12),
                0 11px 15px -7px rgba(0, 0, 0, 0.2);
            }
            .modal-custom {
              opacity: 1;
              visibility: visible;
            }
            .modal-footer {
              background-color: white;
            }
                .forgot_account{
                    background-color: #ffffff;
                    width: 100%;
                    height: auto;
                    position: relative;
                    padding: 30px;
                }
                .discrption {
                    margin-bottom: 35px;
                    width: 100%;
                }
                .forgot_account h5 {
                    font-weight: normal;
                    margin-bottom: 15px;
                }
                h5 {
                    font-size: 24px;
                    font-family: 'Raleway', sans-serif;
                    color: #252525;
                }
                p {
                    font-size: 14px;
                    font-family: 'Raleway', sans-serif;
                    color: #484949;
                    line-height: 25px;
                }
                .forgot_account p {
                    color: #959595;
                }
                .formsec {
                    width: 100%;
                }
                .formsec ul {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }
                
                ul:not(.browser-default) {
                    padding-left: 0;
                    list-style-type: none;
                }
                .clearfix {
                    clear: both;
                }
                .clearfix:before, .clearfix:after {
                    content: '';
                    display: table;
                }
                .forgot_account .formsec ul li {
                    margin-bottom: 27px;
                }
                
                .formsec ul li {
                    width: 100%;
                    float: left;
                    margin-bottom: 15px;
                }
                ul:not(.browser-default)>li {
                    list-style-type: none;
                }
                .forgot_account .formsec ul li input {
                    height: inherit;
                    padding-top: 10px;
                    padding-bottom: 10px;
                }
                .forgot_account .formsec ul li:last-child {
                    margin-bottom: 0;
                }
                .formsec ul li input[type=text] {
                    height: 2rem;
                    margin-bottom: 0;
                    font-family: 'Raleway', sans-serif;
                    font-size: 14px;
                    padding-right: 35px;
                }
                .forgot_account .formsec .read {
                    max-width: 100%;
                }
                
                .read, .see_more {
                    line-height: inherit;
                    text-transform: none;
                }
                .read {
                    font-size: 16px;
                    color: #1ca609;
                    display: inline-block;
                    vertical-align: top;
                    font-weight: bold;
                    padding: 5px 15px;
                    border: 1px solid transparent;
                    margin: 0 auto;
                    max-width: 170px;
                    width: 100%;
                    text-align: center;
                    border-radius: 5px;
                    -webkit-border-radius: 5px;
                    -moz-border-radius: 5px;
                    -ms-border-radius: 5px;
                    -o-border-radius: 5px;
                    background-color: #00bbf7;
                    color: #ffffff;
                    font-size: 14px;
                    border: 1px solid transparent;
                }
                .waves-effect {
                    position: relative;
                    cursor: pointer;
                    display: inline-block;
                    overflow: hidden;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    -webkit-tap-highlight-color: transparent;
                    vertical-align: middle;
                    z-index: 1;
                    -webkit-transition: .3s ease-out;
                    transition: .3s ease-out;
                }
          `}
                </style></Portal>
        )
    }
}
export default UpdatePasswordModal;