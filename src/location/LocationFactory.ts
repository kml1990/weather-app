import { injectable } from 'inversify';
import Location from '../types/location/Location';
import { ForecastDto } from '../types/ForecastDto';

@injectable()
export default class LocationFactory {
    create(forecastDto: ForecastDto): Location {
        const { lat, lon } = forecastDto;

        return new Location({ lat, lon });
    }
}