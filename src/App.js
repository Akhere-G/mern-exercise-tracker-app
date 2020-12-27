import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  ExerciseList,
  EditExercise,
  CreateExercise,
  CreateUser,
} from "./components";
function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ExerciseList} />
          <Route path='/edit:id' exact component={EditExercise} />
          <Route path='/create' exact component={CreateExercise} />
          <Route path='/user' exact component={CreateUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
