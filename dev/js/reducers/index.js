import {combineReducers} from 'redux';
import PostsReducer from "./PostsReducer";
import NewPostReducer from "./NewPostReducer";
import EditPostReducer from "./EditPostReducer";

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    posts: PostsReducer,
    newPost: NewPostReducer,
    editPost: EditPostReducer,
});

export default allReducers
