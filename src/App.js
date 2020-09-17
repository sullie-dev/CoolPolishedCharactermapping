import React from 'react';
import './App.css';
import ListCards from './ListCards'
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
      <Route
          exact
          path="/"
          render={() => <h1>HomePage</h1>}
        />
        <Route
          exact
          path="/:id"
          component={ListCards}
          />
        </Switch>
    </div>
  );
}

export default App;
