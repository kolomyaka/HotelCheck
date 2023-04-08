import { Hotel } from 'entities/Hotel';
import { EntityState } from '@reduxjs/toolkit';

export interface FavoriteHotelsSchema extends EntityState<Hotel> {
    error?: string;
}