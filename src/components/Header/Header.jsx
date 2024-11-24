import React from 'react'
import './Header.scss'

const Header = () => {
  return (
   <>
   <section className="header">
    <div className="container">

        <nav>
        <img className='logo' src="/SHOP.CO.png" alt="" />

        <div className="menu">
        <p>Shop</p>
        <p>On Sale</p>
        <p>New Arrivals</p>
        <p>Brands</p>
        </div>

        <input type="text" className="search" />

        <div className="icons">
            <img src="/icon-1.svg" alt="" />
            <img src="/icon-2.svg" alt="" />
        </div>
       
        </nav>
       
    </div>
   </section>
   </>
  )
}

export default Header
