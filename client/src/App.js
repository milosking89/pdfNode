import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Controller from './Components/Controller';

const App = () => {

  return (
    <div>
      <Header></Header>
      <Controller></Controller>
      <Footer></Footer>
    </div>
  );
};

export default App;