import { SearchHotelsFormData } from 'entities/Hotel';

export interface SearchHotelsFormSchema {
    form:SearchHotelsFormData;
    isLoading: boolean;
    error: SearchHotelsFormData;
}

export interface FormPayload {
    field: keyof SearchHotelsFormData;
    data: string;
}