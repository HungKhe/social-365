import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EffectButton from '../../../../components/snippets/EffectButton';
import { toastShowMessage } from '../../../../utils/toastify';
interface RegisterPage {
    isDisabledBtn?: boolean,
    prHandleSubmit: (data?: any) => void;
}
interface dataForm {
    userEmail: string,
    userName: string,
    userPassword: string,
    userPasswordConfirm: string
}
const RegisterPage: React.FC<RegisterPage> = props => {
    const { prHandleSubmit } = props;
    const [dataForm, setDataForm] = useState<dataForm>({
        userEmail: '',
        userName: '',
        userPassword: '',
        userPasswordConfirm: ''
    });
    const inputHandleChange = function(e: React.ChangeEvent<HTMLInputElement>){
        const { value, name } = e.target;
        setDataForm({ ...dataForm, [name]: escape(value)});
    }
    const handleSubmit = function(e: React.FormEvent){
        e.preventDefault();
        if(dataForm.userEmail === '' || dataForm.userName === '' 
        || dataForm.userPassword === '' || dataForm.userPasswordConfirm === ''){
            toastShowMessage('warn','Vui lòng điền đầy đủ thông tin!!!');
            return false;
        }
        if(dataForm.userPassword !== dataForm.userPasswordConfirm){
            toastShowMessage('warn','Nhập lại mật khẩu chưa chính xác!!!');
            return false;
        }
        const regName = new RegExp(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi);
        if(regName.test(dataForm.userName.toLowerCase())){
            toastShowMessage('warn','Tài khoản không được chứa các ký tự đặc biệt!!!');
            return false;
        }
        const data = { ...dataForm };
        delete data.userPasswordConfirm;
        prHandleSubmit(data);
    }
    return (
        <div className="registerPage authPage">
            <div className="formSecsion">
                <div className="banner">
                    <svg className="svg-icon" viewBox="0 0 20 20">
                        <path fill="none" d="M10.544,8.717l1.166-0.855l1.166,0.855l-0.467-1.399l1.012-0.778h-1.244L11.71,5.297l-0.466,1.244H10l1.011,0.778L10.544,8.717z M15.986,9.572l-0.467,1.244h-1.244l1.011,0.777l-0.467,1.4l1.167-0.855l1.165,0.855l-0.466-1.4l1.011-0.777h-1.244L15.986,9.572z M7.007,6.552c0-2.259,0.795-4.33,2.117-5.955C4.34,1.042,0.594,5.07,0.594,9.98c0,5.207,4.211,9.426,9.406,9.426c2.94,0,5.972-1.354,7.696-3.472c-0.289,0.026-0.987,0.044-1.283,0.044C11.219,15.979,7.007,11.759,7.007,6.552 M10,18.55c-4.715,0-8.551-3.845-8.551-8.57c0-3.783,2.407-6.999,5.842-8.131C6.549,3.295,6.152,4.911,6.152,6.552c0,5.368,4.125,9.788,9.365,10.245C13.972,17.893,11.973,18.55,10,18.55 M19.406,2.304h-1.71l-0.642-1.71l-0.642,1.71h-1.71l1.39,1.069l-0.642,1.924l1.604-1.176l1.604,1.176l-0.642-1.924L19.406,2.304z"></path>
                    </svg>
                </div>
                <div className="content">
                    <form onSubmit={handleSubmit} className="formPage" autoComplete="off">
                        <h4>Đăng ký <span>tài khoản</span></h4>
                        <div className="floating-label">
                            <input onChange={inputHandleChange} required placeholder="Tài khoản" type="text" name="userName" id="userName" autoComplete="off" />
                            <label htmlFor="email">Tài khoản:</label>
                            <div className="icon">
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="floating-label">
                            <input onChange={inputHandleChange} required placeholder="Email" type="email" name="userEmail" id="userEmail" autoComplete="off" />
                            <label htmlFor="email">Email:</label>
                            <div className="icon">
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="floating-label">
                            <input onChange={inputHandleChange} minLength={ 6 } required placeholder="Mật khẩu" type="password" name="userPassword" id="userPassword" autoComplete="off" />
                            <label htmlFor="password">Mật khẩu:</label>
                            <div className="icon">
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="floating-label">
                            <input onChange={inputHandleChange} minLength={ 6 } required placeholder="Nhập lại mật khẩu" type="password" name="userPasswordConfirm" id="userPasswordConfirm" autoComplete="off" />
                            <label htmlFor="password">Nhập lại mật khẩu:</label>
                            <div className="icon">
                                <svg className="svg-icon" viewBox="0 0 20 20">
                                    <path d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="floating-label send">
                            <EffectButton nameButton="Đăng ký"/>
                        </div>
                        <div className="floating-label text">
                            <span>Bạn đã có tài khoản? <Link to="/">Đăng nhập ngay</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default RegisterPage;