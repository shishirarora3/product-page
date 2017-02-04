/* this is a dummy component just for importing global css */

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Container.scss';

const Container = (props) => (
  props.children
);

export default withStyles(s)(Container);
