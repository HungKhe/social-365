import { combineReducers } from 'redux';
 import loadingReducer from '../modules/Loading/container/loadingReducer';
const rootReducer = combineReducers({
    loading: loadingReducer
})
export default rootReducer;