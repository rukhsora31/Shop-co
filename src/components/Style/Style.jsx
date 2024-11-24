import React from 'react'
import './Style.scss'
import SectionTitle from '../SectionTitle/SectionTitle'

const Style = () => {
    return (
        <>
            <section className="style">
                <div className="container">
                  <div className="style__wrapp">
                  <SectionTitle position='center'>BROWSE BY dress STYLE</SectionTitle>
                    <div className="style__wrapper">

                        <div className="card-1">
                            <h3>Casual</h3>
                        </div>

                        <div className="card-2">
                            <h3>Formal</h3>
                        </div>

                        <div className="card-3">
                            <h3>Party</h3>
                        </div>

                        <div className="card-4">
                            <h3>Gym</h3>
                        </div>
                        
                    </div>
                  </div>
                </div>
            </section>
        </>
    )
}

export default Style
