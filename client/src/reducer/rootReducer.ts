import { combineReducers } from 'redux';
import loadingReducer from '../modules/Loading/container/loadingReducer';
import userReducer from '../modules/User/redux/reducers';
import postReducer from '../modules/Community/redux/reducers';
const rootReducer = combineReducers({
    loading: loadingReducer,
    user: userReducer,
    post: postReducer
})
export default rootReducer;