import { injectable } from 'inversify';
import Location from './Location';
import { ForecastDto } from '../forecast/ForecastDto';

@injectable()
export default class LocationFactory {
    create(forecastDto: ForecastDto): Location {
        const { lat, lon } = forecastDto;

        return new Location({ lat, lon });
    }
}