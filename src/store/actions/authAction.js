import { LOGIN, LOGOUT } from "../types";

export const login = () => async (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: { id: 123, first_name: "abc", last_name: "def" },
  });
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
