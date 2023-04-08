import { StateSchema } from 'app/providers/StoreProvider';

export const getHotelsData = (state: StateSchema) => state.hotelsData.hotelsData;
export const getHotelsDataCheckIn = (state: StateSchema) => state.hotelsData.form.checkIn;
export const getHotelsDataCheckOut = (state: StateSchema) => state.hotelsData.form.checkOut;
export const getHotelsDataLocation = (state: StateSchema) => state.hotelsData.form.location;
export const getHotelsDataIsLoading = (state: StateSchema) => state.hotelsData.isLoading;
export const getHotelsDataError = (state: StateSchema) => state.hotelsData.error;