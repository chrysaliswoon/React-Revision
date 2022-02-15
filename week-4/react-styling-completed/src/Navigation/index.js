import React from 'react';
import {Link} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Nav, NavItem, NavLink } from 'reactstrap';



export default function Navigation() {
  return (
    <div className='container'>
     <button><Link to='/'>All Styles</Link></button>
     <button><Link to='/standard'>Standard CSS</Link></button>
     <button><Link to='/inline'>Inline SS</Link></button>
     <button><Link to='/module'>Module</Link></button>
     <button><Link to='/styled-components'>Styled Components</Link></button>
    </div>
  );
}