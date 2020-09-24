import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './components/About';
import Landing from './components/Landing';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Landing></Landing>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/adoc" exact>
          <ProjectPage
            path="adoc"
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
