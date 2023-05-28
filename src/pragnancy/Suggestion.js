import React, { useEffect, useRef, useState } from 'react'
import WeekSugg from '../Components/WeekSugg'
import WeekSuggT from '../Components/WeekSuggT'
import { ref } from 'firebase/database';
import WeekSuggTh from '../Components/WeekSuggTh';
import ServicesCard from '../Allcards/ServicesCard'

function Suggestion() {
    const [num,setnum] = useState(null)
    const [adv,setadv] = useState(false)
    const[f,setf] = useState(false)
    const[s,sets] = useState(false)
    const[t,sett] = useState(false)
    const fref = useRef(null)


    useEffect(()=>{
        fref.current.scrollIntoView({ behavior: 'smooth' });
    },[adv])

    const handleNum = (e)=>{
      setnum(e.target.value)
    }

    const handleSubmit = (e)=>{
        if (!num || num > 40 || num < 1) {
            alert("Enter a duration between 1-40 weeks");
          } 
        else{
             if(num<14){
                setf(true)
                sets(false)
                sett(false)
                setadv(!adv)
             }

             if(num>=14 && num<=27){
                setf(false)
                sets(true)
                sett(false)
                setadv(!adv)
             }

             if(num>27 ){
                setf(false)
                sets(false)
                sett(true)
                setadv(!adv)
             }
            
        }


    }
    return (
        <div>
        <div className='basic-main'>
          <h3>Suggestion based on pregnancy week</h3>
          <div className='sugg'><span style={{fontWeight:'610',fontSize:"24px"}}>Enter your pregnancy week</span>
          <label className="label">
            Your pregnancy week:
            <input
              type="number"
              min={1}
              max={40}
              id="num"
              name="period-duration"
              onChange={handleNum}
              required
              placeholder="between 1-40 weeks"
              value={num || ''}
            />
          </label>

        <button className='btn held' onClick={handleSubmit}>Submit</button>

          </div>
          <div ref = {fref}>
          {f && <WeekSugg/>}
          { s &&<WeekSuggT/>}
          {t && <WeekSuggTh/>}
        
          </div>
        </div>
      </div>
      )
}

export default Suggestion
