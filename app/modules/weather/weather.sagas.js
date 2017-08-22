import { call, put, takeLatest } from 'redux-saga/effects';
import envConfig from 'env-config';

import { WeatherActions, WeatherTypes } from './weather.redux';
import { get } from '../api/api.sagas';


export function* getWeatherSaga({ lat, lon }) {
  try {
    const data = yield call(get, 'api/openweathermap/', {
      lat,
      lon,
      appid: envConfig.openweathermap.apiKey,
    });

    yield put(WeatherActions.getWeatherSuccess(data));
  } catch (e) {
    yield put(WeatherActions.getWeatherFailure(e));
  }
}

export default function* weatherSaga() {
  yield takeLatest(WeatherTypes.GET_WEATHER, getWeatherSaga);
}
