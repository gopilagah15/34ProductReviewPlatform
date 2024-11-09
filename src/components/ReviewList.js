import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h2>All Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.name}</strong> - {review.rating} Stars
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
