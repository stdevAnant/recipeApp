import React from 'react';
import {Switch,Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './components/homeScreen'
import Category from './components/categoryScreen'
import Recipes from './components/recipeScreen'
import Procedure from './components/procedureScreen'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/category" component={Category}></Route>
        <Route exact path="/recipe" component={Recipes}></Route>
        <Route exact path="/procedure" component={Procedure}></Route>

      </header>
    </div>
  );
}

export default App;
