import './SecondHeroImg.css'
import React from 'react'

const SecondHeroImg = ({heading, text}) => {
  return (
    <div className="heroimgTwo">
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
    
  )
}

export default SecondHeroImg
