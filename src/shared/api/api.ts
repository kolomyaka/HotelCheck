import axios from 'axios';

// Настраиваем конфиг для axios
export const $api = axios.create({
    baseURL: 'http://engine.hotellook.com/api/v2/cache.json',
    params: {
        currency:'rub'
    }
});