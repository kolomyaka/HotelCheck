import cls from './Button.module.scss';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: 'default' | 'clear';
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = 'default',
        ...otherProps
    } = props;


    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});


