import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../../../utils/getValueFromState';
import { versionOptions } from './utils';

const TestVersionSettings = ({ version, reading, writing, math, essay, includeScoreInImprovementMetrics, handleTestVersionSettingsChange }) => (
  <React.Fragment>
    <h2>Test Version</h2>
    <div className="card card-test-detail">
      <div className="card-content">
        <div className="row">
          <div className="input-field col s12">
            <Dropdown
              value={getValueFromState(version, versionOptions)}
              onChange={handleTestVersionSettingsChange}
              options={versionOptions}
              label="Version"
              stateKey="version"
              dropdownKey="version"
            />
          </div>
        </div>
        <div className="check-holder">
          <div className="row mb-0">
            <div className="col s6">
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="reading"
                    className="filled-in"
                    checked={reading}
                    onChange={handleTestVersionSettingsChange}
                  />
                  <span>Reading Section</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="writing"
                    className="filled-in"
                    checked={writing}
                    onChange={handleTestVersionSettingsChange}
                  />
                  <span>Writing Section</span>
                </label>
              </p>
            </div>
            <div className="col s6">
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="math"
                    className="filled-in"
                    checked={math}
                    onChange={handleTestVersionSettingsChange}
                  />
                  <span>Math Section</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    name="essay"
                    className="filled-in"
                    checked={essay}
                    onChange={handleTestVersionSettingsChange}
                  />
                  <span>Essay</span>
                </label>
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-0">
          <div className="input-field col s12">
            <p>
              <label>
                <input
                  type="checkbox"
                  name="includeScoreInImprovementMetrics"
                  className="filled-in"
                  checked={includeScoreInImprovementMetrics}
                  onChange={handleTestVersionSettingsChange}
                />
                <span>Include Score in Improvement Metrics</span>
              </label>
            </p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

TestVersionSettings.propTypes = {
  math: PropTypes.bool.isRequired,
  essay: PropTypes.bool.isRequired,
  reading: PropTypes.bool.isRequired,
  writing: PropTypes.bool.isRequired,
  version: PropTypes.string.isRequired,
  handleTestVersionSettingsChange: PropTypes.func.isRequired,
  includeScoreInImprovementMetrics: PropTypes.bool.isRequired,
}

export default TestVersionSettings;
