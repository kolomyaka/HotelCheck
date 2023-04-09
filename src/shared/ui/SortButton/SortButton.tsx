import classNames from 'classnames';
import cls from './SortButton.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { Typography } from 'shared/ui/Typography/Typography';
import SortUpIcon from 'shared/assets/icons/sortUpArrow.svg';
import SortDownIcon from 'shared/assets/icons/sortDownArrow.svg';
import { Mods } from 'shared/types/Mods';
import { typedMemo } from 'shared/lib/helpers/typedMemo/typedMemo';
import { OrderBy } from 'shared/types/OrderBy';

interface SortButtonProps<T extends string> {
    className?: string;
    text: string;
    type: T;
    onChangeSortHandler: (type: T, order: OrderBy) => void
    sortType?: T;
}

export const SortButtonComponent = <T extends string>(props: SortButtonProps<T>) => {
    const {
        className,
        text,
        type,
        sortType,
        onChangeSortHandler
    } = props;
    const [order, setOrder] = useState<OrderBy>('asc');

    const onSortButtonClick = useCallback(() => {
        onChangeSortHandler(type, order);

        setOrder(order === 'asc' ? 'desc' : 'asc');
    }, [onChangeSortHandler, order, type]);

    const sortButtonMods: Mods = {
        [cls.active]: sortType === type
    };

    const sortUpArrowMods: Mods = {
        [cls.active]: order === 'asc' && sortType === type
    };

    const sortDownArrowMods: Mods = {
        [cls.active]: order === 'desc' && sortType === type
    };

    useEffect(() => {
        if (sortType !== type) {
            setOrder('asc');
        }
    }, [sortType, type]);


    return (
        <div onClick={onSortButtonClick} className={classNames(cls.sortButton, sortButtonMods, [className])}>
            <Typography color={sortType === type ? 'dark' : 'gray'} size={'S'}>{text}</Typography>
            <div className={cls.sortIcons}>
                <SortUpIcon className={classNames(cls.sortArrow, sortUpArrowMods)} />
                <SortDownIcon className={classNames(cls.sortArrow, sortDownArrowMods)} />
            </div>
        </div>
    );
};

export const SortButton = typedMemo(SortButtonComponent);


