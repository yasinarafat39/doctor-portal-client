import React, { useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='max-h-full max-w-full flex justify-center '>
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
    }


    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;