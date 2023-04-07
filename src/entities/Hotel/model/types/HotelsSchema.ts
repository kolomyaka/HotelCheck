export interface HotelsSchema extends HotelsData{
    error?: string;
    isLoading: boolean;
}

export interface Hotel {
    hotelId: number;
    hotelName: string;
    price: number;
    stars: number;
}

export interface HotelsData {
    hotelsData: Hotel[];
    checkIn: string;
    checkOut: string;
}