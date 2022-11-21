import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [loginError, setLoginError] = useState('');
    const { googleLogin } = useContext(AuthContext);

    // LogIn With Google
    const handleGoogleLogin = () => {
        setLoginError('');
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }
    return (
        <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
    );
};

export default SocialLogin;