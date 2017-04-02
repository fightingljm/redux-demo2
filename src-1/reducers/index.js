function num(state = 0, action) {
  switch(action.type) {
    case 'CHANGE':
      return state+action.num
    default:
      return state;
  }
}

export default num;
