import React from 'react'
import './SaleWrap.scss'

const SaleWrap = () => {
  return (
   <>
    <section className="saleWrap">
        <div className="container">
            <div className="saleWrap__wrap">
                <div className="saleWrap__card">
                    <h2>Casual</h2>
                </div>

                <div className="saleWrap__card">
                    <h2>Formal</h2>
                </div>

                <div className="saleWrap__card">
                    <h2>Party</h2>
                </div>

                <div className="saleWrap__card">
                    <h2>Gym</h2>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default SaleWrap
