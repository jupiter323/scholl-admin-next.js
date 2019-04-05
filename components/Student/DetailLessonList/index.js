/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import LessonCard from './components/LessonCard';

class DetailLessonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    }
  };

  mapLessons = () => this.props.user.lessons.map((lesson, index) => (
    <LessonCard
      key={index}
      lesson={lesson}
    />
  ))

  render() {
    return (
      <React.Fragment>
        <div className="filter-form-holder">
          <ul className="collapsible expandable">
            <li>
              <div className="collapsible-body">
                <div className="filter-form_checkbox-list-holder">
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="activated" />
                      <label htmlFor="activated">Activated</label>
                    </li>
                    <li>
                      <input type="checkbox" id="unactivated" />
                      <label htmlFor="unactivated">Unactivated</label>
                    </li>
                    <li>
                      <input type="checkbox" id="expired" />
                      <label htmlFor="expired">Expired</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="current" />
                      <label htmlFor="current">Current</label>
                    </li>
                    <li>
                      <input type="checkbox" id="archived" />
                      <label htmlFor="archived">Archived</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="no-gain" />
                      <label htmlFor="no-gain">No Gain</label>
                    </li>
                    <li>
                      <input type="checkbox" id="some-gain" />
                      <label htmlFor="some-gain">Some Gain</label>
                    </li>
                    <li>
                      <input type="checkbox" id="gain-100+" />
                      <label htmlFor="gain-100+">Gain of 100+</label>
                    </li>
                    <li>
                      <input type="checkbox" id="gain-200+" />
                      <label htmlFor="gain-200+">Gain of 200+</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="hit-target-score" />
                      <label htmlFor="hit-target-score">Hit Target Score</label>
                    </li>
                    <li>
                      <input type="checkbox" id="hasnt-hit-target-score" />
                      <label htmlFor="hasnt-hit-target-score">Hasn’t Hit Target Score</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="no-tests" />
                      <label htmlFor="no-tests">No Tests</label>
                    </li>
                    <li>
                      <input type="checkbox" id="1-test" />
                      <label htmlFor="1-test">1 Test</label>
                    </li>
                    <li>
                      <input type="checkbox" id="2-test" />
                      <label htmlFor="2-test">2 Tests</label>
                    </li>
                    <li>
                      <input type="checkbox" id="3-test" />
                      <label htmlFor="3-test">3+ Tests</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="has-overdue-work" />
                      <label htmlFor="has-overdue-work">Has Overdue Work</label>
                    </li>
                    <li>
                      <input type="checkbox" id="unreviewed-flags" />
                      <label htmlFor="unreviewed-flags">Unreviewed Flags</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="sessions-this-week" />
                      <label htmlFor="sessions-this-week">Sessions This Week</label>
                    </li>
                    <li>
                      <input type="checkbox" id="session-today" />
                      <label htmlFor="session-today">Session Today</label>
                    </li>
                    <li>
                      <input type="checkbox" id="no-sessions" />
                      <label htmlFor="no-sessions">No Sessions Scheduled</label>
                    </li>
                  </ul>
                  <ul className="filter-form_checkbox-list">
                    <li>
                      <input type="checkbox" id="entered-actual-score" />
                      <label htmlFor="entered-actual-score">Entered Actual Score</label>
                    </li>
                    <li>
                      <input type="checkbox" id="no-actual-score" />
                      <label htmlFor="no-actual-score">No Actual Score</label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mb-0 d-flex align-items-flex-end">
                <div className="col s12 l8">
                  <div className="row mb-0">
                    <div className="col s12 m3">
                      <div className="search-field input-field">
                        <input type="search" id="name_search" className="input-control  validate" placeholder="Edwar" />
                        <button type="submit" className="search-button"><i className="icon-search"></i></button>
                        <label className="label" htmlFor="name_search">Search</label>
                      </div>
                    </div>
                    <div className="col s12 m3">
                      <div className="input-field">
                        <select id="location_search">
                          <option>Any</option>
                          <option>Option</option>
                          <option>Option</option>
                        </select>
                        <label className="label" htmlFor="location_search">Location</label>
                      </div>
                    </div>
                    <div className="col s12 m3">
                      <div className="input-field">
                        <select id="sort_search">
                          <option>Last Name (ascending)</option>
                          <option>Option</option>
                          <option>Option</option>
                        </select>
                        <label className="label" htmlFor="sort_search">Sort</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 l4">
                  <div className="option-filters">
                    <div className="option-item clear"><a href="#">Clear Filters</a></div>
                    <div className="option-item">
                      <span className="collapsible-header"><span className="hide-text">Hide</span> <span className="open-text">Open</span> Filters</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="content-section">
          <div className="row d-flex-content card-width-272">
            {this.mapLessons()}
          </div>
        </div>
      <a href="#" className="waves-effect waves-teal btn add-btn"><i className="material-icons">add</i>New Lesson</a>
      </React.Fragment>
    )
  }
}

