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

export const saveNewPost = (post) => {
    console.log("You saved the new post");
    return{
        type: "SAVE_NEW_POST",
        payload: post
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