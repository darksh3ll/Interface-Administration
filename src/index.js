import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter , Route, Switch} from "react-router-dom";
import Connexion from "./components/connexion/Connexion";
import Actualites from "./components/actualite/Actualites";


const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path ="/" component={Connexion}/>
            <Route exact path ="/index" component={App}/>
            <Route exact path ="/newActualite" component={Actualites}/>
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
