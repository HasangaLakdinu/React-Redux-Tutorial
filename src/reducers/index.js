import {combineReducers} from 'redux';
import AllPostReducer from './reducer-Allpost';
import SelectedPostReducer from './reducer-selectedPost'

const rootReducer=combineReducers({
    allPosts:AllPostReducer,
    selectedPost:SelectedPostReducer
})

export default rootReducer;