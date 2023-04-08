import { $api } from 'shared/api/api';
import { Hotel, SearchHotelsFormData } from 'entities/Hotel';

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