import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import getUserRepoReducer from './reducers/user'

const configureStore = () => {
    const store = createStore(combineReducers({
        userRepo: getUserRepoReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore