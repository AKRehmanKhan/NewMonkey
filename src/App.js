
import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/news';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {

 
  const [mode, setmode] = useState("light");
  const [progress, setprogress] = useState(0);

  const setProgress=(prog)=>
  {
      setprogress(prog);

  }

  const ToggleMode=()=>
  {

    (mode==='dark')? setmode('light'):setmode("dark");
  }
 

   const apiKey = process.env.REACT_APP_API;
   

    return (
      <BrowserRouter>
        <div>

          <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setprogress(0)}/>
          <Navbar mode={mode} title="NewsMonkey" hm="Home" fun={ToggleMode}/>
            <Routes>
               <Route exact path="/"                element={<News progress={progress} setProgress={setProgress} mode={mode} key="general"        apiKey={apiKey} country="us" pageSize={20} category='general' />}/>
               <Route exact path="/Business"        element={<News progress={progress} setProgress={setProgress} mode={mode} key="nusiness"       apiKey={apiKey} country="us" pageSize={20} category='business' />}/>
               <Route exact path="/Health"          element={<News progress={progress} setProgress={setProgress} mode={mode} key="health"         apiKey={apiKey} country="us" pageSize={20} category='health' />}/>
               <Route exact path="/Science"         element={<News progress={progress} setProgress={setProgress} mode={mode} key="science"        apiKey={apiKey} country="us" pageSize={20} category='science' />}/>
               <Route exact path="/Sports"          element={<News progress={progress} setProgress={setProgress} mode={mode} key="sports"         apiKey={apiKey} country="us" pageSize={20} category='sports' />}/>
               <Route exact path="/Entertainment"   element={<News progress={progress} setProgress={setProgress} mode={mode} key="entertainment"  apiKey={apiKey} country="us" pageSize={20} category='entertainment' />}/>
               <Route exact path="/Technology"      element={<News progress={progress} setProgress={setProgress} mode={mode} key="technology"     apiKey={apiKey} country="us" pageSize={20} category='technology' />}/>
            </Routes>
        </div>
      </BrowserRouter>
    )
}

