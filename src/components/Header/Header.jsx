import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>
   <section className="header">
    <div className="container">

        <nav>
        {/* <img className='logo' src="/SHOP.CO.png" alt="" /> */}
        <Link to={'/'} className='logo'>
        <img className='logo' src="/SHOP.CO.png" alt="" />
        
        </Link>

        <div className="menu">
            <Link to={'/sale'} className='dropdown'>
            Shop
            <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" />

            <div>
                <Link to={'/'}>Man</Link>
                <Link to={'/'}>Women</Link>
                <Link to={'/'}>Kids</Link>
            </div>

            </Link>
            <a href="/#selling">On sale</a>
            <a href="/#arrivals">New Arrivals</a>
            <Link to={'/'}>Brands</Link>
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
