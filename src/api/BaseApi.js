import axiosClient from './apiClient';

export class BaseApi {
    endpoint = '';

    getUrl(path) {
        let fullUrl = [ this.endpoint, path ]
            .filter(Boolean)
            .join('/');

        fullUrl = fullUrl.replace('//', '/');

        return fullUrl;
    }

    request(method, url, config) {
        const requestUrl = this.getUrl(url);
        const requestConfig = { ...config, method, url: requestUrl };
        return axiosClient(requestConfig);
    }
}
