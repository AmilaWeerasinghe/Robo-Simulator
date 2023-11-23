import { TELEPORT, MOVE } from './types';

export const teleport = (newPosition: { x: number; y: number }) => ({
  type: TELEPORT,
  payload: newPosition,
});

export const move = (direction: { x: number; y: number }) => ({
  type: MOVE,
  payload: direction,
});
