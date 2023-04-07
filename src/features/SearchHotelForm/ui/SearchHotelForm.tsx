import classNames from 'classnames';
import cls from './SearchHotelForm.module.scss';
import { memo } from 'react';
import { Module } from 'shared/ui/Module/Module';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface SearchHotelFormProps {
    className?: string
}

export const SearchHotelForm = memo(({ className }: SearchHotelFormProps) => {
    return (
        <Module className={classNames(cls.searchHotelForm, {}, [className])}>
            <div className={cls.formWrapper}>
                <Input
                    label={'Локация'}
                />
                <Input
                    label={'Дата заселения'}
                    type={'date'}
                />
                <Input
                    label={'Количество дней'}
                    type={'number'}
                />
            </div>
            <Button>
                Найти
            </Button>
        </Module>
    );
});


