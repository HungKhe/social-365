import { loadingState } from '../modules/Loading/container/types';
import { userMODInterface } from '../modules/User/redux/types';
export interface TypeRootReducer {
    loading: loadingState,
    user: userMODInterface
}