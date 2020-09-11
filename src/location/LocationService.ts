import { injectable } from 'inversify';
import appConfig from '../utils/settings/Config';
import Location from './Location';
@injectable()
export default class LocationService {
    private _currentLocation: Location;

    constructor() {
        this._currentLocation = new Location(appConfig.location.LONDON_CORDS);
    }

    getCurrentLocation(): Location {
        return this._currentLocation;
    }

    setCurrentLocation(location: Location) {
        this._currentLocation = location;
    }
}
