import React, { useState } from 'react';
import LoginPage from '../page/LoginPage';

const Login: React.FC<{}> = props => {
    const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(false);
    const handleSubmit = (data: any) => {
        console.log('data: ', data)
        setIsDisabledBtn(true);
    }
    return(
        <LoginPage prHandleSubmit={ handleSubmit } isDisabledBtn={ isDisabledBtn }/>
    )
}
export default Login;