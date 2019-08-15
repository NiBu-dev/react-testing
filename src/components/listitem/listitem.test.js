import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from '../../../utils/index';
import ListItem from './index';

describe('ListItem component', () => {

    describe('Checking the proptypes', () => {
        
        it('should not throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Description here'
            };

            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        })

    })

    describe('Component renders', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                title: 'Title',
                desc: 'Description'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it('should render without error', () => {
            const component = findByTestAttr(wrapper, 'listitemComponent');
            expect(component.length).toBe(1);
        })

        it('should render a title', () => {
            const title = findByTestAttr(wrapper, 'component-title');
            expect(title.length).toBe(1);
        })

        it('should render a description', () => {
            const description = findByTestAttr(wrapper, 'component-description');
            expect(description.length).toBe(1);
        })

    })

    describe('Should not render', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                desc: 'Description'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it('Should not render the component', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        })
    })

})