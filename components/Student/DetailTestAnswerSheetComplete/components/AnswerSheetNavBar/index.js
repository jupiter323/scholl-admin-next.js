import React from 'react'
import PropTypes from 'prop-types';

const AnswerSheetNavBar = ({active, onSetActiveSlide}) => (
  // eslint-disable-next-line no-unused-expressions
  <div className="card-panel light-blue accent-2 white-text" style={{display: 'block'}}>
    <div className="container">
      <div className="row mb-0">
      <div className="nav-slick nav-tab" style={{fontSize: '15px'}}>

        <div className="tab slide col 6">
          <a
           className={active === 'reading' ? 'active' : ''}
           onClick={() => onSetActiveSlide('reading')}
           href="#"
          >
            Reading
          </a>
        </div>
        <div className="tab slide col 6">
          <a
           className={active === 'writing' ? 'active' : ''}
           onClick={() => onSetActiveSlide('writing')}
           href="#"
          >
            Writing
          </a>
        </div>
        <div className="tab slide col 6">
          <a
            className={active === 'math (no calc)' ? 'active' : ''}
            onClick={() => onSetActiveSlide('math (no calc)')}
            href="#"
          >
            Math <span className="block-sm">(no calc)</span>
          </a>
        </div>
        <div className="tab slide col 6">
          <a
            className={active === 'math (calculator)' ? 'active' : ''}
            onClick={() => onSetActiveSlide('math (calculator)')}
            href="#"
          >
            Math <span className="block-sm">(calculator)</span>
          </a>
        </div>
        <div className="tab slide col 6">
          <a
           className={active === 'essay' ? 'active' : ''}
           onClick={() => onSetActiveSlide('essay')}
           href="#"
          >
            Essay
          </a>
        </div>
      </div>
    </div>
    </div>
  </div>
);

AnswerSheetNavBar.propTypes = {
  active: PropTypes.string.isRequired,
  onSetActiveSlide: PropTypes.func.isRequired,
}
export default AnswerSheetNavBar;