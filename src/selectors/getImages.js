/**
 * Created by shishirarora on 25/01/17.
 */
import _ from 'lodash';
export const getImages = (state) => {
    const imageList = _.get(state, 'imageList');
    return {imageList};
};