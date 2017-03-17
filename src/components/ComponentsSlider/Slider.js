import React, { PropTypes, Component } from 'react';
import Slide from './Slide';

class Slider extends Component {
  /**
   *
   * @param props
     */
  constructor(props) {
    super(props);
    this.state = {
      leftIndex: props.index,
      isAnimation: false,
      isLeft: true
    };
    this.leftOffset = 0;
    if (props.isCircular) {
      this.state.leftIndex++;
      this.leftOffset++;
    }
  }

  // For the first time, items to render needs to be updated
  componentWillMount() {
    const { circularItems } = this.props;
    const sliderLength = circularItems.length;
    // On slide we will first load empty object in slider
    // then load images in them
    this.itemsToRender = (new Array(sliderLength)).fill(null);
    this.translateLeft = 0;
    this.updateItems(this.state.leftIndex);
  }

  componentDidMount() {
    if (this.props.autoplay) {
      this.interval = setInterval(() => { this.onClick(false); }, 10000);
    }
  }

  // This handles change in isVisible that comes from the parent. will not be called for others
  // because two separate arrays are maintained and the one showing is not coming from props.
  componentWillReceiveProps(nextProps) {
    let index = this.state.leftIndex;
    if (this.props.index !== nextProps.index) {
      index = nextProps.index + 1;
      this.setState({
        leftIndex: index
      });
    }
    this.updateItems(index, nextProps);
  }

  componentDidUpdate() {
    if (this.state.isAnimation) {
      this.sliderTrack.addEventListener('transitionend',
      this.onTransitionEnd,
      false);
    }
  }

  componentWillUnmount() {
    if (this.props.autoplay) {
      clearInterval(this.interval);
    }
  }

  onClick(isLeft) {
    this.transitionDelay = false;
    if (!this.state.isAnimation) {
      const { circularItems } = this.props;
      let { noOfSlidesShown } = this.props;
      const sliderLength = circularItems.length;
      const sliderItemWidth = 100 / sliderLength;
      // multiplier -1 means element is sliding to left
      let multiplier = -1;
      if (isLeft) {
        multiplier = 1;
      }
      if (!this.props.isCircular && !this.props.sliderWrap) {
        noOfSlidesShown = this.getNumberShown(isLeft, this.state.leftIndex);
      }
      this.translateLeft = multiplier * noOfSlidesShown * sliderItemWidth;
      this.updateItems(this.state.leftIndex - multiplier);
      this.setState({
        isAnimation: true,
        isLeft
      });
    }
  }

  onTransitionEnd = () => {
    let { leftIndex } = this.state;
    const { circularItems, noOfSlidesShown, onChangeHandler } = this.props;
    const sliderLength = circularItems.length;
    if (this.state.isLeft) {
      leftIndex -= 1;
      if (leftIndex <= (-1 + this.leftOffset)) {
        leftIndex = (sliderLength / noOfSlidesShown) - 1 - this.leftOffset;
      }
    } else {
      leftIndex += 1;
      if ((leftIndex + this.leftOffset) * noOfSlidesShown >= sliderLength) {
        leftIndex = this.leftOffset;
      }
    }
    onChangeHandler((leftIndex - this.leftOffset) * noOfSlidesShown);
    this.sliderTrack.removeEventListener('transitionend', this.onTransitionEnd);
    this.updateItems(leftIndex);
    this.setState({
      isAnimation: false,
      leftIndex
    });
  }

  // function to get the number of items to be shifted
  getNumberShown(isLeft, index) {
    const { circularItems, noOfSlidesShown } = this.props;
    let idx = index;
    const sliderLength = circularItems.length;
    if ((idx === sliderLength / noOfSlidesShown - 2 - this.leftOffset && !isLeft) ||
      (idx === sliderLength / noOfSlidesShown - 1 - this.leftOffset && isLeft)
    ) {
      if (!isLeft) {
        idx += 1;
      }
      // get the count of valid elements i.e. not undefined/null
      let count = 0;
      for (let startIndex = idx * noOfSlidesShown;
        startIndex < (idx + 1) * noOfSlidesShown;
        startIndex++
      ) {
        if (circularItems[startIndex]) {
          count++;
        }
      }
      return count;
    }
    return noOfSlidesShown;
  }

