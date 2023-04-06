import { takeEvery, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { loginActions } from '../slices/loginSlice';
import { UserData } from '../types/LoginSchema';
import { loginValidatedSchema } from './loginValidatedSchema';
import { userActions } from 'entities/User';

function* workValidateLoginData({ payload }: PayloadAction<UserData>) {
    try {
        yield loginValidatedSchema.validate({ email: payload.email, password: payload.password });
        yield put(loginActions.validateUserDataSuccess());

        yield put(userActions.setUserData(payload.email));
    } catch (error) {
        yield put(loginActions.setErrorFields({ field: error.path, message: error.message }));
    }
}

function* loginSaga() {
    yield takeEvery(loginActions.validateUserData, workValidateLoginData);
}

export default loginSaga;