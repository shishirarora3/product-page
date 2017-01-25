import React, {PropTypes, Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';
import s from './Input.scss';
import _ from 'lodash';
import cx from 'classnames';

class Input extends Component {
    state={value: this.props.value};
    changeHandler = (e) =>{
        this.setState({value: e.target.value});
    };
    render() {
        const {value} =  this.state;
        const { label, name } = this.props;
        return (<div className={cx({
            [s.container]:true,
            [s.filled]: value
        })}>

            <input type="text" id={name} name={name} value={value} onChange = {this.changeHandler}/>
            <label htmlFor={name}>{label}</label>
        </div>);
    }
};

Input.defaultProps = {
    changeHandler: ()=>{},
    value: '',
    label: 'input-label',
    name: 'input-label'
};

export default withStyles(s)(
    connect(() => {
        return {};
    }, {})(Input));
