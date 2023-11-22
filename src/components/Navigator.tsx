import React from 'react';

interface NavigatorProps {
  handleMove: (direction: string) => void;
}

const Navigator: React.FC<NavigatorProps> = ({ handleMove }) => {
  return (
    <div>
      <div>Navigator Component</div>
      <button onClick={() => handleMove('N')}>North</button>
      <button onClick={() => handleMove('E')}>East</button>
      <button onClick={() => handleMove('S')}>South</button>
      <button onClick={() => handleMove('W')}>West</button>
    </div>
  );
};

export default Navigator;
