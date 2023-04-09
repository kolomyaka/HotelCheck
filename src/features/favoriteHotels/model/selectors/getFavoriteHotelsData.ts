import { StateSchema } from 'app/providers/StoreProvider';

export const getFavoriteHotelsData = (state:StateSchema) => state.favoriteHotels.favoriteHotels;
export const getFavoriteHotelsIds = (state: StateSchema) => state.favoriteHotels.favoriteHotels.map((favHotel) => {
    return favHotel.hotelId;
});