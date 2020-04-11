import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./corona-search"
import 'pace-js'
import 'pace-js/themes/orange/pace-theme-minimal.css'


ReactDOM.render(
  <React.StrictMode>
    <Search />
  </React.StrictMode>,
  document.getElementById('root')
);
