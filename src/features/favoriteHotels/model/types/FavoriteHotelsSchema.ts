import { Hotel } from 'entities/Hotel';
import { OrderBy } from 'shared/types/OrderBy';

export interface FavoriteHotelsSchema {
    favoriteHotels: FavoriteHotel[];
    error?: string;
    sortBy?: SortBy;
    orderBy: OrderBy;
}

export interface FavoriteHotel extends Hotel {
    checkIn: string;
    checkOut: string
}

export type SortBy = 'priceAvg' | 'stars';

export interface FavoriteSortPayload {
    sortBy: SortBy;
    orderBy: OrderBy;
}

