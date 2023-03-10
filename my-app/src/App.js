import './App.css';

import React from 'react';
import { Suspense } from 'react';

import HomePages from "./pages/HomePage/HomePage";
import { Routes, Route } from 'react-router-dom';

import PrivateRouter from './utils/router/privateRouter';



import LoginPages from './pages/LoginPage/LoginPage';
import RegisterPages from './pages/RegisterPage/RegisterPages';

import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <div className="App">
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>

          <Route element={<PrivateRouter />} >
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<HomePages />} />
          </Route>

          <Route path="login" element={<LoginPages />} />
          <Route path="register" element={<RegisterPages />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
