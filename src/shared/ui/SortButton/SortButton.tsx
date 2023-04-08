import classNames from 'classnames';
import cls from './SortButton.module.scss';
import { memo, useCallback, useState } from 'react';
import { Typography } from 'shared/ui/Typography/Typography';
import SortUpIcon from 'shared/assets/icons/sortUpArrow.svg';
import SortDownIcon from 'shared/assets/icons/sortDownArrow.svg';
interface SortButtonProps {
    className?: string;
    text: string;
    type: string;
    onChangeSortHandler: (type: string, order: string) => void
}

export const SortButton = memo((props: SortButtonProps) => {
    const {
        className,
        text,
        type,
        onChangeSortHandler
    } = props;
    const [order, setOrder] = useState('asc');

    const onSortButtonClick = useCallback(() => {
        onChangeSortHandler(type, order);

        setOrder(order === 'asc' ? 'desc' : 'asc');
    }, [onChangeSortHandler, order, type]);

    return (
        <div onClick={onSortButtonClick} className={classNames(cls.sortButton, {}, [className])}>
            <Typography color={'gray'} size={'S'}>{text}</Typography>
            <div className={cls.sortIcons}>
                <SortUpIcon />
                <SortDownIcon />
            </div>
        </div>
    );
});


