import axios, { AxiosRequestConfig } from 'axios';
import appConfig from './Config';

export default class AppSettings {
    configureApp() {
        this.configureAxiosInterceptor();
    }

    private configureAxiosInterceptor() {
        axios.defaults.params = {};
        axios.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                config.params[appConfig.api.API_KEY_PARAM] = appConfig.api.API_KEY_VALUE;
                return config;
            },
            (error: Error) => {
                return Promise.reject(error);
            },
        );
    }
}
