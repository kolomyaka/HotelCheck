import classNames from 'classnames';
import cls from './AuthByEmail.module.scss';
import { memo, useCallback } from 'react';
import { Module } from 'shared/ui/Module/Module';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { Typography } from 'shared/ui/Typography/Typography';
import { useSelector } from 'react-redux';
import {
    getLoginEmail,
    getLoginEmailError, getLoginIsLoading,
    getLoginPassword,
    getLoginPasswordError
} from '../model/selectors/getLoginData';
import { loginActions } from '../model/slices/loginSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';


interface AuthUserProps {
    className?: string
}

export const AuthByEmail = memo(({ className }: AuthUserProps) => {
    const dispatch = useAppDispatch();
    const email = useSelector(getLoginEmail);
    const emailError = useSelector(getLoginEmailError);
    const password = useSelector(getLoginPassword);
    const passwordError = useSelector(getLoginPasswordError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeEmail = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback( () => {
        dispatch(loginActions.validateUserData({ email, password }));
    }, [email, password, dispatch]);

    return (
        <Module className={classNames(cls.authUser, {}, [className])}>
            <Typography
                variant={'h3'}
                size={'L'}
                weight={'medium'}
                align={'center'}
                className={cls.loginFormTitle}
            >
                Simple Hotel Check
            </Typography>
            <div className={classNames(cls.loginForm)}>
                <Input
                    name={'email'}
                    value={email}
                    label={'Логин'}
                    error={emailError}
                    className={cls.loginFormInput}
                    onChange={onChangeEmail}
                />
                <Input
                    name={'password'}
                    label={'Пароль'}
                    value={password}
                    error={passwordError}
                    type={'password'}
                    className={cls.loginFormInput}
                    onChange={onChangePassword}
                />
            </div>
            <Button
                disabled={isLoading}
                className={cls.submitButton}
                onClick={onLoginClick}
            >Войти</Button>
        </Module>
    );
});


