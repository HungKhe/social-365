import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginPage from '../page/LoginPage';
import * as actions from '../../redux/actions';

const Login: React.FC<{}> = props => {
    const dispatch = useDispatch()
    const handleSubmit = (data: any) => {
        dispatch(actions.actUserLogin(data));
    }
    return(
        <LoginPage prHandleSubmit={ handleSubmit } />
    )
}
export default withRouter(Login);