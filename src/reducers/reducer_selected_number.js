export default function(state = 'No number selected', action) {
  switch(action.type) {
    case 'NUMBER_SELECTED':
      return action.payload
    case 'ADD_POINT':
      return 'No number selected'
    };
  return state
}
