import DailyForecast, { DailyForecastParams } from './DailyForecast';

describe('DailyForecast', () => {
    let dailyForecast: DailyForecast;

    it('should create an instance of DailyForecast', () => {
        // given
        const dailyForecastProps: DailyForecastParams = {
            day: 'Mon',
            temperature: 12,
            condition: 'good',
            icon: 'icon',
        };

        // when
        dailyForecast = new DailyForecast(dailyForecastProps);

        // then
        expect(dailyForecast).toBeInstanceOf(DailyForecast);
    });

    it('should return correct object attributes', () => {
        // given
        const dailyForecastProps: DailyForecastParams = {
            day: 'Mon',
            temperature: 12,
            condition: 'good',
            icon: 'icon',
        };

        // when
        dailyForecast = new DailyForecast(dailyForecastProps);

        // then
        expect(dailyForecast.day).toEqual(dailyForecastProps.day);
        expect(dailyForecast.temperature).toEqual(dailyForecastProps.temperature);
        expect(dailyForecast.condition).toEqual(dailyForecastProps.condition);
        expect(dailyForecast.icon).toEqual(dailyForecastProps.icon);
    });
});
