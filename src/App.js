import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Comments from './components/Comments/Comments';
function App() {
  return (
    <div>
      <Router> 
        <Switch> 
          <Route path="/home"> 
            <Home></Home>
          </Route>
          <Route exact path="/"> 
            <Home></Home>
          </Route>
          <Route path="/comments/:commentsId"> 
            <Comments/>
          </Route>
          <Route path="*"> 
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
