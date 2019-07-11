import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './components/ListItem';


class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null,
      }
  }

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  setSortType = (name) => {
    const { onSetSort, sort } = this.props;
    if (sort !== `${name}Ascending` && sort !== `${name}Descending`){
      onSetSort(`${name}Ascending`)
    }
    if (sort === `${name}Descending` ) {
      onSetSort(`${name}Ascending`)
    }
    else {
      onSetSort(`${name}Descending`)
    }
  }

  handleDropdownClick = (event, index) => {
    const { dropdownIsOpen } = this.state;
    event.preventDefault();
    if (dropdownIsOpen) {
      return this.onCloseDropdown();
    }
    return this.onSetDropdown(index);
  }

  mapLessonRows = () => {
    const { lessons, user } = this.props;
    const { dropdownIndex, dropdownIsOpen } = this.state;
    return lessons.map((lesson, index) => (
      <ListItem
        lesson={lesson}
        user={user}
        index={index}
        dropdownIndex={dropdownIndex}
        dropdownIsOpen={dropdownIsOpen}
        handleDropdownClick={this.handleDropdownClick}/>
    ))
  }

  // eslint-disable-next-line consistent-return
  renderLessonIcon = (subject) => {
    switch (subject) {
      case 'Reading':
        return 'icon-books';
      case 'Writing':
        return 'icon-hands';
      case 'Math':
        return 'icon-calculator';
      default:
        break;
    }
  }

  render() {
    const { lessons } = this.props;
    return (
      <React.Fragment>
        <div className="content-section">
          <div className="container-md">
            <div className="result-row center-align">
              <b className="result"> - {lessons.length} results -</b>
            </div>
            <div className="list-view-section" style={{margin: '0 -160px'}}>
              <div className="list-table">
              <div className="list-table-header">
                <div className="list-table-row">
                  <div className="list-table-cell icon-cell">&nbsp;</div>
                  <div className="list-table-cell name-cell" style={{marginRight: '55px'}} value="lessonName">
                    <a
                    href="#"
                    onClick={() => this.setSortType("lessonName")}
                    >
                      <b>Lesson</b>
                      </a>
                      </div>
                  {/* <div className="list-table-cell drop-cell">&nbsp;</div> */}
                  <div className="list-table-cell completed-cell"><a
                    href="#"
                    onClick={() => this.setSortType("status")}
                    >
                      <b>Status</b>
                      </a>
                      </div>
                  <div className="list-table-cell completed-cell" style={{marginLeft: '5px'}}><a
                    href="#"
                    onClick={() => this.setSortType("subject")}
                    >
                      <b>Subject</b>
                      </a>
                      </div>
                  <div className="list-table-cell page-cell" style={{paddingRight: '82px  '}}>
                  <a
                    href="#"
                    onClick={() => this.setSortType("passage")}
                    ><b>Page</b>
                    </a></div>
                  <div className="list-table-cell date-cell" style={{marginLeft: '-53px'}}><a
                    href="#"
                    onClick={() => this.setSortType("availableDate")}
                    >
                      <b>Date</b>
                      </a>
                      </div>
                  <div className="list-table-cell dueDate-cell" style={{marginLeft: '13px', paddingLeft: '-1px'}}><a
                    href="#"
                    onClick={() => this.setSortType("dueDate")}
                    >
                      <b>Due Date</b>
                      </a>
                      </div>
                  <div className="list-table-cell completed-cell"><a
                    href="#"
                    onClick={() => this.setSortType("completionDate")}
                    >
                      <b>Complete</b>
                      </a>
                      </div>
                  <div className="list-table-cell completed-cell"><a
                    href="#"
                    onClick={() => this.setSortType("lessonType")}
                    >
                      <b>Type</b>
                      </a>
                      </div>
                  <div className="list-table-cell flags-cell"><b>&nbsp;</b></div>
                  <div className="list-table-cell flags-cell"><a
                    href="#"
                    onClick={() => this.setSortType("alerts")}
                    >
                      <b>Flags</b>
                      </a>
                      </div>
                  <div className="list-table-cell drop-cell">&nbsp;</div>
                </div>
              </div>
                <div className="list-table-body">
                  {this.mapLessonRows()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
           #nameCell {
             width: 140px;
           }
           .list-table .list-table-cell.type-cell {
             max-width: 12%
           }`}
           </style>
      </React.Fragment>

    );
  }
}

ListView.propTypes = {
  lessons: PropTypes.array.isRequired,
  onSetSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,

}

export default ListView;