import { useSelector } from 'react-redux';
import classNames from 'classnames';
import cls from './FavoriteHotels.module.scss';
import { memo } from 'react';
import { Module } from 'shared/ui/Module/Module';
import { Typography } from 'shared/ui/Typography/Typography';
import { Hotel } from 'entities/Hotel';
import { getFavoriteHotels } from '../../model/slices/favoriteHotelsSlice';
import { FavoriteList } from '../FavoriteList/FavoriteList';

interface FavoriteHotelsProps {
    className?: string;
    onFavoriteClick: (hotel: Hotel, checkIn: string, checkOutDays: string) => void;
}

export const FavoriteHotels = memo((props: FavoriteHotelsProps) => {
    const {
        className,
        onFavoriteClick
    } = props;

    const hotels = useSelector(getFavoriteHotels.selectAll);
    const favoriteHotelsIds = useSelector(getFavoriteHotels.selectIds);

    return (
        <Module className={classNames(cls.favoriteHotels, {}, [className])}>
            <Typography
                className={cls.favoriteTitle}
                weight={'medium'}
                variant={'h3'}
                size={'L'}
            >Избранное</Typography>

            <FavoriteList
                favoriteHotelsIds={favoriteHotelsIds}
                onFavoriteClick={onFavoriteClick}
                className={cls.favoriteHotelsList}
                view={'small'}
                hotels={hotels}
                isLoading={false}
            />
        </Module>
    );
});


