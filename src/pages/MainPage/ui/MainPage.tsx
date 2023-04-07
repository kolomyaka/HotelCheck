import cls from './MainPage.module.scss';
import classNames from 'classnames';
import { Header } from 'widgets/Header';
import { SearchHotelsForm } from 'features/SearchHotelsForm';
import { FavoritesHotels } from 'widgets/FavoritesHotels/ui/FavoritesHotels';
import { Hotels } from 'widgets/Hotels';

export const MainPage = () => {
    return (
        <div className={classNames(cls.mainPage)}>
            <Header />
            <main className={cls.contentWrapper}>
                <section className={cls.leftSide}>
                    <SearchHotelsForm className={cls.sideWrapper} />
                    <FavoritesHotels />
                </section>
                <section className={cls.rightSide}>
                    <Hotels />
                </section>
            </main>
        </div>
    );
};


