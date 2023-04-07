export {
    hotelsReducer,
    hotelsActions
} from './model/slices/hotelsSlice';

export {
    HotelsSchema,
    Hotel
} from './model/types/HotelsSchema';

export {
    getHotelsData,
    getHotelsDataCheckOut,
    getHotelsDataCheckIn,
    getHotelsDataIsLoading
} from './model/selectors/getHotelsData';

export {
    HotelsList
} from './ui/HotelsList/HotelsList';