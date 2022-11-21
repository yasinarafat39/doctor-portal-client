import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import profile1 from '../../../assets/images/people1.png'
import profile2 from '../../../assets/images/people2.png'
import profile3 from '../../../assets/images/people3.png'
import PatientReview from './PatientReview';

const Testimonial = () => {


    const testimonial = [
        {
            id: 1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            location: "California",
            profile: profile1
        },
        {
            id: 2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            location: "California",
            profile: profile2
        },
        {
            id: 3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            location: "California",
            profile: profile3
        },
    ]

    return (
        <section>
            <div className='flex justify-between items-center mb-28'>
                <div>
                    <h3 className='text-2xl font-bold text-secondary'>Testimonial</h3>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    testimonial.map(patient => <PatientReview
                        key={patient.id}
                        patient={patient}
                    ></PatientReview>)
                }
            </div>
        </section>
    );
};

export default Testimonial;