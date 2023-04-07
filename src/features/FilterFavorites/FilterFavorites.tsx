import classNames from 'classnames';
import cls from './FilterFavorites.module.scss';
import { memo } from 'react';

interface FilterFavoritesProps {
    className?: string
}

export const FilterFavorites = memo(({ className }: FilterFavoritesProps) => {
    return (
        <div className={classNames(cls.filterFavorites, {}, [className])}>

        </div>
    );
});


