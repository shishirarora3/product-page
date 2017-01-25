import React, {PropTypes, Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FileUpload.scss';
import {connect} from 'react-redux';
import cx from 'classnames'
class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imageList: ''};
    }

    readFile = (file) => {
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            const str = event.target.result;
            this.setState({imageList: [...this.state.imageList, str]});
        };
        file && fileReader.readAsDataURL(file);
    };
    changeHandler = (e) => {
        const {multiple, typeRegex} = this.props;
        const {imageList} = this.state;

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
        const {imageList} = this.state;
        const {multiple} = this.props;
        return <div className={cx(s.container, s.wrap)}>

                <label htmlFor="file">file</label>
            <div className={s.fileContainer}>
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
            <ul className={s.imagesContainer}>
                {
                    imageList && imageList.map((imgSrc, i) => <li key={i}>
                        <img
                            role='presentation'
                            src={imgSrc}/>
                    </li>)
                }
            </ul>
        </div>
    }
}

FileUpload.propTypes = {};

export default withStyles(s)(
    connect(() => {
        return {};
    }, {})(FileUpload));
