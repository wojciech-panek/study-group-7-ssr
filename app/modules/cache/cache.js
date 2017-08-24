import NodeCache from 'node-cache';
import envConfig from 'env-config';


class Cache {
  constructor() {
    this.viewCache = new NodeCache({ stdTTL: 60 * 10 });
    this.requestCache = new NodeCache({ stdTTL: 60 * 10 });
  }

  shouldUseViewCache() {
    return __SERVER__ && envConfig.viewCache;
  }

  shouldUseRequestCache() {
    return __SERVER__ && envConfig.requestCache;
  }

  setView(key, data) {
    if (this.shouldUseViewCache()) {
      this.viewCache.set(key, data);
    }
  }

  getView(key) {
    return this.viewCache.get(key);
  }

  setRequest(key, data) {
    if (this.shouldUseRequestCache()) {
      this.requestCache.set(key, data);
    }
  }

  getRequest(key) {
    return this.requestCache.get(key);
  }
}

export default new Cache();
