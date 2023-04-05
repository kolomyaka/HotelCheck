import classNames from 'classnames';
import cls from './Input.module.scss';
import { memo } from 'react';

interface InputProps {
    className?: string;
    label?: string;
    type?: 'text' | 'date' | 'password';
    error?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        label,
        type = 'text',
        error
    } = props;


    return (
        <label className={classNames(cls.input, {}, [className])}>
            <p className={cls.label}>{label}</p>
            <input type={type} />
            {error&& <p className={cls.error}>{error}</p>}
        </label>
    );
});


