import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Location, { LocationProps } from './Location';

const LOCATION_CLASS = '.Location';

describe('Location', () => {
    let renderComponent: (props: LocationProps) => ReactWrapper<LocationProps>;
    let wrapper: ReactWrapper<LocationProps>;

    beforeEach(() => {
        // given
        renderComponent = (props: LocationProps) => {
            return mount(<Location {...props} />);
        };
    });

    it('should display location', () => {
        // given
        const location = 'Foo';
        const props: LocationProps = {
            location,
        };

        // when
        wrapper = renderComponent(props);
        const text = wrapper.find(LOCATION_CLASS).text();

        // then
        expect(text).toEqual(location);
    });
    it('should render class provided', () => {
        // given
        const location = 'Foo';
        const className = 'Bar';
        const props: LocationProps = {
            location,
            className,
        };

        // when
        wrapper = renderComponent(props);
        const hasClass = wrapper.find(LOCATION_CLASS).hasClass(className);

        // then
        expect(hasClass).toBeTruthy();
    });
});
