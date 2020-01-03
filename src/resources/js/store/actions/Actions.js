export const Actions = {
  setUser (user) {
    return {
      type: 'setUser',
      payload: user
    }
  },
  logout () {
    return {
      type: 'logout'
    }
  }
}
