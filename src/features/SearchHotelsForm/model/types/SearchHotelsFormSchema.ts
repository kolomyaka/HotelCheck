export interface SearchHotelsFormSchema {
    form:SearchHotelsFormData;
    isLoading: boolean;
    error: SearchHotelsFormData;
}

export interface SearchHotelsFormData {
    location: string;
    checkIn: string;
    checkOut: string;
}

export interface FormPayload {
    field: keyof SearchHotelsFormData;
    data: string;
}