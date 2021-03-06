import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {saveNewPost,cancelNewPost} from "../actions/index";
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class NewPostDialog extends Component {
    constructor(){
        super();
        this.state = {
            empty: true,
            newPost: ""
        }
    }

    validate(e){
        if(e.target.value.length < 1)
            this.setState({
                empty: true,
                newPost: e.target.value
            });
        else
            this.setState({
                empty: false,
                newPost: e.target.value
            });
    }

    render() {
        console.log(this.props.newPost);
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={() => {
                    this.setState({ empty: true, newPost:"" });
                    this.props.cancelNewPost();
                }}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={() => {
                    this.props.saveNewPost(this.state.newPost)
                    this.setState({
                        newPost: "",
                        empty: true,
                    })
                }}
                disabled={this.state.empty}
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
                    <TextField
                        ref="textInput"
                        hintText="New Post"
                        onChange={this.validate.bind(this)}
                        value={this.state.newPost}
                    />
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