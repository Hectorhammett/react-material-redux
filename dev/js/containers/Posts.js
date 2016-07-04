import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPosts, deletePost} from '../actions/index';
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
                        <RaisedButton label="Delete Post" secondary={true} onClick={this.props.deletePost} onClick={() => this.props.deletePost(post.id)}/>
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

    click(){
        alert("Clickety!");
    }

    renderDelete(){
        if(this.props.posts.posts.length > 0)
            return(
                <RaisedButton label="Delete Selected"/>
            )
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
                {this.renderDelete()}
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
        deletePost: deletePost
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Posts);