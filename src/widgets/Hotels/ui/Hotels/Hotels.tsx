import classNames from 'classnames';
import cls from './Hotels.module.scss';
import { memo } from 'react';
import { Module } from 'shared/ui/Module/Module';
import { Typography } from 'shared/ui/Typography/Typography';
import { HotelsHeader } from '../HotelsHeader/HotelsHeader';
import { HotelsList } from 'entities/Hotel';
import { useSelector } from 'react-redux';
import {
    getHotelsData,
    getHotelsDataCheckIn,
    getHotelsDataCheckOut,
    getHotelsDataIsLoading
} from 'entities/Hotel';

interface HotelsProps {
    className?: string
}

export const Hotels = memo(({ className }: HotelsProps) => {
    const hotels = useSelector(getHotelsData);
    const isLoading = useSelector(getHotelsDataIsLoading);
    const checkIn = useSelector(getHotelsDataCheckIn);
    const checkOut = useSelector(getHotelsDataCheckOut);

    return (
        <Module className={classNames(cls.hotels, {}, [className])}>
            <HotelsHeader />
            <div className={cls.favoritesCount}>
                <Typography variant={'p'}>
                    <span>Добавлено в Избранное:</span>
                    <span>3</span>
                    <span>отеля</span>
                </Typography>
            </div>
            <HotelsList
                hotels={hotels}
                checkIn={checkIn}
                checkOutDays={checkOut}
                isLoading={isLoading}
                className={cls.hotelsList}
            />
        </Module>
    );
});


