import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Route/Home'
import About from './Route/About'
import Stocks from './Route/Stocks'

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Stocks" element={<Stocks />} />
          <Route path="*" element={<p>There's nothing here!</p>}/>
        </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
