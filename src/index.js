import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.js';
import Home from './views/Home.js';
import Feed from './views/feed.js';
import CreatePost from './components/CreatePost.js'
import Contact from './views/Contact.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import InvalidPage from './views/404.js'
import history from './history'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const navTheme = createMuiTheme({
  palette: {
    primary: {main: '#eb5c56'},
  },
});


const App = () => (
  <div>
      <Router>
        <div>
        <MuiThemeProvider theme={navTheme}>
          <NavBar/>
        </MuiThemeProvider>
          <Switch>
            <Route path="/Feed" component={Feed}/>
            <Route path="/Contact" component={Contact}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/CreatePost" component={CreatePost}/>
            <Route component={InvalidPage} status={404}/>
          </Switch>
          </div>
      </Router>
  </div>
)

ReactDOM.render((
    <Router history={history}>
      <App />
    </Router>),
    document.getElementById('root')
  );
