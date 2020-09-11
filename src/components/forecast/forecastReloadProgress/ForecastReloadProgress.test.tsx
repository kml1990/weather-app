import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ForecastReloadProgress, { ForecastReloadProgressProps } from './ForecastReloadProgress';
import appConfig from '../../../utils/settings/Config';
import ProgressBar from '../../common/progressBar/ProgressBar';

const FORECAST_RELOAD_PROGRESS_CLASS = '.ForecastReloadProgress__text';

const calculateProgress = (count: number, max: number) => {
    return (count / max) * 100;
};

jest.useFakeTimers();

describe('CurrentForecast', () => {
    let renderComponent: (props: ForecastReloadProgressProps) => ReactWrapper<ForecastReloadProgressProps>;
    let wrapper: ReactWrapper<ForecastReloadProgressProps>;

    beforeEach(() => {
        // given
        renderComponent = (props: ForecastReloadProgressProps) => {
            return mount(<ForecastReloadProgress {...props} />);
        };
    });

    it('should render remaining reload time', () => {
        // given
        const trigger = 'Foo';
        const reloadFrequencyInSeconds = 2;
        const props: ForecastReloadProgressProps = {
            trigger,
            reloadFrequencyInSeconds,
        };

        // when
        wrapper = renderComponent(props);

        const progressText = wrapper.find(FORECAST_RELOAD_PROGRESS_CLASS).text();

        // then
        expect(progressText).toEqual(
            `${appConfig.progress.PROGRESS_MESSAGE} ${reloadFrequencyInSeconds}${appConfig.progress.PROGRESS_UNIT}`
        );
    });

    it('should initiate interval to start count down', async () => {
        // given
        jest.spyOn(window, 'setInterval');
        const trigger = 'Foo';
        const reloadFrequencyInSeconds = 2;
        const props: ForecastReloadProgressProps = {
            trigger,
            reloadFrequencyInSeconds,
        };

        // when
        await act(async () => {
            wrapper = renderComponent(props);
        });

        // then
        expect(window.setInterval).toHaveBeenCalled();
    });

    it('should start the progress with progress of 100', async () => {
        // given
        const trigger = 'Foo';
        const reloadFrequencyInSeconds = 10;
        const props: ForecastReloadProgressProps = {
            trigger,
            reloadFrequencyInSeconds,
        };

        // when
        await act(async () => {
            wrapper = renderComponent(props);
        });

        await act(async () => {
            jest.runOnlyPendingTimers();
        });

        const progressBar = wrapper.find(ProgressBar);

        // then
        expect(progressBar.prop('progress')).toEqual(100);
    });
});
