import React from 'react';
import NewPost from "../containers/NewPost";
import Posts from "../containers/Posts";
import NewPostDialog from "../containers/NewPostDialog";
import UserDetails from '../containers/user-detail';
require('../../scss/style.scss');

const App = () => (
    <div>
       <NewPostDialog />
       <NewPost />
       <Posts />
    </div>
);

export default App;
