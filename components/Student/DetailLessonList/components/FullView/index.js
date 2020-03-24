import React from 'react';
import PropTypes from 'prop-types';
import LessonCard from '../FullView/components/LessonCard';
import Checkbox from './components/LessonCard/components/Checkbox';
import RescheduleModal from '../RescheduleModal';
class FullView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openRescheduleModal: false,
      dropdownIndex: null,
      dropdownIsOpen: false,
      activeLesson: {},
    };
  }
  mapLessons = () => {

    const { lessons, onCloneLesson, onDeleteLesson, user, onCheckLesson } = this.props;

    return lessons.map((lesson, index) => (
      <LessonCard
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        index={index}
        lesson={lesson}
        onCloneLesson={() => onCloneLesson(index)}
        onDeleteLesson={() => onDeleteLesson(index)}
        user={user}
        onChecked={onCheckLesson}
        handleRescheduleModalOpen={this.handleRescheduleModalOpen}
      />
    )
    );
  }
  handleRescheduleModalOpen = activeLesson => {
    this.onCloseDropdown();
    this.setState(({ openRescheduleModal }) => ({
      activeLesson,
      openRescheduleModal: !openRescheduleModal
    }));
  };

  onCloseDropdown = () => this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  onSaveScheduleChanges = () => {

  }
  render() {
    const { openRescheduleModal,activeLesson } = this.state;
    return (
      <div className="content-section">
        <div className="d-flex justify-content-between">
          {/* <label >
            <input type='checkbox' />
            <span>Check all</span>
          </label> */}
          <div>

            <Checkbox label="Check all" checkBoxId="checkall" onChecked={this.props.onCheckAll} type="pageCheckBox" />
          </div>
          <div>
            <b> - {this.props.lessons.length} results -</b>
          </div>


          <div className="dropdown-block col">
            <a
              className="dropdown-trigger btn"
              href="#"
              data-target="dropdown01"
              // eslint-disable-next-line
              onClick={() => console.log("menu option")}
            >
              <i className="material-icons dots-icon">more_vert</i>
            </a>
          </div>
        </div>
        <div className="row d-flex-content card-width-272">
          <RescheduleModal
            open={openRescheduleModal}
            lesson={activeLesson}
            onClose={this.handleRescheduleModalOpen}
            onSave={this.onSaveScheduleChanges}
          />
          {this.mapLessons()}
        </div>
      </div>
    );
  }
}

FullView.propTypes = {
  lessons: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  onCloneLesson: PropTypes.func.isRequired,
  onDeleteLesson: PropTypes.func.isRequired,
};
export default FullView;
