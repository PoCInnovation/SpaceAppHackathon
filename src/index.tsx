import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Sources from './pages/Sources';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/sources" component={Sources} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
