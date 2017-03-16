import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ComponentsSlider.scss';
import Slider from './Slider';

const defaultClassNames = {
  slider: s.slider,
  icon: s.icon,
  sliderContainer: s.sliderContainer,
  'slider-next': s['slider-next'],
  'slider-prev': s['slider-prev'],
  'slider-next-pos': s['slider-next-pos'],
  'slider-prev-pos': s['slider-prev-pos'],
  'transition--0': s['transition--0'],
  slide: s.slide,
  'slider-list': s['slider-list'],
  'slider-track': s['slider-track'],
  'image-container': s['image-container']
};

/**
 *
 * @param noOfSlidesShown: only these will be download and shown on first fold else
 * all will be lazily loaded
 * @param autoplay
 * @param items: These are array of components
 * @param classNames:  ClassNames are configurable
 * @param selectedIndex: used to send force selection from top on each component
 * update. Will not cause animation in the process
 * @param isCircular: to make slider circulate without jerk
 * @returns {XML}
 * @constructor
 */
    
const ComponentsSlider = ({
  noOfSlidesShown,
  autoplay, children: items,
  classNames, isCircular,
  onChangeHandler, selectedIndex
}) => {
  const circularLength = Math.ceil((items.length) / noOfSlidesShown) * noOfSlidesShown;
  const paddingArr = new Array(circularLength - items.length);
  let circularItems = [...items, ...paddingArr];
  // for making the slider look circular without jerk
    if (isCircular) {
      circularItems = [
        ...circularItems.slice(circularItems.length - noOfSlidesShown, circularItems.length),
        ...circularItems,
        ...circularItems.slice(0, noOfSlidesShown)
      ];
    }
  return (<Slider
    autoplay={autoplay}
    circularItems={circularItems}
    classNames={{ ...defaultClassNames, ...classNames }}
    noOfSlidesShown={noOfSlidesShown}
    boundryIndexes={[1, circularItems.length - 1]}
    incrementTranslationUnits={noOfSlidesShown}
    isCircular={isCircular}
    onChangeHandler={onChangeHandler}
    selectedIndex={selectedIndex}
  />);
};
ComponentsSlider.propTypes = {
  autoplay: PropTypes.bool,
  noOfSlidesShown: PropTypes.number,
  children: PropTypes.array.isRequired,
  classNames: PropTypes.object,
  selectedIndex: PropTypes.number,
  isCircular: PropTypes.bool,
  onChangeHandler: PropTypes.func
};
ComponentsSlider.defaultProps = {
  autoplay: false,
  noOfSlidesShown: 1,
  classNames: defaultClassNames,
  selectedIndex: 0,
  isCircular: true,
  onChangeHandler: () => {}
};
export default withStyles(s)(ComponentsSlider);
