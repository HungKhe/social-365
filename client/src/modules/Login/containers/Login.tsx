import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import LoginPage from '../page/LoginPage';
import * as actions from '../redux/actions';

const Login: React.FC<{}> = props => {
    const dispatch = useDispatch()
    const handleSubmit = (data: any) => {
        console.log('data: ', data)
        dispatch(actions.actUserLogin(data));
    }
    return(
        <LoginPage prHandleSubmit={ handleSubmit } />
    )
}
export default Login;