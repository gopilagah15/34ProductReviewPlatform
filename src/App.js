import React, { useState } from 'react';
import ProductOverview from './components/ProductOverview';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import SatisfactionReport from './components/SatisfactionReport';


const App = () => {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div>
      <h1>Product Review Platform</h1>
      <ProductOverview reviews={reviews} />
      <ReviewForm addReview={addReview} />
      <ReviewList reviews={reviews} />
      <SatisfactionReport reviews={reviews} />
    </div>
  );
};

export default App;
