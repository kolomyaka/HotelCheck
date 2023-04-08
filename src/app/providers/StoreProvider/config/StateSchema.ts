import { LoginSchema } from 'features/AuthByEmail';
import { UserSchema } from 'entities/User';
import { SearchHotelsFormSchema } from 'features/SearchHotelsForm';
import { HotelsSchema } from 'entities/Hotel';
import { FavoriteHotelsSchema } from 'features/favoriteHotels';

export interface StateSchema {
    login: LoginSchema;
    user: UserSchema;
    searchHotels: SearchHotelsFormSchema;
    hotelsData: HotelsSchema;
    favoriteHotels: FavoriteHotelsSchema;
}