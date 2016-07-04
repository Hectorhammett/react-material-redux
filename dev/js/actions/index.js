import axios from "axios";

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const newPostClicked = function(){
    console.log("You clicked the new post button");
    return{
        type: "NEW_BUTTON_CLICKED"
    }
}

export const savingNewPost = function(){
    console.log("You saved the new post");
    return{
        type: "SAVE_NEW_POST",
    }
}

export const savedNewPost = function(post){
    return{
        type: "SAVED_NEW_POST",
        payload: post
    }
}

export const errorSavingPost = function(err){
    return{
        type: "ERROR_SAVING_POST",
        payload: err
    }
}

export const cancelNewPost = function(){
    console.log("you clicked the cancel button");
    return{
        type: "CANCEL_NEW_POST"
    }
}

export const startFetching = function(){
    console.log("Fetching Posts");
    return {
        type: "IS_FETCHING"
    }
}

export const endedFetching = (posts) => {
    return {
        type: "IS_FETCHED",
        payload: posts
    }
}

export const fetchError = function(err){
    console.log("Error fetching", err);
    return {
        type: "IS_FETCH_ERROR",
        payload: err
    }
}


export const deletingPost = function(){
    return {
        type: "DELETING_POST"
    }    
}

export const deletedPost = function(){
    return {
        type: "DELETED_POST"
    }
}

export const deleteError = function(error){
    return{
        type: "ERROR_DELETING",
        payload: error
    }
}

export const updateKeyPressed = function(value){
    return{
        type: "EDIT_KEY_PRESSED",
        payload: value
    }
}

export const updatePostClicked = function(post){
    return{
        type: "EDIT_POST_CLICKED",
        payload: post
    }
}

export const cancelUpdatePost =  function(){
    return{
        type: "CANCEL_UPDATE_POST"
    }
}

export const updatingPost = function(post){
    return{
        type: "UPDATING_POST",
        payload: post,
    }
}

export const updatedPost = function(){
    return{
        type: "UPDATED_POST"
    }
}

export const updatePost = function(post){
    return function(dispatch){
        dispatch(updatingPost());
        return axios.put("http://jsonplaceholder.typicode.com/posts/" + post.postId,{
            data: {
                body: post.text
            }
        })
        .then(function(response){
            dispatch(updatedPost())
        })
    }
}

export const saveNewPost = function(text){
    return function(dispatch){
        dispatch(savingNewPost());
        return axios.post('http://jsonplaceholder.typicode.com/posts',{
           data:{
                title: 'New Data',
                body: text,
                userId: 1
           }
        }).then(function(response){
            var post = {
                id: response.data.id,
                body: response.data.data.body
            }
            console.log("testfdasdfsdaf",post);
            dispatch(savedNewPost(post))
        })
        .catch(function(err){
            dispatch(errorSavingPost(err));
        })
    }
}

export const fetchPosts = function(){
    return function(dispatch){
        dispatch(startFetching());
        return axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(function(response){
            dispatch(endedFetching(response.data));
        })
        .catch(function(err){
            dispatch(fetchError(err));
        })
    }
}

export const deletePost = function(post){
    return function(dispatch){
        dispatch(deletingPost());
        return axios.delete('http://jsonplaceholder.typicode.com/posts/' + post)
        .then(function(){
            dispatch(deletedPost());
            dispatch(startFetching());
            return axios.get('http://jsonplaceholder.typicode.com/posts');
        })
        .then(function(response){
            response.data.splice(post-1,1);
            console.log(response.data)
            dispatch(endedFetching(response.data));
        })
        .catch(function(err){
            dispatch(fecthError(err));
        })
    }
}