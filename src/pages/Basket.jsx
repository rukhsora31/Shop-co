import React from 'react'

const Basket = () => {
  return (
  <>
  <section className="basket">
    <div className="cpntainer">
        <div className="wrapper-basket">
            <div className="card-basket">
                <div className="wrap1">
                    <img src="/t-shirt.png" alt="" />

                    <div className="name-basket">
                        <h3>Gradient Graphic T-shirt</h3>
                        <p>Size: Large</p>
                        <p>Color: White</p>
                        <h2>$145</h2>
                    </div>

                    <div className="order-basket">
                        <img src="/basket.png" alt="" />
                        <button>- 1 +</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  </section>
  </>
  )
}

export default Basket
