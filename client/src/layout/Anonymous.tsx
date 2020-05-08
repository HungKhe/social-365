import React from 'react';

const Anonymous: React.FC<{}> = props => {
    return (
        <div className="layoutAnonymous">
            { props.children }
        </div>
    )
}
export default Anonymous;