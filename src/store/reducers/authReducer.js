import { AUTH_NOTIFICATION, AUTH_SET_LOADING } from "../types";

const initialState = {
  notification: {
    message: "",
    type: "",
  },
  loading: false,
};

export default function authReducer(state = initialState, { action, payload }) {
  switch (action) {
    case AUTH_NOTIFICATION:
      return {
        ...state,
        notification: payload,
      };
    case AUTH_SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
