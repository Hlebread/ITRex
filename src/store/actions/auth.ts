import { createActionCreator } from "deox";

export const userLoginAction = createActionCreator("USER_LOGIN");
export const userLogoutAction = createActionCreator("USER_LOGOUT");
export const setUsertypeAction = createActionCreator(
  "USER_SET_USERTYPE",
  (resolve) => (text: string) => resolve(text)
);
