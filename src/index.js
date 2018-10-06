import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.js';
import Home from './views/Home.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: <Home/>,
      isHome: true,
    };
  }


  render() {      
    return (
      <div className="App">
        <div className="NavBar">
          <NavBar/>
        </div>
        <div className="Page">
          {this.state.currentPage}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );