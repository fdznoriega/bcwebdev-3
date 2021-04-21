
// react
import {useState} from 'react';
// components
import Home from './Home';
import Navbar from './Navbar';
import NewPost from './NewPost';
import Profile from './Profile';
// import Login from 'Login';
import './App.css';
// data from the initial store
import initialStore from '../utils/initialStore';
// utils
import uniqueId from '../utils/uniqueId';


function App() {

  const [page, setPage] = useState("Home");
  const [store, setStore] = useState(initialStore);

  // functions to manage data:
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
  function addPost(title, body, category) {
    const post = {
      id: uniqueId("post"),
      userId: store.currentUserId,
      title: title,
      body: body,
      category: category,
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
    setPage("Home");
  }
  
  function renderMain(p) {
    switch (p) {
      case "Home": return <Home store={store}
                                onLike={addLike}
                                onUnlike={removeLike}
                                onComment={addComment}
                          />
      case "Profile": return <Profile store={store} />
      case "NewPost": return <NewPost 
                                store={store} 
                                onPost={addPost}
                                onPostCancel={cancelPost}
                                />
      default: return <Home store={store}
                            onLike={addLike}
                            onUnlike={removeLike}
                            onComment={addComment}
                      />
    }
  }
  return (
    <div className="App">
      {renderMain(page)}
      <Navbar onNavChange={setPage}/>
    </div>
  );
}

export default App;
