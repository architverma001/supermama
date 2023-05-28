import React from 'react'
import { useNavigate } from 'react-router-dom'

function Basics() {
    const navigate = useNavigate()
    const handlehome = ()=>{
        
        navigate('/mama')
    }
  return (
    <div>
      <div className='basic-main'>
        <h3>Start with the pregnancy basics</h3>
        <ul className='basic-ul'>
            <li><span style={{fontWeight:"bold"}}>Calculate your baby's due date.</span> Estimate the expected arrival date of your baby effortlessly with our convenient due date calculator on our <span className='home-basic' onClick={handlehome}>home page</span>. No need for manual calculations - simply rely on our tool. It not only provides you with the anticipated due date you'll eagerly await throughout your pregnancy, but also offers a personalized calendar highlighting important milestones like hearing your baby's heartbeat and finding out the baby's gender.</li>

            <li><span style={{fontWeight:"bold"}}>Choose a doctor or midwife.</span>  In the upcoming months, you will be regularly visiting your chosen healthcare provider, whether it's an obstetrician, family physician, or midwife. It is crucial to find a suitable healthcare professional for your needs. Once you have made your decision, take the important step of scheduling your initial prenatal appointment to ensure a healthy start to your pregnancy. Typically, prenatal care providers schedule this visit when you are at least 8 weeks pregnant.</li>


            <li><span style={{fontWeight:"bold"}}>Decide when to announce your pregnancy.</span>The timing of when women choose to announce their pregnancy varies. Some prefer to wait until after the first trimester when the risk of miscarriage decreases, while others announce it immediately. Factors like concerns about workplace treatment or wanting understanding from colleagues may influence when to inform co-workers or bosses. Additionally, the method of sharing the news can vary, whether it's through in-person conversations, phone calls, written messages, or creative announcements like pictures or videos. It's important to make this decision together as a couple to avoid any miscommunication, ensuring that both partners are on the same page regarding sharing the news with others.</li>
            
        </ul>
      </div>
    </div>
  )
}

export default Basics
