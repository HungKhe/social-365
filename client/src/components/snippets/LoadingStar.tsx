import React from 'react';
interface LoadingStar {
    isLoading: boolean;
}
const LoadingStar: React.FC<LoadingStar> = ({ isLoading }) => {
    if(!isLoading) return null;
    return(
        <div className="lineLoading">
            <div className="loader-star">
            <svg className="star" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" version="1.1">
                <polygon points="29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8 " fill="#058cf6"></polygon>
            </svg>
            <div className="loader-circles"></div>
            </div>
        </div>
    )
}

export default LoadingStar;