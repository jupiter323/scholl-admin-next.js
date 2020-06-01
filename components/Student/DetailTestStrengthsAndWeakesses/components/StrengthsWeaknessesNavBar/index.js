import React from "react";
import PropTypes from "prop-types";

const StrengthsWeaknessesNavBar = ({ activeSlide, onSetActiveSlide, scores }) => (
  // eslint-disable-next-line no-unused-expressions
  <div
    className="card-panel light-blue accent-2 white-text"
    style={{ display: "block" }}
  >
    <div className="container">
      <div className="row mb-0">
        <div
          className="nav-slick nav-tab"
          style={{ fontSize: "15px", display: "table", margin: "0 auto" }}
        >
          {scores.readingScores && <div className="tab slide col 3" style={{ padding: "0px 70px" }}>
            <a
              className={activeSlide === "reading" ? "active" : ""}
              onClick={() => onSetActiveSlide("reading")}
              href="#"
            >
              Reading
            </a>
          </div>}
          {scores.writingSCores && <div className="tab slide col 3" style={{ padding: "0px 70px" }}>
            <a
              className={activeSlide === "writing" ? "active" : ""}
              onClick={() => onSetActiveSlide("writing")}
              href="#"
            >
              Writing
            </a>
          </div>}
          {scores.mathScores && <div className="tab slide col 3" style={{ padding: "0px 70px" }}>
            <a
              className={activeSlide === "math" ? "active" : ""}
              onClick={() => onSetActiveSlide("math")}
              href="#"
            >
              Math
            </a>
          </div>}
        </div>
      </div>
    </div>
  </div>
);

StrengthsWeaknessesNavBar.propTypes = {
  activeSlide: PropTypes.string.isRequired,
  onSetActiveSlide: PropTypes.func.isRequired,
};
export default StrengthsWeaknessesNavBar;
