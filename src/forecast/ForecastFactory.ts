import { injectable } from 'inversify';
import moment from 'moment';
import DailyForecast from '../types/dailyForecast/DailyForecast';
import Forecast from '../types/forecast/Forecast';
import { DailyForecastDto, ForecastDto } from '../types/ForecastDto';
import Location from '../types/location/Location';

@injectable()
export default class ForecastFactory {
    create(forecastDto: ForecastDto): Forecast {
        const {
            current: { temp },
            daily,
            lat,
            lon,
        } = forecastDto;

        const currentTemperature = Math.floor(temp);
        // TODO move to its own factory
        const dailyForecast = daily.map((dailyForecastDto: DailyForecastDto) => {
            const {
                dt: epoch,
                temp: { day: dayTemperature },
                weather: [{ description: condition, icon }],
            } = dailyForecastDto;
            const day = moment.unix(epoch).format('ddd');
            const temperature = Math.floor(dayTemperature);
            return new DailyForecast({ day, temperature, condition, icon });
        });

        // TODO move to its own factory
        const location = new Location({ lat, lon });

        return new Forecast({ currentTemperature, dailyForecast, location })
    }
}
