import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './home';
import PropertyDescription from './propertydescription';
import {BrowserRouter,Route} from "react-router-dom";

const app = (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/propertyDescription/:id" component={PropertyDescription}  />
        </div>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
