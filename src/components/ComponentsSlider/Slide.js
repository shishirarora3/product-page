import React, { PropTypes } from 'react';

/**
 *
 * @param sliderLength
 * @param s
 * @param children
 * @returns {XML}
 * @constructor
 */
const Slide = ({ sliderLength, classNames: s, children }) => {
      const sliderItemWidth = 100 / sliderLength;
      const slideStyle = {
        width: `${sliderItemWidth}%`
      };
    return (

      <div className={s.slide} style={slideStyle}>
        {children}
      </div>
    );
};

Slide.propTypes = {
  sliderLength: PropTypes.number,
  classNames: PropTypes.object,
  children: PropTypes.object
};

export default Slide;
