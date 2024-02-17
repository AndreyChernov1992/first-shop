import axiosClient from './apiClient';

export class BaseApi {
  // endpoint = '';

  // getUrl(path) {
  //     let fullUrl = [ this.endpoint, path ]
  //         .filter(Boolean)
  //         .join('/');

  //     fullUrl = fullUrl.replace('//', '/');

  //     return fullUrl;
  // }

  request(method, config) {
    // const requestUrl = this.getUrl(url);
    // const requestConfig = { ...config, method, url: requestUrl };
    const endpoint = '/products';

    return axiosClient({
      ...config,
      method,
      baseURL: process.env.REACT_APP_BASE_URL,
      url: endpoint,
    });
  }
}
