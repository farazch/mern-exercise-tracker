import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import CreateExercise from "./components/create-exercise.component";

function App() {
  return (

    

    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<ExercisesList/>} />
          <Route path="/create" element={<CreateExercise/>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
