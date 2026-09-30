//import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import BarreNavigation from './components/Barre de navigation/BarreNavigation';
import{Route,Routes}from 'react-router-dom'
import Footer from './components/footer/Footer';

function App() {


  return (
    <>
    <BarreNavigation link1="Home" link2="About me" link3="News" link4="skills"/> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About_Me' element={<AboutMe/>}/>
    </Routes>
    <Footer link1="Home" link2="News" link3="skills" link4="about me" logo={{sirname:'Sana',firstname:'tahirou'}} />
    </>
  )
}

export default App
