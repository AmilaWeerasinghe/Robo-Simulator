
import React, { useState } from 'react';
import Table from './components/Table';
import Navigator from './components/Navigator';

import './App.css';

const App: React.FC = () => {
  const [robotPosition, setRobotPosition] = useState<{ x: number; y: number }>({ x: 1, y: 1 });

  const handleMove = (direction: string) => {
    let newPosition = { ...robotPosition };

    switch (direction) {
      case 'N':
        newPosition.y = Math.max(1, robotPosition.y - 1);
        break;
      case 'E':
        newPosition.x = Math.min(5, robotPosition.x + 1);
        break;
      case 'S':
        newPosition.y = Math.min(5, robotPosition.y + 1);
        break;
      case 'W':
        newPosition.x = Math.max(1, robotPosition.x - 1);
        break;
      default:
        break;
    }

    setRobotPosition(newPosition);
  };

  const handleTeleport = (newPosition: { x: number; y: number }) => {
    setRobotPosition(newPosition);
  };

  return (
    <div className="app">
      <Table robotPosition={robotPosition} handleTeleport={handleTeleport} />
      <Navigator handleMove={handleMove} />
    </div>
  );
};

export default App;
