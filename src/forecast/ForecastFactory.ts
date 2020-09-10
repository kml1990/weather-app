import { inject, injectable } from 'inversify';
import DailyForecastFactory from '../dailyForecast/DailyForecastFactory';
import DependencyType from '../di/DependencyType';
import LocationFactory from '../location/LocationFactory';
import Forecast from '../types/forecast/Forecast';
import { ForecastDto } from '../types/ForecastDto';

@injectable()
export default class ForecastFactory {
    private readonly locationFactory: LocationFactory;

    private readonly dailyForecastFactory: DailyForecastFactory;

    constructor(
        @inject(DependencyType.LocationFactory) locationFactory: LocationFactory,
        @inject(DependencyType.DailyForecastFactory) dailyForecastFactory: DailyForecastFactory,
    ) {
        this.locationFactory = locationFactory;
        this.dailyForecastFactory = dailyForecastFactory;
    }

    create(forecastDto: ForecastDto): Forecast {
        const {
            current: { temp },
        } = forecastDto;

        const currentTemperature = Math.floor(temp);

        const dailyForecasts = this.dailyForecastFactory.create(forecastDto);
        const location = this.locationFactory.create(forecastDto);

        return new Forecast({ currentTemperature, dailyForecasts, location });
    }
}
