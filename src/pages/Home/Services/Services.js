import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';


const Services = () => {

    const services = [
        {
            id: 1,
            icon: fluoride,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            icon: cavity,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            icon: whitening,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
    ]

    return (
        <div>
            <h3 className='text-secondary text-xl font-bold text-center'>OUR SERVICES</h3>
            <h2 className='text-4xl text-center mb-16'>Services We Provide</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-36'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;