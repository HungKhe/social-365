import React from 'react';
import Loading from '../modules/Loading/container/Loading';
const Anonymous: React.FC<{}> = props => {
    return (
        <div className="layoutAnonymous">
            <Loading />
            { props.children }
        </div>
    )
}
export default Anonymous;