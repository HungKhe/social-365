import { type } from "os";
import { itfLoading } from './types';
const SHOW_LOADING = "SHOW_LOADING";
const HIDDEN_LOADING = "HIDDEN_LOADING";

interface typeShowLoading {
    type: typeof SHOW_LOADING;
    payload: itfLoading;
}
interface typeHiddenLoading {
    type: typeof HIDDEN_LOADING;
    payload: itfLoading;
}

type LoadingTypes = typeShowLoading | typeHiddenLoading;

const initialState: itfLoading = {
    isLoading: false
}

const Loading = (state = initialState, action: LoadingTypes) => {
    return { ...state }
}

export default Loading;