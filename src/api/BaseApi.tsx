import axiosClient from './apiClient';

export class BaseApi {
    endpoint = '';

    getUrl(path: string) {
        let fullUrl = [ this.endpoint, path ]
            .filter(Boolean)
            .join('/');

        fullUrl = fullUrl.replace('//', '/');

        return fullUrl;
    }

    request(method: string, url: string, config?: object) {
        const requestUrl = this.getUrl(url);
        const requestConfig = { ...config, method, url: requestUrl };
        return axiosClient(requestConfig);
    }
}