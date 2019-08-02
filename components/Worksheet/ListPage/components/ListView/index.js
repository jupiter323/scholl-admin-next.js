import React from 'react';
import PropTypes from 'prop-types';

import formatTimeEstimate from '../../../../../utils/formatTimeEstimate';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null,
    };
  }

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  handleDropdownClick = (event, index) => {
    const { dropdownIsOpen } = this.state;
    event.preventDefault();
    if (dropdownIsOpen) {
      return this.onCloseDropdown();
    }
    return this.onSetDropdown(index);
  }

  mapWorksheetRows = () => {
    const { worksheets, onSetActiveWorksheet } = this.props;
    const { dropdownIndex, dropdownIsOpen } = this.state;
    return worksheets.map((worksheet, index) => {
      const { worksheetSource, worksheetName, problems, timeEstimate } = worksheet;
      return (
        <div className="card list-table-row" key={worksheet.id}>
          <div className="list-table-cell icon-cell">
            <span className="block-icon">
              <i className="icon-sheets-w"></i>
            </span>
          </div>
          <div className="list-table-cell name-cell">
            <div className="card-panel-text truncate">
              <div className="text-large truncate">{worksheetName}</div>
            </div>
          </div>
          <div className="list-table-cell description-cell">{problems.length}</div>
          <div className="list-table-cell time-cell">{formatTimeEstimate(timeEstimate)}</div>
          <div className="list-table-cell completed-cell">{worksheetSource}</div>
          <div className="list-table-cell empty-cell"><b>&nbsp;</b></div>
          <div className="list-table-cell drop-cell">
            <div className="dropdown-block">
              <a
                href='#'
                data-target='dropdown01'
                className='dropdown-trigger btn'
                onClick={(event) => this.handleDropdownClick(event, index)}
              >
                <i className="material-icons dots-icon">more_vert</i>
              </a>
              <If condition={dropdownIsOpen && dropdownIndex === index}>
                <ul id='dropdown01' className='dropdown-content dropdown-wide' style={{ display: 'block', opacity: '1', transform: 'scaleX(1) scaleY(1)' }}>
                  <li>
                    <a
                      href="#"
                      className="modal-trigger link-block"
                      onClick={() => onSetActiveWorksheet(worksheet)}
                    >
                      Edit
                    </a>
                  </li>
                  <li><a href="#">Clone</a></li>
                  <li><a href="#" className="link-delete">Delete</a></li>
                </ul>
              </If>
            </div>
          </div>
        </div>
      );
    })
  }

  render() {
    const { worksheets } = this.props;
    return (
      <div className="content-section">
        <div className="container-md">
          <div className="result-row center-align">
            <b className="result"> - {worksheets.length} results -</b>
          </div>
          <div className="list-view-section">
            <div className="list-table six-columns">
              <div className="list-table-header">
                <div className="list-table-row">
                  <div className="list-table-cell icon-cell">&nbsp;</div>
                  <div className="list-table-cell name-cell"><b>Worksheet</b></div>
                  <div className="list-table-cell description-cell"><b>Problems</b></div>
                  <div className="list-table-cell time-cell"><b>Time Est</b></div>
                  <div className="list-table-cell completed-cell"><b>Source</b></div>
                  <div className="list-table-cell empty-cell"><b>&nbsp;</b></div>
                  <div className="list-table-cell drop-cell">&nbsp;</div>
                </div>
              </div>
              <div className="list-table-body">
                {this.mapWorksheetRows()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListView.propTypes = {
  worksheets: PropTypes.array.isRequired,
  onSetActiveWorksheet: PropTypes.func.isRequired,
}

export default ListView;