  // function to get the left pos of the carousel
  getLeft() {
    const { isLeft, isAnimation } = this.state;
    const { leftIndex } = this.state;
    const { noOfSlidesShown } = this.props;
    if (!this.props.isCircular && !this.props.sliderWrap) {
      let slidesShown = noOfSlidesShown;
      // we have to shift only when move right and animation is false
      // or move left and animation is true
      if (!isLeft && !isAnimation) {
        slidesShown = this.getNumberShown(false, leftIndex - 1);
      } else if (isLeft && isAnimation) {
        slidesShown = this.getNumberShown(isLeft, leftIndex);
      }
      // this shift will depend on clides to be shifted
      return ((leftIndex - 1) + (slidesShown / noOfSlidesShown)) * -100;
    }
    // default shift
    return leftIndex * -100;
  }

  // This will update itemsToRender according to the index of the frame which needs to be shown
  updateItems(index, props) {
    const { noOfSlidesShown } = this.props;
    let { circularItems } = this.props;
    if (props) {
      circularItems = props.circularItems;
    }
    const indexOffset = noOfSlidesShown - this.getNumberShown(false, index - 1);
    for (let startIndex = index * noOfSlidesShown - indexOffset;
      startIndex < (index + 1) * noOfSlidesShown - indexOffset;
      startIndex++
    ) {
      this.itemsToRender[startIndex] = circularItems[startIndex];
    }
  }

  renderButton = ({ isLeft, className, classNames: s }) => {
    return (
      <div
        className={`${s.icon} ${className}`}
        onClick={() => { this.onClick(isLeft); }}
      >
        <span />
      </div>
    );
  };

  render() {
      const { circularItems, noOfSlidesShown, classNames: s, isCircular } = this.props;
      const sliderLength = circularItems.length;
      const leftVal = this.getLeft();
      const sliderTrackWidth = `${(sliderLength / noOfSlidesShown) * 100}%`;
      const { isAnimation } = this.state;
      let sliderTrackStyle = {
        width: sliderTrackWidth,
        left: `${leftVal}%`
      };
      if (isAnimation) {
        sliderTrackStyle = { ...sliderTrackStyle,
          transform: `translate3d(${this.translateLeft}%,0px,0px)`,
          transitionDelay: this.transitionDelay ? '1.5s' : '0s',
          transition: 'transform 0.7s ease-out'
         };
      }
    return (
      <div className={s.mySlider}>
        <div className={s.slider}>
          {
            (isCircular || this.state.leftIndex < (sliderLength / noOfSlidesShown) - 1) &&
            this.renderButton({
              isLeft: false,
              className: s['slider-next'],
              classNames: s
            })}
          {
            (isCircular || this.state.leftIndex > 0) &&
            this.renderButton({
              isLeft: true,
              className: s['slider-prev'],
              classNames: s
            })}
          <div className={s['slider-list']}>
            <div
              className={s['slider-track']}
              style={sliderTrackStyle}
              ref={c => { this.sliderTrack = c; }}
            >
              {
                this.itemsToRender.map((component, i) => (isCircular || component) && <Slide
                  classNames={s} key={`image-${i}`}
                  sliderLength={sliderLength}
                >
                  {component}
                  </Slide>
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Slider.propTypes = {
  circularItems: PropTypes.array,
  noOfSlidesShown: PropTypes.number,
  isCircular: PropTypes.bool,
  autoplay: PropTypes.bool,
  classNames: PropTypes.object,
  onChangeHandler: PropTypes.func,
  sliderWrap: PropTypes.bool,
  index: PropTypes.number
};
Slider.defaultProps = {
  circularItems: [],
  noOfSlidesShown: 3,
  onChangeHandler: () => {}
};
export default Slider;
