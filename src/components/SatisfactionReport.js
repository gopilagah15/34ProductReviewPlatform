import React from 'react';

const SatisfactionReport = ({ reviews }) => {
  const totalReviews = reviews.length;
  const positiveReviews = reviews.filter(review => review.rating >= 4).length;
  const satisfactionRate = totalReviews ? ((positiveReviews / totalReviews) * 100).toFixed(1) : 0;

  return (
    <div>
      <h2>Satisfaction Report</h2>
      <p>Total Reviews: {totalReviews}</p>
      <p>Positive Reviews (4+ stars): {positiveReviews}</p>
      <p>Satisfaction Rate: {satisfactionRate}%</p>
    </div>
  );
};

export default SatisfactionReport;
