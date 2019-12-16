import React from "react";
import PropTypes from "prop-types";
import { getRadius, getDashArray, getDashoffset } from "../../utils/RadialBar";

class RadailBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      svgWidth,
      svgHeight,
      strokeWidth,
      maxValue,
      currentValue,
      strokeColor
    } = this.props;
    return (
      <svg width={svgWidth} height={svgHeight} viewBox={"0 0 "+svgWidth+""+svgHeight}>
        <circle
          cx={svgWidth/2}
          cy={svgHeight/2}
          r={getRadius(svgWidth, strokeWidth)}
          fill="transparent"
          stroke="#e6e6e6"
          stroke-width={strokeWidth}
        />
        <circle
         cx={svgWidth/2}
         cy={svgHeight/2}
          r={getRadius(svgWidth, strokeWidth)}
          fill="transparent"
          stroke={strokeColor}
          stroke-width={strokeWidth}
          stroke-dasharray={getDashArray(svgWidth, strokeWidth)}
          stroke-dashoffset={getDashoffset( svgWidth,strokeWidth,maxValue,currentValue)}
        />
      </svg>
    );
  }
}

RadailBar.propTypes = {
  svgWidth: PropTypes.number,
  svgHeight: PropTypes.number,
  strokeWidth: PropTypes.number,
  maxValue: PropTypes.number,
  currentValue: PropTypes.number,
  strokeColor:PropTypes.string,
};

export default RadailBar;
