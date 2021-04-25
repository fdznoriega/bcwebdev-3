
// react
import {useState} from 'react';
// components
import Home from './Home';
import Navbar from './Navbar';
import NewPost from './NewPost';
import Profile from './Profile';
import Post from './Post';
// import Login from 'Login';
import './App.css';
// data from the initial store
import initialStore from '../utils/initialStore';
// utils
import uniqueId from '../utils/uniqueId';
// react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

// possible routing...
// sc.com/
// sc.com/post/
// sc.com/profile
// sc.com/profile/userId
// sc.com/category/water
// sc.com/category/housing
// sc.com/category/food
// sc.com/settings
// sc.com/login
// sc.com/newpost

function App() {

  const [store, setStore] = useState(initialStore);
  // const history = useHistory("/");

  // add like
  function addLike(postId) {

    // define like object
    const like = {
      userId: store.currentUserId,
      postId: postId,
      datetime: new Date().toISOString()
    }

    // append new like to store
    setStore({
      ...store,
      likes: store.likes.concat(like)
    })

  }

  // remove like
  function removeLike(postId) {

    // filter likes!
    setStore({
      ...store,
      likes: store.likes.filter(like => !(store.currentUserId === like.userId && like.postId === postId))
    })
  }

  // add post given a title, body, and category
  function addPost(title, body, cat) {
    const post = {
      id: uniqueId("post"),
      userId: store.currentUserId,
      title: title,
      body: body,
      category: cat,
      datetime: new Date().toISOString()
    }

    setStore({
      ...store,
      posts: store.posts.concat(post)
    })
  }

  // add comment
  function addComment(postId, text) {

    // create a new comment
    const comment = {
      userId: store.currentUserId,
      postId: postId,
      text: text,
      datetime: new Date().toISOString()
    };

    setStore({
      ...store,
      comments: store.comments.concat(comment)
    });
  }

  // cancel post
  function cancelPost() {
    console.log('cancel post todo')
  }

  return (
    <div className="App">
      {/* routing */}
      <Router basename={process.env.PUBLIC_URL}>
        {/* switch */}
        <Switch>
          
          {/* filter on a category */}
          <Route path="/category/:category?">
            <Home store={store}
                  onLike={addLike}
                  onUnlike={removeLike}
                  onComment={addComment}
            />
          </Route>
          
          {/* go to new post */}
          <Route path="/newpost"></Route>

          {/* go to profile */}
          <Route path="/profile/:userId?"></Route>

          {/* open a post */}
          <Route path="/post/:postId?">
            <Post
              store={store}
              onLike={addLike}
              onUnlike={removeLike}
              onComment={addComment}
            />
          </Route>

          {/* go to home */}
          <Route exact path="/">
            <Home store={store}
                  onLike={addLike}
                  onUnlike={removeLike}
                  onComment={addComment}
            />
          </Route>

        </Switch>

        {/* navbar */}
        <Navbar/>
      </Router>

      
      
    </div>
  );
}

export default App;
