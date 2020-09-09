import DailyForecast from '../dailyForecast/DailyForecast';
import Location from '../location/Location';

export interface ForecastParams {
    currentTemperature: number;
    dailyForecast: DailyForecast[];
    location: Location;
}

export default class Forecast {
    private readonly _currentTemperature: number;

    private readonly _dailyForecast: DailyForecast[];

    private readonly _location: Location;

    constructor(forecast: ForecastParams) {
        const { currentTemperature, dailyForecast, location } = forecast;

        this._currentTemperature = currentTemperature;
        this._dailyForecast = dailyForecast;
        this._location = location;
    }

    get currentTemperature(): number {
        return this._currentTemperature;
    }

    get dailyForecast(): DailyForecast[] {
        return this._dailyForecast;
    }

    get location(): Location {
        return this._location;
    }
}
