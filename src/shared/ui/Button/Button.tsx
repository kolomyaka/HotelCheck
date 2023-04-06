import cls from './Button.module.scss';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;


    return (
        <button
            className={classNames(cls.button, {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});


