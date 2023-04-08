import moment from 'moment';

export const betweenDates = (checkIn: string, checkOut: string, plusDays?: string) => {
    const start = moment(checkIn);
    const end = checkOut ? moment(checkOut) : moment(checkIn).add(plusDays, 'days');
    return `${start.diff(end, 'days')} день`;
};