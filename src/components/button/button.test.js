import React from 'react';
import {findByTestAttr, checkProps} from '../../../utils/index';
import SharedButton from './index';
import {shallow} from 'enzyme';

describe('SharedButton Component', () => {

    describe('Checking proptypes', () => {

        it('should not throw an warning', () => {
            const expectedProps = {
                buttonText: 'Example test',
                emitEvent: () => {

                }
            }

            const propsError = checkProps(SharedButton, expectedProps);

            expect(propsError).toBeUndefined();
        })

    })

    describe('Renders the component', () => {

        let wrapper;

        beforeEach(() => {
            const props = {
                buttonText: 'Button Text',
                emitEvent: () => {

                }
            }
            wrapper = shallow(<SharedButton {...props}/>)
        })

        it('should render a button ', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        })

    })

})