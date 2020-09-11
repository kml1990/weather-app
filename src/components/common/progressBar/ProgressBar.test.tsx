import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ProgressBar, { ProgressBarProps } from './ProgressBar';

const PROGRESS_CLASS = '.ProgressBar';
const PROGRESS_RAIL_CLASS = '.ProgressBar__rail';

describe('ProgressBar', () => {
    let renderComponent: (props: ProgressBarProps) => ReactWrapper<ProgressBarProps>;
    let wrapper: ReactWrapper<ProgressBarProps>;

    beforeEach(() => {
        // given
        renderComponent = (props: ProgressBarProps) => {
            return mount(<ProgressBar {...props} />);
        };
    });

    it('should display passed progress', () => {
        // given
        const progress = 10;
        const props: ProgressBarProps = {
            progress,
        };

        // when
        wrapper = renderComponent(props);
        const progressRail = wrapper.find(PROGRESS_RAIL_CLASS).prop('style')?.width;

        // then
        expect(progressRail).toEqual(`${progress}%`);
    });
    it('should render class provided', () => {
        // given
        const progress = 10;
        const className = 'Bar';
        const props: ProgressBarProps = {
            progress,
            className,
        };

        // when
        wrapper = renderComponent(props);
        const hasClass = wrapper.find(PROGRESS_CLASS).hasClass(className);

        // then
        expect(hasClass).toBeTruthy();
    });
});
