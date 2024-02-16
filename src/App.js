import "./App.css";
import { signInWithGoogle } from "./Firebase";
import astro from './astro.png'
import logo from './logo.png'
import love from './love.png'
import Homepage from "./Homepage";
import Chat from "./Chat";
import Privacy from "./Privacy"
import About from "./About"
import { BrowserRouter as Router,Routes, Route,Link } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{color:'white'}}>
      
      <Router>
    <div class="navbar">

    <div class="nav">
        <div class="logo" ><img style={{width:'5em', marginTop:'-1em',marginLeft:'-4em'}} src={logo}/> </div>
        <div class="contents">

          <div style={{paddingRight:'5em'}}><Link style={{color:'white'}} to="privacy">Privacy</Link></div>
          
          <div><Link style={{color:'white'}} to="about">About</Link></div>
        </div>
        
        
        

         </div>
         
        
         {localStorage.getItem('email') ? <div style={{paddingTop:'1em'}}><img style={{borderRadius:'50%', width:'3em'}} src={localStorage.getItem("profilePic")} /></div>:<div style={{paddingTop:'2em'}}><button style={{backgroundColor:'white',height:'3em',borderRadius:'2em'}}  onClick={signInWithGoogle}>
        Sign Up
      </button></div>}
      
      
    </div>
    
  
   
    <Routes>

   <Route path="/" element={<Homepage/>} />
   <Route path="chat" element={<Chat/>} />
   <Route path="privacy" element={<Privacy/>} />
   <Route path="about" element={<About/>} />
   </Routes>
   </Router>
      
      {/* <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} /> */}

      All rights reserved @FutureBaba
      <br></br>
      <br></br>
      </div>
  );
}

export default App;