import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostPage from "./pages/PostPage";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/posts">
            <PostsPage/>
          </Route>
          <Route path="/posts/:id">
            <PostPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
