import cls from './HotelsFavoritesCount.module.scss';
import { memo } from 'react';
import { Typography } from 'shared/ui/Typography/Typography';

interface HotelsFavoritesCountProps {
    className?: string
}

export const HotelsFavoritesCount = memo(({ className }: HotelsFavoritesCountProps) => {
    return (
        <div className={cls.favoritesCount}>
            <Typography variant={'span'}>
                Добавлено в избранное
            </Typography>
            <Typography variant={'span'}>
                3
            </Typography>
            <Typography variant={'span'}>
                отеля
            </Typography>
        </div>
    );
});


