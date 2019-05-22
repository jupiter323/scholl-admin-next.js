import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ sortBySubject }) => (
  <div className="list-table-header show-on-medium-and-down hide-on-large-only">
    <div className="list-table-row">
      <div className="list-table-cell checkbox-cell">
        <span>&nbsp;</span>
      </div>
      <div className="list-table-cell subject-cell">
        <a href="#" onClick={sortBySubject}><span className="sort-holder">Subject <i className="sort-icon custom-icon-traingle-down"></i></span></a>
      </div>
      <div className="list-table-cell info-cell"><b>Diﬃculty</b></div>
      <div className="list-table-cell type-cell"><b>Type</b></div>
      <div className="list-table-cell in-cell"><b>In Workbook</b></div>
      <div className="list-table-cell topic-cell"><b>Topic(s)</b></div>
      <div className="list-table-cell view-cell"><b>&nbsp;</b></div>
      <div className="list-table-cell drop-cell">&nbsp;</div>
    </div>
  </div>
);

TableHeader.propTypes = {
  sortBySubject: PropTypes.func.isRequired,
}

export default TableHeader;
