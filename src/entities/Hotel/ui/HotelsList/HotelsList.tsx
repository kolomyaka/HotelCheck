import classNames from 'classnames';
import cls from './HotelsList.module.scss';
import { memo, useCallback } from 'react';
import { Hotel } from 'entities/Hotel';
import { Typography } from 'shared/ui/Typography/Typography';
import { HotelListItem } from '../HotelListItem/HotelListItem';

interface HotelsListProps {
    className?: string
    hotels: Hotel[]
    isLoading: boolean;
    checkIn: string;
    checkOutDays: string;
    view?: 'small' | 'default';
    onFavoriteClick: (hotel: Hotel) => void;
}

export const HotelsList = memo((props: HotelsListProps) => {
    const {
        className,
        isLoading,
        hotels,
        checkIn,
        view = 'default',
        checkOutDays,
        onFavoriteClick
    } = props;

    const renderHotelItem = useCallback((hotel: Hotel) => (
        <HotelListItem
            onFavoriteClick={onFavoriteClick}
            view={view}
            hotel={hotel}
            key={hotel.hotelId}
            checkIn={checkIn}
            checkOutDays={checkOutDays}
        />
    ), [checkIn, checkOutDays, onFavoriteClick, view]);

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


