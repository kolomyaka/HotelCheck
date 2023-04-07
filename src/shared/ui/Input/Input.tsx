import classNames from 'classnames';
import cls from './Input.module.scss';
import { InputHTMLAttributes, memo } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'name'>

interface InputProps extends HTMLInputProps {
    className?: string;
    label?: string;
    type?: 'text' | 'date' | 'password' | 'number';
    error?: string;
    name?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        name = 'input',
        label,
        type = 'text',
        error,
        onChange,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <label
            className={classNames(cls.inputWrapper, {}, [className])}
        >
            {label&&<p className={cls.label}>{label}</p>}
            <input
                {...otherProps}
                value={value}
                type={type}
                className={cls.input}
                onChange={onChangeHandler}
            />
            {error && <p className={cls.error}>{error}</p>}
        </label>
    );
});


