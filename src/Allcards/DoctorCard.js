import React from 'react'

function DoctorCard(props) {
  return (
    <div className='card-service'>
    <span className='outer'>
      <img src = {props.img} className='card-img-service'/>
      </span>
      <span className='card-des-service'>
        <span className='card-head-service'>{props.head}</span>
        <span className='card-text-service'>{props.text}</span>
        <div>
         
        <span className='Visiting-charge'>Visiting charge:</span>
        <span className='card-offer-cost'>${props.charge}</span>  
        </div>

        <div>
        <span className='Visiting-charge'>Phone number:</span>
        <span className='card-phone'>{props.phone}</span>
        </div>
      </span>
    
    
  </div>
  )
}

export default DoctorCard
