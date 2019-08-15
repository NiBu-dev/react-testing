import checkPropTypes from 'check-prop-types';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers/'
import {middlewares} from '../src/createStore';

export const findByTestAttr = (component, attr) => {
    return component.find(`[data-test='${attr}']`)
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleWare(rootReducer, initialState);
}
