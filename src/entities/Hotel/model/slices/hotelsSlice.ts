import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HotelsData, HotelsSchema } from '../types/HotelsSchema';


const initialState: HotelsSchema = {
    hotelsData: [],
    checkIn: '',
    checkOut: '',
    isLoading: false,
    error: undefined,
};

export const hotelsSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        setHotelsData: (state, action: PayloadAction<HotelsData>) => {
            state.hotelsData = action.payload.hotelsData;
            state.checkIn = action.payload.checkIn;
            state.checkOut = action.payload.checkOut;
        }
    },
});

export const { actions: hotelsActions } = hotelsSlice;
export const { reducer: hotelsReducer } = hotelsSlice;