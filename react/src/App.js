import React from 'react';
import './App.css';
import Wordmark from './components/Wordmark.js';
import SearchBar from "./components/SearchBar.js";
import SaveFeature from "./components/SaveFeature.js"
import Login from "./components/Login.js"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHeart)


function App() {
  return (
    <div className="App">
        <Login/>
        <SaveFeature />
        <Wordmark/> 
        <SearchBar/> 
    </div>
  );
}

export default App;
