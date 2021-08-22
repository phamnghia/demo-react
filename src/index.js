import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './assets/styles/index.css';

import Home from './pages/Home';
import MainLayout from './pages/layout';

// Context
import AppContext from './context';
import LeadIndex from './pages/lead';
import LeadProcessingIndex from './pages/processing';

function App() {
  const [title, setTitle] = useState();
  const [activeMenu, setActiveMenu] = useState();

  return (
    <AppContext.Provider value={{title, setTitle: (value) => setTitle(value), activeMenu, setActiveMenu}}>
      <MainLayout>
        <Switch>
          <Route path="/lead">
            <LeadIndex />
          </Route>
          <Route path="/processing">
            <LeadProcessingIndex />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MainLayout>
    </AppContext.Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// reportWebVitals();
