import classNames from 'classnames';
import cls from './Input.module.scss';
import React, { InputHTMLAttributes } from 'react';
import { typedMemo } from 'shared/lib/helpers/typedMemo/typedMemo';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'name'>

interface InputProps<T extends string> extends HTMLInputProps {
    className?: string;
    label?: string;
    type?: 'text' | 'date' | 'password';
    error?: string;
    name?: T;
    value?: string;
    onlyNum?: boolean;
    onChange?: (value: string, name: T) => void;
}

const InputComponent = <T extends string>(props: InputProps<T>) => {
    const {
        className,
        value,
        name = 'input',
        label,
        type = 'text',
        onlyNum = false,
        error,
        onChange,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isNumeric = /^\d+$/.test(e.target.value);

        if (onlyNum && e.target.value !== '' && !isNumeric) {
            return;
        }

        onChange?.(e.target.value, e.target.name as T);
    };

    return (
        <label
            className={classNames(cls.inputWrapper, {}, [className])}
        >
            {label&&<p className={cls.label}>{label}</p>}
            <input
                {...otherProps}
                value={value}
                name={name}
                type={type}
                className={cls.input}
                onChange={onChangeHandler}
            />
            {error && <p className={cls.error}>{error}</p>}
        </label>
    );
};

export const Input = typedMemo(InputComponent);


