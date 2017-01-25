import React, {PropTypes, Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FileUpload.scss';
import {connect} from 'react-redux';
import cx from 'classnames';
import {getImages} from '../../selectors';
import {addImage} from '../../actions';


class FileUpload extends React.Component {
    constructor(props) {
        super(props);
    }

    readFile = (file) => {
        const fileReader = new FileReader();
        const {addImage} = this.props;
        fileReader.onload = (event) => {
            const str = event.target.result;
            addImage(str);
        };
        file && fileReader.readAsDataURL(file);
    };
    changeHandler = (e) => {
        const {multiple, typeRegex} = this.props;

        if (multiple) {
            const files = Array.from(e.target.files);
            files.forEach(file => {
                console.log(file.type);
                typeRegex.test(file.type) && this.readFile(file);
            });

        } else {
            const file = e.target.files[0];
            typeRegex.test(file.type) && this.readFile(file);
        }
    };

    render() {
        const {multiple} = this.props;
        return <div className={cx(s.container, s.wrap)}>

                <label htmlFor="file">file</label>
            <div className={s.button}>
                <span>Upload</span>
                <input
                    type='file'
                    id='file'
                    multiple={multiple}
                    className={s.file}
                    ref={(input) => {
                        this.input = input;
                    }}
                    onChange={this.changeHandler}/>
            </div>

        </div>
    }
}

FileUpload.propTypes = {
    multiple: PropTypes.bool,
    typeRegex: PropTypes.object
};

FileUpload.defaultProps = {
    multiple: true,
    typeRegex: /^image/
};
export default withStyles(s)(
    connect((state) => {}, {addImage})(FileUpload));
