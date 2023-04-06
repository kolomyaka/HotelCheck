import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema, ErrorPayload } from '../types/LoginSchema';

const initialState: LoginSchema = {
    email: '',
    password: '',
    isLoading: false,
    error: {
        email: '',
        password: ''
    }
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        validateUserData: (state, action) => {
            state.isLoading = true;
            state.error = {
                email: '',
                password: ''
            };
        },
        validateUserDataSuccess: (state) => {
            state.isLoading = false;
        },
        setErrorFields: (state, action: PayloadAction<ErrorPayload>) => {
            state.error[action.payload.field] = action.payload.message;
            state.isLoading = false;
        }
    },
});


export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;