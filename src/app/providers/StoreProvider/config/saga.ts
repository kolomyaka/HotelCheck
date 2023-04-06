import { all } from 'redux-saga/effects';
import { loginSaga } from 'features/AuthByEmail';


export default function* rootSaga() {
    yield all([loginSaga()]);
}