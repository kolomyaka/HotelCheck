import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootSaga from './saga';
import { StateSchema } from './StateSchema';
import { loginReducer } from 'features/AuthByEmail';
import { userReducer } from 'entities/User';
import { searchHotelsFormReducer } from 'features/SearchHotelsForm';
import { hotelsReducer } from 'entities/Hotel';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
};

const rootReducer = combineReducers<StateSchema>({
    login: loginReducer,
    user: userReducer,
    searchHotels: searchHotelsFormReducer,
    hotelsData: hotelsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat([sagaMiddleware]),
});
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

