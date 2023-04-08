import moment from 'moment';

export const usualDate = (date = '') => moment(date).format('DD MMMM YYYY');