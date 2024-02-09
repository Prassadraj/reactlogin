import React from 'react';
import Login from './component/Login';
import './App.css'
import Home from './component/Home'
import Register from './component/Register'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
