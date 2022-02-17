import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// let counter = 1

// const refresh = () => {
//   ReactDOM.render(<App counter={counter} />, 
//   document.getElementById('root'))
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App counter = {counter}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);