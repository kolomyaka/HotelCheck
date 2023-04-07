import classNames from 'classnames';
import cls from './Hotels.module.scss';
import { memo } from 'react';
import { Module } from 'shared/ui/Module/Module';
import { Typography } from 'shared/ui/Typography/Typography';
import { HotelsHeader } from '../HotelsHeader/HotelsHeader';

interface HotelsProps {
    className?: string
}

export const Hotels = memo(({ className }: HotelsProps) => {
    return (
        <Module className={classNames(cls.hotels, {}, [className])}>
            <HotelsHeader />
            <div className={cls.favoritesCount}>
                <Typography
                    variant={'span'}
                >
                    Добавлено в избранное
                </Typography>
                <Typography
                    weight={'medium'}
                    variant={'span'}
                >
                    3
                </Typography>
                <Typography
                    variant={'span'}
                >
                    отеля
                </Typography>
            </div>
        </Module>
    );
});


