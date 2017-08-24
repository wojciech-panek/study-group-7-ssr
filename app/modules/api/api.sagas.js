import envConfig from 'env-config';
import { call } from 'redux-saga/effects';
import { assign } from 'lodash';
import { stringify } from 'query-string';
import Cache from '../cache/cache';


export function parseJSON(response) {
  return response.json();
}

function getUrl(url) {
  if (__CLIENT__) {
    return envConfig.api.clientUrl + url;
  }
  if (__SERVER__) {
    return envConfig.api.serverUrl + url;
  }
  return null;
}

export function* requestSaga(url, options) {
  const headers = {
    'Content-Type': 'application/json',
  };

  const cachedResponse = Cache.getRequest(url);
  if (cachedResponse) {
    console.log('request cache hit', url);
    return cachedResponse;
  }

  try {
    const response = yield call(fetch, url, assign({ headers }, options));
    const parsedResponse = yield call(parseJSON, response);
    Cache.setRequest(url, parsedResponse);
    return parsedResponse;
  } catch (e) {
    return yield call(parseJSON, e);
  }
}

export function* get(url, body = {}, options = {}) {
  return yield call(requestSaga, `${getUrl(url)}?${stringify(body)}`, assign({ method: 'GET' }, options));
}

export function* post(url, body = {}, options = {}) {
  return yield call(requestSaga, url, assign({ method: 'POST', body }, options));
}
