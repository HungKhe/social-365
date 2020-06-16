import React from 'react';
interface LoadingLine {
    isLoading: boolean;
}
const LoadingLine:React.FC<LoadingLine> = ({isLoading}) => {
    if(!isLoading) return null;
    return(
        <div className="loading-line text-center my-3">
            <div className="l-loader">
                <div className="css-square square1"></div>
                <div className="css-square square2"></div>
                <div className="css-square square3"></div>
                <div className="css-square square4"></div>
                <div className="css-square square5"></div>
                <div className="css-square square6"></div>
                <div className="css-square square7"></div>
                <div className="css-square square8"></div>
            </div>
        </div>
    )
}

export default LoadingLine;