import React from 'react';

const TableHeader = () => (
  <div className="list-table-header">
    <div className="list-table-row">
      <div className="list-table-cell icon-cell">&nbsp;</div>
      <div className="list-table-cell name-cell" style={{marginRight: '55px'}}><b>Lesson</b></div>
      {/* <div className="list-table-cell drop-cell">&nbsp;</div> */}
      <div className="list-table-cell completed-cell"><b>Status</b></div>
      <div className="list-table-cell completed-cell" style={{marginLeft: '30px'}}><b>Subject</b></div>
      <div className="list-table-cell page-cell"><b>Page</b></div>
      <div className="list-table-cell date-cell" style={{marginLeft: '15px'}}><b>Date</b></div>
      <div className="list-table-cell dueDate-cell"><b>Due</b></div>
      <div className="list-table-cell completed-cell"><b>Completed</b></div>
      <div className="list-table-cell completed-cell"><b>Type</b></div>
      <div className="list-table-cell flags-cell"><b>&nbsp;</b></div>
      <div className="list-table-cell flags-cell"><b>Flags</b></div>
      <div className="list-table-cell drop-cell">&nbsp;</div>
    </div>
  </div>
);

export default TableHeader;