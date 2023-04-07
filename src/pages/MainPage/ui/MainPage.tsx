import cls from './MainPage.module.scss';
import classNames from 'classnames';
import { Header } from 'widgets/Header';
import { SearchHotelForm } from 'features/SearchHotelForm';

export const MainPage = () => {
    return (
        <div className={classNames(cls.mainPage)}>
            <Header />
            <main className={cls.contentWrapper}>
                <section className={cls.leftSide}>
                    <SearchHotelForm className={cls.sideWrapper} />
                </section>
                <section className={cls.rightSide}>
                </section>
            </main>
        </div>
    );
};


