import { StateSchema } from 'app/providers/StoreProvider';

export const getHotelsData = (state: StateSchema) => state.hotelsData.hotelsData;
export const getHotelsDataCheckIn = (state: StateSchema) => state.hotelsData.checkIn;
export const getHotelsDataCheckOut = (state: StateSchema) => state.hotelsData.checkOut;
export const getHotelsDataIsLoading = (state: StateSchema) => state.hotelsData.isLoading;
export const getHotelsDataError = (state: StateSchema) => state.hotelsData.error;