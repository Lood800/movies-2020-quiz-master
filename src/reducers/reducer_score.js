export default function(state = 0, action) {
  switch(action.type) {
    case 'ADD_POINT':
      return state + action.payload
    };
  
  return state
}