import React from 'react';

const PatientReview = ({ patient }) => {
    const { id, profile, description, name, location } = patient;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">

            <div className="card-body">
                <p>{description}</p>
                <div className='flex justify-start items-center mt-8'>
                    <img src={profile} className=" mr-4 border-4 border-secondary rounded-full " alt="" />
                    <div>
                        <h2 className='text-xl font-semibold'>{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientReview;