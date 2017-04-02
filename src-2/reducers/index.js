export default function info(state={},action) {
  switch (action.type) {
    case 'RECEIVE_INFO':
      return action.info
    default:
      return state
  }
}
