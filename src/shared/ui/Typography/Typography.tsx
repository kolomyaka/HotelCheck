import classNames from 'classnames';
import cls from './Typography.module.scss';
import { memo } from 'react';

interface TypographyProps {
    children: string;
    className?: string;
    variant?: 'p' | 'h1' | 'h2' | 'h3' | 'span';
    color?: 'dark' | 'light' | 'green';
    size?: 'XL' | 'L' | 'M';
    align?: 'center' | 'left' | 'right';
    weight?: 'medium' | 'regular' | 'light';
}

export const Typography = memo((props: TypographyProps) => {
    const {
        className,
        variant = 'p',
        color = 'dark',
        size = 'M',
        align = 'left',
        weight = 'regular',
        children
    } = props;
    const Component = variant;

    return (
        <Component
            className={classNames(
                '',
                {},
                [className, cls[variant], cls[color], cls[size], cls[align], cls[weight]]
            )}
        >
            {children}
        </Component>
    );
});


