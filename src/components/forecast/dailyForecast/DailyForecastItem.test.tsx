import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import DailyForecastItem, { DailyForecastItemProps } from './DailyForecastItem';
import DailyForecast, { DailyForecastParams } from '../../../dailyForecast/DailyForecast';
import Temperature from '../../common/temperature/Temperature';
import WeatherConditions from '../../common/weatherConditions/WeatherConditions';

const DAILY_FORECAST_DAY_CLASS = '.DailyForecastItem__day';

describe('CurrentForecast', () => {
    let renderComponent: (props: DailyForecastItemProps) => ReactWrapper<DailyForecastItemProps>;
    let wrapper: ReactWrapper<DailyForecastItemProps>;

    beforeEach(() => {
        // given
        renderComponent = (props: DailyForecastItemProps) => {
            return mount(<DailyForecastItem {...props} />);
        };
    });

    it('should render dailyForecast', () => {
        // given
        const dailyForecastProps: DailyForecastParams = {
            day: 'Mon',
            temperature: 12,
            condition: 'good',
            icon: 'icon',
        };
        const dailyForecast = new DailyForecast(dailyForecastProps);
        const props: DailyForecastItemProps = {
            dailyForecast,
        };

        // when
        wrapper = renderComponent(props);

        const day = wrapper.find(DAILY_FORECAST_DAY_CLASS).text();
        const temperature = wrapper.find(Temperature);
        const weatherConditions = wrapper.find(WeatherConditions);

        // then
        expect(day).toEqual(dailyForecastProps.day);
        expect(temperature.prop('temperature')).toEqual(dailyForecastProps.temperature);
        expect(weatherConditions.prop('condition')).toEqual(dailyForecastProps.condition);
        expect(weatherConditions.prop('icon')).toEqual(dailyForecastProps.icon);
    });
});
