import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import Register from './pages/Register';

import './styles/Global.css';

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        
        <Switch>

          <Route path="/" exact component = { Login } />
          <Route path="/timeline" component = { Timeline } />
          <Route path="/register" component = { Register } />

        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;