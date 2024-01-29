const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
    case "SIGN_UP":
      return {
        ...state,
        isAuthenticated: true,
        user: { username: action.payload.username },
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
