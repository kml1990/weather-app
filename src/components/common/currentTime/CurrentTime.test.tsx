import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import moment from 'moment';
import CurrentTime from './CurrentTime';

const CURRENT_TIME_TEXT = '.CurrentTime__text';

describe('WeatherConditions', () => {
    let renderComponent: () => ReactWrapper;
    let wrapper: ReactWrapper;

    beforeEach(() => {
        // given
        renderComponent = () => {
            return mount(<CurrentTime />);
        };
    });

    it('should render current time', () => {
        // when
        wrapper = renderComponent();

        const currentTimeText = wrapper.find(CURRENT_TIME_TEXT).text();
        const currentTime = moment().format('HH:mm');

        expect(currentTimeText).toContain(currentTime);
    });
});
