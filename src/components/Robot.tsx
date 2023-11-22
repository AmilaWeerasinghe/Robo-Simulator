import React from 'react';

interface RobotProps {
  handleMove: (direction: string) => void;
}

const Robot: React.FC<RobotProps> = ({ handleMove }) => {
  return (
    <div>
      <div>Robot Component</div>
      <button onClick={() => handleMove('N')}>North</button>
      <button onClick={() => handleMove('E')}>East</button>
      <button onClick={() => handleMove('S')}>South</button>
      <button onClick={() => handleMove('W')}>West</button>
    </div>
  );
};

export default Robot;
