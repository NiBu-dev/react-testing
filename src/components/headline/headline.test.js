import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';
import {findByTestAttr} from '../../../utils/index';

const setUp = (props={}) => {
    return shallow(<Headline {...props}/>)
}

describe('Headline Component', () => {
    describe('Has props', () => {
        let wrapper
        beforeEach(() => {
            
            const props = {
                header: 'TestHeader',
                desc: 'TestDescription'
            };
            wrapper = setUp(props);
        })

        it('shoudl render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        })

        it('should render a H1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        })

        it('should render a description', () => {
            const description = findByTestAttr(wrapper, 'desc');
            expect(description.length).toBe(1);
        })
    })

    describe('Has NO props', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setUp();
        })

        it('should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);

        })
    })
})