import { StateSchema } from 'app/providers/StoreProvider';

export const getSearchHotelsFormData = (state: StateSchema) => state.searchHotels.form;
export const getSearchHotelsFormIsLoading = (state: StateSchema) => state.searchHotels.isLoading;
export const getSearchHotelsFormError = (state: StateSchema) => state.searchHotels.error;