import React from 'react'
import './ReviewsWrap.scss'
import ReviewsData from './reviews.json'
import ReviewCard from '../ReviewCard/ReviewCard'

const ReviewsWrap = () => {
  return (
   <>
    <section className="reviewswrap">
                <div className="container">
                    <div className="reviews__wrapper">

                        {ReviewsData.map(card => (
                            <>
                            <ReviewCard key={card.id} card={card}/>
                            </>
                        ))}
                   
                    </div>
                </div>
            </section>
   </>
  )
}

export default ReviewsWrap
