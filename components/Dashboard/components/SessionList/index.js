import React, { Component } from 'react';
import DashboardCard from '../DashboardCard';
import sampleSessions from '../../utils/sampleUpComingSessions';
import * as moment from 'moment';

class SessionList extends Component {
  render() {
    return (<div className="dashboard-card card">
      { sampleSessions.sessions.map((element, key) => {
        return (
          <div className="card-content" key={element.key}>
            <h2 className="dashboard-title">
              <time dateTime="2019-02-02">{ element.datetime }</time>
              <span className="small"> { SessionList.getDateName(moment(element.datetime, 'M/D/YYYY')) }</span>
            </h2>
            <div className="row d-flex-content card-width-366 mb-0">
              { element.sessions.map((session) => (<DashboardCard sessionStats={session.sessionStats} testStats={session.testStats} user={session.user} key={session.uuid} />)) }
            </div>
          </div>
        );
      })}
    </div>);
  }

  static getDateName(datetime) {
    if (moment().isSame(moment(datetime, 'M/D/YYYY'), 'day')) {
      return 'Today';
    } else if (moment().add(1, 'days').isSame(moment(datetime, 'M/D/YYYY'), 'day')) {
      return 'Tomorrow';
    }
    return 'Other';
  }
}

export default SessionList;
