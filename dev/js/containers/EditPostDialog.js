import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updatePostClicked, cancelUpdatePost, updatePost, updateKeyPressed} from "../actions/index";
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class NewPostDialog extends Component {
    constructor(){
        super();
        this.state = {
            empty: true,
            text: ""
        }
    }

    validate(e){
        if(e.target.value.length < 1)
            this.setState({
                empty: true,
                text: e.target.value
            });
        else
            this.setState({
                empty: false,
                text: e.target.value
            });
    }

    render() {
        var text = this.props.editPost.post.body;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={() => {
                    this.setState({ empty: true, text:"" });
                    this.props.cancelUpdatePost();
                }}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={() => {
                    this.props.updatePost({
                        text: this.state.text,
                        postId: this.props.editPost.post.id
                    })
                    this.setState({
                        text: "",
                        empty: true,
                    })
                }}
                disabled={this.state.empty}
            />,
        ];
        return (
            <div>
                <Dialog
                title="Update Post"
                actions={actions}
                modal={false}
                open={this.props.editPost.newUpdate}
                onRequestClose={this.handleClose}
                defaultValue={text}
                >
                    <TextField
                        ref="textInput"
                        hintText="New Text"
                        value={this.state.text}
                        onChange={this.validate.bind(this)}
                    >
                    </TextField>
                    <hr/>
                    <h3>Previous Text</h3>
                    <TextField
                        ref="textInput"
                        hintText="New Text"
                        value={this.props.editPost.post.body}
                        disabled={true}
                    >
                    </TextField>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        editPost: state.editPost
    }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({
        cancelUpdatePost: cancelUpdatePost,
        updateKeyPressed: updateKeyPressed,
        updatePost: updatePost
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NewPostDialog);