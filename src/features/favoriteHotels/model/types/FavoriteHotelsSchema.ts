import { Hotel } from 'entities/Hotel';
import { EntityState } from '@reduxjs/toolkit';

export interface FavoriteHotelsSchema extends EntityState<FavoriteHotel> {
    error?: string;
}

export interface FavoriteHotel extends Hotel {
    checkIn: string;
    checkOut: string
}