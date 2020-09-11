import ForecastApi from '../api/ForecastApi';
import Location from '../location/Location';
import LocationService from '../location/LocationService';
import appConfig from '../utils/settings/Config';
import Forecast, { ForecastParams } from './Forecast';
import { ForecastDto } from './ForecastDto';
import ForecastFactory from './ForecastFactory';
import ForecastService from './ForecastService';

describe('ForecastService', () => {
    let forecastService: ForecastService;
    let forecastFactoryMock: ForecastFactory;
    let locationServiceMock: LocationService;
    let forecastApiMock: ForecastApi;
    const forecastDto: ForecastDto = {
        current: { temp: 12 },
        daily: [],
        lat: 123,
        lon: 456,
    };

    beforeEach(() => {
        // given
        forecastFactoryMock = new (jest.fn().mockImplementation(() => {
            return {
                create: jest.fn(),
            };
        }))();
        locationServiceMock = new (jest.fn().mockImplementation(() => {
            return {
                getCurrentLocation: jest.fn(),
                setCurrentLocation: jest.fn(),
            };
        }))();
        forecastApiMock = new (jest.fn().mockImplementation(() => {
            return {
                fetchForecast: jest.fn().mockResolvedValue(forecastDto),
            };
        }))();
        forecastService = new ForecastService(forecastFactoryMock, locationServiceMock, forecastApiMock);
    });
    describe('fetchForecast', () => {
        it('should get new forecast from api', async () => {
            // given
            const location = new Location(appConfig.location.LONDON_CORDS);
            const forecastParams: ForecastParams = {
                currentTemperature: 10,
                dailyForecasts: [],
                location,
            };

            // when
            const forecast = new Forecast(forecastParams);
            (forecastFactoryMock.create as jest.Mock).mockReturnValue(forecast);
            const forecastResults = await forecastService.getForecast();

            // then
            expect(forecastResults).toEqual(forecast);
            expect(forecastFactoryMock.create).toHaveBeenCalledTimes(1);
            expect(locationServiceMock.setCurrentLocation).toHaveBeenCalledTimes(1);
        });

        it('should return last fetched forecast when undefined is returned from api', async () => {
            // given
            const location = new Location(appConfig.location.LONDON_CORDS);
            const forecastParams: ForecastParams = {
                currentTemperature: 10,
                dailyForecasts: [],
                location,
            };

            // when
            const forecast = new Forecast(forecastParams);
            (forecastFactoryMock.create as jest.Mock).mockReturnValueOnce(forecast);
            const forecastResultsFirst = await forecastService.getForecast();

            (forecastApiMock.fetchForecast as jest.Mock).mockResolvedValue(undefined);
            const forecastResultsSecond = await forecastService.getForecast();

            // then
            expect(forecastResultsFirst).toEqual(forecastResultsSecond);
            expect(forecastResultsSecond).toEqual(forecast);
        });

        it('should return last fetched forecast when error is returned', async () => {
            // given
            (forecastApiMock.fetchForecast as jest.Mock).mockRejectedValue('');
            const forecastResultsSecond = await forecastService.getForecast();

            // then
            expect(forecastResultsSecond).not.toBeUndefined();
        });
    });
});
