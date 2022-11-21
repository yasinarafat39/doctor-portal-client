import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='flex justify-center items-center max-h-screen'>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#19D3AE"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default Loading;