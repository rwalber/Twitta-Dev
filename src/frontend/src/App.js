import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Timeline from './pages/Timeline';

import './styles/Global.css';

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        
        <Switch>

          <Route path="/" exact component={ Login } />
          <Route path="/timeline" component={ Timeline } />

        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;