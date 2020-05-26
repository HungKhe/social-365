import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useStore, useSelector } from 'react-redux';
import RegisterPage from '../page/RegisterPage';
import { TypeRootReducer } from '../../../../reducer/interfaceReducer';
import { actUserRegister, actUserLogout } from '../../redux/actions';
import { userRegister } from '../../redux/types';
interface Register {
    history: any
}
const Register: React.FC<Register> = props => {
    const { history } = props;
    const dispatch = useDispatch();
    const isSuccess: boolean = useSelector((state: TypeRootReducer) => state.user.register.isSuccess);
    const handleSubmit = (dataForm: userRegister) => {
        dispatch(actUserRegister(dataForm));
    }
    useEffect(() => {
        if(isSuccess)
            setTimeout(() => {
                dispatch(actUserLogout('logout'));
                history.push('/login');
            }, 2500);
    }, [isSuccess])
    return(
        <RegisterPage prHandleSubmit={ handleSubmit } />
    )
}
export default withRouter(Register);