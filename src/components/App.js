
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
  Route
} from "react-router-dom";

function App() {

  const [store, setStore] = useState(initialStore);

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

  // find users, find comments, and find likes
  // given some post, fetch the user
  function findUser(post) {
    return store.users.filter(user => user.id === post.id)
  }

  // given some post, fetch the comments
  function findComments(post) {
      return store.comments.filter(comment => comment.postId === post.id)
  }

  // given some post, fetch the likes
  function findLikes(post) {
      let postLikes = store.likes.filter(like => like.postId === post.id);

      return {
          self: postLikes.some(like => like.userId === store.currentUserId),
          count: postLikes.length
      }
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
                  findUser={findUser}
                  findLikes={findLikes}
                  findComments={findComments}
            />
          </Route>

          {/* go to new post */}
          <Route path="/newpost">
            <NewPost 
              store={store}
              onPost={addPost}
            />
          </Route>

          {/* go to profile */}
          <Route path="/profile/:userId?">
            <Profile
              store={store}
              onLike={addLike}
              onUnlike={removeLike}
              findLikes={findLikes}
              findComments={findComments}
            />
          </Route>

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
                  findUser={findUser}
                  findLikes={findLikes}
                  findComments={findComments}
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
