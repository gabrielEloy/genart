import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NewProject from './routes/NewProject';

const App = () => (
  <Router>
    <Switch>
      <Route path='/'>
        <NewProject />
      </Route>
    </Switch>
  </Router>
)



export default App;
