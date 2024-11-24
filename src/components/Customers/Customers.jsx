import React from 'react'
import './Customers.scss'
import SectionTitle from '../SectionTitle/SectionTitle'

const Customers = () => {
  return (
   <>
   <section className="customers">
    <div className="container">
        <div className="customers__wrap">
            <br />
        <SectionTitle position='left'>OUR HAPPY CUSTOMERS</SectionTitle>

            <div className="customers__wrapper">

                <div className="customers__card">
                <div>⭐⭐⭐⭐⭐</div>
                <h3>Sarah M.✔️</h3>
                <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                </div>

                <div className="customers__card">
                <div>⭐⭐⭐⭐⭐</div>
                <h3>Alex K.✔️</h3>
                <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                </div>

                <div className="customers__card">
                <div>⭐⭐⭐⭐⭐</div>
                <h3>James L.✔️</h3>
                <p>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                </div>
     
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Customers
