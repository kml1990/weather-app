import { ForecastDto } from '../forecast/ForecastDto';
import Location from './Location';
import LocationFactory from './LocationFactory';

describe('LocationFactory', () => {
    let locationFactory: LocationFactory;

    beforeEach(() => {
        locationFactory = new LocationFactory();
    });

    describe('create', () => {
        it('should create an instance of Location', async () => {
            // given
            const forecastDto: ForecastDto = {
                current: { temp: 0 },
                daily: [],
                lat: 123,
                lon: 456,
            };

            // when
            const location = locationFactory.create(forecastDto);

            // then
            expect(location).toBeInstanceOf(Location);
        });
        it('should extract correct values from forecastDto', () => {
            // given
            const forecastDto: ForecastDto = {
                current: { temp: 0 },
                daily: [],
                lat: 123,
                lon: 456,
            };

            // when
            const location = locationFactory.create(forecastDto);

            // then
            expect(location.lat).toEqual(forecastDto.lat);
            expect(location.lon).toEqual(forecastDto.lon);
        });
    });
});
