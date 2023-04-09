import cls from './HotelsFavoritesCount.module.scss';
import { memo } from 'react';
import { Typography, TypographyProps } from 'shared/ui/Typography/Typography';
import { declOfNum } from 'shared/lib/helpers/declOfNum/declOfNum';

interface HotelsFavoritesCountProps {
    count: number;
}

export const HotelsFavoritesCount = memo(({ count }: HotelsFavoritesCountProps) => {
    const favoriteHotelsText: Omit<TypographyProps, 'children'> = {
        variant: 'span',
        weight: 'light'
    };

    return (
        <div className={cls.favoritesCount}>
            <Typography {...favoriteHotelsText}>
                Добавлено в избранное:
            </Typography>
            <Typography variant={'span'}>
                {count}
            </Typography>
            <Typography {...favoriteHotelsText}>
                {declOfNum(count, ['отель', 'отеля', 'отелей'])}
            </Typography>
        </div>
    );
});


