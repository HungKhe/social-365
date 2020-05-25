import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actUserLogout } from '../redux/actions';
import { TypeRootReducer } from '../../../reducer/interfaceReducer';
interface Logout {
    history: any
}
const Logout: React.FC<Logout> = ({ history }) => {
    const loginStore = useSelector((state: TypeRootReducer) => state.user);
    const { auth } = loginStore;
    const { isLogged, userToken } = auth
    const dispatch = useDispatch();
    useEffect(() => {  
        dispatch(actUserLogout('logout'));
    }, [])
    useEffect(() => {
        if(!isLogged || userToken === '')
            history.push('/login');
    }, [isLogged, userToken])
    return null
}

export default Logout;