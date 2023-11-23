import React from 'react';
import { connect } from 'react-redux';
import { teleport, move } from '../store/actions';

interface NavigatorProps {
  robotPosition: { x: number; y: number };
  teleport: (newPosition: { x: number; y: number }) => void;
  move: (direction: { x: number; y: number }) => void;
}

const Navigator: React.FC<NavigatorProps> = ({ robotPosition, teleport, move }) => {
  const handleMove = (direction: { x: number; y: number }) => {
   
    const nextX = robotPosition.x + direction.x;
    const nextY = robotPosition.y + direction.y;

    if (nextX >= 1 && nextX <= 5 && nextY >= 1 && nextY <= 5) {
      move(direction);
    }
  };

  return (
    <div>
      <div>Navigator Component</div>
      <button onClick={() => handleMove({ x: 0, y: -1 })}>North</button>
      <button onClick={() => handleMove({ x: 0, y: 1 })}>South</button>
      <button onClick={() => handleMove({ x: 1, y: 0 })}>East</button>
      <button onClick={() => handleMove({ x: -1, y: 0 })}>West</button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  robotPosition: state.robotPosition,
});

const mapDispatchToProps = {
  teleport,
  move,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
