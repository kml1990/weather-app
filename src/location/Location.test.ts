import Location, { LocationParams } from './Location';

describe('Location', () => {
    let location: Location;

    it('should create an instance of Location', () => {
        // given
        const locationParams: LocationParams = {
            lat: 123,
            lon: 456,
        };

        // when
        location = new Location(locationParams);

        // then
        expect(location).toBeInstanceOf(Location);
    });

    it('should return correct lat and lon', () => {
        // given
        const locationParams: LocationParams = {
            lat: 123,
            lon: 456,
        };

        // when
        location = new Location(locationParams);

        // then
        expect(location.lat).toEqual(locationParams.lat);
        expect(location.lon).toEqual(locationParams.lon);
    });
});
