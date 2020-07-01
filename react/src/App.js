import React from 'react';
import './App.css';
import Wordmark from './components/Wordmark.js';
import SearchBar from "./components/SearchBar.js";
import Navbar from "./components/Navbar.js"
import RecipeCards from "./components/RecipeCards.js"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHeart)


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Wordmark/> 
        <SearchBar/> 
        <RecipeCards />
    </div>
  );
}

export default App;
