export interface LocationParams {
    lat: number;
    lon: number;
}

export default class Location {
    private readonly _lat: number;

    private readonly _lon: number;

    constructor(location: LocationParams) {
        const { lat, lon } = location;
        this._lat = lat;
        this._lon = lon;
    }

    get lat(): number {
        return this._lat;
    }

    get lon(): number {
        return this._lon;
    }
}