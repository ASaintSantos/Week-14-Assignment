import { useState } from "react";
import Star from './Star';

export default function ReviewForm({ movie, addReview }) {
    const {reviewValue, setReviewValue} = useState("");
    const {userValue, setUserValue} = useState("");

    let newDate = new Date().toLocaleDateString('en-us', {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const reviewData = {
            review: reviewValue,
            user: userValue,
            movieId: movie.id,
            date: newDate,
        };

        addReview(reviewData);
        setReviewValue("");
        setUserValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Star />
            <label htmlFor="user-input" className="form-label">
                Please leave your feedback.
            </label>
            <input
            type="text"
            id="review-input"
            className="form-control"
            value={reviewValue}
            onChange={(e) => setReviewValue(e.target.value)}
            />
            <button type="submit" className="btn btn-primary mt-4">
                Submit
            </button>
        </form>
    );
}