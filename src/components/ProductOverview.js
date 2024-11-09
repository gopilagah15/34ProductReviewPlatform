import React from 'react';

const ProductOverview = ({ reviews }) => {
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = reviews.length ? (totalRating / reviews.length).toFixed(1) : 0;

  return (
    <div>
      <h2>Product Overview</h2>
      <p>Average Rating: {averageRating} Stars</p>
    </div>
  );
};

export default ProductOverview;
