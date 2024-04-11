'use client'
import React from 'react'
import img1 from '../img/img2.jpg'
import img2 from '../img/img3.jpg'
import img3 from '../img/img4.jpg'
import img4 from '../img/img5.jpg'
import img5 from '../img/img6.jpg'
import img6 from '../img/img7.jpg'
import img7 from '../img/img8.jpg'
import img8 from '../img/img9.jpg'

const Body = () => {
  return (
    <div className='body'>
      <h1 className='body_h1'>figma's 🕸 Collection 🎆 of <span className='span_h1'>layers</span> 🎇 and ✨ <span className='span_h1'>components</span> for you and your friends</h1>
      <div className='body_grid'>
        <div className='body_img'><img src={img1} alt="..." /> <p className='body_p'>cloth type <span>$20</span></p></div>
        <div className='body_img'><img src={img2} alt="..." /> <p className='body_p'>cloth type <span>$20</span></p></div>
        <div className='body_img'><img src={img3} alt="..." /> <p className='body_p'>cloth type <span>$20</span></p></div>
        <div className='body_img'><img src={img4} alt="..." /> <p className='body_p'>cloth type <span>$20</span></p></div>
        <div className='body_img'><img src={img5} alt="..." /> <p className='body_p'>cloth type <span>$20</span></p></div>
        <div className='body_img'><img src={img6} alt="..." /> <p className='body_p'>cloth type <span>$20</span></p></div>
        <div className='body_img'><img src={img7} alt="..." /> <p className='body_p'>cloth type <span>$20</span></p></div>
        <div className='body_img'><img src={img8} alt="..." /> <p className='body_p'>cloth type <span>$20</span></p></div>
        <div className='body_img'><img src={img1} alt="..." /> <p className='body_p'>cloth type <span>$20</span></p></div>
        <div className='body_img'><img src={img2} alt="..." /> <p className='body_p'>cloth type <span>$20</span></p></div>
        <div className='body_img'><img src={img3} alt="..." /> <p className='body_p'>cloth type <span>$20</span></p></div>
        <div className='body_img'><img src={img4} alt="..." /> <p className='body_p'>cloth type <span>$20</span></p></div>
      </div>
    </div>
  )
}

export default Body
