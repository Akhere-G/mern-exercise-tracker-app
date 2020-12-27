import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  ExerciseList,
  EditExercise,
  CreateExercise,
  CreateUser,
  Error,
} from "./components";
function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar className='mb-2' />
        <main className='mt-3'>
          <Switch>
            <Route path='/' exact component={ExerciseList} />
            <Route path='/edit/:id' exact component={EditExercise} />
            <Route path='/create' exact component={CreateExercise} />
            <Route path='/user' exact component={CreateUser} />
            <Route path='*' component={Error} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
