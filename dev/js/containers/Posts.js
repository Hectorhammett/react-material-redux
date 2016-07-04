import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPosts, deletePost, updatePostClicked} from '../actions/index';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

class Posts extends Component {
    renderPosts(){
        if(this.props.posts.posts.length > 0)
        return this.props.posts.posts.map((post) => {
            return (
               <TableRow key={post.id}>
                    <TableRowColumn>{post.id}</TableRowColumn>
                    <TableRowColumn>{post.body}</TableRowColumn>
                    <TableRowColumn>
                        <RaisedButton label="Update Post" primary={true}  disabled={this.props.posts.isUpdating} onClick={() => this.props.updatePostClicked(post)}/>
                        <RaisedButton label="Delete Post" secondary={true}  disabled={this.props.posts.isDeleting} onClick={() => this.props.deletePost(post.id)}/>
                    </TableRowColumn>
                </TableRow>
            );
        });
        else
        return (
               <TableRow>
                    <TableRowColumn>Withous Posts</TableRowColumn>
                    <TableRowColumn>Without Posts</TableRowColumn>
                    <TableRowColumn>Without Posts</TableRowColumn>
                </TableRow>
            );
    }

    render() {
        var text = (this.props.posts.isFetching) ? "Loading" : "Fetch Posts";
        return (
            <div>
                <Table selectable={false}>
                    <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Body</TableHeaderColumn>
                        <TableHeaderColumn>Options</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                     {this.renderPosts()}
                    </TableBody>
                </Table>
                <RaisedButton label={text} onClick={this.props.fetchPosts}/>
            </div>
        );
    }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchPosts: fetchPosts,
        deletePost: deletePost,
        updatePostClicked: updatePostClicked
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Posts);