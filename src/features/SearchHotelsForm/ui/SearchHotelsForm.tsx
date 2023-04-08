import classNames from 'classnames';
import cls from './SearchHotelForm.module.scss';
import { memo, useCallback } from 'react';
import { Module } from 'shared/ui/Module/Module';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { getSearchHotelsFormData, getSearchHotelsFormIsLoading } from '../model/selectors/getSearchHotelsFormData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { searchHotelsFormActions } from '../model/slices/searchHotelsFormSlice';
import moment from 'moment';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { SearchHotelsFormData } from 'entities/Hotel';

interface SearchHotelFormProps {
    className?: string
}

export const SearchHotelsForm = memo(({ className }: SearchHotelFormProps) => {
    const dispatch = useAppDispatch();
    const { checkIn, location, checkOut } = useSelector(getSearchHotelsFormData);
    const isLoading = useSelector(getSearchHotelsFormIsLoading);

    useInitialEffect(() => {
        const checkOutDate = moment(checkIn).add(checkOut, 'days').format('YYYY-MM-DD');
        dispatch(searchHotelsFormActions.searchHotelsData({
            location,
            checkIn,
            checkOut: checkOutDate
        }));
    });

    const onChangeFormField = useCallback((value: string, name: keyof SearchHotelsFormData) => {
        dispatch(searchHotelsFormActions.setFormField({ field: name, data: value }));
    }, [dispatch]);

    const searchHotelsHandler = useCallback(() => {
        const checkOutDate = moment(checkIn).add(checkOut, 'days').format('YYYY-MM-DD');
        dispatch(searchHotelsFormActions.searchHotelsData({
            location,
            checkIn,
            checkOut: checkOutDate
        }));
    }, [checkIn, checkOut, dispatch, location]);

    return (
        <Module className={classNames(cls.searchHotelForm, {}, [className])}>
            <div className={cls.formWrapper}>
                <Input
                    className={cls.formInput}
                    label={'Локация'}
                    value={location}
                    name={'location'}
                    onChange={onChangeFormField}
                />
                <Input
                    className={cls.formInput}
                    label={'Дата заселения'}
                    type={'date'}
                    value={checkIn}
                    name={'checkIn'}
                    onChange={onChangeFormField}
                />
                <Input
                    className={cls.formInput}
                    label={'Количество дней'}
                    onlyNum={true}
                    name={'checkOut'}
                    value={checkOut}
                    onChange={onChangeFormField}
                />
            </div>
            <Button
                onClick={searchHotelsHandler}
                disabled={isLoading}
            >
                Найти
            </Button>
        </Module>
    );
});


