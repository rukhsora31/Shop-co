import React from 'react'
import Hero from '../components/Hero/Hero'
import Brands from '../components/Brands/Brands'
import Category from '../components/Category/Category'
import Style from '../components/Style/Style'
import Customers from '../components/Customers/Customers'
import Offers from '../components/Offers/Offers'
import Footer from '../components/Footer/Footer'


const Home = () => {
    return (
        <>
            <Hero />
            <Brands />
            <Category/>
            <Style/>
            <Customers/>
            <Offers/>
            <Footer/>
        </>
    )
}

export default Home
