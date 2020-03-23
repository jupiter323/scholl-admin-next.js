/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/no-array-index-key */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import React from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import moment from "moment";
import FilterSection from "./components/FilterSection";
import FullView from "./components/FullView";
import {
  dueDateAscending,
  subjectAscending,
  subjectDescending,
  passageAscending,
  passageDescending,
  lessonNameDescending,
  lessonNameAscending,
  statusDescending,
  statusAscending,
  scoreDescending,
  scoreAscending,
  availableDateAscending,
  availableDateDescending,
  dueDate,
  flagsAscending,
  flagsDescending,
  completionDateAscending,
  completionDateDescending,
  lessonTypeAscending,
  lessonTypeDescending,
} from "../../utils/sortFunctions";
import ListView from "./components/ListView";
import AssignLessonModal from "./components/AssignLessonModal";

import { getLessonList, checkLesson, checkAllLessons } from "../index/actions";
import { makeSelectGetLessonList } from "../index/selectors";
import { createStructuredSelector } from "reselect";

// TODO: compare updatedlessons to lessons and update lesson list
class DetailLessonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
      lessons: [],
      modalOpen: false,
      currentView: "full",
      active: "full",
      subjectFilters: [],
      scoreStatusFilters: [],
      flagFilters: [],
      dueDateFilters: [],
      sort: "",
      nameFilter: "",
      unitFilter: "",
      updatedLessons: [],
    };
  }

  componentDidMount() {
    this.props.dispathGetLessonList();
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.state.lessons.length === 0) {
      this.setState({
        lessons: nextProps.lessonList
      })
    }
  }

  onCheckAll = () => this.setState(this.state.lessons.map(lesson => ({
    ...lesson,
    selected: !lesson.selected,
  })))

  onOpenModal = () => this.setState({ modalOpen: true });
  onCloseModal = () => this.setState({ modalOpen: false });
  onClearFilters = () =>
    this.setState({
      subjectFilters: [],
      completeFilters: [],
      flagFilters: [],
      dueDateFilters: [],
      unitFilter: "",
      nameFilter: "",
    });
  onSetSort = sort => this.setState({ sort });
  onSetFilteredState = lesson => this.setState({ nameFilter: lesson });
  onUnsetFilteredState = filter => this.setState({ [filter]: "" });
  onChangeView = view => this.setState({ currentView: view, active: view });

  onSetUnitFilter = unit => {
    this.setState({ unitFilter: unit });
  }

  // eslint-disable-next-line consistent-return
  onSortLessons = lessons => {
    const { sort } = this.state;
    switch (sort) {
      case "subjectAscending":
        return lessons.sort(subjectAscending);
      case "subjectDescending":
        return lessons.sort(subjectDescending);
      case "passageAscending":
        return lessons.sort(passageAscending);
      case "statusAscending":
        return lessons.sort(statusAscending);
      case "scoreAscending":
        return lessons.sort(scoreAscending);
      case "passageDescending":
        return lessons.sort(passageDescending);
      case "statusDescending":
        return lessons.sort(statusDescending);
      case "scoreDescending":
        return lessons.sort(scoreDescending);
      case "availableDateAscending":
        return lessons.sort(availableDateAscending);
      case "availableDateDescending":
        return lessons.sort(availableDateDescending);
      case "dueDateDescending":
        return lessons.sort(dueDate);
      case "dueDateAscending":
        return lessons.sort(dueDateAscending);
      case "flagsAscending":
        return lessons.sort(flagsAscending);
      case "flagsDescending":
        return lessons.sort(flagsDescending);
      case "lessonNameAscending":
        return lessons.sort(lessonNameAscending);
      case "lessonNameDescending":
        return lessons.sort(lessonNameDescending);
      case "completionDateAscending":
        return lessons.sort(completionDateAscending);
      case "completionDateDescending":
        return lessons.sort(completionDateDescending);
      case "lessonTypeAscending":
        return lessons.sort(lessonTypeAscending);
      case "lessonTypeDescending":
        return lessons.sort(lessonTypeDescending);
      default:
        break;
    }
  };
  onAddUpdatedLessons = lessons => this.setState({ updatedLessons: lessons });

  onFilterByName = () => {
    const { lessons, nameFilter } = this.state;
    return lessons.reduce((finalArr, currentLesson) => {
      const { lessonName } = currentLesson;
      const lessonString = lessonName.replace(/\s/g, "").toLowerCase();
      if (lessonString.indexOf(nameFilter) !== -1 && finalArr.indexOf(currentLesson) === -1) {
        finalArr.push(currentLesson);
      }
      return finalArr;
    }, []);
  };
  onCloneLesson = index => {
    const { lessons } = this.state;
    this.setState(prevState => {
      prevState.lessons.push(lessons[index]);
      return { lessons: prevState.lessons };
    });
  };

  onDeleteLesson = index => {
    const { lessons } = this.state;
    const newLessonsArray = this.arrayItemRemover(lessons, lessons[index]);
    this.setState({ lessons: newLessonsArray });
  };
  // note: unassigned and incomplete are filtering opposite, but this works for some reason
  onFilterLessons = () => {
    const {
      subjectFilters,
      unitFilter,
      scoreStatusFilters,
      flagFilters,
      lessons: allLessons,
    } = this.state;
    let lessons = allLessons;
    if (scoreStatusFilters.length && scoreStatusFilters.indexOf("all") === -1) {
      lessons = lessons.filter(lesson => scoreStatusFilters.indexOf(lesson.scoreStatus) !== -1);
    }
    if (subjectFilters.length && subjectFilters.indexOf("all") === -1) {
      lessons = lessons.filter(lesson => subjectFilters.indexOf(lesson.subjects.name) !== -1);
    }
    if (flagFilters.length && flagFilters.indexOf("all") === -1) {
      lessons = lessons.filter(lesson => lesson.lesson_problems.length !== 0);
    }
    if (unitFilter.length && unitFilter.indexOf("all") === -1) {
      lessons = lessons.filter(lesson => unitFilter.indexOf(lesson.units.id) !== -1);
    }
    return lessons;
  };

  getMappableLessons = () => {
    const {
      sort,
      unitFilter,
      dueDateFilters,
      nameFilter,
      subjectFilters,
      scoreStatusFilters,
      flagFilters,
    } = this.state;
    let mappableLessons = this.props.lessonList;
    if (nameFilter.length) {
      mappableLessons = this.onFilterByName();
    }
    if (unitFilter.length || scoreStatusFilters.length || subjectFilters.length || flagFilters.length) {
      mappableLessons = this.onFilterLessons();
    }
    if (dueDateFilters.length) {
      mappableLessons = this.filterDueDate();
    }
    if (sort) {
      return this.onSortLessons(mappableLessons);
    }
    return mappableLessons;
  };

  // may need to alter dueNextSession depending if client wants ALL vs incomplete/overdue
  // TODO: only works with one due date filter, not multiple
  filterDueDate = () => {
    const { user } = this.props;
    const { dueDateFilters, lessons: allLessons } = this.state;
    let lessons = allLessons;
    if (dueDateFilters.length && dueDateFilters.indexOf("all") === -1) {
      if (dueDateFilters.includes("dueToday")) {
        lessons = lessons.filter(lesson => lesson.dueDate === moment().format("MM/DD/Y"));
      }
      if (dueDateFilters.includes("dueNextSession")) {
        lessons = lessons.filter(lesson =>
          moment(user.nextSession).isSameOrAfter(lesson.dueDate, "day"),
        );
      }
      if (dueDateFilters.includes("overdue")) {
        lessons = lessons.filter(lesson => lesson.overdue === true);
      }
      if (dueDateFilters.includes("noDueDate")) {
      }
      if (dueDateFilters.includes("unAssgined")) {
        lessons = lessons.filter(lesson => lesson.status === 1);
      }
      return lessons;
    }
    return lessons;
  };

  handleFilterClick = (filterType, filter) => {
    const {
      subjectFilters: currentSubjectFilters,
      scoreStatusFilters: currentScoreStatusFilters,
      flagFilters: currentFlagFilters,
      dueDateFilters: currentDueDateFilters,
    } = this.state;
    let modifiedFilterCurrentState;
    let modifiedFilterName;
    let modifiedFilterUpdatedState;
    switch (filterType) {
      case "subject":
        modifiedFilterCurrentState = currentSubjectFilters;
        modifiedFilterName = "subjectFilters";
        break;
      case "score":
        modifiedFilterCurrentState = currentScoreStatusFilters;
        modifiedFilterName = "scoreStatusFilters";
        break;
      case "flags":
        modifiedFilterCurrentState = currentFlagFilters;
        modifiedFilterName = "flagFilters";
        break;
      case "dueDate":
        modifiedFilterCurrentState = currentDueDateFilters;
        modifiedFilterName = "dueDateFilters";
        break;
      default:
        break;
    }
    // Decide whether we're adding or removing the selected filter
    if (modifiedFilterCurrentState.indexOf(filter) === -1) {
      modifiedFilterUpdatedState = update(modifiedFilterCurrentState, {
        $push: [filter],
      });
    } else {
      const filterIndex = modifiedFilterCurrentState.indexOf(filter);
      modifiedFilterUpdatedState = update(modifiedFilterCurrentState, {
        $splice: [[filterIndex, 1]],
      });
    }
    this.setState({ [modifiedFilterName]: modifiedFilterUpdatedState });
  };

  arrayItemRemover = (array, value) => array.filter(lesson => lesson !== value);

  renderCurrentView = () => {
    const { active } = this.state;
    const { user } = this.props;
    if (active === "full") {
      return (
        <FullView
          user={user}
          lessons={this.getMappableLessons()}
          onDeleteLesson={this.onDeleteLesson}
          onCloneLesson={this.onCloneLesson}
          onCheckAll={this.props.dispathCheckAllLesson}
          onCheckLesson={this.props.dispathCheckLesson}
        />
      );
    }
    return (
      <ListView
        user={user}
        lessons={this.getMappableLessons()}
        onSetSort={this.onSetSort}
        sort={this.state.sort}
      />
    );
  };

  render() {
    const {
      currentView,
      subjectFilters,
      scoreStatusFilters,
      flagFilters,
      dueDateFilters,
    } = this.state;
    return (
      <React.Fragment>
        <FilterSection
          currentView={currentView}
          onChangeView={this.onChangeView}
          onClearFilters={this.onClearFilters}
          onSetFilteredState={this.onSetFilteredState}
          onUnsetFilteredState={this.onUnsetFilteredState}
          onSetSort={this.onSetSort}
          subjectFilters={subjectFilters}
          scoreStatusFilters={scoreStatusFilters}
          flagFilters={flagFilters}
          dueDateFilters={dueDateFilters}
          handleFilterClick={this.handleFilterClick}
          onSetUnitFilter={this.onSetUnitFilter}
          filterDueDate={this.filterDueDate}
        />
        {this.renderCurrentView()}
        <AssignLessonModal
          open={this.state.modalOpen}
          lessons={this.props.user.lessons}
          onCloseModal={this.onCloseModal}
          onAddUpdatedLessons={this.onAddUpdatedLessons}
        />
        <a
          href="#"
          onClick={this.onOpenModal}
          className="waves-effect waves-teal btn add-btn modal-trigger"
        >
          <i className="material-icons">add</i>Assign Lesson
        </a>
      </React.Fragment>
    );
  }
}

DetailLessonList.propTypes = {
  user: PropTypes.object.isRequired,
  lessonList: PropTypes.array.isRequired,
  dispathGetLessonList: PropTypes.func.isRequired,
  dispathCheckLesson: PropTypes.func.isRequired,
  dispathCheckAllLesson: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispathGetLessonList: bindActionCreators(getLessonList, dispatch),
  dispathCheckLesson: bindActionCreators(checkLesson, dispatch),
  dispathCheckAllLesson: bindActionCreators(checkAllLessons, dispatch),
});

const mapStateToProps = createStructuredSelector({
  lessonList: makeSelectGetLessonList(),

});

export default connect(mapStateToProps, mapDispatchToProps)(DetailLessonList);
