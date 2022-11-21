import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton';

const ExceptionalCare = () => {
    return (
        <div className="hero mb-40">
            <div className="hero-content lg:w-3/4 flex-col lg:flex-row justify-center items-center">
                <img src={treatment} alt='treatment' className=" mb-10  max-w-sm rounded-lg shadow-2xl lg:mr-24" />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Start</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;