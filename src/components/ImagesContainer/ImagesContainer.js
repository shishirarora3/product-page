import React, {PropTypes, Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';
import s from './ImagesContainer.scss';
import {getImages} from '../../selectors';
import _ from 'lodash';
class ImagesContainer extends Component {

    render() {
        const {imageList} = this.props;
        return (<ul className={s.imagesContainer}>
            {
                _.map(imageList, (imgSrc, i) => (<li key={i}>
                    <img
                        role='presentation'
                        src={imgSrc}/>
                </li>))
            }
        </ul>);
    }
}

ImagesContainer.defaultProps = {
    imageList: PropTypes.array
};

ImagesContainer.defaultProps = {
    imageList: []
};

export default withStyles(s)(
    connect((state) => {
        const {imageList} = getImages(state);
        return {imageList};
    }, {})(ImagesContainer));
