import React, {PropTypes, Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';
import s from './FormBuilder.scss';
import FileUpload from '../FileUpload';
import Input from '../Input';
import ImagesContainer from '../ImagesContainer';

const FormBuilder = (props) =>
    (<form
        className = {s.container}
        {...props}
        encType="multipart/form-data">
        <Input name="user_id" label="user id"/>
        <Input name="user_name" label="user name"/>
        <FileUpload
            multiple={true}
            typeRegex={/^image/}
        />
        <ImagesContainer/>
        <button type='submit'>submit</button>

    </form>);

FormBuilder.proptypes = {
    action: PropTypes.string,
    method: PropTypes.string
};

FormBuilder.defaultProps = {
    action: "http://localhost:8000",
    method: "post"
};

export default withStyles(s)(
    connect(() => {
        return {};
    }, {})(FormBuilder));
