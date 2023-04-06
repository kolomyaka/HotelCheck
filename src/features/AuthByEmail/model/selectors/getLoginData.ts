import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginEmail = (state: StateSchema) => state.login.email;
export const getLoginPassword = (state: StateSchema) => state.login.password;
export const getLoginEmailError = (state: StateSchema) => state.login.error.email;
export const getLoginPasswordError = (state: StateSchema) => state.login.error.password;
export const getLoginIsLoading = (state: StateSchema) => state.login.isLoading;