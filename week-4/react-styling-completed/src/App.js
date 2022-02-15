import React from "react";
import "./styles.css";
import AllStyles from './AllStyles'
import StandardCss from './StandardCss'
import InlineStyle from './InlineStyles'
import Module from './Modules'
import StyledComponents from './StyledComponents'
import Navigation from './Navigation'
import {Route, Routes} from 'react-router-dom'


export default function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<AllStyles />} />
        <Route path='/standard' element={<StandardCss />} />
        <Route path='/inline' element={<InlineStyle />} />
        <Route path='/module' element={<Module />} />
        <Route path='/styled-components' component={<StyledComponents />} />
      </Routes>
      <p>Instructor may add two more buttons for Secondary and Success</p>
    </>
  );
}
