import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton';


const ContactSection = () => {
    return (
        <section className='mt-36 text-center p-6' style={{ backgroundImage: `url(${appointment})` }}>
            <h3 className='text-2xl text-secondary font-semibold'>Contact us</h3>
            <h2 className='text-white text-4xl mb-4'>Stay Connected with us</h2>
            <form className=' lg:w-1/3 mx-auto'>
                <input type="email" placeholder="Email Address" className=" mb-8 focus:border-secondary inline input w-full lg:max-w-xl" /> <br />
                <input type="text" placeholder="Subject" className=" mb-8 focus:border-secondary inline input w-full lg:max-w-xl" /> <br />
                <textarea className="textarea w-full mb-8 focus:border-secondary inline" placeholder="Your Message"></textarea>
            </form>
            <PrimaryButton >Submit</PrimaryButton>
        </section>
    );
};

export default ContactSection;