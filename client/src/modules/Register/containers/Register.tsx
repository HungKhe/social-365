import React, { useState } from 'react';
import RegisterPage from '../page/RegisterPage';
import { toastShowMessage } from '../../../utils/toastify';

const Register: React.FC<{}> = props => {
    const [isDisabledBtn, setIsDisabledBtn] = useState<boolean>(false);
    const handleSubmit = (dataform: any) => {
        console.log('data: ', dataform)
        if(dataform.userEmail === '' || dataform.userName === '' 
        || dataform.userPassword === '' || dataform.userPasswordConfirm === ''){
            toastShowMessage('warn','Vui lòng điền đầy đủ thông tin!!!');
            return false;
        }
        if(dataform.userPassword !== dataform.userPasswordConfirm){
            toastShowMessage('warn','Nhập lại mật khẩu chưa chính xác!!!');
            return false;
        }
        const regName = new RegExp(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi);
        if(regName.test(dataform.userName.toLowerCase())){
            toastShowMessage('warn','Tài khoản không được chứa các ký tự đặc biệt!!!');
            return false;
        }
        setIsDisabledBtn(true);
    }
    return(
        <RegisterPage prHandleSubmit={ handleSubmit } isDisabledBtn={ isDisabledBtn }/>
    )
}
export default Register;