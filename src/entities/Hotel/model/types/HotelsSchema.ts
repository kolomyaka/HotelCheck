export interface HotelsSchema extends HotelsData{
    error?: string;
    isLoading: boolean;
}

export interface Hotel {
    hotelId: number;
    hotelName: string;
    priceAvg: number;
    stars: number;
}

export interface HotelsData {
    hotelsData: Hotel[];
    form: SearchHotelsFormData;
}

export interface SearchHotelsFormData {
    location: string;
    checkIn: string;
    checkOut: string;
}

