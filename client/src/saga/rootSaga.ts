import { all } from 'redux-saga/effects';
import { userSaga } from '../modules/User/redux/saga';
import { postSaga } from '../modules/Community/redux/saga';
function* rootSaga(){
    yield all([
        ...userSaga,
        ...postSaga
    ])
}

export default rootSaga;