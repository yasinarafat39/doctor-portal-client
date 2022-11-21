import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section>
            <div className="hero mx-0">
                <div className="hero-content lg:pb-0 mb-20 flex-col lg:flex-row" style={{ backgroundImage: `url(${appointment})` }}>
                    <img src={doctor} alt='' className=" hidden lg:block lg:w-1/2 rounded-lg -mt-36" />
                    <div className='text-white'>
                        <h3 className='text-secondary font-bold mb-5 text-4xl'>Appointment</h3>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;