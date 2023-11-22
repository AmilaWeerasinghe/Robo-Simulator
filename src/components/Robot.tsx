import React from 'react';

interface RobotProps {
  handleMove: () => void;
}

const Robot: React.FC<RobotProps> = ({ handleMove }) => {
  return (
    <div>
      <div>Robot Component</div>
      <button onClick={handleMove} data-testid="moveButton">
        Move
      </button>
    </div>
  );
};

export default Robot;
