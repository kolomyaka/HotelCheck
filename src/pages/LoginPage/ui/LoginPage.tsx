import cls from './LoginPage.module.scss';
import classNames from 'classnames';
import { AuthByEmail } from 'features/AuthByEmail';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useEffect } from 'react';

export const LoginPage = () => {
    const isAuth = useSelector(getUserData);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate(RoutePath.main);
        }
    }, [navigate, isAuth]);

    return (
        <div className={classNames(cls.loginPage)}>
            <AuthByEmail />
        </div>
    );
};


