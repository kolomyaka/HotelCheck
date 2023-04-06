import classNames from 'classnames';
import cls from './Module.module.scss';
import { HTMLAttributes, ReactNode } from 'react';

interface ModuleProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Module = (props: ModuleProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div className={classNames(cls.module, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
};


