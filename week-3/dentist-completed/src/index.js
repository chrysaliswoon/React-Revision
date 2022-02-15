import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Procedures from './routes/Procedures'
import Contact from './routes/Contact'
import Home from './routes/Home'

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App /> } >
      <Route path="/" element={<Home /> } />
      <Route path="procedures" element={<Procedures /> } />
      <Route path="contact" element={<Contact /> } />
    </Route>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
