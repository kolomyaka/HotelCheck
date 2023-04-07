import classNames from 'classnames';
import cls from './Header.module.scss';
import { memo, useCallback } from 'react';
import { Typography } from 'shared/ui/Typography/Typography';
import LogoutIcon from 'shared/assets/icons/logoutIcon.svg';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { userActions } from 'entities/User';

interface HeaderProps {
    className?: string
}

export const Header = memo(({ className }: HeaderProps) => {
    const dispatch = useAppDispatch();

    const onLogoutHandler = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <header className={classNames(cls.header, {}, [className])}>
            <Typography
                variant={'h1'}
                weight={'medium'}
                size={'L'}
            >Simple Hotel Check</Typography>

            <Button
                theme={'clear'}
                className={cls.logoutWrapper}
                onClick={onLogoutHandler}
            >
                <Typography>
                    Выйти
                </Typography>
                <LogoutIcon />
            </Button>
        </header>
    );
});


