import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Checkout from './components/Checkout';
import Success from './components/Success';
import Canceled from './components/Canceled';
import NoMatch from './components/NoMatch';

import './css/normalize.css';
import './css/global.css';

function App() {
  return (
    <Router>
        <Switch>
           <Route exact path="/" component={Checkout}/>
           <Route exact path="/success" component={Success}/>
           <Route exact path="/canceled" component={Canceled}/>
           <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
