import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { FavoriteHotelsSchema } from '../types/FavoriteHotelsSchema';
import { Hotel } from 'entities/Hotel';
import { StateSchema } from 'app/providers/StoreProvider';


const initialState: FavoriteHotelsSchema = {
    ids: [],
    entities: {}
};

const favoriteHotelsAdapter = createEntityAdapter<Hotel>({
    selectId: (hotel) => hotel.hotelId
});

// Создаем селектор для получения всех избранных отелей
export const getFavoriteHotels = favoriteHotelsAdapter.getSelectors<StateSchema>(
    (state) => state.favoriteHotels || favoriteHotelsAdapter.getInitialState()
);

export const favoriteHotelsSlice = createSlice({
    name: 'favoriteHotels',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            favoriteHotelsAdapter.addOne(state, action.payload);
        },
    },
});


export const { actions: favoriteHotelsActions } = favoriteHotelsSlice;
export const { reducer: favoriteHotelsReducer } = favoriteHotelsSlice;