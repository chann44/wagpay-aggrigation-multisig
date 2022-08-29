import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types/commonTypes";
const initialState = {
  isLoggedIn: false,
  userData: {
    user: {},
    metamask: {}
  }
}


const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
      };

    case USER_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        userData: {}
      };
    default:
      return { ...state };
  }
}

export default userReducer;