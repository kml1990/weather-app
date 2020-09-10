import { inject, injectable } from 'inversify';
import { Moment } from 'moment';
import DailyForecast from './DailyForecast';
import { DailyForecastDto, ForecastDto } from '../forecast/ForecastDto';
import DateUtil from '../utils/date/DateUtil';
import DependencyType from '../di/DependencyType';

const MAX_DAYS_IN_FORECAST = 5;
@injectable()
export default class DailyForecastFactory {
    private readonly dateUtil: DateUtil;

    constructor(@inject(DependencyType.DateUtil) dateUtil: DateUtil) {
        this.dateUtil = dateUtil;
    }

    create(forecastDto: ForecastDto): DailyForecast[] {
        const { daily } = forecastDto;

        return daily.reduce((dailyForecasts: DailyForecast[], dailyForecastDto: DailyForecastDto) => {
            const {
                dt: epoch,
                temp: { day: dayTemperature },
                weather: [{ description: condition, icon }],
            } = dailyForecastDto;

            const forecastDay = this.dateUtil.getDateFromEpoch(epoch);
            const isCurrentDay = this.dateUtil.isCurrentDay<Moment>(forecastDay);

            if (dailyForecasts.length < MAX_DAYS_IN_FORECAST && !isCurrentDay) {
                const dayOfWeek = this.dateUtil.extractDayFromDate<Moment>(forecastDay);
                const temperature = Math.floor(dayTemperature);
                const dailyForecast = new DailyForecast({ day: dayOfWeek, temperature, condition, icon });

                dailyForecasts.push(dailyForecast);
            }

            return dailyForecasts;
        }, []);
    }
}
