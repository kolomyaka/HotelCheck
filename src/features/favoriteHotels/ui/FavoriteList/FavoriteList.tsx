import classNames from 'classnames';
import cls from './FavoriteList.module.scss';
import { memo, useCallback } from 'react';
import { Hotel, HotelListItem } from 'entities/Hotel';
import { Typography } from 'shared/ui/Typography/Typography';
import { EntityId } from '@reduxjs/toolkit';
import { FavoriteHotel } from 'features/favoriteHotels/model/types/FavoriteHotelsSchema';

interface FavoriteListProps {
    className?: string
    hotels: FavoriteHotel[]
    isLoading: boolean;
    view?: 'small' | 'default';
    onFavoriteClick: (hotel: Hotel, checkIn: string, checkOutDays: string) => void;
    favoriteHotelsIds: EntityId[];
}

export const FavoriteList = memo((props: FavoriteListProps) => {
    const {
        className,
        isLoading,
        hotels,
        view = 'default',
        favoriteHotelsIds,
        onFavoriteClick
    } = props;

    const renderHotelItem = useCallback((hotel: FavoriteHotel) => (
        <HotelListItem
            favoriteHotelsIds={favoriteHotelsIds}
            onFavoriteClick={onFavoriteClick}
            view={view}
            hotel={hotel}
            key={hotel.hotelId}
            checkIn={hotel.checkIn}
            checkOutDays={hotel.checkOut}
        />
    ), [favoriteHotelsIds, onFavoriteClick, view]);

    if (!isLoading && !hotels.length) {
        return <Typography>Нет результатов</Typography>;
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.hotelsList, {}, [className])}>
                {isLoading&&<Typography>Идет загрузка</Typography>}
            </div>
        );
    }

    return (
        <div className={classNames(cls.hotelsList, {}, [className])}>
            {hotels.map(renderHotelItem)}
        </div>
    );
});


