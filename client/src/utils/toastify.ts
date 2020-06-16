import { toast } from 'react-toastify';

export const toastShowMessage = (type: string, message: string) => {
    const defaultMessage = message || "Server error - please try again!!!";
    switch(type){
        case "success": 
            toast.success(defaultMessage);
            break;
        case "error": 
            toast.error(defaultMessage);
            break;
        case "warn": 
            toast.warn(defaultMessage);
            break;
        default: toast.info(defaultMessage);
    }
}