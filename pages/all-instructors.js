import React from 'react';
import Router from 'next/router';
import InstructorListPage from '../components/Instructor/ListPage';

import {
  loggedIn,
} from "../utils/AuthService";

// eslint-disable-next-line react/prefer-stateless-function
class InstructorList extends React.Component {
  componentDidMount(){
    if(!loggedIn()){
      Router.push('/login')
    }
  }
  render() {
    return (
      <main id="main" role="main">
        <div className="main-holder grey lighten-3">
          <InstructorListPage />
        </div>
      </main>
    );
  }
}

export default InstructorList;

// TODO: Figure out what we're going to do with this code
// {/* <!-- Modal structure CREATE --> */}
// <div id="modal_user_create" class="modal modal-custom modal-custom-large modal-gray">
// <div class="card-modal card-main card grey lighten-3">
//   <div class="card-panel card-panel-title" style={{ backgroundColor: '#31837a', color: '#fff' }}>
//     <div class="card-panel-row row">
//       <div class="col">
//         <h3 class="h2">
//           <span class="heading-holder">
//             <span class="heading-block">Create New Owner</span>
//           </span>
//         </h3>
//       </div>
//       <div class="col">
//         <span class="block-icon">
//           <i class="icon-owner"></i>
//           <span class="text-icon">Owner</span>
//         </span>
//       </div>
//     </div>
//   </div>
//   <div class="card-content">
//     <div class="card-body">
//       <div class="row mb-0">
//         <div class="col s12 l6">
//           {/* <!-- form-panel --> */}
//           <div class="card-block">
//             <h3>Owner Contact Info</h3>
//             <div class="card-main card">
//               <div class="card-content">
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="first_name_create" />
//                     <label class="label" for="first_name_create">First Name*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="last_name_create" />
//                     <label class="label" for="last_name_create">Last Name*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="contact_email_create" />
//                     <label class="label" for="contact_email_create">Email Address*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12 l7">
//                     <select id="state_edit">
//                       <option>Other</option>
//                       <option>Other</option>
//                       <option>Other</option>
//                     </select>
//                     <label class="label" for="state_edit">Gender*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="tel" id="contact_phone_create" />
//                     <label class="label" for="contact_phone_create">Phone (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="contact_address_create" />
//                     <label class="label" for="contact_address_create">Street Address (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="contact_city_create" />
//                     <label class="label" for="contact_city_create">City (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="col s12 m6 l5">
//                     <div class="input-field">
//                       <select id="contact_state_create">
//                         <option>State (optional)</option>
//                         <option>State</option>
//                         <option>State</option>
//                       </select>
//                       <label class="label" for="contact_state_create">Test</label>
//                     </div>
//                   </div>
//                   <div class="col s12 m6 l7">
//                     <div class="input-field">
//                       <input type="tel" id="zip_create" />
//                       <label class="label" for="zip_create">Zip (optional)</label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="col s12 l6">
//           {/* <!-- form-panel --> */}
//           <div class="card-block">
//             <h3>Location Contact Info</h3>
//             <div class="card-main card">
//               <div class="card-content">
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_name_create" value="Tutor Doctor" />
//                     <label class="label" for="location_name_create">Location Name*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_nickname_create" value="Tutor Doctor - Newport Beach, CA" />
//                     <label class="label" for="location_nickname_create">Location Nickname*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_email_create" value="info@clearchoiceprep.com" />
//                     <label class="label" for="location_email_create">Location Email*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="tel" id="location_phone_create" />
//                     <label class="label" for="location_phone_create">Location Phone Number (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="url" id="location_website_create" />
//                     <label class="label" for="location_website_create">Website (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_address_create" />
//                     <label class="label" for="location_address_create">Street Address (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_city_create" />
//                     <label class="label" for="location_city_create">City (optional)</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="col s12 m6 l5">
//                     <div class="input-field">
//                       <select id="location_state_create">
//                         <option>State (optional)</option>
//                         <option>State</option>
//                         <option>State</option>
//                       </select>
//                       <label class="label" for="location_state_create">Test</label>
//                     </div>
//                   </div>
//                   <div class="col s12 m6 l7">
//                     <div class="input-field">
//                       <input type="tel" id="location_zip_create" />
//                       <label class="label" for="location_zip_create">Zip (optional)</label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="row mb-0">
//         <div class="col s12 l6">
//           {/* <!-- form-panel --> */}
//           <div class="card-block">
//             <h3>Location Email Settings</h3>
//             <div class="card-main card">
//               <div class="card-content">
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="auto_email_create" value="Clear Choice Prep <messages@clearchoiceprep.com>" />
//                     <label class="label" for="auto_email_create">Automated Emails Come From (email)*</label>
//                   </div>
//                 </div>
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <textarea id="email_salutation_create" class="materialize-textarea">All the best,The Clear Choice Team</textarea>
//                     <label class="label" for="email_salutation_create">Automated Email Salutation*</label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="col s12 l6">
//           {/* <!-- form-panel --> */}
//           <div class="card-block">
//             <h3>Location Branding</h3>
//             <div class="card-main card">
//               <div class="card-content">
//                 <div class="row mb-0">
//                   <div class="input-field col s12">
//                     <input type="text" id="location_url_create" value="newport-beach.tutordoctor.mysatcourse.com" />
//                     <label class="label" for="location_url_create">Location Url*</label>
//                   </div>
//                 </div>
//                 {/* <!-- colorpicker row --> */}
//                 <div class="row mb-0">
//                   <div class="input-field js-spectrum custom-colorpicker col s12 m6">
//                     <input type="text" class="js-spectrum-input" value="#123456" id="header_color_1_create" readonly />
//                     <label class="label" for="header_color_1_create">Header Color 1*</label>
//                   </div>
//                   <div class="input-field js-spectrum custom-colorpicker col s12 m6">
//                     <input type="text" class="js-spectrum-input" value="#123456" id="header_color_2_create" readonly />
//                     <label class="label" for="header_color_2_create">Header Color 2*</label>
//                   </div>
//                 </div>
//                 {/* <!-- colorpicker row --> */}
//                 <div class="row mb-0">
//                   <div class="input-field js-spectrum custom-colorpicker col s12 m6">
//                     <input type="text" class="js-spectrum-input" value="#123456" id="header_logo_bgcolor_create" readonly />
//                     <label class="label" for="header_logo_bgcolor_create">Header Logo Background Color*</label>
//                   </div>
//                   <div class="input-field col s12 m6">
//                     <input type="text" value="100%" id="header_logo_bg_alpha_create" />
//                     <label class="label" for="header_logo_bg_alpha_create">Header Logo Background Alpha*</label>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" value="horiz_logo.png" id="horizontal_logo_create" />
//                       <label class="label" for="horizontal_logo_create">Horizontal Logo Variation*</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" value="square_logo.jpg" id="square_logo_create" />
//                       <label class="label" for="square_logo_create">Square Logo Variation*</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" value="background.jpg" id="background_image_create" />
//                       <label class="label" for="background_image_create">Background Image*</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//                 {/* <!-- twocolumns row background here --> */}
//                 <div class="row mb-0">
//                   <div class="col s12 m6">
//                     <div class="input-field">
//                       <input type="text" value="24" id="background_blur_create" />
//                       <label class="label" for="background_blur_create">Background Blur*</label>
//                     </div>
//                   </div>
//                   <div class="col s12 m6">
//                     <div class="input-field">
//                       <input type="text" value="70%" id="background_overlay_alpha_create" />
//                       <label class="label" for="background_blur_create">Background Overlay Alpha*</label>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" value="student_welcome_video.mp4" id="student_video_create" />
//                       <label class="label" for="student_video_create">Student Welcome Video (optional)</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//                 {/* <!-- upload file row --> */}
//                 <div class="row mb-0">
//                   <div class="file-input-custom file-field input-field col s12">
//                     <div class="file-path-wrapper">
//                       <input class="file-path" type="text" id="instructor_video_create" />
//                       <label class="label" for="instructor_video_create">Instructor Welcome Video (optional)</label>
//                     </div>
//                     <span class="btn-upload">
//                       <span class="holder-icon"><i class="icon-upload-file"></i></span>
//                       <input type="file" />
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="modal-footer">
//       <a href="#!" class="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
//       <a href="#" class="btn">Save</a>
//     </div>
//   </div>
// </div>
// </div>

