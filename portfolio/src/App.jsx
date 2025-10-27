import React from 'react';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import { Routes,Route } from 'react-router-dom';
import Resumepage from './components/Resumepage';
import Home from './components/Home';
import Navbar from './components/Section1/Navbar';
const App = () => {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/resume' element={<Resumepage />} />
    </Routes>
    </>
  );
}

export default App;
