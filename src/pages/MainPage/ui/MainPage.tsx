import { useSelector } from 'react-redux';
import cls from './MainPage.module.scss';
import classNames from 'classnames';
import { Header } from 'widgets/Header';
import { getSearchHotelsFormIsLoading, SearchHotelsForm } from 'features/SearchHotelsForm';
import { Hotel, HotelsContent } from 'entities/Hotel';
import { FavoriteHotels, favoriteHotelsActions,getFavoriteHotelsIds } from 'features/favoriteHotels';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const MainPage = () => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getSearchHotelsFormIsLoading);
    const favoriteHotelsIds = useSelector(getFavoriteHotelsIds);
    
    const favoriteClickHandler = useCallback((hotel: Hotel, checkIn: string, checkOutDays: string) => {
        if (favoriteHotelsIds.includes(hotel.hotelId)) {
            dispatch(favoriteHotelsActions.removeFromFavorite(hotel.hotelId));
        } else {
            dispatch(favoriteHotelsActions.addToFavorite({
                ...hotel,
                checkIn,
                checkOut: checkOutDays
            }));
        }
    }, [dispatch, favoriteHotelsIds]);

    return (
        <div className={classNames(cls.mainPage)}>
            <Header />
            <main className={cls.contentWrapper}>
                <section className={cls.leftSide}>
                    <SearchHotelsForm className={cls.sideWrapper} />
                    <FavoriteHotels
                        onFavoriteClick={favoriteClickHandler}
                    />
                </section>
                <section className={cls.rightSide}>
                    <HotelsContent
                        favoriteHotelsIds={favoriteHotelsIds}
                        onFavoriteClick={favoriteClickHandler}
                        isLoading={isLoading}
                    />
                </section>
            </main>
        </div>
    );
};


