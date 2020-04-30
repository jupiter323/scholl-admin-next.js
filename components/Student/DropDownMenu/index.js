import React from "react";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import ClickOffComponentWrapper from "../../ClickOffComponentWrapper";
import { renderDropdownOptions } from "../DetailLessonList/components/FullView/components/LessonCard/utils/";

class DropDownMenu extends React.Component {
  handleAssignLesson() {}
  render() {
    return (
      <If condition={this.state.dropdownIsOpen}>
        <ClickOffComponentWrapper onOuterClick={() => this.onSetDropdown()}>
          <ul
            id="dropdown01"
            className="dropdown-content dropdown-wide"
            style={{
              display: "block",
              opacity: "1",
              transform: "scaleX(1) scaleY(1)",
            }}
          >
            {renderDropdownOptions(status, this.handleAssignLesson, null, null, null, "")}
          </ul>
        </ClickOffComponentWrapper>
      </If>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  units: makeSelectUnitFilterOptions(),
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(DropDownMenu);
