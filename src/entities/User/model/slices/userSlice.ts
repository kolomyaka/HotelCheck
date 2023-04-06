import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../types/UserSchema';


const initialState: UserSchema = {
    userData: undefined,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<string>) => {
            state.userData = action.payload;
        },
        logout: (state) => {
            state.userData = undefined;
        }
    },
});


export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;