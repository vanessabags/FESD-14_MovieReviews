import React from "react";
import { useState } from "react";
import StarRating from './Stars';
import StarRated from './StarRated';

let nextReviewID = 1;

export default function Reviews(movie) {
    const [reviewData, setReviewData] = useState("");
    const [userName, setUserName] = useState("");
    const [myRating, setRating] = useState(0);

    const [reviews, setReviews] = useState([]);
    const addReview = (newReviewData) => {
        const newReview = {
            id: nextReviewID++,
            ...newReviewData,

        };
        setReviews(reviews.concat(newReview));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`
            Thank you, ${userName}!

            You have left a new review!`);
        }, 2000);
        const reviewInfo = {
            review: reviewData,
            user: userName,
            rating: myRating,
            movieId: movie,
        };
        addReview(reviewInfo);
        setReviewData("");
        setUserName("");
        setRating(0);
        console.log(myRating)
    ;}

    return (
        <div>
            <div className="review-form border border-secondary-subtle">
                <h4>Leave a Review</h4>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name: 
                        <input 
                            name="name"
                            value= {userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </label>
                    <StarRating 
                        value = {myRating}
                        onClick={(e) => setRating(e.target.id)}/>
                        {/** unable to set the rating from the object's id or index */}
                    <br />
                    <textarea 
                        name="comments"
                        rows={5}
                        cols={60}
                        value={reviewData}
                        onChange={(e) => setReviewData(e.target.value)}
                    />
                    <br/>
                    <div>
                        <button type="submit" className="btn btn-outline-dark">Share your opinions!</button>
                    </div>
                </form>
            </div>
            <div className="review-section border border-secondary-subtle">
                <h4>Reviews: </h4>
                {reviews.length === 0 && <p>Automatic 5 stars?</p>}
                {reviews.map(review => (
                    <div key={review.index}> 
                        <p style={{
                            textAlign: "left",
                            textIndent: "3em"
                        }}>{review.user} says:</p>
                        <StarRated index={review.rating}/>
                        <p>{review.review}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )

}