import React from 'react';

const Authenticated: React.FC<{}> = props => {
    return (
        <div className="authenticated">
            <h1>Layout Authenticated </h1>
            { props.children }
        </div>
    )
}
export default Authenticated;