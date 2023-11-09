import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListarEstudiantes from './components/ListarEstudiantes';

function App() {
  return (
    <div>
      <HeaderComponent /> 
      <ToastContainer
        position='top-center' />
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" component={HomeComponent}></Route>
            <Route exact path="/estudiante" component={ListarEstudiantes}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
