import { Component } from 'react';

class DashboardCard extends Component {
    constructor(props) {
      super(props)
        this.state = {
            menuOpacity: 0,
        }
    }

    cycleMenuOpacity() {
        if (this.state.menuOpacity === 0) {
            this.setState({
                menuOpacity: 1,
            })
        } else {
            this.setState({
                menuOpacity: 0,
            });
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', () => this.handleClickOutside());
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', () => this.handleClickOutside());
    }

    handleClickOutside() {
        if (this.state.menuOpacity === 1) {
            this.cycleMenuOpacity();
        }
    }

    render() {
        return (
            <div className="card-main-col col s12 m8 l7 xl5">
                <ul className="card-dashboard-session card-main card collapsible expandable">
                    <li className="card-collapsible-holder">
                        <div
className="collapsible-card owner-box card-panel"
                             style={{"background-color": "#14b04b", "color": "#fff"}}>
                            <div className="card-panel-row row">
                                <div className="col s9">
                                    <span className="meta-info"><time
                                        dateTime="2018-12-09T15:30">2/6/2019 @ 4:30 PM </time><span className="amount"> (10 of 12)</span></span>
                                    <h3 className="collapsible-title hidden-active">Studently, James</h3>
                                </div>
                                <div className="col s2 right-align">
                                    <span className="badge-rounded-sm badge red darken-2 white-text"><b
                                        className="badge-text">3</b> <i className="icon-flag"></i></span>
                                </div>
                                <div className="col s2 right-align">
                                    <div className="row icons-row">
                                        <div className="dropdown-block col">
                                            <a onClick={() => this.cycleMenuOpacity()} className="dropdown-trigger btn" href="#" data-target="dropdown01_01"><i
                                                className="material-icons dots-icon">more_vert</i></a>
                                            <ul
id="dropdown01_01" className="dropdown-content dropdown-wide"
                                                tabIndex="0"
                                                style={{ "display": "block", "width": "120px", "left": "133px", "top": "8px", "height": "104px", "transform-origi": "0px 0px", "opacity": this.state.menuOpacity , "transform": "scaleX(1) scaleY(1)" }}>
                                                <li tabIndex="0">
                                                    <a
href="#modal_user_edit"
                                                       className="modal-trigger link-block">Edit</a>
                                                </li>
                                                <li tabIndex="0"><a href="#!">Clone</a></li>
                                                <li tabIndex="0"><a href="#!">Impersonate</a></li>
                                                <li tabIndex="0"><a href="#!">Delete</a></li>
                                            </ul>
                                        </div>
                                        <div className="col right-align">
                                <span className="collapsible-header collapsible-opener">
                                  <i className="custom-icon-triangle-right color-white"></i>
                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-content collapsible-body">
                            <div className="owner-box card-panel" style={{ "background-color": "#14b04b", "color": "#fff" }}>
                                <div className="card-panel-row row">
                                    <div className="col s12">
                                        <div className="user-block">
                                            <div
className="user-circle"
                                                 style={{ "background-color": "#af1e90", "color": "#fff" }}>
                                                <span className="initials">JS</span>
                                            </div>
                                            <div className="user-text" style={{ "color": "#fff" }}>
                                                <h4 className="h3">Studently, James</h4>
                                                <a href="mailto:arnold.studently@gmail.com">arnold.studently@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center mb-0">
                                <div className="col s12 m6">
                                    <div className="chart-container chart-container-large start-anim">
                                        <div className="chart-holder">
                                <span
className="svg-curved-bar"
                                      data-values="{&quot;from&quot;: 1040, &quot;to&quot;: 1510, &quot;current&quot;: 1270}"
                                      data-duration="1">
                                  <svg width="146px" height="146px" viewBox="0 0 146 146">
                                    <path
fill="none" style={{ "stroke-width":30, "stroke": "#eaeaea" }}
                                          d="M 19.154659885067794 94.556422428299 A 58 58 0 1 1 126.84534011493221 94.556422428299"></path>
                                    <path
data-dinamic="" fill="none" style={{ "stroke-width":30, "stroke": "#0085ce" }}
                                          d="M 19.154659885067794 94.556422428299 A 58 58 0 0 1 69.48595978278411 15.106550272489471"></path></svg>
                                  <span className="js-diff-holder"><span
className="js-diff visible"
                                                                         data-position="position-2"><span
                                      className="txt" style={{ "top": "-56px", "left": "-16px" }}>+230</span></span></span>
                                </span>
                                            <span className="chart-value" style={{ "background-color": "#0085ce" }}><span
                                                data-count-up="" data-start-val="1040" data-end-val="1270"
                                                data-duration="1">1270</span></span>
                                        </div>
                                        <div className="chart-row">
                                            <div className="chart-col chart-start">
                                                <span className="amount">1040</span>
                                                <span className="amount-text">initial</span>
                                            </div>
                                            <div className="chart-col chart-end">
                                                <span className="amount">1510</span>
                                                <span className="amount-text">target</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s12 m6">
                                    <ul className="points-list-bordered">
                                        <li className="style-green">
                                            <span className="badge-circle">61</span>
                                            <span className="point-text">complete</span>
                                        </li>
                                        <li className="style-red">
                                            <span className="badge-circle">7</span>
                                            <span className="point-text">overdue</span>
                                        </li>
                                        <li className="style-orange">
                                            <span className="badge-circle">3</span>
                                            <span className="point-text">practice tests</span>
                                        </li>
                                        <li className="style-blue-lighter">
                                            <span className="badge-circle"><span>17</span> <span
                                                className="of">of 23</span></span>
                                            <span className="point-text">sessions</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default DashboardCard;