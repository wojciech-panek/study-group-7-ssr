import { all } from 'redux-saga/effects';

import weatherSagas from './weather/weather.sagas';


export default function* rootSaga() {
  yield all([
    weatherSagas(),
  ]);
}
