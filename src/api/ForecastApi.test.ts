import axios from 'axios';
import { ForecastDto } from '../forecast/ForecastDto';
import Location from '../location/Location';
import appConfig from '../utils/settings/Config';
import ForecastApi from './ForecastApi';

jest.mock('axios', () => {
    return () => {
        return {};
    };
});

describe('ForecastApi', () => {
    let forecastApi: ForecastApi;

    beforeEach(() => {
        forecastApi = new ForecastApi();
    });

    describe('fetchForecast', () => {
        it('should return forecastDto', async () => {
            // given
            const location = new Location(appConfig.location.LONDON_CORDS);
            const forecastDto: ForecastDto = {
                current: { temp: 12 },
                daily: [],
                lat: 123,
                lon: 456,
            };
            axios.get = jest.fn(() =>
                Promise.resolve({
                    data: forecastDto,
                }),
            );
            const params = {
                lat: location.lat,
                lon: location.lon,
                units: appConfig.temperature.DEFAULT_UNITS,
            };

            // when
            const forecast = await forecastApi.fetchForecast(location);

            // then
            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(appConfig.api.BASE_URL, { params });
            expect(forecast).toEqual(forecastDto);
        });

        it('should return undefined on promise rejection', async () => {
            // given
            const location = new Location(appConfig.location.LONDON_CORDS);
            axios.get = jest.fn(() => Promise.reject());
            const params = {
                lat: location.lat,
                lon: location.lon,
                units: appConfig.temperature.DEFAULT_UNITS,
            };

            const forecast = await forecastApi.fetchForecast(location);

            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(appConfig.api.BASE_URL, { params });
            expect(forecast).toEqual(undefined);
        });
    });
});
