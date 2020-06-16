import { loadingState } from '../modules/Loading/container/types';
import { userMODInterface } from '../modules/User/redux/types';
import { postMODInterface } from '../modules/Community/redux/types';
export interface TypeRootReducer {
    loading: loadingState,
    user: userMODInterface,
    post: postMODInterface
}