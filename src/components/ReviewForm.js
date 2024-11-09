import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rating || !comment) return; // Ensure all fields are filled
    addReview({ name, rating: parseInt(rating), comment });
    setName('');
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit a Review</h2>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={rating}
        min="1"
        max="5"
        onChange={(e) => setRating(e.target.value)}
      />
      <textarea
        placeholder="Write your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
