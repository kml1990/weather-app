import axios, { AxiosRequestConfig } from 'axios';

const OPEN_WEATHER_MAP_API_KEY_PARAM = 'appid';

export default class AppSettings {
    configureApp() {
        this.configureAxiosInterceptor();
    }

    private configureAxiosInterceptor() {
        axios.defaults.params = {};
        axios.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                // TODO add apis key to process.env
                config.params[OPEN_WEATHER_MAP_API_KEY_PARAM] = '4b759b7f086ae2b5e17ed220a9b48912';
                return config;
            },
            (error: Error) => {
                return Promise.reject(error);
            },
        );
    }
}
