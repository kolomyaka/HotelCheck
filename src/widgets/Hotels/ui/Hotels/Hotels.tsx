import classNames from 'classnames';
import cls from './Hotels.module.scss';
import { memo } from 'react';
import { Module } from 'shared/ui/Module/Module';
import { Typography } from 'shared/ui/Typography/Typography';
import { HotelsHeader } from '../HotelsHeader/HotelsHeader';
import { useSelector } from 'react-redux';
import {
    getHotelsData,
    getHotelsDataCheckIn,
    getHotelsDataCheckOut,
    getHotelsDataLocation,
    HotelsList
} from 'entities/Hotel';
import { getSearchHotelsFormIsLoading } from 'features/SearchHotelsForm/model/selectors/getSearchHotelsFormData';

interface HotelsProps {
    className?: string
}

export const Hotels = memo(({ className }: HotelsProps) => {
    const hotels = useSelector(getHotelsData);
    const isLoading = useSelector(getSearchHotelsFormIsLoading);
    const checkIn = useSelector(getHotelsDataCheckIn);
    const checkOut = useSelector(getHotelsDataCheckOut);
    const location = useSelector(getHotelsDataLocation);

    return (
        <Module className={classNames(cls.hotels, {}, [className])}>
            <HotelsHeader
                location={location}
                checkIn={checkIn}
            />
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


