import { inject, injectable } from 'inversify';
import DependencyType from '../di/DependencyType';
import LocationService from '../location/LocationService';

@injectable()
export default class ForecastService {
    private readonly locationService: LocationService;

    private readonly _currentTemperature: number;

    constructor(@inject(DependencyType.LocationService) locationService: LocationService) {
        this.locationService = locationService;
        this._currentTemperature = 0;
    }

    get currentTemperature() {
        return this._currentTemperature;
    }
}
