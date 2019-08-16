import React from 'react';
import PropTypes from 'prop-types';
import App from './App';
import {shallow}  from 'enzyme';
import {findByTestAttr, testStore} from '../utils/index';

const setUp = (initiaslState={}) => {
    const store = testStore(initiaslState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    return wrapper;
}

describe('AppComponent', () => {

    let wrapper;

    beforeEach(() => {
        const initialState = {
            posts: [
                {
                    title: 'Example title1',
                    body: 'Some text'
                },
                {
                    title: 'Example title2',
                    body: 'Some text'
                },
                {
                    title: 'Example title3',
                    body: 'Some text'
                }
            ]
        }
        wrapper = setUp(initialState);

    });

    it('should render without error', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    })
})