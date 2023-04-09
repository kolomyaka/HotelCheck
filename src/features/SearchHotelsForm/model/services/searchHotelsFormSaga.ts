import { takeEvery, put, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { searchHotelsFormActions } from '../slices/searchHotelsFormSlice';
import { SagaIterator } from 'redux-saga';
import { hotelsApi } from '../api/hotelsApi';
import { hotelsActions, SearchHotelsFormData } from 'entities/Hotel';


function* workSearchHotelsData({ payload }: PayloadAction<SearchHotelsFormData>): SagaIterator {
    try {
        const data = yield call(hotelsApi.fetchHotels, payload);

        if (data) {
            yield put(searchHotelsFormActions.searchHotelsSuccess());
            yield put(hotelsActions.setHotelsData({
                hotelsData: data,
                form: {
                    checkIn: payload.checkIn,
                    checkOut: payload.checkOut,
                    location: payload.location
                }
            }));
        }
    } catch (err) {
        yield put(searchHotelsFormActions.searchHotelsError());
        yield put(hotelsActions.fetchHotelsDataRejected({
            checkIn: payload.checkIn,
            checkOut: payload.checkOut,
            location: payload.location
        }));
    }
}

function* searchHotelsFormSaga() {
    yield takeEvery(searchHotelsFormActions.searchHotelsData, workSearchHotelsData);
}

export default searchHotelsFormSaga;