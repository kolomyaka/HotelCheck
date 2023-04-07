import { $api } from 'shared/api/api';
import { SearchHotelsFormData } from '../types/SearchHotelsFormSchema';
import { Hotel } from 'entities/Hotel';

export const hotelsApi = {
    async fetchHotels(params: SearchHotelsFormData): Promise<Hotel[]> {
        const { data } = await $api.get('', {
            params: {
                ...params,
                limit: 10
            }
        });
        return data;
    }
};