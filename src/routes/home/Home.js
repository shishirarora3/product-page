import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import history from '../../core/history';
import FileUploader from '../../components/FileUploader';

class Home extends Component { // eslint-disable-line react/prefer-stateless-function

    constructor(props, context) {
        super(props);
    }


    state = {
        files: []
    };

    onDrop=acceptedFiles => {
        this.setState({
            files: acceptedFiles
        });
    };

    onOpenClick=() => {
        this.dropzone.open();
    };


    render() {

        return (
            <div>
                <div>
                    <FileUploader ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
                        <div>Try dropping some files here, or click to select files to upload.</div>
                    </FileUploader>
                    <button type="button" onClick={this.onOpenClick}>
                        Open FileUploader
                    </button>
                    {this.state.files.length > 0 ? <div>
                            <h2>Uploading {this.state.files.length} files...</h2>
                            <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
                        </div> : null}
                </div>
            </div>
        );
    }

}

Home.propTypes = {
    data: PropTypes.object
};

Home.contextTypes = {};

export default withStyles(s)(Home);
