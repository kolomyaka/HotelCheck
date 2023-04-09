import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoriteHotel, FavoriteHotelsSchema, FavoriteSortPayload } from '../types/FavoriteHotelsSchema';


const initialState: FavoriteHotelsSchema = {
    favoriteHotels: [],
    sortBy: undefined,
    orderBy: 'asc',
    error: undefined,
};

export const favoriteHotelsSlice = createSlice({
    name: 'favoriteHotels',
    initialState,
    reducers: {
        addToFavorite: (state, action: PayloadAction<FavoriteHotel>) => {
            state.favoriteHotels.push(action.payload);
        },
        removeFromFavorite: (state, action: PayloadAction<number>) => {
            state.favoriteHotels = state.favoriteHotels.filter(favHotels => favHotels.hotelId !== action.payload);
        },
        sortBy: (state, action: PayloadAction<FavoriteSortPayload>) => {
            state.sortBy = action.payload.sortBy;
            state.orderBy = action.payload.orderBy;
        }
    },
});


export const { actions: favoriteHotelsActions } = favoriteHotelsSlice;
export const { reducer: favoriteHotelsReducer } = favoriteHotelsSlice;