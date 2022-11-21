import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';
import SocialLogin from '../../utilites/SocialLogin/SocialLogin';


const Login = () => {
    const { register, getValues, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState('');
    const { login, googleLogin, passwordReset } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('')

        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success("Login success");
                setLoginUserEmail(data.email);


            })
            .catch(error => {
                setLoginError(error.message);
            })
    }

    const handleResetPassword = () => {
        const email = getValues('email');
        passwordReset(email)
            .then(() => { toast.success("Password Reset Email send to your email. Please Check your Email Address.") })
            .catch(error => {
                setLoginError(error.message);
            })
    }


    return (
        <div className=' h-[800px] flex justify-center items-center'>
            <div className="hero w-96 p-7 shadow-xl rounded-xl ">

                <div>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <h2 className='text-xl text-center my-6'>Login</h2>

                        <div className="form-control w-full  ">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type='email' {...register("email", {
                                required: "Email Address is required"
                            })} className="input input-bordered w-full" />
                            {errors.email && <small className='text-red-600 mt-1'>{errors.email?.message}</small>}
                        </div>

                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type='password' {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "password must be 6 characters or longer" }
                            })} className="input input-bordered w-full" />
                            {errors.password && <small className='text-red-600 mt-1'>{errors.password?.message}</small>}
                            <label className="label"><span onClick={handleResetPassword} className="label-text text-[10px] mt-0 py-0">Forget Password?</span></label>
                        </div>

                        <p>{data}</p>
                        <div>
                            {
                                loginError && <p className='text-red-600'>{loginError}</p>
                            }
                        </div>
                        <input type="submit" value='Login' className='btn w-full' />
                    </form>

                    <p className='text-center'><small>New to Doctor Portal? <Link to='/signup' className='text-secondary'>Create an account</Link></small></p>
                    <div className='divider'>OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;