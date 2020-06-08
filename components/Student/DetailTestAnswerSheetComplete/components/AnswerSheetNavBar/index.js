import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const AnswerSheetNavBar = ({ activeSlide, onSetActiveSlide, getExistingSections }) => {
  // Constants
  const { reading, writing, mathCalc, mathNoCalc } = getExistingSections;

  // UseEffects
  useEffect(() => {
    if (reading) return onSetActiveSlide('reading');
    else if (writing) return onSetActiveSlide('writing');
    else if (mathNoCalc) return onSetActiveSlide('math (no calc)');
    else if (mathCalc) return onSetActiveSlide('math (calculator)');
  }, [reading, writing, mathCalc, mathNoCalc]);

  return (
  // eslint-disable-next-line no-unused-expressions
    <div className="card-panel light-blue accent-2 white-text" style={{ display: 'block' }}>
      <div className="container">
        <div className="row mb-0">
          <div className="nav-slick nav-tab" style={{ fontSize: '15px', display: 'table', margin: '0 auto' }}>

            {reading && <div className="tab slide col 3" style={{ padding: '0px 70px' }}>
              <a
                className={activeSlide === 'reading' ? 'active' : ''}
                onClick={() => onSetActiveSlide('reading')}
                href="#"
              >
            Reading
              </a>
            </div>}
            {writing && <div className="tab slide col 3" style={{ padding: '0px 70px' }}>
              <a
                className={activeSlide === 'writing' ? 'active' : ''}
                onClick={() => onSetActiveSlide('writing')}
                href="#"
              >
            Writing
              </a>
            </div>}
            {mathNoCalc && <div className="tab slide col 3" style={{ padding: '0px 70px' }}>
              <a
                className={activeSlide === 'math (no calc)' ? 'active' : ''}
                onClick={() => onSetActiveSlide('math (no calc)')}
                href="#"
              >
            Math <span className="block-sm">(no calc)</span>
              </a>
            </div>}
            {mathCalc && <div className="tab slide col 3" style={{ padding: '0px 70px' }}>
              <a
                className={activeSlide === 'math (calculator)' ? 'active' : ''}
                onClick={() => onSetActiveSlide('math (calculator)')}
                href="#"
              >
            Math <span className="block-sm">(calculator)</span>
              </a>
            </div>}
            <div className="tab slide col 3" style={{ padding: '0px 70px' }}>
              <a
                className={activeSlide === 'essay' ? 'active' : ''}
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
};

AnswerSheetNavBar.propTypes = {
  activeSlide: PropTypes.string.isRequired,
  onSetActiveSlide: PropTypes.func.isRequired,
};
export default AnswerSheetNavBar;