DetailLessonList.propTypes = {
  user: PropTypes.object.isRequired,
};

export default DetailLessonList;

// <!-- Modal structure EDIT -->
// <div id="modal_user_edit" class="modal modal-custom modal-custom-large modal-gray">
// <form action="#" class="custom-form">
//   <fieldset>
//     <div class="card-modal card-main card grey lighten-3">
//       <div class="owner-box card-panel card-panel-title" style="background-color: #31837a; color: #fff;">
//         <div class="card-panel-row row">
//           <div class="col s9">
//             <div class="user-block">
//               <div class="user-circle" style="background-color: #0085ce; color: #fff;">
//                 <img src="images/img-owner01.jpg" ima /ge description">
//               </div>
//               <div class="user-text" style="color: #fff;">
//                 <h4 class="h3">Ownerly, Jennifer</h4>
//                 <a href="mailto:&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>
//               </div>
//             </div>
//           </div>
//           <div class="col">
//             <span class="block-icon">
//               <i class="icon-owner"></i>
//               <span class="text-icon">Owner</span>
//             </span>
//           </div>
//         </div>
//       </div>
//       <div class="card-content">
//         <div class="card-body">
//           <div class="row mb-0">
//             <div class="col s12 l6">
//               {/* <!-- form-panel --> */}
//               <div class="card-block">
//                 <h3>Account Info</h3>
//                 <div class="card-main card">
//                   <div class="card-content">
//                     <div class="row mb-0">
//                       <div class="input-field col s12">
//                         <input type="text" id="first_name_edit" value="John" />
//                         <label class="label" for="first_name_edit">First Name*</label>
//                       </div>
//                     </div>
//                     <div class="row mb-0">
//                       <div class="input-field col s12">
//                         <input type="text" id="last_name_edit" value="Smith" />
//                         <label class="label" for="last_name_edit">Last Name*</label>
//                       </div>
//                     </div>
//                     <div class="row mb-0">
//                       <div class="input-field col s12">
//                         <input type="text" id="account_email_edit" value="john.smith@clearchoiceprep.com" />
//                         <label class="label" for="account_email_edit">Email Address*</label>
//                       </div>
//                     </div>
//                     <div class="row mb-0">
//                       <div class="">
//                         <div class="input-field col s12 l7">
//                           <select id="gender_edit">
//                             <option>Other</option>
//                             <option>Other</option>
//                             <option>Other</option>
//                           </select>
//                           <label class="label" for="gender_edit">Gender*</label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* <!-- form-panel --> */}
//               <div class="card-block">
//                 <h3>Contact Info</h3>
//                 <div class="card-main card">
//                   <div class="card-content">
//                     <div class="row mb-0">
//                       <div class="input-field col s12">
//                         <input type="tel" id="contact_phone_edit" />
//                         <label class="label" for="contact_phone_edit">Phone (optional)</label>
//                       </div>
//                     </div>
//                     <div class="row mb-0">
//                       <div class="input-field col s12">
//                         <input type="text" id="contact_address_edit" />
//                         <label class="label" for="contact_address_edit">Street Address (optional)</label>
//                       </div>
//                     </div>
//                     <div class="row mb-0">
//                       <div class="input-field col s12">
//                         <input type="text" id="contact_city_edit" />
//                         <label class="label" for="contact_city_edit">City (optional)</label>
//                       </div>
//                     </div>
//                     <div class="row mb-0">
//                       <div class="col s12 m6 l5">
//                         <div class="input-field">
//                           <select id="contact_state_edit">
//                             <option>State</option>
//                             <option>State</option>
//                             <option>State</option>
//                           </select>
//                           <label class="label" for="contact_state_edit">State (optional)</label>
//                         </div>
//                       </div>
//                       <div class="col s12 m6 l7">
//                         <div class="input-field">
//                           <input type="tel" id="contact_zip_edit" />
//                           <label class="label" for="contact_zip_edit">Zip (optional)</label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="col s12 l6">
//               {/* <!-- form-panel --> */}
//               <div class="card-block">
//                 <h3>Location(s)</h3>
//                 {/* <!-- card --> */}
//                 <div class="card-main card-location card card-large">
//                   <div class="card-panel card-panel-location" style="background-color: #62b771; color: #fff;">
//                     <div class="card-panel-row row">
//                       <div class="col s9">
//                         <h3 class="h4 truncate">Tutor Doctor</h3>
//                         <h4 class="sub-title">Tutor Doctor - Austin, TX</h4>
//                       </div>
//                       <div class="col s3">
//                         <div class="row icons-row">
//                           <div class="col">
//                             <span class="block-icon">
//                               <i class="icon-location"></i>
//                               <span class="text-icon">Location</span>
//                             </span>
//                           </div>
//                           <div class="dropdown-block col">
//                             {/* <!-- Dropdown Trigger --> */}
//                             <a class='dropdown-trigger btn' href='#' data-target='dropdown105'><i class="material-icons dots-icon">more_vert</i></a>
//                             {/* <!-- Dropdown Structure --> */}
//                             <ul id='dropdown105' class='dropdown-content dropdown-wide'>
//                               <li>
//                                 {/* <!-- Modal Trigger --> */}
//                                 <a href="#modal_location_edit" class="modal-trigger link-block">Edit</a>
//                               </li>
//                               <li><a href="#!">Clone</a></li>
//                               <li><a href="#!">Delete</a></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- card --> */}
//                 <div class="card-main card-location card card-large">
//                   <div class="card-panel card-panel-location" style="background-color: #62b771; color: #fff;">
//                     <div class="card-panel-row row">
//                       <div class="col s9">
//                         <h3 class="h4 truncate">Tutor Doctor</h3>
//                         <h4 class="sub-title">Tutor Doctor - Dallas, TX</h4>
//                       </div>
//                       <div class="col s3">
//                         <div class="row icons-row">
//                           <div class="col">
//                             <span class="block-icon">
//                               <i class="icon-location"></i>
//                               <span class="text-icon">Location</span>
//                             </span>
//                           </div>
//                           <div class="dropdown-block col">
//                             {/* <!-- Dropdown Trigger --> */}
//                             <a class='dropdown-trigger btn' href='#' data-target='dropdown106'><i class="material-icons dots-icon">more_vert</i></a>
//                             {/* <!-- Dropdown Structure --> */}
//                             <ul id='dropdown106' class='dropdown-content dropdown-wide'>
//                               <li>
//                                 {/* <!-- Modal Trigger --> */}
//                                 <a href="#modal_location_edit" class="modal-trigger link-block">Edit</a>
//                               </li>
//                               <li><a href="#!">Clone</a></li>
//                               <li><a href="#!">Delete</a></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- card add block --> */}
//                 <div class="add-box">
//                   <div class="add-box-holder">
//                     <a class="btn-floating waves-effect waves-light green lighten-1"><i class="material-icons">add</i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="modal-footer">
//           <a href="#!" class="waves-effect waves-teal btn-flat pink-text text-darken-1">Delete</a>
//           <a href="#!" class="modal-close waves-effect waves-teal btn-flat grey-text text-darken-1">Cancel</a>
//           <a href="#" class="btn">Save</a>
//         </div>
//       </div>
//     </div>
//   </fieldset>
// </form>
// </div>


