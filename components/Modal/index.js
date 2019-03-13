import * as React from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal';
import ClickOffComponentWrapper from '../ClickOffComponentWrapper';

export class Modal extends React.Component { // eslint-disable-line
  render() {
    const { open, onClose, onConfirm, header, body, fullScreen, problem, passage } = this.props;
    return (
      <div>
        <Portal selector="#modal">
          <Choose>
            <When condition={fullScreen}>
              {open && (
                <div className="modal-full-size modal modal-custom open">
                  <div className="card-modal card-main card">
                    <div className="card-content">
                      <p className="passage">{problem ? problem.problemText : passage.passageText}</p>
                      <p className="passage">{body}</p>
                    </div>
                    <a
                      href="#!"
                      onClick={onClose}
                      className="modal-close close"
                    >
                      <i className="icon-close" />
                    </a>
                    <div className="file-field-block">
                      <div className="info-block">
                        <dl>
                          <dt>Problem:</dt>
                          <dd>{problem ? problem.id : passage.id}</dd>
                        </dl>
                        <dl>
                          <dt>Passage:</dt>
                          <dd>{problem ? problem.pass : passage.id}</dd>
                        </dl>
                      </div>
                      <div className="file-field input-field">
                        <div className="file-path-wrapper">
                          <input className="file-path" type="text" value="Video:  some_video.mpg" readOnly="" />
                        </div>
                        <div className="buttons-row">
                          <a className="waves-effect waves-teal btn-flat blue-text text-darken-3">Watch</a>
                          <span className="waves-effect waves-teal btn-flat blue-text text-darken-3">
                            <span>Upload</span>
                            <input type="file" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </When>
            <Otherwise>
              {open && (
                <div className="overlay">
                  <ClickOffComponentWrapper onOuterClick={onClose}>
                    <div className="modal">
                      <div className="modal-content">
                        <h4>{header}</h4>
                        <p>{body}</p>
                      </div>
                      <div className="modal-footer">
                        <a
                          href="#!"
                          onClick={onClose}
                          className="modal-close waves-effect waves-green btn-flat"
                        >
                          Cancel
                        </a>
                        <a
                          href="#!"
                          onClick={onConfirm}
                          className="modal-close waves-effect waves-green btn-flat"
                        >
                          Confirm
                        </a>
                      </div>
                    </div>
                  </ClickOffComponentWrapper>
                </div>
              )}
            </Otherwise>
          </Choose>
          { /* Inline styling is required for the Modal component due to the Portal */ }
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
                position: fixed!important;
                background-color: rgba(0, 0, 0, 0.7)!important;
                top: 0!important;
                right: 0!important;
                bottom: 0!important;
                left: 0!important;
                z-index: 9999!important;
              }
              .modal {
                display: block;
                background-color: white;
                position: absolute;
                top: 10%;
                right: 10%;
                left: 10%;
                box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
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
      </div>
    );
  }
}

Modal.propTypes = {
  open: PropTypes.bool,
  fullScreen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
  body: PropTypes.string,
  header: PropTypes.string,
  problem: PropTypes.object,
  passage: PropTypes.object,
};

export default Modal;
