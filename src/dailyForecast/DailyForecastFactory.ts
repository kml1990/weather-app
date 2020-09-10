import { injectable } from 'inversify';
import moment from 'moment';
import DailyForecast from '../types/dailyForecast/DailyForecast';
import { DailyForecastDto, ForecastDto } from '../types/ForecastDto';

@injectable()
export default class DailyForecastFactory {
    create(forecastDto: ForecastDto): DailyForecast[] {
        const { daily } = forecastDto;

        // Change to reduce
        const dailyForecasts = daily.map((dailyForecastDto: DailyForecastDto) => {
            const {
                dt: epoch,
                temp: { day: dayTemperature },
                weather: [{ description: condition, icon }],
            } = dailyForecastDto;
            const day = moment.unix(epoch).format('ddd');
            const temperature = Math.floor(dayTemperature);
            return new DailyForecast({ day, temperature, condition, icon });
        });

        return dailyForecasts;
    }
}
