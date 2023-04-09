import moment from 'moment';
import { declOfNum } from 'shared/lib/helpers/declOfNum/declOfNum';

export const betweenDates = (checkIn: string, checkOut: string, plusDays?: string) => {
    const start = moment(checkIn);
    const end = checkOut ? moment(checkOut) : moment(checkIn).add(plusDays, 'days');
    const daysCount = start.diff(end, 'days');
    return `${daysCount} ${declOfNum(daysCount, ['день', 'дня', 'дней'])}`;
};