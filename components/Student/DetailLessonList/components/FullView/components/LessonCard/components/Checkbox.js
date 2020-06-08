import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({
  label,
  checkBoxId,
  checkBoxtyle,
  checked,
  onChecked,
  onUnChecked,
  cardId,
  type,
}) => {
  const handleCheck = cardId => {
    if (!checked) {
      onChecked(cardId);
    } else {
      onUnChecked(cardId);
    }
  };
  switch (type) {
    case "cardCheckBox":
      return (
        <label htmlFor={checkBoxId} style={{ checkBoxtyle }}>
          <input
            type="checkbox"
            id={checkBoxId}
            checked={checked}
            onChange={() => handleCheck(cardId)}
          />
          <span>{label}</span>
        </label>
      );
    case "pageCheckBox":
      return (
        <label htmlFor={checkBoxId} style={{ checkBoxtyle }}>
          <input
            type="checkbox"
            id={checkBoxId}
            checked={checked}
            onChange={e => onChecked(!e.target.checked)}
          />
          <span>{label}</span>
        </label>
      );
    default:
      return <p>invaild checkbox</p>;
  }
};

Checkbox.propTypes = {
  label: PropTypes.string,
  checkBoxId: PropTypes.string,
  checkBoxtyle: PropTypes.object,
  type: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChecked: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Checkbox;
