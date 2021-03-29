import './App.css';
import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home'
import Default from './pages/Default'
import Recipes from './pages/Recipes'
import SingleRecipe from './pages/SingleRecipe'
import RecipeCategory from './pages/RecipeCategory'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Navbar from './components/Navbar'




class App extends Component { 
  render() { 
    return (
      <Router>
        <main>
          <Navbar /> 
          <Switch> 
              <Route path="/" exact component={Home} />
              <Route path="/recipes" exact component={Recipes} />
              <Route path="/recipes/:id"  component={SingleRecipe} />
              <Route path="/recipescategory/:category" component={RecipeCategory} />
              <Route path="*" component={Default} />
          </Switch>
        </main>
      </Router>
    );
  }
}


export default App;
