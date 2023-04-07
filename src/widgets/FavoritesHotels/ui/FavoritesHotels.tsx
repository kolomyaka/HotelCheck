import classNames from 'classnames';
import cls from './FavoritesHotels.module.scss';
import { memo } from 'react';
import { FilterFavorites } from 'features/FilterFavorites/FilterFavorites';

interface FavoritesHotelsProps {
    className?: string
}

export const FavoritesHotels = memo(({ className }: FavoritesHotelsProps) => {
    return (
        <div className={classNames(cls.favoritesHotels, {}, [className])}>
            <FilterFavorites />

        </div>
    );
});