// {/* <!-- Modal structure filters users --> */}
// <div id="modalFiltersUsers" class="modal-filter modal modal-custom">
// <div class="card-modal card-main card">
//   <div class="card-panel">
//     <div class="card-panel-row row">
//       <div class="col">
//         <h3>
//           <i class="icon-filter"></i>
//           <span class="heading-block"> Filter Users</span>
//         </h3>
//       </div>
//     </div>
//   </div>
//   <div class="card-content">
//     <div class="modal-filter-row row">
//       <div class="col s12">
//         <div class="search-field input-field">
//           <input type="search" class="input-control validate" id="owned_user_filter" />
//           <label class="label" for="owned_user_filter">Owned by</label>
//           <button type="submit" class="search-button"><i class="icon-search"></i></button>
//         </div>
//       </div>
//     </div>
//     <div class="modal-filter-row row">
//       <div class="col s12">
//         <div class="search-field input-field">
//           <input type="search" class="input-control validate" value="Tutor Doctor - Newport Beach, CA" id="location_user_filter" />
//           <label class="label" for="location_user_filter">Location</label>
//           <button type="submit" class="search-button"><i class="icon-search"></i></button>
//         </div>
//       </div>
//     </div>
//     <div class="modal-filter-row row">
//       <div class="col s12">
//         <div class="input-field">
//           <select id="role_user">
//             <option>Owner</option>
//             <option>Instructor</option>
//             <option>Student</option>
//           </select>
//           <label class="label" for="role_user">Role</label>
//         </div>
//       </div>
//     </div>
//     <div class="modal-filter-row row">
//       <div class="col s12 l8">
//         <div class="modal-filter-row row">
//           <div class="col s6">
//             <div class="datepicker-field input-field">
//               <i class="icon-calendar-dark"></i>
//               <input type="text"  class="datepicker" id="date_created_after" />
//               <label class="label" for="date_created_after">Created After</label>
//             </div>
//           </div>
//           <div class="col s6">
//             <div class="datepicker-field input-field">
//               <i class="icon-calendar-dark"></i>
//               <input type="text" class="datepicker" id="date_created_before" />
//               <label class="label" for="date_created_before">Created Before</label>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="modal-footer">
//       <a href="#!" class="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
//       <a href="#!" class="waves-effect waves-teal btn-flat blue-text text-darken-4">Clear Filter</a>
//       <a href="#" class="btn blue darken-5">Apply Filter</a>
//     </div>
//   </div>
// </div>
// </div>
