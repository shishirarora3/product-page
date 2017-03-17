import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ComponentsSlider.scss';
import Slider from './Slider';

/**
 *
 * @param noOfSlidesShown
 * @param autoplay
 * @param children
 * @param classNames
 * @param onChangeHandler: fires when we click on slider left or right
 * @returns {XML}
 * @constructor
 */
const ComponentsSlider = ({
  noOfSlidesShown,
  autoplay, sliderWrap, isCircular, styles, index, children: items,
  onChangeHandler
}) => {
  const classNames = {
    slider: s.slider,
    icon: s.icon,
    mySlider: s.mySlider,
    'slider-next': s['slider-next'],
    'slider-prev': s['slider-prev'],
    'transition--0': s['transition--0'],
    slide: s.slide,
    'slider-list': s['slider-list'],
    'slider-track': s['slider-track'],
    'image-container': s['image-container']
  };

  // if item length 6 , we need to show 5 , then circularLength is 10.
  const circularLength = Math.ceil((items.length) / noOfSlidesShown) * noOfSlidesShown;
  const paddingArr = new Array(circularLength - items.length);
  let circularItems = [...items, ...paddingArr];
  if (isCircular) {
    circularItems = [
      ...circularItems.slice(circularItems.length - noOfSlidesShown, circularItems.length),
      ...circularItems,
      ...circularItems.slice(0, noOfSlidesShown)
    ];
  }
  if (styles) {
    classNames['slider-next'] = styles['slider-next'];
    classNames['slider-prev'] = styles['slider-prev'];
  }
  return (<Slider
    autoplay={autoplay}
    circularItems={circularItems}
    className={s.mySlider}
    classNames={classNames}
    noOfSlidesShown={noOfSlidesShown}
    boundryIndexes={[1, circularItems.length - 1]}
    incrementTranslationUnits={noOfSlidesShown}
    onChangeHandler={onChangeHandler}
    sliderWrap={sliderWrap}
    isCircular={isCircular}
    index={index}
  />);
};
ComponentsSlider.propTypes = {
  autoplay: PropTypes.bool,
  noOfSlidesShown: PropTypes.number,
  children: PropTypes.array.isRequired,
  styles: PropTypes.object,
  onChangeHandler: PropTypes.func,
  sliderWrap: PropTypes.bool,
  isCircular: PropTypes.bool,
  index: PropTypes.number
};
ComponentsSlider.defaultProps = {
  autoplay: false,
  noOfSlidesShown: 1,
  sliderWrap: true,
  isCircular: false,
  index: 0,
  onChangeHandler: () => {}
};
export default withStyles(s)(ComponentsSlider);
