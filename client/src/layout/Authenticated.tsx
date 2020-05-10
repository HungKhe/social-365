import React from 'react';
import Loading from '../modules/Loading/container/Loading';

const Authenticated: React.FC<{}> = props => {
    return (
        <div className="authenticated">
            <Loading />
            { props.children }
        </div>
    )
}
export default Authenticated;