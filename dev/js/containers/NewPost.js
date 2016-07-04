import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {newPostClicked} from '../actions/index'
import RaisedButton from 'material-ui/RaisedButton';


class NewPost extends Component {

    handleClick(){
        alert("Hallo");
    }

    render() {
        return (
            <ul>
                <RaisedButton label="New Post" onClick={this.props.newPostClicked}/>
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({newPostClicked: newPostClicked}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(NewPost);
