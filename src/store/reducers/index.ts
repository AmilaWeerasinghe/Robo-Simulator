import { TELEPORT, MOVE } from '../actions/types';

const initialState = {
  robotPosition: { x: 1, y: 1 },
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TELEPORT:
      return {
        ...state,
        robotPosition: action.payload,
      };
    case MOVE:
      return {
        ...state,
        robotPosition: {
          x: state.robotPosition.x + action.payload.x,
          y: state.robotPosition.y + action.payload.y,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
