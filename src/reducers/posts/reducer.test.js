import {types} from '../../actions/types';
import postsReducer from './reducer';

describe('POST reducer', () => {

    it('shyould return a default state', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    })

    it('should return a new state if receiveing type', () => {
        const posts = [{title: 'Test1'}, {title: 'Test2'}, {title: 'Test3'}, {title: 'Test4'}]
        const newState = postsReducer(undefined, {type: types.GET_POSTS, payload: posts});
        expect(newState).toEqual(posts);
    })

})