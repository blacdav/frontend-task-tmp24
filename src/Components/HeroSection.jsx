import React from 'react'
import img from '../img/img5.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'

const HeroSection = () => {
  return (
    <div>
      <div className='hero_div'>
        <img src={img} alt="..." className='hero1' />
        <img src={img2} alt="..." className='hero2' />
        <img src={img3} alt="..." className='hero3' />
        <img src={img} alt="..." className='hero4' />
      </div>
    </div>
  )
}

export default HeroSection
