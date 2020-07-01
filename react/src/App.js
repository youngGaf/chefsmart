import React from 'react';
import './App.css';
import Wordmark from './components/Wordmark.js';
import SearchBar from "./components/SearchBar.js";
import Navbar from "./components/Navbar.js"
import RecipeCards from "./components/RecipeCards.js"
import SearchTags from "./components/SearchTags.js"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHeart, faTimes)


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Wordmark/> 
        <SearchBar/>
        <SearchTags />  
        <RecipeCards />
    </div>
  );
}

export default App;
