import React from 'react';
import { connect } from 'react-redux';
import { teleport } from '../store/actions';

import '../styles/Table.css';

interface TableProps {
  robotPosition: { x: number; y: number };
  handleTeleport: (newPosition: { x: number; y: number }) => void;
}

const Table: React.FC<TableProps> = ({ robotPosition, handleTeleport }) => {
  const renderCells = () => {
    const cells = [];
    for (let row = 1; row <= 5; row++) {
      for (let col = 1; col <= 5; col++) {
        const isRobotHere = robotPosition.x === col && robotPosition.y === row;
        cells.push(
          <div
            key={`${row}-${col}`}
            className={`cell ${isRobotHere ? 'robot' : ''}`}
            onClick={() => handleTeleport({ x: col, y: row })}
          >
            {isRobotHere ? '🤖' : null}
          </div>
        );
      }
    }
    return cells;
  };

  return (
    <div className="table">
      <div className="grid">{renderCells()}</div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  robotPosition: state.robotPosition,
});

const mapDispatchToProps = {
  handleTeleport: teleport,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
