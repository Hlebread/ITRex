import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";

import { authReducer } from "./reducers/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const store = createStore(rootReducer);
