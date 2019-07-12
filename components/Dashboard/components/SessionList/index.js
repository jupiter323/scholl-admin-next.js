import { Component } from 'react';
import DashboardCard from '../DashboardCard';
import sampleSessions from '../../utils/sampleUpComingSessions';

class SessionList extends Component {
    render() {

        return (<div className="dashboard-card card">
            { sampleSessions.sessions.map(function(element, key) {
                return (
                    <div className="card-content" key={element.key}>
                        <h2 className="dashboard-title">
                            <time dateTime="2019-02-02">Feb 2, 2019</time>
                            <span className="small">(today)</span>
                        </h2>
                        <div className="row d-flex-content card-width-366 mb-0">
                            <DashboardCard></DashboardCard>
                        </div>
                    </div>
                )
            })}
        </div>);
    }
}

export default SessionList;