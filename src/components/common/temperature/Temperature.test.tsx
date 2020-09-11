import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Temperature, { TemperatureProps } from './Temperature';
import appConfig from '../../../utils/settings/Config';

const TEMPERATURE_CLASS = '.Temperature';

jest.useFakeTimers();

describe('Temperature', () => {
    let renderComponent: (props: TemperatureProps) => ReactWrapper<TemperatureProps>;
    let wrapper: ReactWrapper<TemperatureProps>;

    beforeEach(() => {
        // given
        renderComponent = (props: TemperatureProps) => {
            return mount(<Temperature {...props} />);
        };
    });

    it('should display 0 temperature at load', () => {
        // given
        const temperature = 10;
        const props: TemperatureProps = {
            temperature,
        };

        // when
        act(() => {
            wrapper = renderComponent(props);
        });

        const temperatureText = wrapper.find(TEMPERATURE_CLASS).text();

        // then
        expect(temperatureText).toEqual(`0 ${appConfig.temperature.CELCIUS_SYMBOL}`);
    });

    it('should initiate setTimeout on load to coutup the tempature', () => {
        // given
        const temperature = 10;
        const props: TemperatureProps = {
            temperature,
        };

        // when
        act(() => {
            wrapper = renderComponent(props);
        });

        // then
        expect(window.setTimeout).toHaveBeenCalled();
    });

    it('should display passed temperature', () => {
        // given
        const temperature = 10;
        const props: TemperatureProps = {
            temperature,
        };

        // when
        act(() => {
            wrapper = renderComponent(props);
            jest.runAllTimers();
        });

        const temperatureText = wrapper.find(TEMPERATURE_CLASS).text();

        // then
        expect(temperatureText).toEqual(`${temperature} ${appConfig.temperature.CELCIUS_SYMBOL}`);
    });
    it('should render class provided', () => {
        // given
        const temperature = 10;
        const className = 'Bar';
        const props: TemperatureProps = {
            temperature,
            className,
        };

        // when
        act(() => {
            wrapper = renderComponent(props);
        });

        const hasClass = wrapper.find(TEMPERATURE_CLASS).hasClass(className);

        // then
        expect(hasClass).toBeTruthy();
    });
});
