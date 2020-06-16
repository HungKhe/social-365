export const SHOW_LOADING = "SHOW_LOADING";
export const HIDDEN_LOADING = "HIDDEN_LOADING";
export interface itfLoading {
    isLoading: boolean;
}
export interface loadingState {
    isLoading: boolean;
}
interface typeShowLoading {
    type: typeof SHOW_LOADING;
    payload: itfLoading;
}
interface typeHiddenLoading {
    type: typeof HIDDEN_LOADING;
    payload: itfLoading;
}

export const actShowLoading = (isLoading: itfLoading):typeShowLoading => {
    return {
        type: SHOW_LOADING,
        payload: isLoading
    }
}
export const actHiddenLoading = (isLoading: itfLoading):typeHiddenLoading => {
    return {
        type: HIDDEN_LOADING,
        payload: isLoading
    }
}

export type LoadingTypes = typeShowLoading | typeHiddenLoading;