import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { Hotel, HotelListItem } from 'entities/Hotel';
import { Typography } from 'shared/ui/Typography/Typography';
import { FavoriteHotel } from '../../model/types/FavoriteHotelsSchema';

interface FavoriteListProps {
    className?: string
    hotels: FavoriteHotel[]
    isLoading: boolean;
    view?: 'small' | 'default';
    onFavoriteClick: (hotel: Hotel, checkIn: string, checkOutDays: string) => void;
    favoriteHotelsIds: number[];
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
        return <Typography align={'center'}>Нет результатов</Typography>;
    }

    if (isLoading) {
        return (
            <div className={classNames('', {}, [className])}>
                {isLoading&&<Typography>Идет загрузка</Typography>}
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className])}>
            {hotels.map(renderHotelItem)}
        </div>
    );
});


