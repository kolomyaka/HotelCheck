import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormPayload, SearchHotelsFormSchema } from '../types/SearchHotelsFormSchema';
import moment from 'moment';


const initialState: SearchHotelsFormSchema = {
    form: {
        location: 'Москва',
        checkIn: moment().format('YYYY-MM-DD'),
        checkOut: '1'
    },
    isLoading: false,
    error: {
        location: '',
        checkIn: '',
        checkOut: ''
    },
};

export const searchHotelsFormSlice = createSlice({
    name: 'searchHotelsForm',
    initialState,
    reducers: {
        setFormField: (state, action: PayloadAction<FormPayload>) => {
            state.form[action.payload.field] = action.payload.data;
        },
        searchHotelsData: (state, action) => {
            state.isLoading = true;
        },
        searchHotelsSuccess: (state) => {
            state.isLoading = false;
        },
        // TODO: Можно добавить отображение ошибок в форме
        searchHotelsError: (state, action: PayloadAction<FormPayload>) => {
            state.isLoading = false;
            state.error[action.payload.field] = action.payload.data;
        }
    },
});


export const { actions: searchHotelsFormActions } = searchHotelsFormSlice;
export const { reducer: searchHotelsFormReducer } = searchHotelsFormSlice;