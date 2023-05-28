import React from 'react'
import { useNavigate } from 'react-router-dom'

function IntroP() {
    const navigate = useNavigate()
    const handleclick = ()=>{
      navigate('/wtd')
    }
  return (
    <div className='into-main'>
    <div className='pregnant-what' onClick={handleclick}>
     <img src='/img/pragnant-what.png'/>
     <div><h5>Pregnant!what to do next?</h5>
     <p>Get answers to all of your pregnancy questions and learn what you can do before, during, and after pregnancy to give your baby a heathy start to life.</p>
     <span style={{fontWeight:'bolder',color:"red",textDecoration: 'underline'}}>Click to know</span>
     </div>
    </div>
    </div>
  )
}

export default IntroP
