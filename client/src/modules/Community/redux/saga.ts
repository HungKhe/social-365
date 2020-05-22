import * as types from './types';
import * as actions from './actions';
import services from '../../../utils/services';
import { toastShowMessage } from '../../../utils/toastify';

function serviceFetchListPost(params: types.fetchPost){
    return services.apiFetchListPost(params)
}