import React, { useEffect } from 'react'
function ServicesCard(props) {

  return (
    <div className='card-service'>
      <span className='outer'>
        <img src = {props.img} className='card-img-service'/>
        </span>
        <span className='card-des-service'>
          <span className='card-head-service'>{props.head}</span>
          <span className='card-text-service'>{props.text}</span>
          <div>
           
          <span className='card-offer-cost'>${props.offer}</span>
          <span className='mrp'>Service charge:</span>
          <span className='card-main-cost'>${props.mrp}</span>
          </div>
        </span>
      
      
    </div>
  )
}

export default ServicesCard
