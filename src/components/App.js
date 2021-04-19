
import {useState} from 'react';
// components
import Home from 'Home';
import Navbar from 'Navbar';
import NewPost from 'NewPost';
import Profile from 'Profile';
// import Login from 'Login';
import './App.css';

function App() {

  const [page, setPage] = useState("Home");
  
  function renderMain(page) {
    switch (page) {
      case "Home": return <Home />
      case "Profile": return <Profile />
      case "NewPost": return <NewPost />
      default: return <Home />
    }
  }
  return (
    <div className="App">
      {renderMain(page)}
      <Navbar />
    </div>
  );
}

export default App;
