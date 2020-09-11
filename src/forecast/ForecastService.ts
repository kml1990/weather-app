import { inject, injectable } from 'inversify';
import ForecastApi from '../api/ForecastApi';
import DependencyType from '../di/DependencyType';
import Location from '../location/Location';
import LocationService from '../location/LocationService';
import appConfig from '../utils/settings/Config';
import Forecast, { DEFAULT_FORECAST_CONFIG } from './Forecast';
import { ForecastDto } from './ForecastDto';
import ForecastFactory from './ForecastFactory';

@injectable()
export default class ForecastService {
    private readonly forecastFactory: ForecastFactory;

    private readonly locationService: LocationService;

    private readonly forecastApi: ForecastApi;

    private _forecast: Forecast;

    constructor(
        @inject(DependencyType.ForecastFactory) forecastFactory: ForecastFactory,
        @inject(DependencyType.LocationService) locationService: LocationService,
        @inject(DependencyType.ForecastApi) forecastApi: ForecastApi,
    ) {
        this.forecastFactory = forecastFactory;
        this.locationService = locationService;
        this.forecastApi = forecastApi;
        this._forecast = new Forecast(DEFAULT_FORECAST_CONFIG);
    }

    get forecast() {
        return this._forecast;
    }

    getForecast(): Promise<Forecast> {
        const currentLocation = this.locationService.getCurrentLocation();
        return this.forecastApi
            .fetchForecast(currentLocation)
            .then((forecastDto: ForecastDto | undefined) => {
                if (!forecastDto) {
                    return this._forecast;
                }
                const forecast = this.forecastFactory.create(forecastDto);
                this.setForecastLocation(forecast.location);
                this._forecast = forecast;
                return forecast;
            })
            .catch(() => {
                return this._forecast;
            });
    }

    private setForecastLocation(location: Location) {
        this.locationService.setCurrentLocation(location);
    }
}
