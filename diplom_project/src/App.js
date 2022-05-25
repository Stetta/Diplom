import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
// import { BrowserRouter, Route } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';


function App() {
  const {token, login, logout} = useAuth()
  const isAuth = !!localStorage.getItem('clientData')

  return (
    <AuthContext.Provider value={{
      token, login, logout, isAuth
    }}>
    <div className="App">
      <Header/>
      
      {/* <section class="sectionclass">
      </section> */}
      <AppRoute isAuth={isAuth}/>

      <Footer/>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
