import React from 'react';
interface Loading {
    isLoading: boolean;
}
const Loading: React.FC<Loading> = ({ isLoading }) => {
    if(!isLoading) return null;
    return(
        <div className="lineLoading">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading;