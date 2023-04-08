import classNames from 'classnames';
import cls from './HotelsContent.module.scss';
import { memo } from 'react';
import { HotelsHeader } from '../HotelsHeader/HotelsHeader';
import { Module } from 'shared/ui/Module/Module';
import { useSelector } from 'react-redux';
import { HotelsList } from '../HotelsList/HotelsList';
import {
    getHotelsData,
    getHotelsDataCheckIn,
    getHotelsDataCheckOut,
    getHotelsDataLocation,
} from '../../model/selectors/getHotelsData';
import { HotelsFavoritesCount } from '../HotelsFavoritesCount/HotelsFavoritesCount';
import { Hotel } from 'entities/Hotel';
import { EntityId } from '@reduxjs/toolkit';

interface HotelsComponentProps {
    className?: string;
    isLoading: boolean;
    onFavoriteClick: (hotel: Hotel, checkIn:string, checkOutDays:string) => void;
    favoriteHotelsIds: EntityId[];
}

export const HotelsContent = memo((props: HotelsComponentProps) => {
    const {
        className,
        isLoading,
        favoriteHotelsIds,
        onFavoriteClick
    } = props;
    const hotels = useSelector(getHotelsData);
    const checkIn = useSelector(getHotelsDataCheckIn);
    const checkOut = useSelector(getHotelsDataCheckOut);
    const location = useSelector(getHotelsDataLocation);

    return (
        <Module className={classNames(cls.hotels, {}, [className])}>
            <HotelsHeader
                location={location}
                checkIn={checkIn}
            />
            <HotelsFavoritesCount />
            <HotelsList
                favoriteHotelsIds={favoriteHotelsIds}
                onFavoriteClick={onFavoriteClick}
                hotels={hotels}
                checkIn={checkIn}
                checkOutDays={checkOut}
                isLoading={isLoading}
                className={cls.hotelsList}
            />
        </Module>
    );
});


