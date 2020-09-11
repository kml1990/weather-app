import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { Container } from 'inversify';
import App from './App';
import { DependencyProvider } from '../../di/DependencyContext';
import ForecastService from '../../forecast/ForecastService';
import Forecast, { ForecastParams } from '../../forecast/Forecast';
import appConfig from '../../utils/settings/Config';
import Location from '../../location/Location';
import DependencyType from '../../di/DependencyType';
import CardHeader from '../card/CardHeader';
import Card from '../card/Card';
import CardBody from '../card/CardBody';
import ForecastReloadProgress from '../forecast/forecastReloadProgress/ForecastReloadProgress';
import CurrentForecast from '../forecast/currentForecast/CurrentForecast';
import DailyForecasts from '../forecast/dailyForecast/DailyForecastList';

const APP_CLASS = '.App';

jest.useFakeTimers();

describe('App', () => {
    let renderComponent: () => ReactWrapper;
    let wrapper: ReactWrapper;
    let forecastServiceMock: ForecastService;
    let forecast: Forecast;

    beforeEach(() => {
        // given
        const location = new Location(appConfig.location.LONDON_CORDS);
        const forecastParams: ForecastParams = {
            currentTemperature: 10,
            dailyForecasts: [],
            location,
        };
        forecast = new Forecast(forecastParams);
        forecastServiceMock = new (jest.fn().mockImplementation(() => {
            return {
                getForecast: jest.fn().mockResolvedValue(forecast),
            };
        }))();

        const container = new Container();
        container.bind(DependencyType.ForecastService).toConstantValue(forecastServiceMock);

        renderComponent = () => {
            return mount(
                <DependencyProvider container={container}>
                    <App />
                </DependencyProvider>,
            );
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render app', async () => {
        // when
        await act(async () => {
            wrapper = renderComponent();
        });

        const app = wrapper.find(APP_CLASS);
        const card = wrapper.find(Card);
        const cardHeader = wrapper.find(CardHeader);
        const cardBody = wrapper.find(CardBody);
        const currentForecast = wrapper.find(CurrentForecast);
        const forecastReloadProgress = wrapper.find(ForecastReloadProgress);
        const dailyForecasts = wrapper.find(DailyForecasts);

        // then
        expect(app.exists()).toBeTruthy();
        expect(card.exists()).toBeTruthy();
        expect(cardHeader.exists()).toBeTruthy();
        expect(cardBody.exists()).toBeTruthy();
        expect(currentForecast.exists()).toBeTruthy();
        expect(forecastReloadProgress.exists()).toBeTruthy();
        expect(dailyForecasts.exists()).toBeTruthy();
    });

    it('should get forecast data on app load', async () => {
        // when
        await act(async () => {
            wrapper = renderComponent();
        });

        // then
        expect(forecastServiceMock.getForecast).toHaveBeenCalledTimes(1);
    });

    it('should pass default props to current a daily weather', async () => {
        // when
        await act(async () => {
            wrapper = renderComponent();

            const currentForecast = wrapper.find(CurrentForecast);
            const dailyForecasts = wrapper.find(DailyForecasts);

            // then
            expect(currentForecast.prop('currentTemperature')).toEqual(appConfig.temperature.DEFAULT_TEMPERATURE);
            expect(dailyForecasts.prop('dailyForecasts')).toEqual(appConfig.misc.DEFAULT_DAILY_FORECAST);
        });
    });

    it('should initiate interval to get forecast data every minute', async () => {
        // when
        await act(async () => {
            wrapper = renderComponent();
        });

        // then
        expect(window.setInterval).toHaveBeenCalled();
    });

    it('should get forecast data every minute', async () => {
        // when
        await act(async () => {
            wrapper = renderComponent();
        });
        await act(async () => {
            jest.runOnlyPendingTimers();
        });

        // then
        expect(forecastServiceMock.getForecast).toHaveBeenCalledTimes(2);
    });
});
