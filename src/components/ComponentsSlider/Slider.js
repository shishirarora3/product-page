import React, { PropTypes, Component } from 'react';
import Slide from './Slide';
import classNames from 'classnames';

class Slider extends Component {
  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);
    const { circularItems, selectedIndex } = this.props;
    const sliderLength = circularItems.length;
    // On slide we will first load empty object in slider
    // then load images in them
    this.itemsToRender = (new Array(sliderLength)).fill(null);
    this.translateLeft = 0;
      this.leftOffset = 0;
      if (props.isCircular) {
          this.leftOffset++;
      }
    this.updateItems(selectedIndex);
  }

    componentDidMount() {
        if (this.props.autoplay) {
            this.interval = setInterval(() => { this.onClick(false); }, 10000);
        }
    }

  state = {
    leftIndex: this.props.selectedIndex,
    isAnimation: false
  };

  // This handles change in isVisible that comes from the parent. will not be called for others
  // because two separate arrays are maintained and the one showing is not coming from props.
  componentWillReceiveProps(nextProps) {
    const { selectedIndex } = nextProps;
    let { leftIndex } = this.state;

    if (selectedIndex !== leftIndex) {
      leftIndex = selectedIndex + 1;
      this.setState({ leftIndex: selectedIndex });
    }
    this.updateItems(leftIndex, nextProps);
  }

  componentDidUpdate() {
    const { onChangeHandler } = this.props;
    const { isAnimation, leftIndex } = this.state;

    onChangeHandler(leftIndex);

    if (isAnimation) {
      this.sliderTrack.addEventListener('transitionend',
        this.onTransitionEnd,
        false);
    }
  }

  onClick(isLeft) {
    if (!this.state.isAnimation) {
      let { circularItems, noOfSlidesShown } = this.props;
      const sliderLength = circularItems.length;
      const sliderItemWidth = 100 / sliderLength;
      // multiplier -1 means element is sliding to left
      let multiplier = -1;
      if (isLeft) {
        multiplier = 1;
      }
      if (!this.props.isCircular) {
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
          className={`${className} ${s.icon}`}
          onClick={() => { this.onClick(isLeft); }}
        >
          <span />
        </div>
    );
  }

    componentWillUnmount() {
        if (this.props.autoplay) {
            clearInterval(this.interval);
        }
    }

  render() {
    const { circularItems, noOfSlidesShown, classNames: s, isCircular } = this.props;
    const sliderLength = circularItems.length;
      const leftVal = this.getLeft();
    const sliderTrackWidth = `${(sliderLength / noOfSlidesShown) * 100}%`;
    const { isAnimation, leftIndex } = this.state;
    const sliderActualLength = (sliderLength / noOfSlidesShown) - 1;
    let sliderTrackStyle = {
      width: sliderTrackWidth,
      left: `${leftIndex * -100}%`
    };
    if (isAnimation) {
      sliderTrackStyle = {
        ...sliderTrackStyle,
        transform: `translate3d(${this.translateLeft}%,0px,0px)`,
        transition: 'transform 0.7s ease-in-out'
      };
    }
    return (
        <div className={s.slider}>
          {
            (isCircular || this.state.leftIndex < sliderActualLength) &&
            this.renderButton({
              isLeft: false,
              className: classNames(s['slider-next'], s['slider-next-pos']),
              classNames: s
            })}
          {
            (isCircular || this.state.leftIndex > 0) &&
            this.renderButton({
              isLeft: true,
              className: classNames(s['slider-prev'], s['slider-prev-pos']),
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
    );
  }
}
Slider.propTypes = {
  circularItems: PropTypes.array,
  noOfSlidesShown: PropTypes.number,
  isCircular: PropTypes.bool,
  autoplay: PropTypes.bool,
  classNames: PropTypes.object,
  selectedIndex: PropTypes.number,
  onChangeHandler: PropTypes.func
};
Slider.defaultProps = {
  circularItems: [],
  noOfSlidesShown: 3,
  isCircular: false,
  autoplay: false,
  selectedIndex: 1,
  onChangeHandler: () => {}
};
export default Slider;
