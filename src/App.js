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

        {/* Projects routes */}
        <Route path="/adoc" exact>
          <ProjectPage
            path="adoc"
          />
        </Route>
        <Route path="/amazing" exact>
          <ProjectPage
            path="amazing"
          />
        </Route>
        <Route path="/boca-de-lobo" exact>
          <ProjectPage
            path="boca"
          />
        </Route>
        <Route path="/hope" exact>
          <ProjectPage
            path="hope"
          />
        </Route>
        <Route path="/olimpiadas" exact>
          <ProjectPage
            path="olimpiadas"
          />
        </Route>
        <Route path="/repartiendo" exact>
          <ProjectPage
            path="repartiendo"
          />
        </Route>
        <Route path="/santana" exact>
          <ProjectPage
            path="santana"
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
