import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ stars }) => {
  const renderStars = () => {
    const starArray = Array.from({ length: 5 }, (_, index) => index + 1);
    return starArray.map((star) => (
      <FaStar key={star} color={star <= stars ? 'gold' : 'gray'} />
    ));
  };

  return <div className='flex gap-2'>{renderStars()}</div>;
};

export default StarRating;
