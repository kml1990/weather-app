import { injectable } from 'inversify';

export const DEFAULT_LOCATION = 'London';

@injectable()
export default class LocationService {
    private readonly _currentLocation: string;

    constructor() {
        this._currentLocation = DEFAULT_LOCATION;
    }

    get currentLocation() {
        return this._currentLocation;
    }
}