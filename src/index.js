import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js';
import reportWebVitals from './reportWebVitals';
import data from "./data.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

/*   const cap = names.map(function(name){
      return name[0].toUpperCase() + name.slice(1)
}) */
console.log(data);


function Page()
{




  return (
    <div>
        <Navbar />
        <Hero />
      
        

    </div>



  )

}



root.render(<Page />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
