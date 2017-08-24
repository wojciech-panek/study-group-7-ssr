import 'babel-polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Helmet from 'react-helmet';
import configureStore from './modules/store';
import App from './routes';
import HtmlDocument from './htmlDocument';
import rootSaga from './modules/sagas';
import Cache from './modules/cache/cache';


function renderAppToString(store, url, context, userAgent) {
  return renderToString(
    <Provider store={store}>
      <StaticRouter
        location={url}
        context={context}
      >
        <App userAgent={userAgent} />
      </StaticRouter>
    </Provider>
  );
}

function renderAppToStringAtLocation(url, { webpackDllNames = [], assets, hostUrl, userAgent }, callback) {
  const context = {};
  const store = configureStore();

  const cachedView = Cache.getView(url);

  if (cachedView) {
    console.log('view cache hit', url);
    callback({ html: cachedView });
    return;
  }

  store.runSaga(rootSaga).done.then(() => {
    const state = store.getState().toJS();
    const appMarkup = renderAppToString(store, url, context, userAgent);

    const doc = renderToString(
      <HtmlDocument
        appMarkup={appMarkup}
        state={state}
        head={Helmet.rewind()}
        assets={assets}
        webpackDllNames={webpackDllNames}
      />
    );

    const html = `<!DOCTYPE html>\n${doc}`;
    Cache.setView(url, html);
    callback({ html });
  }).catch((e) => {
    callback({ error: e });
  });

  renderAppToString(store, url, context);

  if (context.url) {
    callback({ redirectLocation: context.url });
  } else {
    store.close();
  }
}

export {
  renderAppToStringAtLocation,
};
