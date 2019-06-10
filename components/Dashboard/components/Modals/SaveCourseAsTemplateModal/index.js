import React from 'react';
// import PropTypes from 'prop-types';

class SaveCourseAsTemplateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
      <div id="modal_save_course_template" className="modal modal-custom modal-calendar modal-save_template">
        <div className="card-modal card">
          <div className="card-panel card-panel-title" style={{ backgroundColor: '#661f77', color: '#fff' }}>
            <div className="card-panel-row row">
              <div className="col">
                <h2>
                  <span className="heading-holder">
                    <i className="icon-module"></i>
                    <span className="heading-block"> Save Course as Template</span>
                  </span>
                </h2>
              </div>
              <div className="col right-align">
                <a href="#!" className="panel-link close modal-close"><i className="icon-close-thin"></i></a>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="card-body">
              <div className="modal-row row">
                <div className="col s12">
                  <div className="input-field">
                    <input type="text" value="The Name of Some Template" readOnly />
                    <label className="label">Course Template Name*</label>
                  </div>
                </div>
              </div>
              <div className="modal-row row">
                <div className="col s12">
                  <div className="input-field input-field-textarea">
                    <textarea className="materialize-textarea" cols="40" rows="4" readOnly>An optional description of the template so that the user can remember what’s included in the course template.</textarea>
                    <label className="label">Description</label>
                  </div>
                </div>
              </div>
              <div className="modal-row row">
                <div className="col s12">
                  <div className="input-field input-field-textarea">
                    <textarea className="materialize-textarea" cols="40" rows="4" readOnly>Optional instructions so the user can remember how to use the template.</textarea>
                    <label className="label">Instructions</label>
                  </div>
                </div>
              </div>
              <div className="d-flex modal-row row align-items-center justify-center">
                <div className="col">
                  <ul className="points-list list-two-cols badge-circle-78">
                    <li className="style-purple-dark">
                      <span className="badge-circle">24</span>
                      <span className="point-text">Sessions</span>
                    </li>
                    <li className="style-pink">
                      <span className="badge-circle">62 <span className="badge-text">hrs</span></span>
                      <span className="point-text">Estimated Total Course Work</span>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <div className="chart-block chart-block-140">
                    <div className="js-donut-chart" data-stroke-width="42" data-source='./inc/score-data-multiline.json'></div>
                    <div className="chart-text" style={{ color: '#3d8946' }}>
                      <span className="value">120</span>
                      <span className="description">Lessons</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer modal-footer-width">
              <a href="#!" className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
              <a href="#" className="link-btn waves-effect waves-teal btn-flat">Save Template</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SaveCourseAsTemplateModal;

/* <!-- Modal structure Save course as template --> */
