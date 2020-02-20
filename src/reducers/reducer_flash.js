function setFlash(point) {
  if (point == 1) {
    return 'Correct, you get one point!'
  } else {
    return 'WRONG!!!'
  };
}

export default function(state = null, action) {
  switch(action.type) {
    case 'ADD_POINT':
      return setFlash(action.payload)
    }
  return state
}
