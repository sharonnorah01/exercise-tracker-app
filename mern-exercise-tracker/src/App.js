import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { Route, Switch} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'

//IMPORT ALL COMPONENTS
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import EditExercise from './components/EditExercise'; 
import CreateExercise from './components/CreateExercise';
import ExercisesList from './components/ExerciseList';

function App() {
  return (
    <Router>
      <div className = 'container'>
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit:id" component={EditExercise} />
      <Route path='/create' component={CreateExercise} />
        <Route path='/user' component={CreateUser} />
        </div>
    </Router>
  );
}

export default App;
