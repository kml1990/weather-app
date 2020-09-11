import React, { ReactChild } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Card from './Card';

describe('Card', () => {
    let renderComponent: (children?: ReactChild) => ReactWrapper;
    let wrapper: ReactWrapper;

    beforeEach(() => {
        // given
        renderComponent = (children?: ReactChild) => {
            return mount(<Card>{children}</Card>);
        };
    });

    it('should render children inside card component', () => {
        // given
        const element = <h1>Foo</h1>;

        // when
        wrapper = renderComponent(element);

        // then
        expect(wrapper.find('h1').exists()).toBeTruthy();
    });
});
