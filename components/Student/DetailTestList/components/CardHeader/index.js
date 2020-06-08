import React from "react";
import PropTypes from "prop-types";
const CardHeader = ({ title, amount, themeColor }) => (
  <div className="title-block">
    <strong
      style={{
        color: themeColor,
        display: "block",
        fontSize: "18px",
        margin: "0 0 12px",
      }}
    >
      {title}
      <span
        className="badge-circle"
        style={{
          backgroundColor: themeColor,
          width: "19px",
          height: "19px",
          color: "#fff",
          border: "none",
          fontSize: "12px",
          fontWeight: 700,
          lineHeight: "13px",
          padding: "2px",
          marginLeft: "5px",
        }}
      >
        {amount}
      </span>
    </strong>
  </div>
);
export default CardHeader;
