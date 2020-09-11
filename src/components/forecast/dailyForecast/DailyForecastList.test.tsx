import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { CSSTransition } from 'react-transition-group';
import DailyForecastList, { DailyForecastListProps } from './DailyForecastList';
import DailyForecast, { DailyForecastParams } from '../../../dailyForecast/DailyForecast';
import DailyForecastItem from './DailyForecastItem';

describe('CurrentForecast', () => {
    let renderComponent: (props: DailyForecastListProps) => ReactWrapper<DailyForecastListProps>;
    let wrapper: ReactWrapper<DailyForecastListProps>;
    const dailyForecastProps: DailyForecastParams[] = [
        {
            day: 'Mon',
            temperature: 12,
            condition: 'good',
            icon: 'icon',
        },
        {
            day: 'Tue',
            temperature: 15,
            condition: 'bad',
            icon: 'icon',
        },
    ];

    beforeEach(() => {
        // given
        renderComponent = (props: DailyForecastListProps) => {
            return mount(<DailyForecastList {...props} />);
        };
    });

    it('should render dailyForecastItems', () => {
        // given
        const dailyForecast1 = new DailyForecast(dailyForecastProps[0]);
        const dailyForecast2 = new DailyForecast(dailyForecastProps[1]);
        const dailyForecasts = [dailyForecast1, dailyForecast2];

        const props: DailyForecastListProps = {
            dailyForecasts,
        };

        // when
        wrapper = renderComponent(props);

        const dailyForecastItems = wrapper.find(DailyForecastItem);

        // then
        expect(dailyForecastItems.length).toEqual(dailyForecasts.length);
    });

    it('should set in property to true when there are daily forecasts', () => {
        // given
        const dailyForecast1 = new DailyForecast(dailyForecastProps[0]);
        const dailyForecast2 = new DailyForecast(dailyForecastProps[1]);
        const dailyForecasts = [dailyForecast1, dailyForecast2];

        const props: DailyForecastListProps = {
            dailyForecasts,
        };

        // when
        wrapper = renderComponent(props);

        const cssTransition = wrapper.find(CSSTransition);

        // then
        expect(cssTransition.at(0).prop('in')).toBeTruthy();
    });

    it('should not render daily forecast items if there are no daily forecasts', () => {
        // given
        const props: DailyForecastListProps = {
            dailyForecasts: [],
        };

        // when
        wrapper = renderComponent(props);

        const dailyForecastItems = wrapper.find(DailyForecastItem);

        // then
        expect(dailyForecastItems.exists()).toBeFalsy();
    });
});
