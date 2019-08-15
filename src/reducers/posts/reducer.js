import { types } from '../../actions/types'

export default (state = [], action) => {

    switch (action.type) {
        case types.GET_POSTS: {
            console.log('here', action.payload)
            console.log(state)
            const newData = [...action.payload]
            return newData
        }
        default:
            return state;
    }
}