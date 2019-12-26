import React from 'react';

const TableHeader = () => (
  <div className="list-table-header">
    <div className="list-table-row">
      <div className="list-table-cell icon-cell">&nbsp;</div>
      <div className="list-table-cell name-cell"><b>Worksheet</b></div>
      <div className="list-table-cell graph-cell"><b>Score</b></div>
      <div className="list-table-cell description-cell"><b>Problems</b></div>
      <div className="list-table-cell time-cell"><b>Time Est</b></div>
      <div className="list-table-cell date-cell"><b>Assign</b></div>
      <div className="list-table-cell date-cell"><b>Due</b></div>
      <div className="list-table-cell completed-cell"><b>Completed</b></div>
      <div className="list-table-cell flags-cell"><b>Flags</b></div>
      <div className="list-table-cell status-cell"><b>Status</b></div>
      <div className="list-table-cell drop-cell">&nbsp;</div>
    </div>
  </div>
);

export default TableHeader;