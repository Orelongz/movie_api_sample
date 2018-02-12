import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter  } from 'react-router-dom';
import Main from './components/Main.jsx';

ReactDOM.render(
  (<HashRouter >
    <Main />
  </HashRouter >),
  document.getElementById('App')
);
