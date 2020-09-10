import DailyForecast from '../dailyForecast/DailyForecast';
import Location from '../location/Location';

export interface ForecastParams {
    currentTemperature: number;
    dailyForecasts: DailyForecast[];
    location: Location;
}

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
