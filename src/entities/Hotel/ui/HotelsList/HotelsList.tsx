import classNames from 'classnames';
import cls from './HotelsList.module.scss';
import { memo, useCallback } from 'react';
import { Hotel } from 'entities/Hotel';
import { Typography } from 'shared/ui/Typography/Typography';
import { HotelListItem } from '../HotelListItem/HotelListItem';
import { EntityId } from '@reduxjs/toolkit';
import { Loader } from 'shared/ui/Loader/Loader';

interface HotelsListProps {
    className?: string
    hotels: Hotel[]
    isLoading: boolean;
    checkIn: string;
    checkOutDays: string;
    view?: 'small' | 'default';
    onFavoriteClick: (hotel: Hotel, checkIn: string, checkOutDays: string) => void;
    favoriteHotelsIds: EntityId[];
}

export const HotelsList = memo((props: HotelsListProps) => {
    const {
        className,
        isLoading,
        hotels,
        checkIn,
        view = 'default',
        checkOutDays,
        favoriteHotelsIds,
        onFavoriteClick
    } = props;

    const renderHotelItem = useCallback((hotel: Hotel) => (
        <HotelListItem
            favoriteHotelsIds={favoriteHotelsIds}
            onFavoriteClick={onFavoriteClick}
            view={view}
            hotel={hotel}
            key={hotel.hotelId}
            checkIn={checkIn}
            checkOutDays={checkOutDays}
        />
    ), [checkIn, checkOutDays, favoriteHotelsIds, onFavoriteClick, view]);

    if (!isLoading && !hotels.length) {
        return <div className={cls.hotelsList}>
            <Typography
                align={'center'}
                size={'XL'}
                className={cls.hotelsListEmpty}
            >Нет результатов</Typography>
        </div>;
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.hotelsList, {}, [className, cls.loading])}>
                {isLoading&&<Loader />}
            </div>
        );
    }

    return (
        <div className={classNames(cls.hotelsList, {}, [className])}>
            {hotels.map(renderHotelItem)}
        </div>
    );
});


