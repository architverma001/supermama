import React from 'react'

function Card(props) {
  return (
    <div className='super'>
      <div className='card-main'>
        <h3 className='card-head'>{props.head}</h3>
        <img src = {props.img} className='img-card'/>
        <span className='card-txt'>{props.text}</span>

      </div>
    </div>
  )
}

export default Card
