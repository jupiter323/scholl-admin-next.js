import React from 'react';
// import PropTypes from 'prop-types';

class WorksheetDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      true: true,
    };
  }

  render() {
    return (
      <div className="col s12 l6">
        <div className="card-block">
          <h2>Details</h2>
          <div className="card">
            <div className="card-content">
              <div className="card-body">
                <div className="row mb-0">
                  <div className="col s12">
                    <div className="input-field">
                      <input type="text" id="details_name" value="Some SAT Problems about Triangles" />
                      <label className="label" htmlFor="details_name">Name</label>
                    </div>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col s6">
                    <div className="input-field">
                      <select id="detail_subject">
                        <option>Mixed</option>
                        <option>Option</option>
                        <option>Option</option>
                      </select>
                      <label className="label" htmlFor="detail_subject">Subject</label>
                    </div>
                  </div>
                  <div className="col s6">
                    <div className="input-field">
                      <select id="detail_type">
                        <option>Mixed</option>
                        <option>Option</option>
                        <option>Option</option>
                      </select>
                      <label className="label" htmlFor="detail_type">Type</label>
                    </div>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col s6">
                    <div className="input-field">
                      <select id="detail_diﬃculty">
                        <option>Mixed</option>
                        <option>Option</option>
                        <option>Option</option>
                      </select>
                      <label className="label" htmlFor="detail_diﬃculty">Diﬃculty</label>
                    </div>
                  </div>
                  <div className="col s6">
                    <div className="datepicker-field input-field">
                      <i className="icon-clock2"></i>
                      <input type="text" className="timepicker" id="detail_estimated_time" />
                      <label className="label" htmlFor="detail_estimated_time">Estimated Time</label>
                    </div>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col s12">
                    <div className="input-field input-tags">
                      <select multiple id="detail_category_tag">
                        <option value="" disabled selected>Choose Category</option>
                        <option value="1">Right Trianges</option>
                        <option value="2">Circles</option>
                        <option value="3">Option</option>
                      </select>
                      <label className="label" htmlFor="detail_category_tag">Category (Tag)</label>
                    </div>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col s12">
                    <div className="input-field">
                      <textarea id="detail_description" className="materialize-textarea" style={{ height: '70px' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie </textarea>
                      <label className="label" htmlFor="detail_description">Description (optional)</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorksheetDetails;
