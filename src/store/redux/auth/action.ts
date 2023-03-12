import * as types from "@/store/types";

export const setAuthRouters = (authRouter: string[]) => ({
  type: types.SET_AUTH_ROUTER,
  payload: authRouter,
});

export const setAuthButtons = (authButtons: { [propName: string]: any }) => ({
  type: types.SET_AUTH_BUTTONS,
  payload: authButtons,
});
