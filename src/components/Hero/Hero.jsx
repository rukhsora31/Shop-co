import React, { useEffect } from 'react';
import './Hero.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  // Инициализация AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      easing: 'ease-in-out', // Плавность анимации
      once: true, // Анимация срабатывает один раз
    });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            {/* Левая часть */}
            <div className="hero__box" data-aos="fade-right">
              <h1 data-aos="fade-up" data-aos-delay="100">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p data-aos="fade-up" data-aos-delay="200">
                Browse through our diverse range of meticulously crafted garments, 
                designed to bring out your individuality and cater to your sense of style.
              </p>
              <button data-aos="zoom-in" data-aos-delay="300">Shop Now</button>

              {/* Статистика */}
              <div className="hero__inner" data-aos="fade-up" data-aos-delay="400">
                <div>
                  <h3 data-aos="fade-up" data-aos-delay="500">200+</h3>
                  <p data-aos="fade-up" data-aos-delay="600">International Brands</p>
                </div>

                <div>
                  <h3 data-aos="fade-up" data-aos-delay="700">2,000+</h3>
                  <p data-aos="fade-up" data-aos-delay="800">High-Quality Products</p>
                </div>

                <div>
                  <h3 data-aos="fade-up" data-aos-delay="900">30,000+</h3>
                  <p data-aos="fade-up" data-aos-delay="1000">Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Правая часть: изображение */}
            <img
              src="/hero-img.png"
              alt="Hero"
              data-aos="fade-left"
              data-aos-delay="500"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

