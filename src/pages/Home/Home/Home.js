import React from 'react';
import Banner from '../Banner/Banner';
import ContactSection from '../ContactSection/ContactSection';
import ExceptionalCare from '../ExceptionalCare/ExceptionalCare';
import InfoCarts from '../infoCart/InfoCarts'
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCarts></InfoCarts>
            <Services></Services>
            <ExceptionalCare></ExceptionalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;