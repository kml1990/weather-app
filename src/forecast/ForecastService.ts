import { inject, injectable } from 'inversify';
import ForecastApi from '../api/ForecastApi';
import DependencyType from '../di/DependencyType';
import LocationService from '../location/LocationService';
import Forecast from '../types/forecast/Forecast';
import { ForecastDto } from '../types/ForecastDto';
import ForecastFactory from './ForecastFactory';

@injectable()
export default class ForecastService {
    private readonly forecastFactory: ForecastFactory;

    private readonly locationService: LocationService;

    private readonly forecastApi: ForecastApi;

    private _forecast: Forecast | null;

    constructor(
        @inject(DependencyType.ForecastFactory) forecastFactory: ForecastFactory,
        @inject(DependencyType.LocationService) locationService: LocationService,
        @inject(DependencyType.ForecastApi) forecastApi: ForecastApi,
    ) {
        this.forecastFactory = forecastFactory;
        this.locationService = locationService;
        this.forecastApi = forecastApi;
        this._forecast = null;
    }

    get forecast() {
        return this._forecast;
    }

    loadForecast(): Promise<Forecast | null> {
        const { currentLocation } = this.locationService;
        return this.forecastApi
            .fetchForecast(currentLocation)
            .then((forecastDto: ForecastDto | null) => {
                console.log(forecastDto)
                if (forecastDto) {
                    const forecast = this.forecastFactory.create(forecastDto);
                    this._forecast = forecast;
                    this.locationService.currentLocation = forecast.location;
                    return forecast;
                }
                return null;
            })
            .catch(() => {
                return null;
            });
    }
}
