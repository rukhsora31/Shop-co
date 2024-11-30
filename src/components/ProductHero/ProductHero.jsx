import React from 'react'
import './ProductHero.scss'

const ProductHero = ({ product }) => {
    return (
        <>
            <section className="producthero">
                <div className="container">
                    <div className="product__wrap">

                        <div className="product__images">
                            <img src={product.image} alt="" />
                        </div>

                        <div className="product__box">
                            <h1>{product.name}</h1>
                            <h2>⭐⭐⭐⭐ 4/5</h2>

                            <div className="product__price">
                                <s>{Math.floor(product.price * 1.1)} sum</s>
                                <p>{product.price} sum</p>
                            </div>

                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductHero
