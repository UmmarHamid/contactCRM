import React from 'react';
import Lottie from 'lottie-react';
import animationData from './poetry_lottie.json';

const Animation = ({ onComplete }: any) => {
  return (
    <Lottie
      style={{ height: '60vh' }}
      animationData={animationData}
      loop={false}
      onComplete={onComplete}
    />
  );
};

export default Animation;
