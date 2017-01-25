import React, {PropTypes, Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';
import s from './Input.scss';

class Input extends Component {
    state={value: this.props.value};
    changeHandler = (e) =>{
        this.setState({value: e.target.value});
    };
    render() {
        const {value} =  this.state;
        const { label, name } = this.props;
        return (<div className={s.container}>
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} name={name} value={value} onChange = {this.changeHandler}/>
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
