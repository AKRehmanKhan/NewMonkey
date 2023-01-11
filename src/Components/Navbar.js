
import React from 'react';
import{Link} from "react-router-dom";

function Navbar (props)
{
   let {mode,title,hm,fun}=props;
  
   return (
  
    <div style={(mode==='light')?{ zIndex:"5",height: '60px', width: '100%', position: 'fixed', top:"0px", backgroundColor: 'black', border:"2px solid rgb(47, 128, 241)"}:{zIndex:"5",height: '60px', width: '100%', position: 'fixed', top:"0px", backgroundColor: 'gray', border:"2px solid rgb(47, 128, 241)"}}>
    <h4 id='title'>{title}</h4>
    <Link to="/" id='home' >{hm}</Link>
    <Link to="/Business"      style={{position: 'absolute', fontSize:'14px', left: '230px' , top: '18px',  color: 'white',textDecoration:'none'}}> Business</Link> 
    <Link to="/Entertainment" style={{position: 'absolute', fontSize:'14px', left: '295px' , top: '18px',  color: 'white',textDecoration:'none'}}> Entertainment</Link>
    <Link to="/Health"        style={{position: 'absolute', fontSize:'14px', left: '395px' , top: '18px',  color: 'white',textDecoration:'none'}}> Health</Link>
    <Link to="/Science"       style={{position: 'absolute', fontSize:'14px', left: '450px' , top: '18px',  color: 'white',textDecoration:'none'}}> Science</Link>
    <Link to="/Sports"        style={{position: 'absolute', fontSize:'14px', left: '510px' , top: '18px',  color: 'white',textDecoration:'none'}}> Sports</Link>
    <Link to="/Technology"    style={{position: 'absolute', fontSize:'14px', left: '560px' , top: '18px',  color: 'white',textDecoration:'none'}}> Technology</Link>

    <h6 style={{color:'white' ,position:'absolute',right:'26%', top:'18px'}}>Dark Mode</h6>
    <label className="switch">
    <input type="checkbox" onClick={fun}/>
    <span className="slider round"></span>
    </label> 
    

    <input id="seatxt" type="text" placeholder='Enter Querey'/>
    <button id="seabtn">search</button>  
    </div>
    );
  
}
export default Navbar;


  