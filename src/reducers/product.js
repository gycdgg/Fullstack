export default function product(state = {}, action) {
  switch(action.type) {
  case 'test': return 1
  default: return state
  }
}