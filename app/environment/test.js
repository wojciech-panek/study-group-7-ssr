import defaultsDeep from 'lodash/defaultsDeep';

import base from './base';


export default defaultsDeep({
  api: {
    serverUrl: 'http://localhost:4000/',
    clientUrl: '',
  },
}, base);
