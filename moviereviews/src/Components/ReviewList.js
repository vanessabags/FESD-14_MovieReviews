import React from "react";

export default function ReviewList ({ reviews, movieId}) {
    const reviewsList = reviews.filter(review => review.movieId === movieId)

    return (
        <div className="review-section">
            <h4>Reviews: </h4>
            {reviewsList.length === 0 && <p>Automatic 5 stars?</p>}
            {reviewsList.map(review => (
                <div key={review.index}> 
                    <p>{review.user}</p>
                    <hr />
                    <p>{review.review}</p>
                </div>
            ))}
            {/*Created this file of code before adding it into the reviewform.js file for easier access to the props*/}
        </div>    
    )   
}