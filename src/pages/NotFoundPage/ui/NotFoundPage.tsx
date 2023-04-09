import cls from './NotFoundPage.module.scss';
import classNames from 'classnames';
import { Module } from 'shared/ui/Module/Module';
import { Typography } from 'shared/ui/Typography/Typography';
import { Button } from 'shared/ui/Button/Button';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const NotFoundPage = () => {
    const navigate = useNavigate();
    const onMainPageHandler = useCallback(() => {
        navigate(RoutePath.main);
    }, [navigate]);

    return (
        <div className={classNames(cls.notFoundPage)}>
            <Module className={cls.notFoundPageModule}>
                <Typography
                    className={cls.notFoundText}
                    variant={'h2'}
                    size={'XL'}
                    align={'center'}
                >
                    Страница не найдена
                </Typography>
                <Typography
                    className={cls.notFoundText}
                    size={'L'}
                    align={'center'}
                >
                    Проверьте введеный адрес или вернитесь на главную страницу
                </Typography>
                <Button onClick={onMainPageHandler}>
                    На главную
                </Button>
            </Module>
        </div>
    );
};


