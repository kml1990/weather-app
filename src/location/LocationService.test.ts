import appConfig from '../utils/settings/Config';
import Location, { LocationParams } from './Location';
import LocationService from './LocationService';

describe('LocationService', () => {
    let locationService: LocationService;

    beforeEach(() => {
        // given
        locationService = new LocationService();
    });

    it('should create an instance of Location with default location', () => {
        // when
        const currentLocation = locationService.getCurrentLocation();

        // then
        expect(currentLocation).toBeInstanceOf(Location);
        expect(currentLocation.lat).toEqual(appConfig.location.LONDON_CORDS.lat);
        expect(currentLocation.lon).toEqual(appConfig.location.LONDON_CORDS.lon);
    });
    it('should set new location', async () => {
        // given
        const locationParams: LocationParams = {
            lat: 123,
            lon: 456,
        };

        // when
        locationService.setCurrentLocation(new Location(locationParams));
        const currentLocation = locationService.getCurrentLocation();

        // then
        expect(currentLocation.lat).toEqual(locationParams.lat);
        expect(currentLocation.lon).toEqual(locationParams.lon);
    });
});
