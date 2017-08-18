import defaultsDeep from 'lodash/defaultsDeep';

import base from './base';


export default defaultsDeep({
  api: {
    serverUrl: '/',
    clientUrl: '/',
  },
  name: 'production',
}, base);
