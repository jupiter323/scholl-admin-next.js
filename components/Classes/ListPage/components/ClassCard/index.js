import React from "react";
import PropTypes from "prop-types";
import ClassDetailModal from '../ClassDetailModal';



class ClassCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classDetailsModalOpen: false,
      deleteModalOpen: false,
    }
  }

  onOpenClassDetailsModal = () => {
    this.props.onCloseDropdown();
    this.setState({ classDetailsModalOpen: true });
  };

  onCloseClassDetailsModal = () => this.setState({ classDetailsModalOpen: false });
  
  onCloneClass = () => this.props.onCloneClass(this.props.classroom)

  onOpenDeleteModal = () => this.setState({ deleteModalOpen: true });
  onCloseDeleteModal = () => this.setState({ deleteModalOpen: false });

  onConfirmDeleteClass = () => {
    const { onDeleteClass, classroom, onCloseDropdown } = this.props;
    onDeleteClass(classroom);
    onCloseDropdown();
    this.onCloseDeleteModal();
  }

  handleDropdownClick = (event) => {
    const { onSetDropdown, onCloseDropdown, dropdownIsOpen, index } = this.props;
    event.preventDefault();
    if (dropdownIsOpen) {
      return onCloseDropdown();
    }
    return onSetDropdown(index);
  }

  render() {
    const { dropdownIsOpen, dropdownIndex, index,classroom,onHandleClassCard,onCloneClass,onDeleteClass } = this.props;
    const { deleteModalOpen, classDetailsModalOpen } = this.state;
    return (
      <React.Fragment>
        <ClassDetailModal
          classroom={classroom}
          open={classDetailsModalOpen}
          onClose={this.onCloseClassDetailsModal}
          onOpenDeleteModal={this.onOpenDeleteModal}
          deleteModalOpen={deleteModalOpen}
        />
      <div className="card-main-col col s12 m8 l7 xl5">
        <div className="card-main card-class card card-large">
          <div
            className="owner-box card-panel"
            style={{ backgroundColor: "#408e49", color: "#fff",cursor:"pointer" }}
          >
            <div className="card-panel-row row">
              <div className="col s9">
                <div className="user-block">
                  <div
                    className="user-circle"
                    style={{ backgroundColor: "#fff", color: "#408e49" }}
                  >
                    <span className="initials">8</span>
                    <span className="ititials-text">students</span>
                  </div>
                  <div className="user-text" style={{ color: "#fff" }} onClick={()=>onHandleClassCard(index)}>
                    <h4 className="h3">Some Class in June</h4>
                    <time dateTime="P120D">6/1/19 - 8/5/19</time>
                  </div>
                </div>
              </div>
              <div className="col s3 right-align">
                <div className="row icons-row">
                  <div className="col right-align">
                    <span className="block-icon">
                      <i className="icon-members" />
                      <span className="text-icon">Class</span>
                    </span>
                  </div>
                  <div className="dropdown-block col">
                    {/* Dropdown Trigger */}
                    <a
                      className="dropdown-trigger btn"
                      href="#"
                      onClick={this.handleDropdownClick}
                      data-target="dropdown01"
                    >
                      <i className="material-icons dots-icon">more_vert</i>
                    </a>
                    {/* Dropdown Structure */}
                    <If condition={dropdownIsOpen && dropdownIndex === index}>
                      <ul
                        id="dropdown01"
                        className="dropdown-content dropdown-wide"
                        style={{ display: 'block', width: '103.991px', left: '116.974px', top: '7.99716px', transformOrigin: '0px 0px 0px', opacity: '1', transform: 'scaleX(1) scaleY(1)' }}
                      >
                        <li>
                          {/* Modal Trigger */}
                          <a
                            href="#modal_user_edit"
                            onClick={this.onOpenClassDetailsModal}
                            className="modal-trigger link-block"
                          >
                            Edit
                          </a>
                        </li>
                        <li>
                          <a href="#!" onClick={() => onCloneClass(index)}>Clone</a>
                        </li>
                        <li>
                          <a href="#!">Impersonate</a>
                        </li>
                        <li>
                          <a href="#!" onClick={() => onDeleteClass(index)}>Delete</a>
                        </li>
                      </ul>
                    </If>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="row d-flex mb-0">
              <div className="col s12 m5">
                <div className="row mb-0">
                  <div className="col s6 m12">
                    <ul className="points-list-custom">
                      <li className="style-aqua">
                        <span className="badge-circle">
                          +223
                          <span className="badge-text">improvement</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col s6 m12">
                    <div className="chart-block chart-block-test">
                      <span className="value-max">24</span>
                      <div
                        className="js-donut-chart"
                        data-stroke-width={15}
                        data-source="./inc/score-data-class-instruction.json"
                      />
                      <div className="chart-text">
                        <span className="title">Instruction</span>
                        <span className="value">63%</span>
                        <span className="description">
                          vs scheduled instruction
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m7">
                <ul className="points-list">
                  <li className="style-purple-darken">
                    <span className="badge-circle">62</span>
                    <span className="point-text">coursework assigned</span>
                  </li>
                  <li className="style-purple-lighten">
                    <span className="badge-circle">93%</span>
                    <span className="point-text">coursework completed</span>
                  </li>
                  <li className="style-red-darken-3">
                    <span className="badge-circle">127</span>
                    <span className="point-text">
                      problems ﬂagged for review
                    </span>
                  </li>
                  <li className="style-blue-light">
                    <span className="badge-circle">1238</span>
                    <span className="point-text">average score</span>
                  </li>
                  <li className="style-blue">
                    <span className="badge-circle">85%</span>
                    <span className="point-text">achieved target score</span>
                  </li>
                  <li className="style-orange-accent-4">
                    <span className="badge-circle">1.8</span>
                    <span className="point-text">
                      average practice tests completed
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-inner-row">
              <div className="row-holder">
                <ul className="category-list">
                  <li className="category-box ">
                    <span className="category-badge badge-purple">TW</span>
                    <span className="category-text">Tutor Withalongername</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

ClassCard.propTypes = {
  index: PropTypes.number.isRequired,
  classroom: PropTypes.object.isRequired,
  onSetDropdown: PropTypes.func.isRequired,
  onCloseDropdown: PropTypes.func.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  dropdownIndex: PropTypes.number,
  onHandleClassCard:PropTypes.func.isRequired,
  onCloneClass: PropTypes.func.isRequired,
  onDeleteClass:PropTypes.func.isRequired,
};

export default ClassCard;
