import React from 'react';
import { connect } from 'react-redux';
import { teleport, move } from '../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navigator.css';

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
    <div className="navigator-container"data-testid="navigator-container">
      <div className="navigator-box">
        <div className="navigator-circle">
          <div className="navigator-row">
            <div onClick={() => handleMove({ x: 0, y: -1 })} className="navigator-button" data-testid="navigator-up">
              <FontAwesomeIcon icon={faArrowUp} />
            </div>
          </div>
          <div className="navigator-row">
            <div onClick={() => handleMove({ x: -1, y: 0 })} className="navigator-button" data-testid="navigator-left">
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div onClick={() => handleMove({ x: 1, y: 0 })} className="navigator-button" data-testid="navigator-right">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
          <div className="navigator-row">
            <div onClick={() => handleMove({ x: 0, y: 1 })} className="navigator-button" data-testid="navigator-down">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div>
        </div>
      </div>
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
