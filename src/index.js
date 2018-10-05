import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.js';


function App() {
  return (
    <NavBar/>
  );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );