import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer1'>
        <div className='pgrid'>
            <p className='grid1'>the</p>
            <p className='grid2'>footer</p>
            <p className='grid3'>store</p>
        </div>
        <div>
            <h1>Objects that Inspire.</h1>
            <div>
                <p>Privacy & Terms</p>
                <p>Contact Us</p>
            </div>
            <ul>
                <li>Figma</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
            </ul>
            <div>
                ⬆
            </div>
        </div>
      </div>
      <marquee behavior="scroll" direction="left">figma's marvelously considered collection of objects for our time on </marquee>
    </div>
  )
}

export default Footer
