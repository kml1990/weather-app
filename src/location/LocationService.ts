import { injectable } from 'inversify';
import Location from './Location';

export const DEFAULT_LOCATION = {
    lat: 51.51,
    lon: -0.13,
};

@injectable()
export default class LocationService {
    private _currentLocation: Location;

    constructor() {
        this._currentLocation = new Location(DEFAULT_LOCATION);
    }

    get currentLocation(): Location {
        return this._currentLocation;
    }

    set currentLocation(location: Location) {
        this._currentLocation = location;
    }
}