import React from "react";

function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
        alert(`You have left a new review!`);
    }, 2000);
}

export default class Reviews extends React.Component {
    

    render() {
        return (
            <div className="review-form">
                <h5>Leave a Review</h5>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name: 
                        <input 
                            name="name"
                        />
                    </label>
                    <textarea 
                        name="comments"
                        rows={5}
                        cols={60}
                    />
                    <br/>
                    <div>
                        <button type="submit" className="btn btn-outline-dark">Share your opinions!</button>
                    </div>
                </form>
            </div>
        )
    }
}