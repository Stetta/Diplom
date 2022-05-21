import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
// import { BrowserRouter, Route } from 'react-router-dom';
import AppRoute from './components/AppRoute';


function App() {

  return (
    <div className="App">
      <Header/>
      
      {/* <section class="sectionclass">
      </section> */}
      <AppRoute/>

      <Footer/>
    </div>
  );
}

export default App;
