import React from 'react';
import GridBox from './GridBox';

const Grid = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '2rem' }}>
      {[...Array(9)].map((_, index) => (
        <GridBox key={index} />
      ))}
    </div>
  );
};

export default Grid;
