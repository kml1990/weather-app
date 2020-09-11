const appConfig = {
    api: {
        API_KEY_PARAM: 'appid',
        API_KEY_VALUE: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY,
        BASE_URL: 'http://api.openweathermap.org/data/2.5/onecall',
        IMAGE_BASE_URL: 'http://openweathermap.org/img/wn/',
    },
    timing: {
        ONE_SECOND_IN_MS: 1000,
        WEATHER_RELOAD_FREQUENCY_IN_MS: 60000,
        TEMPERATURE_COUNT_UP_SPEED_IN_MS: 60,
        CSS_TRANSITION_DELAY: 500,
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
        DEFAULT_TEMPERATURE: 0,
    },
    progress: {
        PROGRESS_MESSAGE: 'Reloading in',
        PROGRESS_UNIT: 's',
    },
    misc: {
        ROOT_ID: 'root',
        DEFAULT_DAILY_FORECAST: [],
        ICON_EXT: '.png',
    },
};

export default appConfig;
