import { all } from 'redux-saga/effects';
import { loginSaga } from '../modules/Login/redux/saga';
function* rootSaga(){
    yield all([
        ...loginSaga
    ])
}

export default rootSaga;