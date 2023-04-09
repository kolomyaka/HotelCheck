import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HotelsData, HotelsSchema, SearchHotelsFormData } from '../types/HotelsSchema';
import moment from 'moment';


const initialState: HotelsSchema = {
    hotelsData: [],
    form: {
        checkIn: moment().format('YYYY-MM-DD'),
        checkOut: '',
        location: 'Москва',
    },
    isLoading: false,
    error: undefined,
};

export const hotelsSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        setHotelsData: (state, action: PayloadAction<HotelsData>) => {
            state.hotelsData = action.payload.hotelsData;
            state.form = action.payload.form;
        },
        fetchHotelsDataRejected: (state, action: PayloadAction<SearchHotelsFormData>) => {
            state.hotelsData = [];
            state.form = { ...action.payload };
        }
    },
});

export const { actions: hotelsActions } = hotelsSlice;
export const { reducer: hotelsReducer } = hotelsSlice;