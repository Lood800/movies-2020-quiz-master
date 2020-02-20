export const ADD_POINT = 'ADD_POINT';
export const NUMBER_SELECTED = 'NUMBER_SELECTED';

export function addPoint(point) {
  return {
    type: ADD_POINT,
    payload: point
  };
}

export function numberSelected(movie) {
  return {
    type: NUMBER_SELECTED,
    payload: movie
  }
}
