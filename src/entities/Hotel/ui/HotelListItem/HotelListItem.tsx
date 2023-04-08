import classNames from 'classnames';
import cls from './HotelListItem.module.scss';
import { memo, useCallback } from 'react';
import { Hotel } from 'entities/Hotel';
import HotelIcon from 'shared/assets/icons/hotelIcon.svg';
import { Typography } from 'shared/ui/Typography/Typography';
import { usualDate } from 'shared/lib/helpers/usualDate/usualDate';
import { betweenDates } from 'shared/lib/helpers/betweenDates/betweenDates';
import { StarsGroup } from '../StarsGroup/StarsGroup';
import FavoriteIcon from 'shared/assets/icons/favoriteIcon.svg';
import { EntityId } from '@reduxjs/toolkit';

interface HotelListItemProps {
    className?: string;
    hotel: Hotel;
    checkIn: string;
    checkOutDays: string;
    view: 'small' | 'default';
    onFavoriteClick: (hotel: Hotel, checkIn: string, checkOutDays: string) => void;
    favoriteHotelsIds: EntityId[];
}

export const HotelListItem = memo((props: HotelListItemProps) => {
    const {
        className,
        hotel,
        checkIn,
        checkOutDays,
        view,
        favoriteHotelsIds,
        onFavoriteClick
    } = props;

    const onFavoriteClickHandler = useCallback(() => {
        onFavoriteClick?.(hotel, checkIn, checkOutDays);
    }, [checkIn, checkOutDays, hotel, onFavoriteClick]);

    return (
        <div className={classNames(cls.hotelListItem, {}, [className, cls[view]])}>
            {view === 'default' && <HotelIcon/>}
            <div className={cls.hotelData}>
                <div className={cls.hotelInfo}>
                    <Typography className={cls.hotelName} weight={'light'}>{hotel.hotelName}</Typography>
                    <Typography className={cls.datesInfo} color={'gray'} size={'S'}>
                        <span>{usualDate(checkIn)}</span>
                        <span className={cls.dash}>—</span>
                        <span>{betweenDates(checkOutDays, checkIn)}</span>
                    </Typography>
                    <StarsGroup stars={hotel.stars} />
                </div>
                <div className={classNames(cls.hotelInfo, {}, [cls.hotelRightSide])}>
                    <FavoriteIcon
                        className={classNames(
                            cls.favoriteIcon,
                            { [cls.active]: favoriteHotelsIds.includes(hotel.hotelId) }
                        )}
                        onClick={onFavoriteClickHandler}
                    />
                    <Typography
                        className={cls.hotelPrice}
                        weight={'light'}
                        size={'S'}
                        color={'gray'}
                        variant={'p'}
                    >Price:
                        <Typography variant={'span'} color={'dark'}>{hotel.priceAvg} ₽</Typography>
                    </Typography>
                </div>
            </div>
        </div>
    );
    
});


