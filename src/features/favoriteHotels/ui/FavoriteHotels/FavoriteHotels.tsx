import classNames from 'classnames';
import cls from './FavoriteHotels.module.scss';
import { memo } from 'react';
import { Module } from 'shared/ui/Module/Module';
import { Typography } from 'shared/ui/Typography/Typography';
import { Hotel, HotelsList } from 'entities/Hotel';
import { useSelector } from 'react-redux';
import { getFavoriteHotels } from 'features/favoriteHotels/model/slices/favoriteHotelsSlice';

interface FavoriteHotelsProps {
    className?: string;
    onFavoriteClick: (hotel: Hotel) => void;
}

export const FavoriteHotels = memo((props: FavoriteHotelsProps) => {
    const {
        className,
        onFavoriteClick
    } = props;
    const hotels = useSelector(getFavoriteHotels.selectAll);

    return (
        <Module className={classNames(cls.favoriteHotels, {}, [className])}>
            <Typography
                className={cls.favoriteTitle}
                weight={'medium'}
                variant={'h3'}
                size={'L'}
            >Избранное</Typography>

            <HotelsList
                onFavoriteClick={onFavoriteClick}
                className={cls.favoriteHotelsList}
                view={'small'}
                hotels={hotels}
                isLoading={false}
                checkIn={''}
                checkOutDays={''}
            />
        </Module>
    );
});


