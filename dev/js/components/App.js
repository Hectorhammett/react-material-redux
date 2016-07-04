import React from 'react';
import NewPost from "../containers/NewPost";
import Posts from "../containers/Posts";
import NewPostDialog from "../containers/NewPostDialog";
import EditPostDialog from '../containers/EditPostDialog';
require('../../scss/style.scss');

const App = () => (
    <div>
       <NewPostDialog />
       <EditPostDialog />
       <NewPost />
       <Posts />
    </div>
);

export default App;
