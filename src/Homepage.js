import React from 'react'
import { signInWithGoogle } from "./Firebase";
import { BrowserRouter as Router,Routes, Route,Link } from "react-router-dom";
import love from './love.png'
import academics from './academics.png'
import successful from './successful.png'
import './Homepage.css'
function Homepage() {
    const cardStyles = {
      
        // width:'15em',
        // backgroundIimage: 'linear-gradient(to bottom right, yellow, orange)',
        // color: 'black', // Set text color to white for better visibility on the gradient background
        // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow
        width:'15em',
       
  border: '0.65px solid rgba(255, 255, 255, 0.12)',
  background: 'rgba(255, 255, 255, 0.08)',
  color:'white',
  padding:'4em'
      };
  return (
    <div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<div class="sections">

<div class="section1">

<h1 style={{fontSize:'35px'}}>Read your Future 
  <br></br>
  with AI Astrologer
  <br></br>
</h1>
<h1>
AI ज्योतिषी से अपना प्रश्न पूछें
</h1>

</div>
<div class="section2"> 

{localStorage.getItem('email')?<Link to="/chat"><button style={{backgroundColor:'orange', width:'20em',height:'3em',borderRadius:'3em'}}>Get Started</button></Link>:<button style={{backgroundColor:'orange', width:'20em',height:'3em',borderRadius:'3em'}} onClick={signInWithGoogle}>Get Started</button>}


</div>
</div>
<br></br>
<div class="cards">

<div style={cardStyles}>
    <img style={{width:'15em'}} src={academics}/>

    <br></br> <br></br>
      
      Know how well would you perform in academics 
    </div>

<div style={cardStyles}>
    <img style={{width:'15em'}} src={love}/>

    <br></br> <br></br>
      
      Know about your love life 
    </div>
   
    <div style={cardStyles}>
    <img style={{width:'15em'}} src={successful}/>

    <br></br> <br></br>
      Know how much successful you will be
    </div>
    
    </div>
</div>
  )
}

export default Homepage