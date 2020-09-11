import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import WeatherConditions, { WeatherConditionsProps } from './WeatherConditions';
import appConfig from '../../../utils/settings/Config';

const WEATHER_CONDITIONS_CLASS = '.WeatherConditions';
const WEATHER_CONDITIONS_IMAGE_CLASS = '.WeatherConditions__image';
const WEATHER_CONDITIONS_TEXT_CLASS = '.WeatherConditions__text';

describe('WeatherConditions', () => {
    let renderComponent: (props: WeatherConditionsProps) => ReactWrapper<WeatherConditionsProps>;
    let wrapper: ReactWrapper<WeatherConditionsProps>;

    beforeEach(() => {
        // given
        renderComponent = (props: WeatherConditionsProps) => {
            return mount(<WeatherConditions {...props} />);
        };
    });

    it('should render correct conditions and icon', () => {
        // given
        const condition = 'foo';
        const icon = 'bar';
        const props: WeatherConditionsProps = {
            condition,
            icon,
        };

        // when
        wrapper = renderComponent(props);

        const weatherConditionsImageSrc = wrapper.find(WEATHER_CONDITIONS_IMAGE_CLASS).prop('src');
        const weatherConditionsText = wrapper.find(WEATHER_CONDITIONS_TEXT_CLASS).text();

        // then
        expect(weatherConditionsImageSrc).toEqual(`${appConfig.api.IMAGE_BASE_URL}${icon}${appConfig.misc.ICON_EXT}`);
        expect(weatherConditionsText).toEqual(condition);
    });

    it('should render class provided', () => {
        // given
        const condition = 'foo';
        const icon = 'bar';
        const className = 'fooBar';
        const props: WeatherConditionsProps = {
            condition,
            icon,
            className,
        };

        // when
        wrapper = renderComponent(props);

        const hasClass = wrapper.find(WEATHER_CONDITIONS_CLASS).hasClass(className)

        // then
        expect(hasClass).toBeTruthy();
    });
});
