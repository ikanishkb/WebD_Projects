import React, {Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Recipes" component={Recipes}/>
          <Route exact path="/Recipes/:id" component={SingleRecipe}/>
          <Route component={Default}/>
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
