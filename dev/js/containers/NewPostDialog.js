import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {saveNewPost} from "../actions/index";
import {cancelNewPost} from "../actions/index";
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class NewPostDialog extends Component {

    render() {
        console.log(this.props.newPost);
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.props.cancelNewPost}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.props.cancelNewPost}
            />,
        ];
        return (
            <div>
                <Dialog
                title="New Post"
                actions={actions}
                modal={false}
                open={this.props.newPost.newPost}
                onRequestClose={this.handleClose}
                >
                    The actions in this window were passed in as an array of React objects.
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        newPost: state.newPost
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        saveNewPost: saveNewPost,
        cancelNewPost: cancelNewPost
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NewPostDialog);