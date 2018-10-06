import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.js';
import Home from './views/Home.js';
import Feed from './views/feed.js';
import CreatePost from './components/CreatePost.js'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import InvalidPage from './views/404.js'

const App = () => (
  <div>
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route path="/Feed" component={Feed}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/CreatePost" component={CreatePost}/>
            <Route component={InvalidPage} status={404}/>
          </Switch>
          </div>
      </Router>
  </div>
)

ReactDOM.render((
    <Router>
      <App />
    </Router>),
    document.getElementById('root')
  );