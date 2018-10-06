import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.js';
import Home from './views/Home.js';
import Feed from './views/feed.js';
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => (
  <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <Route path="/Feed" component={Feed}/>
      </div>
      <div>
        <Route exact path="/" component={Home}/>
      </div>
  </div>
)

ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>),
    document.getElementById('root')
  );