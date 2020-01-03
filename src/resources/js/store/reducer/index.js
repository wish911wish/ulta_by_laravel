export const initialState = {
  status: '',
  token: localStorage.getItem('token') || '',
  username: ''
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return {
        ...state,
        status: 'loggedIn',
        username: action.payload.displayName
      };
    case "logout":
      return {
        ...state,
        status: 'loggedOut',
        username: ''
      };
    default:
      return state;
  }
};

export const store = createStore(reducer) 