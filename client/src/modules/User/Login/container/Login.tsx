import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from '../page/LoginPage';
import * as actions from '../../redux/actions';
import { TypeRootReducer } from '../../../../reducer/interfaceReducer';
import { userLogin } from '../../redux/types';
interface Login {
    history: any
}

const Login: React.FC<Login> = props => {
    const loginStore = useSelector((state: TypeRootReducer) => state.user);
    const { auth } = loginStore;
    const { history } = props;
    const { isLogged, userToken } = auth
    const dispatch = useDispatch()
    const handleSubmit = (data: userLogin) => {
        dispatch(actions.actUserLogin(data));
    }
    useEffect(() => {
        if(isLogged && userToken !== '')
            history.push('/');
    }, [isLogged, userToken])
    return(
        <LoginPage prHandleSubmit={ handleSubmit } />
    )
}
export default withRouter(Login);