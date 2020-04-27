import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { setOpenActivePage, setIsVisibleTopBar } from "../index/actions";
import { makeSelectActiveLesson, makeSelectUnitFilterOptions } from "../index/selectors";
import moment from "moment";


class ReadWorkBook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // use initials to check against
            initials: [],
        };
    }
    onSetActivePage = () => {
        const { onSetOpenActivePage, onSetIsVisibleTopBar } = this.props;
        onSetIsVisibleTopBar(true);
        onSetOpenActivePage("");
    }

    getUnitNameById = () => {
        const { units } = this.props;
        if (units && units.length !== 0) {
            const unitIds = units.map(unit => unit.value);
            const currentIndex = unitIds.findIndex(this.getUnitIndexMatchedUnitId);
            const currentUnit = units[currentIndex];
            return currentUnit.label;
        } else {
            return "Undefind UnitName"
        }
    }

    getUnitIndexMatchedUnitId = unitId => unitId === this.props.lesson.unit_id;

    render() {
        const { user,
            lesson: { name, starting_page, ending_page, completed_at, assignTime, assignment_date, due_date, dueTime, description } } = this.props;
        const { studentInformation: { firstName, lastName } } = user;
        return (
            <div className='wrapper'>
                <div
                    className='card-modal card-main card switcher-section grey lighten-5 modal'
                    style={{
                        zIndex: "1003",
                        display: "block",
                        position: "absolute",
                        top: "0",
                        minHeight: "100%",
                        minWidth: "100%",
                    }}
                >
                    <div className='header-row card-panel light-blue lighten-1 white-text'>
                        <div className='card-panel-row row'>
                            <div className="icon-col col s1">
                                <i className="icon-books"></i>
                            </div>
                            <div className='col s7'>
                                <p className="text-small" style={{ marginBottom: 0, fontSize: 18 }}>{this.getUnitNameById()}</p>
                                <p className="text-large" style={{ marginBottom: 0, fontSize: 24 }}>{name}</p>
                                <p style={{ fontSize: '16px' }}>p.{starting_page}{ending_page > starting_page ? `-${ending_page}` : ""}(Reading)</p>
                            </div>
                            <div className="col s4">
                                <div className="position-top right-align" style={{ float: 'right' }}>
                                    <div className="icons-row">
                                        <div className="dropdown-block col">
                                            <p className="text-large" style={{ fontSize: 24 }}>{firstName} {lastName}
                                                <i className="material-icons dots-icon">more_vert</i>
                                                <a
                                                    href="#"
                                                    className="icon-close"
                                                    onClick={this.onSetActivePage}
                                                    style={{ color: 'white', fontSize: 12 }}
                                                ></a></p>
                                        </div>
                                    </div>
                                </div>
                                <Choose>
                                    <When condition={completed_at}>
                                        <div><time className="date" dateTime="" style={{ color: 'white', fontWeight: 'unset', marginTop: '-50px', fontSize: '17px' }}>
                                            {`Completed ${moment(completed_at).format("MM/DD/YY")} at ${moment(completed_at).format('hh:mm')}`}
                                        </time></div>
                                    </When>
                                    <Otherwise>
                                        <div><time className="date" dateTime="" style={{ color: 'white', fontWeight: 'unset', marginTop: '-50px', fontSize: '17px' }}>
                                            {`Assigned ${assignment_date} at ${assignTime}`}
                                        </time></div>
                                        <div><time className="date" dateTime="" style={{ color: 'white', fontWeight: 'unset', marginTop: '-28px', fontSize: '17px' }}>
                                            {due_date && (`Due ${due_date} at ${dueTime}`)}
                                        </time></div>
                                    </Otherwise>
                                </Choose>
                            </div>
                        </div>
                        <div className='header-row-block card-panel-row row'>
                            <div className='col s3'>&nbsp;</div>
                            <div className='col s9 right-align'>
                                <div>
                                    <span className='name'>DownloadPDF</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='content-section'>
                        <div className='content-section-holder'>
                            <div className='card-block' style={{ maxWidth: 450, margin: "0 auto" }}>
                                <h3>
                                    Read page(s) {starting_page}
                                    {ending_page > starting_page
                                        ? `-${ending_page}`
                                        : ""}
                                </h3>
                                <div className='card'>
                                    <div className='card-content'>
                                        <h3>
                                            I have read page(s) {starting_page}{ending_page > starting_page ? `-${ending_page}` : ""}
                                            {description}
                                        </h3>
                                        <div className='answers-list'>
                                            <h2 style={{ float: "left", marginRight: 20 }}>Student's Initials:</h2>
                                            <input type='text' className='answer-input' />
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

ReadWorkBook.propTypes = {
    onSetActivePage: PropTypes.func.isRequired,
    onSetIsVisibleTopBar: PropTypes.func.isRequired,
    lesson: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
    lesson: makeSelectActiveLesson(),
    units: makeSelectUnitFilterOptions(),
});

const mapDispatchToProps = (dispatch) => {
    return {
        onSetOpenActivePage: (activepage) => dispatch(setOpenActivePage(activepage)),
        onSetIsVisibleTopBar: (value) => dispatch(setIsVisibleTopBar(value)),
    };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(ReadWorkBook);
