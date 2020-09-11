import Location from '../location/Location';
import appConfig from '../utils/settings/Config';
import Forecast, { ForecastParams } from './Forecast';

describe('Forecast', () => {
    let forecast: Forecast;

    it('should create an instance of Location', () => {
        // given
        const location = new Location(appConfig.location.LONDON_CORDS);
        const forecastParams: ForecastParams = {
            currentTemperature: 10,
            dailyForecasts: [],
            location,
        };

        // when
        forecast = new Forecast(forecastParams);

        // then
        expect(forecast).toBeInstanceOf(Forecast);
    });

    it('should return correct forecast attributes', () => {
        // given
        const location = new Location(appConfig.location.LONDON_CORDS);
        const forecastParams: ForecastParams = {
            currentTemperature: 10,
            dailyForecasts: [],
            location,
        };

        // when
        forecast = new Forecast(forecastParams);

        // then
        expect(forecast.currentTemperature).toEqual(forecastParams.currentTemperature);
        expect(forecast.dailyForecasts).toEqual(forecastParams.dailyForecasts);
        expect(forecast.location).toEqual(forecastParams.location);
    });
});
