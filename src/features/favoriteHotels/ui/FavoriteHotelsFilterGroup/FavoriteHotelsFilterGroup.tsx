import classNames from 'classnames';
import cls from './FavoriteHotelsFilterGroup.module.scss';
import { memo, useCallback } from 'react';
import { SortButton } from 'shared/ui/SortButton/SortButton';

interface FavoriteHotelsFilterGroupProps {
    className?: string
}

export const FavoriteHotelsFilterGroup = memo(({ className }: FavoriteHotelsFilterGroupProps) => {
    const onChangeSortHandler = useCallback((type: string, order: string) => {
        console.log(type, order);
    }, []);

    return (
        <div className={classNames(cls.favoriteHotelsFilterGroup, {}, [className])}>
            <SortButton
                type={'stars'}
                onChangeSortHandler={onChangeSortHandler}
                text={'Рейтинг'}
            />
            <SortButton
                type={'price'}
                onChangeSortHandler={onChangeSortHandler}
                text={'Цена'}
            />
        </div>
    );
});


