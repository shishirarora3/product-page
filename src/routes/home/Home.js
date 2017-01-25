import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import FormBuilder from '../../components/FormBuilder';

class Home extends Component { // eslint-disable-line react/prefer-stateless-function




    render() {

        return (
            <FormBuilder/>
        );
    }

}


Home.contextTypes = {};

export default withStyles(s)(Home);
