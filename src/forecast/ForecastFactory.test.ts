import DailyForecast from '../dailyForecast/DailyForecast';
import DailyForecastFactory from '../dailyForecast/DailyForecastFactory';
import Location from '../location/Location';
import LocationFactory from '../location/LocationFactory';
import appConfig from '../utils/settings/Config';
import Forecast from './Forecast';
import { ForecastDto } from './ForecastDto';
import ForecastFactory from './ForecastFactory';

describe('ForecastFactory', () => {
    let forecastFactory: ForecastFactory;
    let locationFactoryMock: LocationFactory;
    let dailyForecastFactoryMock: DailyForecastFactory;
    let location: Location;
    let dailyForecasts: DailyForecast[];

    beforeEach(() => {
        // given
        location = new Location(appConfig.location.LONDON_CORDS);
        dailyForecasts = [];
        locationFactoryMock = new (jest.fn().mockImplementation(() => {
            return {
                create: jest.fn().mockReturnValue(location),
            };
        }))();
        dailyForecastFactoryMock = new (jest.fn().mockImplementation(() => {
            return {
                create: jest.fn().mockReturnValue(dailyForecasts),
            };
        }))();

        forecastFactory = new ForecastFactory(locationFactoryMock, dailyForecastFactoryMock);
    });

    it('should create an instance of Forecast', () => {
        // given
        const forecastDto: ForecastDto = {
            current: { temp: 12 },
            daily: [],
            lat: 123,
            lon: 456,
        };

        // when
        const forecast = forecastFactory.create(forecastDto);

        // then
        expect(forecast).toBeInstanceOf(Forecast);
    });
    it('should create forecast with correct attributes', () => {
        // given
        const forecastDto: ForecastDto = {
            current: { temp: 12 },
            daily: [],
            lat: 123,
            lon: 456,
        };

        // when
        const forecast = forecastFactory.create(forecastDto);

        // then
        expect(forecast.currentTemperature).toEqual(forecastDto.current.temp);
        expect(forecast.dailyForecasts).toEqual(dailyForecasts);
        expect(forecast.location).toEqual(location);
    });
});