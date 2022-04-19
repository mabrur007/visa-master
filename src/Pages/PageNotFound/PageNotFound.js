import React from 'react';
import error from '../../images/error.gif';

const PageNotFound = () => {
    return (
        <div className='container d-flex align-items-center justify-content-center' >
            <img className='w-75' src={error} alt="Page-unavailable" />
        </div>
    );
};

export default PageNotFound;