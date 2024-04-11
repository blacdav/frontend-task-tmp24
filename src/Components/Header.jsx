'use client'
import React from 'react'
import search from '../img/search.svg'

const Header = () => {
  return (
    <main className='header' id='page'>
      <div className='header_btns'>
        <button>Shop</button>
        <button>About</button>
        <img src={search} alt="..." width={10} />
      </div>
      <h1>THE FIGMA STORE</h1>
      <div className='header_btn'>
        <select className='header_country' name="country" id="country">
          <option value="UNITED STATES">UNITED STATES</option>
        </select>
        <button>CART </button>
      </div>
    </main>
  )
}

export default Header