// <div className="title-row card-panel">
//               <div className="mobile-header">
//                 <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
//               </div>
//               <nav className="breadcrumb-holder">
//                 <div className="nav-wrapper ">
//                   <a href="#!" className="breadcrumb">&lt;  Students</a>
//                 </div>
//               </nav>
//               <h2 className="h1 white-text">
//                 <span className="heading-holder">
//                   <i className="icon-student"></i>
//                   <span className="heading-block">Arnold Studently</span>
//                 </span>
//               </h2>
//               {/* <!-- navigation additional --> */}
//               <nav className="nav-additional">
//                 <ul className="menu-additional">
//                   <li><a className="active" href="#">Summary</a></li>
//                   <li><a href="#">Calendar</a></li>
//                   <li><a href="#">Lessons</a></li>
//                   <li><a href="#">Tests</a></li>
//                   <li><a href="#">Account</a></li>
//                 </ul>
//               </nav>
//               <div className="activate-block">
//                 <a href="#" className="waves-effect waves-teal btn btn-white btn-bordered btn-account_activated"><b className="btn-text visible-lg">Account Activated</b> <i className="icon-unlock"></i></a>
//                 <a href="#" className="waves-effect btn btn-orange btn-account_inactive dropdown-trigger" data-target="dropdown_activate"><b className="btn-text visible-lg">Activate Account</b> <i className="icon-key"></i></a>
//                 {/* <!-- Dropdown Activate Structure --> */}
//                 <div id='dropdown_activate' className='dropdown-content'>
//                   <div className="card-panel">
//                     <div className="title-block">
//                       <div className="h3">Ready to begin your course?</div>
//                       <div className="subtitle">Please enter a valid license code below.</div>
//                     </div>
//                     <form action="#" className="activate-form">
//                       <fieldset>
//                         <div className="input-field">
//                           <input type="text" value="4BF86266-A2A4-C9FB-387D07ABB5471305" id="license_code" />
//                           <label className="label" htmlFor="license_code">License Code</label>
//                         </div>
//                         <div className="btn-holder center-align">
//                           <button className="btn btn-blue" type="submit">Activate </button>
//                         </div>
//                       </fieldset>
//                     </form>
//                     <div className="text-block center-align">
//                       <p>If you need license codes, you can get them here: <a href="#" className="waves-effect waves-light btn-small btn-blue">Purchase Licenses</a></p>
//                     </div>
//                     <div className="text-block">
//                       <p>*Note: </p>
//                       <p>We oﬀer discounted account licenses for students enrolled in courses with 5 or more students in a class or group format (as opposed to individual instruction). These licenses provide the features necessary to conduct a customized course for the class as a whole, rather than for individual students.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>