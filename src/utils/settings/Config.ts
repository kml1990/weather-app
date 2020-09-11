const appConfig = {
    api: {
        API_KEY_PARAM: 'appid',
        API_KEY_VALUE: '4b759b7f086ae2b5e17ed220a9b48912',
        BASE_URL: 'http://api.openweathermap.org/data/2.5/onecall',
    },
    timing: {
        ONE_SECOND_IN_MS: 1000,
        WEATHER_RELOAD_FREQUENCY_IN_MS: 60000,
        TEMPERATURE_COUNT_UP_SPEED_IN_MS: 60,
    },
    texts: {
        UNABLE_TO_LOAD_APP: 'Something went wrong. Error: ',
        CONDITION_IMAGE_ALT_TEXT: 'Weather Icon',
        ERROR_LOADING_FORECAST: 'Unable to load forecast. Error: ',
    },
    location: {
        DEFAULT_LOCATION: 'London',
        LONDON_CORDS: {
            lat: 51.51,
            lon: -0.13,
        },
    },
    temperature: {
        DEFAULT_UNITS: 'metric',
        CELCIUS_SYMBOL: '℃',
    },
    misc: {
        ROOT_ID: 'root',
    },
};

export default appConfig;
