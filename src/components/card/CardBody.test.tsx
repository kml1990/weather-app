import React, { ReactChild } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import CardBody from './CardBody';

describe('CardBody', () => {
    let renderComponent: (children?: ReactChild) => ReactWrapper;
    let wrapper: ReactWrapper;

    beforeEach(() => {
        // given
        renderComponent = (children?: ReactChild) => {
            return mount(<CardBody>{children}</CardBody>);
        };
    });

    it('should render children inside card body component', () => {
        // given
        const element = <h1>Foo</h1>;

        // when
        wrapper = renderComponent(element);

        // then
        expect(wrapper.find('h1').exists()).toBeTruthy();
    });
});
