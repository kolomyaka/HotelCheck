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
    getHotelsDataIsLoading,
    getHotelsDataLocation
} from './model/selectors/getHotelsData';

export {
    HotelsList
} from './ui/HotelsList/HotelsList';

export {
    SearchHotelsFormData
} from './model/types/HotelsSchema';