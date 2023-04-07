import { all } from 'redux-saga/effects';
import { loginSaga } from 'features/AuthByEmail';
import searchHotelsFormSaga from 'features/SearchHotelsForm';


export default function* rootSaga() {
    yield all([loginSaga(), searchHotelsFormSaga()]);
}