import DailyForecast from '../dailyForecast/DailyForecast';
import Location from '../location/Location';
import appConfig from '../utils/settings/Config';

export interface ForecastParams {
    currentTemperature: number;
    dailyForecasts: DailyForecast[];
    location: Location;
}

export const DEFAULT_FORECAST_CONFIG = {
    currentTemperature: 0,
    dailyForecasts: [],
    location: new Location(appConfig.location.LONDON_CORDS),
};

export default class Forecast {
    private readonly _currentTemperature: number;

    private readonly _dailyForecasts: DailyForecast[];

    private readonly _location: Location;

    constructor(forecast: ForecastParams) {
        const { currentTemperature, dailyForecasts, location } = forecast;

        this._currentTemperature = currentTemperature;
        this._dailyForecasts = dailyForecasts;
        this._location = location;
    }

    get currentTemperature(): number {
        return this._currentTemperature;
    }

    get dailyForecasts(): DailyForecast[] {
        return this._dailyForecasts;
    }

    get location(): Location {
        return this._location;
    }
}
