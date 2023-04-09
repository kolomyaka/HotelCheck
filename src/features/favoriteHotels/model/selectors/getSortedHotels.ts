import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { getFavoriteHotelsData } from './getFavoriteHotelsData';
import orderBy from 'lodash/orderBy';

export const getSortedType = (state:StateSchema) => state.favoriteHotels.sortBy;
export const getOrderType = (state: StateSchema) => state.favoriteHotels.orderBy;
export const getSortedHotels = createSelector(
    getFavoriteHotelsData,
    getSortedType,
    getOrderType,
    (favHotels, sortType, orderType) => {
        if (sortType) {
            return orderBy(
                favHotels,
                [sortType],
                [orderType]
            );
        }
        return favHotels;
    }
);