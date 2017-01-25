import React, {PropTypes, Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';
import s from './ImagesContainer.scss';
import {getImages} from '../../selectors';
import _ from 'lodash';
import {removeImage} from '../../actions';
class ImagesContainer extends Component {
    render() {
        const {imageList, removeImage} = this.props;
        return (<ul className={s.imagesContainer}>
            {
                _.map(imageList, (imgSrc, i) => (<li key={i}>
                    <div
                        onClick={() => {
                            removeImage(imgSrc);
                        }}
                        className={s.cross}>x
                    </div>
                    <img
                        role='presentation'
                        src={imgSrc}/>
                </li>))
            }
        </ul>);
    }
}

ImagesContainer.propTypes = {
    imageList: PropTypes.array
};

ImagesContainer.defaultProps = {
    imageList: []
};

export default withStyles(s)(
    connect(
        state => getImages(state),
        {removeImage}
    )(ImagesContainer));
