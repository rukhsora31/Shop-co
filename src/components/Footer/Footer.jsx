import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__wrapper">

                    <div className="footer__wrap">
                        <div className="footer__box">
                            <h1>SHOP.CO</h1>
                            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

                            <div className="apps">
                                <img src="/app-1.png" alt="" />
                                <img src="/app-2.png" alt="" />
                                <img src="/app-3.png" alt="" />
                                <img src="/app-4.png" alt="" />

                            </div>
                        </div>

                        <div className="footer__box">
                            <h3>Company</h3>
                            <p>About </p>
                            <p>Features</p>
                            <p>Works</p>
                            <p>Career</p>
                        </div>

                        
                        <div className="footer__box">
                            <h3>Help</h3>
                            <p>Customer Support</p>
                            <p>Delivery Details</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>

                        
                        <div className="footer__box">
                            <h3>FAQ</h3>
                            <p>Account</p>
                            <p>Manage Deliveries</p>
                            <p>Orders</p>
                            <p>Payments</p>
                        </div>

                        <div className="footer__box">
                            <h3>Resources</h3>
                            <p>Free eBooks</p>
                            <p>Development Tutorial</p>
                            <p>How to - Blog</p>
                            <p>Youtube Playlist</p>
                        </div>

                        



                    </div>

                    <hr />
                    <div className="footer__cards">
                        <p>Shop.co © 2000-2023, All Rights Reserved</p>

                        <div className="cards">
                            <img src="/footerCards-1.png" alt="" />
                            <img src="/footerCards-2.png" alt="" />
                            <img src="/footerCards-3.png" alt="" />
                            <img src="/footerCards-4.png" alt="" />
                            <img src="/footerCards-5.png" alt="" />


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
