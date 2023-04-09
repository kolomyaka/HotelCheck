import classNames from 'classnames';
import cls from './FavoriteHotelsFilterGroup.module.scss';
import { memo, useCallback } from 'react';
import { SortButton } from 'shared/ui/SortButton/SortButton';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getSortedType } from '../../model/selectors/getSortedHotels';
import { favoriteHotelsActions } from '../../model/slices/favoriteHotelsSlice';
import { SortBy } from '../../model/types/FavoriteHotelsSchema';
import { OrderBy } from 'shared/types/OrderBy';

interface FavoriteHotelsFilterGroupProps {
    className?: string
}

export const FavoriteHotelsFilterGroup = memo(({ className }: FavoriteHotelsFilterGroupProps) => {
    const dispatch = useAppDispatch();
    const sortType = useSelector(getSortedType);

    const onChangeSortHandler = useCallback((type: SortBy, order: OrderBy) => {
        dispatch(favoriteHotelsActions.sortBy({
            sortBy: type,
            orderBy: order
        }));
    }, [dispatch]);
    

    return (
        <div className={classNames(cls.favoriteHotelsFilterGroup, {}, [className])}>
            <SortButton
                sortType={sortType}
                type={'stars'}
                onChangeSortHandler={onChangeSortHandler}
                text={'Рейтинг'}
            />
            <SortButton
                sortType={sortType}
                type={'priceAvg'}
                onChangeSortHandler={onChangeSortHandler}
                text={'Цена'}
            />
        </div>
    );
});


