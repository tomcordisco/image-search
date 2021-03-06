import React from 'react';

const Pages = props => {
    return (
        <div className="row justify-content-center ">
            <button onClick={props.pageBack} type="button" className="btn btn-primary btn-lg mb-3">&larr; Back</button>
            <button onClick={props.pageNext} type="button" className="btn btn-primary btn-lg mb-3">Next &rarr;</button>
        </div>
    )
}

export default Pages;
