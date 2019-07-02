/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import LessonWorksheetTestSection from '../LessonWorksheetTestSection';
import LessonCard from './components/LessonCard';
import FilterSection from './components/FilterSection';

class DetailLessonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null,
      detailModalOpen: false,
      lessons: [],
      activeLesson: null,
    }
  };

  componentDidMount() {
    this.setState({ lessons: this.props.user.lessons });
  }

  componentDidUpdate(prevProps) {
    const { user } = this.props;
    if (prevProps.user.id !== user.id) {
      this.setState({ lessons: this.props.user.lessons });
    }
  }

  onToggleDetailModalOpen = (worksheetIndex) => this.setState(({ detailModalOpen, lessons }) => ({ detailModalOpen: !detailModalOpen, activeLesson: lessons[worksheetIndex], dropdownIsOpen: false, dropdownIndex: null }))

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  mapLessons = () => this.state.lessons.map((lesson, index) => (
    <LessonCard
      key={index}
      index={index}
      lesson={lesson}
      onSetDropdown={this.onSetDropdown}
      onCloseDropdown={this.onCloseDropdown}
      dropdownIndex={this.state.dropdownIndex}
      dropdownIsOpen={this.state.dropdownIsOpen}
      onToggleDetailModalOpen={this.onToggleDetailModalOpen}
    />
  ))

  render() {
    const { user } = this.props;
    const { detailModalOpen, activeLesson } = this.state;
    return (
      <React.Fragment>
        <Choose>
          <When condition={detailModalOpen}>
            <LessonWorksheetTestSection
              onClose={this.onToggleDetailModalOpen}
              worksheet={activeLesson}
              user={user}
            />
          </When>
          <Otherwise>
            <FilterSection />
            <div className="content-section">
              <div className="row d-flex-content card-width-272">
                {this.mapLessons()}
              </div>
            </div>
            <a href="#" className="waves-effect waves-teal btn add-btn"><i className="material-icons">add</i>New Lesson</a>
          </Otherwise>
        </Choose>
      </React.Fragment>
    )
  }
}

DetailLessonList.propTypes = {
  user: PropTypes.object.isRequired,
};

export default DetailLessonList;
