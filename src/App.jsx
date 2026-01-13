import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navigator  from './Components/Navigator'
import Hero from './Components/Hero.jsx';
import Introduction from './Components/Introduction.jsx';
import Profile from './Components/Profile.jsx';
import Solution from './Components/Solution.jsx'
import Service from './Components/Service.jsx'

function App() {

  return(
    <div className={"w-full"}>
      <Navigator/>
      <div className={"w-full"}>
        <Hero/>
        <Introduction/>
        <Profile/>
        <Solution/>
        <Service/>
      </div>
    </div>
    
    
  )
}

export default App
