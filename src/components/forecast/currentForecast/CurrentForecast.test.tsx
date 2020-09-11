import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import CurrentForecast, { CurrentForecastProps } from './CurrentForecast';
import appConfig from '../../../utils/settings/Config';
import Location from '../../common/location/Location';
import CurrentTime from '../../common/currentTime/CurrentTime';
import Temperature from '../../common/temperature/Temperature';

describe('CurrentForecast', () => {
    let renderComponent: (props: CurrentForecastProps) => ReactWrapper<CurrentForecastProps>;
    let wrapper: ReactWrapper<CurrentForecastProps>;

    beforeEach(() => {
        // given
        renderComponent = (props: CurrentForecastProps) => {
            return mount(<CurrentForecast {...props} />);
        };
    });

    it('should render currentForecast', () => {
        // given
        const currentTemperature = 10;
        const props: CurrentForecastProps = {
            currentTemperature,
        };

        // when
        wrapper = renderComponent(props);

        const location = wrapper.find(Location);
        const currentTime = wrapper.find(CurrentTime);
        const temperature = wrapper.find(Temperature);

        // then
        expect(location.exists()).toBeTruthy();
        expect(currentTime.exists()).toBeTruthy();
        expect(temperature.exists()).toBeTruthy();
    });

    it('should pass props to rendered components', () => {
        // given
        const currentTemperature = 10;
        const props: CurrentForecastProps = {
            currentTemperature,
        };

        // when
        wrapper = renderComponent(props);

        const location = wrapper.find(Location);
        const temperature = wrapper.find(Temperature);

        // then
        expect(location.prop('location')).toEqual(appConfig.location.DEFAULT_LOCATION);
        expect(temperature.prop('temperature')).toEqual(currentTemperature);
    });
});
