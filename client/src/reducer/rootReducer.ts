import { combineReducers } from 'redux';
import loadingReducer from '../modules/Loading/container/loadingReducer';
import userReducer from '../modules/User/redux/reducers';
const rootReducer = combineReducers({
    loading: loadingReducer,
    user: userReducer
})
export default rootReducer;