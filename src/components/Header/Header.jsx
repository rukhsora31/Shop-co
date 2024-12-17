import React, { useEffect } from 'react';
import './Header.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context';

const Header = () => {
    const { isActive, toggleBurger, user, isAuth, logout } = useAppContext();

    // Инициализация AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации
            easing: 'ease-in-out', // Плавность анимации
            once: true, // Анимация запускается один раз
        });
    }, []);

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__wrapper" data-aos="fade-down" data-aos-delay="100">
                        <div className="header__wrap">
                            <div className="header__header">
                                <Link to={'/'} data-aos="fade-down" data-aos-delay="200">
                                    <img className='logo__img' src="/SHOP.CO.png" alt="" />
                                </Link>
                                <div className={`header__menu ${isActive ? 'active' : ''}`} data-aos="fade-down" data-aos-delay="300">
                                    <Link to={'/sale'} className='dropdown' data-aos="fade-down" data-aos-delay="400">
                                        Shop
                                        <img src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png" alt="" />
                                        <div>
                                            <Link to={'/'} data-aos="fade-down" data-aos-delay="500">Men</Link>
                                            <Link to={'/'} data-aos="fade-down" data-aos-delay="600">Women</Link>
                                            <Link to={'/'} data-aos="fade-down" data-aos-delay="700">Kids</Link>
                                        </div>
                                    </Link>
                                    <a href="/#selling" data-aos="fade-down" data-aos-delay="800">On Sale</a>
                                    <a href="/#arrivals" data-aos="fade-down" data-aos-delay="900">New Arrivals</a>
                                    <Link to={'/brands'} data-aos="fade-down" data-aos-delay="1000">Brands</Link>
                                </div>
                            </div>

                            <div onClick={toggleBurger} className={`burger ${isActive ? 'active' : ''}`} data-aos="fade-down" data-aos-delay="1100">
                                <div className='div'></div>
                                <div className='div'></div>
                                <div className='div'></div>
                            </div>
                        </div>

                        <div className="header__search" data-aos="fade-down" data-aos-delay="1200">
                            <div className='header__input' data-aos="fade-down" data-aos-delay="1300">
                                <img src="/search-icon.svg" alt="" />
                                <p>Search for products...</p>
                            </div>
                            <img src="/icon-1.svg" alt="" data-aos="fade-down" data-aos-delay="1400" />

                            {isAuth ? (
                                <div data-aos="fade-down" data-aos-delay="1500">
                                    <b>{user.username}</b> <br />
                                    <button onClick={logout}>Logout</button>
                                </div>
                            ) : (
                                <Link to={'/login'} data-aos="fade-down" data-aos-delay="1600">
                                    <img src="/icon-2.svg" alt="" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
