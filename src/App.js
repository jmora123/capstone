import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Importamos el enrutador
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="header-nav-container">
        <Header />
        <Nav />
      </div>
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;