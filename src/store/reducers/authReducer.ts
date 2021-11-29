import { createReducer } from "deox";
import {
  setUsertypeAction,
  userLoginAction,
  userLogoutAction,
} from "../actions/auth";

const defaultState = {
  auth: false,
  usertype: "doctor",
};

export const authReducer = createReducer(defaultState, (handleAction) => [
  handleAction(userLoginAction, (state) => ({ ...state, auth: true })),
  handleAction(userLogoutAction, (state) => ({ ...state, auth: false })),
  handleAction(setUsertypeAction, (state, { payload }) => ({
    ...state,
    usertype: payload,
  })),
]);
