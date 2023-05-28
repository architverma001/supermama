import React from 'react'
import Navbar from './Components/Navbar'
import Autotyping from './Components/Autotyping'
import IntroP from './pragnancy/IntroP'
import KnowPregnanacy from './pragnancy/KnowPregnanacy'
import Footer from './Footer'
function Mama() {
  const major = ()=>{}
  return (
    <div>
      <Navbar/>
      <div className='mama-intro'>
      <img className='mama-img' src='/img/pregnent.jpg'/>
      <h1 className='wel-mama'>Welcome to superm@ama</h1>
      <div className = 'web-mama'><Autotyping text = "A website to keep  mothers happy and healthy" /> </div>
      <IntroP/>
      <KnowPregnanacy/>
      </div>

      
    </div>
  )
}

export default Mama
