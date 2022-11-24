import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../pages/Shared/Loader/Loading'
import { useForm } from 'react-hook-form';
import { data } from 'autoprefixer';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json();
            return data;
        }

    })

    if (isLoading) {
        return <Loading></Loading>
    }




    const handleAddDoctor = (data) => {
        console.log(data.img[0]);
        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_imgbb_key}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
            })
    }



    return (
        <div className='p-14 '>
            <h2 className='text-3xl mb-6'>Add A Doctor</h2>

            <form className='w-[540px] bg-white p-12 rounded-[10px]' onSubmit={handleSubmit(handleAddDoctor)}>


                <div className="form-control w-full  ">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type='text' {...register("name", { required: "Name is required" })} placeholder="Enter Your Name" className="input input-bordered w-full" />
                    {errors.name && <small className='text-red-600'>{errors.name?.message}</small>}
                </div>

                <div className="form-control w-full  ">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type='email' {...register("email", { required: "Email is required" })} placeholder="Enter Your E-mail" className="input input-bordered w-full" />
                    {errors.email && <small className='text-red-600'>{errors.email?.message}</small>}
                </div>

                <div className="form-control w-full mb-4">
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <select
                        {...register("specialty", { required: "Specialty is required" })}
                        className="select select-bordered w-full">

                        {
                            specialties?.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>
                    {errors.specialty && <small className='text-red-600'>{errors.specialty?.message}</small>}
                </div>

                <div className="form-control w-full  ">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type='file' {...register("img", { required: "Photo is required" })} placeholder="Enter Your Name" className="input input-bordered w-full" />
                    {errors.img && <small className='text-red-600'>{errors.img?.message}</small>}
                </div>


                <input type="submit" value="Add" className='btn w-full' />
            </form>
        </div>
    );
};

export default AddDoctor;