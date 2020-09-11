import React, { ReactChild } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import CardHeader from './CardHeader';

describe('CardHeader', () => {
    let renderComponent: (children?: ReactChild) => ReactWrapper;
    let wrapper: ReactWrapper;

    beforeEach(() => {
        // given
        renderComponent = (children?: ReactChild) => {
            return mount(<CardHeader>{children}</CardHeader>);
        };
    });

    it('should render children inside card header component', () => {
        // given
        const element = <h1>Foo</h1>;

        // when
        wrapper = renderComponent(element);

        // then
        expect(wrapper.find('h1').exists()).toBeTruthy();
    });
});
