import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';
import SocialLogin from '../../utilites/SocialLogin/SocialLogin';

const SignUp = () => {

    const { createUser, userUpdate } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createUserEmail)
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        // console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success("User create successfully!");
                console.log(user);

                // Update User
                const userInfo = {
                    displayName: data.name
                }
                userUpdate(userInfo)
                    .then(() => {
                        console.log('User Updated.')
                        saveUser(data.name, data.email);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
                setSignUpError(err.message);
            })

    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })

    }



    return (
        <div className=' h-[800px] flex justify-center items-center'>
            <div className="hero w-96 p-7 shadow-xl rounded-xl ">

                <div>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <h2 className='text-xl text-center my-6'>SignUp</h2>

                        <div className="form-control w-full  ">
                            <label className="label"><span className="label-text">Name</span></label>
                            <input type='text' {...register("name", { required: "Name is required" })} className="input input-bordered w-full" />
                            {errors.name && <small className='text-red-600'>{errors.name?.message}</small>}
                        </div>

                        <div className="form-control w-full  ">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type='email' {...register("email", { required: "Email is required" })} className="input input-bordered w-full" />
                            {errors.email && <small className='text-red-600'>{errors.email?.message}</small>}
                        </div>

                        <div className="form-control w-full mb-4">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type='password' {...register("password", {
                                required: "password is required",
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z])/,
                                    message: "password must be one Uppercase letter, one special character letter, two number and tree lowercase letter"
                                },
                                minLength: { value: 8, message: "password must be 8 character or longer" }

                            })} className="input input-bordered w-full" />
                            {errors.password && <small className='text-red-600'>{errors.password?.message}</small>}
                        </div>
                        {signUpError && <small className='text-red-600'>{signUpError}</small>}
                        <input type="submit" value="Signup" className='btn w-full' />
                    </form>
                    <p className='text-center'><small>Already have an account? <Link to='/login' className='text-secondary'>Login</Link></small></p>
                    <div className='divider'>OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;