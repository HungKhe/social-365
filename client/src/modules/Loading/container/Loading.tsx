import React, { useState, Reducer } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../../components/snippets/Loading';
import { TypeRootReducer } from '../../../reducer/interfaceReducer';

const LoadingPage: React.FC<{}> = () => {
    const isLoading: boolean = useSelector((state: TypeRootReducer) => state.loading.isLoading);
    return (
        <Loading isLoading={isLoading}/>
    );
}

export default LoadingPage;