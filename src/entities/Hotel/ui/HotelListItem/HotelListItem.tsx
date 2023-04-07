import classNames from 'classnames';
import cls from './HotelListItem.module.scss';
import { memo } from 'react';
import { Hotel } from 'entities/Hotel';
import HotelIcon from 'shared/assets/icons/hotelIcon.svg';
import { Typography } from 'shared/ui/Typography/Typography';
import moment from 'moment';

interface HotelListItemProps {
    className?: string;
    hotel: Hotel;
    withPhoto?: boolean;
    checkIn: string;
    checkOutDays: string;
}

export const HotelListItem = memo((props: HotelListItemProps) => {
    const {
        className,
        withPhoto = true,
        hotel,
        checkIn,
        checkOutDays
    } = props;

    return (
        <div className={classNames(cls.hotelListItem, {}, [className])}>
            {withPhoto&&<HotelIcon/>}
            <div className={cls.hotelData}>
                <div className={cls.HotelInfo}>
                    <Typography weight={'light'}>{hotel.hotelName}</Typography>
                    <Typography color={'gray'} size={'S'}>
                        <span>{moment(checkIn).format('DD MMMM YYYY')}</span>
                        <span className={cls.dash}>—</span>
                        <span>{checkOutDays}</span>
                    </Typography>
                </div>
            </div>
        </div>
    );
});


