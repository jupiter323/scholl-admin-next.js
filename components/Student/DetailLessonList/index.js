/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import LessonCard from './components/LessonCard';
import FilterSection from './components/FilterSection';

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
        <FilterSection />
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
